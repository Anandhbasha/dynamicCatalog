import React, { useState } from "react";
import "./Card.css";

const Card = () => {
  const [getcount, setGetcount] = useState([
    {
      image1: "",
      name: "Product1",
      price: 20,
      cat: "cat1",
    },
    {
      image2: "",
      name: "Product2",
      price: 20,
      cat: "cat2",
    },
    {
      image3: "",
      name: "Product3",
      price: 20,
      cat: "cat3",
    },
    {
      image4: "",
      name: "Product4",
      price: 20,
      cat: "cat4",
    },
    {
      image5: "",
      name: "Product5",
      price: 20,
      cat: "cat",
    },
    {
      image6: "",
      name: "Product6",
      price: 20,
      cat: "cat6",
    },
    {
      image7: "",
      name: "Product7",
      price: 20,
      cat: "cat7",
    },
    {
      image8: "",
      name: "Product8",
      price: 20,
      cat: "cat8",
    },
    {
      image9: "",
      name: "Product9",
      price: 20,
      cat: "cat9",
    },
    {
      image10: "",
      name: "Product10",
      price: 20,
      cat: "cat10",
    },
    {
      image11: "",
      name: "Product11",
      price: 20,
      cat: "cat11",
    },
    {
      image12: "",
      name: "Product12",
      price: 20,
      cat: "cat12",
    },
    {
      image13: "",
      name: "Product13",
      price: 20,
      cat: "cat13",
    },
    {
      image14: "",
      name: "Product14",
      price: 20,
      cat: "cat14",
    },
    {
      image15: "",
      name: "Product15",
      price: 20,
      cat: "cat15",
    },
  ]);

  return (
    <div className="Cards">
      {getcount.map((item) => {
        return (
          <div className="card">
            <div className="card_Top"></div>
            <div className="card_Content"></div>
            <div className="card_Bottom"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
