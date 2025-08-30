import { dataList } from "../utils/mokeData";
import FoodCard from "./FoodCard";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer_UI from "./Shimmer_UI";
import { Link } from "react-router";

const Body = () => {
  const [allData, setAllData] = useState([]);
  const [ListData, setListData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9966135&lng=77.5920581&carousel=true&third_party_vendor=1"
    );
    const json = await data.json();
    console.log(json);
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllData(
      json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setListData(
      json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  if (ListData.length === 0) {
    return <Shimmer_UI />;
  }

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for food"
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredList = allData.filter((item) =>
              item.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            console.log(filteredList);
            setListData(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListData.filter(
              (item) => item.info.avgRating > 4.4
            );
            setListData(filteredList);
          }}
        >
          Filter The Data List
        </button>
      </div>
      <div className="food-items">
        {ListData.map((item) => {
          return <Link to={`/restaurants/${item.info.id}`} key={item.info.id}><FoodCard {...item} key={item.info.id} />;</Link>
        })}
      </div>
      <div className="restaurant-list">
        {dataList.info.map((item) => {
          return <RestaurantCard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
export default Body;
