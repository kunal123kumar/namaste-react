const Iteam_card = (props) => {
  return (
    <div className="iteam-list">
      <div className="iteam-card">
        <div className="details-left">
          <p>iteam category</p>
          <h1>{props.name}</h1>
          <p>₹{props.price/100}</p>
          <p>{props.description}</p>
        </div>
        <div className="details-right">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
              props.imageId
            }
            alt="iteam image"
          />
          <button className="add-btn">Add +</button>
        </div>
      </div>
    </div>
  );
};
export default Iteam_card;
