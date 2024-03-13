import React from "react";
import "./Home.css";
import Card from "../../Components/Cards/Card";
const Home = (datas) => {
  console.log(datas.length);
  return (
    <div className="home">
      <Card />
    </div>
  );
};

export default Home;
