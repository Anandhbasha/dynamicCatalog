import React, { useState } from "react";
import "./Card.css";
import image1 from "../../Assets/Images/welcome.jpg"
import image2 from "../../Assets/Images/be.jpg"
import image3 from "../../Assets/Images/bt.jpg"
import image4 from "../../Assets/Images/cb.jpg"
import image5 from "../../Assets/Images/cf.jpg"
import image6 from "../../Assets/Images/cl.jpg"
import image7 from "../../Assets/Images/kb.jpg"
import image8 from "../../Assets/Images/mg rice.jpg"
import image9 from "../../Assets/Images/mg.jpg"
import image10 from "../../Assets/Images/pn rice.jpg"
import image11 from "../../Assets/Images/pr r.jpg"
import image12 from "../../Assets/Images/pt.jpg"
import image13 from "../../Assets/Images/puli rice.jpg"
import image14 from "../../Assets/Images/vg.jpg"
import image15 from "../../Assets/Images/mt.webp"

const Card = () => {
  const [getcount, setGetcount] = useState([
    {
      image:image1,
      name: "Product1",
      price: 20,
      cat: "cat1",
    },
    {
      image: image2,
      name: "Product2",
      price: 20,
      cat: "cat1",
    },
    {
      image: image3,
      name: "Product3",
      price: 20,
      cat: "cat1",
    },
    {
      image: image4,
      name: "Product4",
      price: 20,
      cat: "cat2",
    },
    {
      image: image5,
      name: "Product5",
      price: 20,
      cat: "cat2",
    },
    {
      image: image6,
      name: "Product6",
      price: 20,
      cat: "cat2",
    },
    {
      image: image7,
      name: "Product7",
      price: 20,
      cat: "cat3",
    },
    {
      image: image8,
      name: "Product8",
      price: 20,
      cat: "cat3",
    },
    {
      image:image9,
      name: "Product9",
      price: 20,
      cat: "cat3",
    },
    {
      image: image10,
      name: "Product10",
      price: 20,
      cat: "cat4",
    },
    {
      image: image11,
      name: "Product11",
      price: 20,
      cat: "cat4",
    },
    {
      image: image12,
      name: "Product12",
      price: 20,
      cat: "cat4",
    },
    {
      image: image13,
      name: "Product13",
      price: 20,
      cat: "cat5",
    },
    {
      image: image14,
      name: "Product14",
      price: 20,
      cat: "cat5",
    },
    {
      image: image15,
      name: "Product15",
      price: 20,
      cat: "cat5",
    },
  ]);
  return (
    <div className="Cards">
      {getcount.map((item) => {
        return (
          <div class="card">
            <div className="card_top">
              <img src={item.image} alt="Denim Jeans"/>
            </div>
            <div className="card_content">
              <div className="card_title">{item.name}</div>
              <div className="card_price">{item.price}</div>
              <div className="card-cat">{item.cat}</div>
            </div>
            <div className="card_bottom">
            <button className="wishlist">Add wishlist</button>
            <button className="Addcart">Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
