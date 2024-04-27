import React from 'react';


var Resturantlist = [{
  name: "Swiggymart",
  image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/490629b70f89da8a5b93fc199ece335e",
  cusines: ["South Indian"," Chinese"] ,
  rating: 4.3,
  address: "Address: Paltan Bazar"
},
{name: "BurgerKing",
image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/490629b70f89da8a5b93fc199ece335e",
cusines: ["South Indian"," Chinese"] ,
rating: 4.3,
address: "Address: Paltan Bazar"
},
{
name: "Zomato",
image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/490629b70f89da8a5b93fc199ece335e",
cusines: ["South Indian"," Chinese"] ,
rating: 4.3,
address: "Address: Paltan Bazar"
}
]


function ResturantCard () {
  return (
    <div className='card' style={{width:"14rem", margin:"10px", borderRadius:"20px", boxShadow:"0 2px 4px rgba(0,0,0,0.2)", marginLeft:"60px" }}>
      
    <img src={Resturantlist[0].image}
    alt="food"
    className='card-img-top'
    style={{ borderRadius:"20px" , }} />

    <div className="card-body">

    <h4 className='card-title'>{Resturantlist[0].name}</h4>
    <h6 className='card-text'>{Resturantlist[0].cusines}</h6>  
    <p className='card-text'>{Resturantlist[0].address}</p>
    <h4 className='text-warning'>{Resturantlist[0].rating}</h4>
    </div>

    </div>
   
  );
};



function Body(){ 
  return (
    <div style={{marginTop:"110px"}} className='d-flex flex-wrap'>
      <ResturantCard />
      <ResturantCard />
      <ResturantCard />
      <ResturantCard />
      <ResturantCard />
      
     
    </div>
  
    
  )
}

export default Body