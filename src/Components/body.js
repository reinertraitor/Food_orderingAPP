import React from "react";

var Resturantlist = [
  {
    name: "Swiggymart",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/490629b70f89da8a5b93fc199ece335e",
    cusines: ["South Indian", " Chinese"],
    rating: 4.3,
    address: "Address: Paltan Bazar",
  },
  {
    name: "BurgerKing",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/490629b70f89da8a5b93fc199ece335e",
    cusines: ["South Indian", " Chinese"],
    rating: 4.3,
    address: "Address: Paltan Bazar",
  },
  {
    name: "Zomato",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/490629b70f89da8a5b93fc199ece335e",
    cusines: ["South Indian", " Chinese"],
    rating: 4.3,
    address: "Address: Paltan Bazar",
  },
];

const ResturantCard = (props) => {
  return (
    <div
      className="card"
      style={{
        width: "14rem",
        margin: "10px",
        borderRadius: "20px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        marginLeft: "60px",
      }}
    >
      <img
        src={props.Resturantlist.image}
        alt="food"
        className="card-img-top"
        style={{ borderRadius: "20px" }}
      />

      <div className="card-body">
        <h4 className="card-title">{props.Resturantlist.name}</h4>
        <h6 className="card-text">{props.Resturantlist.cusines}</h6>
        <p className="card-text">{props.Resturantlist.address}</p>
        <h4 className="text-warning">{props.Resturantlist.rating}</h4>
      </div>
    </div>
  );
};

function Body() {
  return (
    <div style={{ marginTop: "110px" }} className="d-flex flex-wrap">
      <ResturantCard Resturantlist={Resturantlist[0]} />
      <ResturantCard Resturantlist={Resturantlist[1]} />
      <ResturantCard Resturantlist={Resturantlist[2]} />
    </div>
  );
}

export default Body;
