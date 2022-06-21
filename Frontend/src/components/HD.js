import React from 'react'
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/responsive.css";

const HD = () => {
  return (
    <div>
      <div id="hero" className="hero overlay">
        <div className="hero-content">
            <div className="hero-text">
                <h1 style={{fontFamily: 'Montserrat', fontSize: "62px", fontWeight: "500", lineHeight:"68px", color:"#26292c"}}>If you think it, write it</h1>
                <p style={{fontFamily: 'Montserrat', fontSize: "20px", fontWeight: "300", lineHeight:"22px", color:"#26272d"}}>Write your world</p>
                <a href="#" className="btn btn-border">Learn more</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HD