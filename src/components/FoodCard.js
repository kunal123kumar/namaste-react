const FoodCard = (props) => {
  return (
    <div className="cardFood">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" +
          props.info?.cloudinaryImageId
        }
        alt="food"
        className="food-image"
      />
      <h2>{props.info?.name}</h2>
      <p>
        *{props.info?.avgRating} starts {props.sla?.deliveryTime}
      </p>
      <p>{props.info?.cuisines.join(", ")}</p>
      <p>
        {props.info?.locality} , {props.info?.areaName}
      </p>
      <h5>{props.info?.costForTwoMessage}</h5>
      {/* <button className="add-to-cart-btn">Add to Cart</button> */}
    </div>
  );
};
export default FoodCard;