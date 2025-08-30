import { useState, useEffect } from "react";
import Iteam_card from "./Iteam_card";
import Shimmer_UI from "./Shimmer_UI";
import { useParams } from "react-router";
import { MENU_API_URL } from "../utils/constant";

const ResturentMenue = () => {
  const [info, setInfo] = useState(null);
  const [iteams, setIteams] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    console.log(json.data);
    console.log(
      json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );

    const info =
      json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;

    const iteams = json?.data?.cards[2]?.card?.card?.info;

    setIteams(iteams);

    setInfo(info);
    console.log(iteams?.name);
  };

  if (!info || !iteams) {
    return <Shimmer_UI />;
  }
  const { name, id, imageId, description, price } = info;
  return (
    <div className="restaurant-container">
      {/* Restaurant Header */}
      <div className="restaurant-header">
        <h1 className="restaurant-name">{iteams.name}</h1>

        <div className="restaurant-info">
          <div className="info-box">
            ⭐ <span>{iteams.avgRating}</span>
          </div>
          <div className="info-box">
            💰 <span>₹{iteams.costForTwoMessage}</span>
          </div>
          <div className="info-box">
            ⏱ <span>Delivery Time</span>
          </div>
        </div>

        <p className="restaurant-description">{iteams.cuisines.join(", ")}</p>
      </div>

      {/* Menu Section */}
      <h2 className="menu-title">🍴 See the Menu of the Restaurant</h2>

      {/* Example Item Card */}
      {info.map((item) => (
        <Iteam_card {...item.card.info} key={item.card.info.id} />
      ))}

      {/* <Iteam_card {...info} /> */}
    </div>
  );
};
export default ResturentMenue;
