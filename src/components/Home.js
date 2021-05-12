import React from 'react'

import "../styles/Home.css"
import InConstruction from "../assets/img/web_in_construction.png";

const Home = () => {

  return (
    <div className="home">
      <img className="img-fluid" src={InConstruction} alt="En Construccion" />
    </div>
  )
}

export default Home
