import React from "react";
import "../menu/Menu.css"
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import { useNavigate } from "react-router-dom";
import OwlCarousel from "react-owl-carousel3";
// import PizzaBanner from "../../../assetes/menu/pizza-banner-1.png";
import PizzaBanner from "../../../../assetes/menu/pizza-banner-1.png";
import imge from "../../../../assetes/menu/New Project.png";
import one from "../../../../assetes/menu/1.png";
import two from "../../../../assetes/menu/2.png";
import three from "../../../../assetes/menu/3.png";
import four from "../../../../assetes/menu/4.png";
import five from "../../../../assetes/menu/5.png";
import six from "../../../../assetes/menu/6.png";
import menuTop from "../../../../assetes/menu/order-top.png";
import menuBottom from "../../../../assetes/menu/order-bottom.png";


import orderlogo from "../../../../assetes/menu/order-1.svg";
import pizzalogo from "../../../../assetes/menu/order-2.svg";
import dellogo from "../../../../assetes/menu/order-3.svg";

import "animate.css";


const options = {
  items: 1,
  loop: true,
  margin: 100 ,
  nav: true,
  autoplay: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  navText: ["<", ">"],
};
const menu=[ 
  {
    id:1,
    img:orderlogo,
    title: "Pizza",
    price: 10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed non risus semper, molestie neque vel, ultrices dui."
  },
  {
    id:2,
    img: pizzalogo,
    title: "Pizza",
    price: 15,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed non risus semper, molestie neque vel, ultrices dui."
  },
  {
    id:3,
    img: dellogo,
    title: "Pizza",
    price: 15,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed non risus semper, molestie neque vel, ultrices dui."
  }


]

function Menu({menuitems}) {
  console.log(menuitems.slice(0,3));
  const navigate = useNavigate();

  const handlemenuDetail=(id)=>{
    navigate(`/dashboard/updatedmember/menu/${id}`)
    
  }
  

  
  return (
 <>   

 
 <section className="banner" id="top">
   <OwlCarousel className="owl-theme" {...options}>
   
     <div className="item slide-one">
       <div className="banner-slide">
         <h2>Quality F<span style={{color:"orange"}}>00</span>ds</h2>
         <p>Healthy Food for a Healthy Body</p>
         <div className="p-relative">
           <img
             src={imge}
             alt="Quality Foods"
             className="pizza-img"
           />
           <img src={one} alt="" className="animate__animated animate__bounce one" />
           <img src={two} alt="" className="animate__animated animate__backInDown two"/>
           <img src={three} alt=""  className="three animate__animated animate__backInRight "/>
           <img src={four} alt="" className="four   animate__backInDown"/>
           <img src={five} alt="" className="five animate__animated animate__zoomInDown" />
           <img src={six} alt="" className="six animate__animated animate__fadeInTopRight" />
         </div>
       </div>
     </div>
  
     <div className="item slide-two ">
       <div className="banner-slide">
         <div className="text">
           <h2>Delicious Pizzas</h2>
           <p>Savor Every Bite</p>
         </div>
         <div className="image">
           <img src={PizzaBanner} alt="Delicious Pizza" className="pizza-img" />
         </div>
       </div>
     </div>
    
     <div className="item slide-three">
       <div className="banner-slide">
         <div className="image">
           <img
             src={PizzaBanner}
             alt="Fresh Ingredients"
             className="pizza-img"
           />
         </div>
         <div className="text">
           <h2>Fresh Ingredients</h2>
           <p>Taste the Difference</p>
         </div>
       </div>
     </div>
   </OwlCarousel>
 </section>
 


<div className="poppp">
<div className="container-fluid ">
<div className="row">
<div className="order-top">
 <img src={menuTop} alt="Order Top" />
</div>
<div className="row order-contents">
{menu.map((menu)=>(
 <div className="col-sm-6 col-md-4 text-center">
   <div className="menu-item" key={menu.id}>
     <img src={menu.img} alt={menu.title} className="menu-img" width="100px" />
     <h3>{menu.title}</h3>
     <p>{menu.description}</p>
     <span>Price: ${menu.price}</span>
   </div>
 </div>

))}
</div>
<div className="order-top">
 <img src={menuBottom} alt="Order Below" />
</div>
</div>


</div>
</div>

<div className="row pt-3">
  <div className="col-12">
    <div className="headingPart text-center">
      <p>Fresh From Pizzon</p>
      <h2>our speciality</h2>

    </div>

  </div>

</div>
<div className="row pt-5">
  {menuitems.map((menu) => (
    <div className="col-md-4 text-center" key={menu._id}>
      <div className="special-img">
        <a href="#" onClick={()=>handlemenuDetail(menu._id)}>
          <img src={menu.images[0].image} alt={menu.name} />
        </a>
      </div>
      <a href="#" className="ser-title text-uppercase fw-bold">
        {menu.name}
      </a>
    </div>
  ))}
  <div className="col-12 text-center mt-3">
    <button className="btn btn-info" onClick={()=>navigate("/dashboard/updatedmember/all-menu")}>View more</button>
  </div>
</div>













<div style={{ width: '100%', height: '400px' }}>
 <iframe
   title="Google Map"
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.091667676093!2d144.9630581153161!3d-37.81410797975185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1634010295210!5m2!1sen!2sin"
   width="100%"
   height="100%"
   style={{ border: 0 }}
   allowFullScreen=""
   loading="lazy"
 ></iframe>
</div>
</>
  );
}

export default Menu;
