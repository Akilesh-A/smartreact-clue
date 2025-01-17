import React from "react";
import "../menu/Menu.css";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel3";
import PizzaBanner from "../../../assetes/menu/pizza-banner-1.png";
import imge from "../../../assetes/menu/New Project.png";
import one from "../../../assetes/menu/1.png";
import two from "../../../assetes/menu/2.png";
import three from "../../../assetes/menu/3.png";
import four from "../../../assetes/menu/4.png";
import five from "../../../assetes/menu/5.png";
import six from "../../../assetes/menu/6.png";
import "animate.css";


const options = {
  items: 1,
  loop: false,
  margin: 10,
  nav: false,
  autoplay: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  navText: ["<", ">"],
};

function Menu() {
  return (
    <div className="container-fluid">
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
       
          <div className="item slide-two">
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

      <div>
        
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
    </div>
  );
}

export default Menu;
