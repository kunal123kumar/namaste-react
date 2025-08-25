import { resturentList, dataList } from "../utils/mokeData";
import FoodCard from "./FoodCard";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
   const [ListData, setListData] = useState(resturentList.restaurants);

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for food"
          className="search-input"
        />
        <button className="search-btn">Search</button>
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
          return <FoodCard {...item} key={item.info.id} />;
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
