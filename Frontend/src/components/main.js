import React from 'react'
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/responsive.css";

const MAIN = () => {
  return (
    <div>

<main id="main" className="site-main">

        <section className="site-section section-features">
            <div className="container">
                <div className="row">
                    <div className="col-sm-5">
                        <h2 style={{fontFamily: 'Montserrat', fontSize: "30px", fontWeight: "500", lineHeight:"33px", color:"#26292c"}}>Who are we?</h2>
                        <p style={{fontFamily: 'Montserrat', fontSize: "14px", fontWeight: "300", lineHeight:"22px", color:"#9fa3a7"}}>WritArt is a website that connects writers and readers from all corners of the world, you choose the language and we do the rest.</p>
                    </div>
                    <div className="col-sm-7 hidden-xs">
                    </div>
                </div>
            </div>
        </section>

        <section className="site-section section-services gray-bg text-center">
            <div className="container">
                <h2 style={{fontFamily: 'Montserrat', fontSize: "42px", fontWeight: "500", lineHeight:"46px", color:"#26292c"}} className="heading-separator">Our Benefits</h2>
                <p style={{fontFamily: 'Montserrat', fontSize: "20px", fontWeight: "300", lineHeight:"22px", color:"#9fa3a7"}} className="subheading-text"></p>
                <div className="row">
                    <div className="col-md-3 col-xs-6">
                        <div className="service">
                            <img src="../assets/img/anchor.svg" alt="" />
                            <h3 style={{fontFamily: 'Montserrat', fontSize: "13px", fontWeight: "500", lineHeight:"14px", color:"#26292c"}} className="service-title">Responsive</h3>
                            <p style={{fontFamily: 'Montserrat', fontSize: "13px", fontWeight: "300", lineHeight:"22px", color:"#9fa3a7"}} className="service-info"> Web platform to show your writings to the world.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-xs-6">
                        <div className="service">
   
                            <h3 className="service-title" style={{fontFamily: 'Montserrat', fontSize: "13px", fontWeight: "500", lineHeight:"14px", color:"#26292c"}}>Technology</h3>
                            <p style={{fontFamily: 'Montserrat', fontSize: "13px", fontWeight: "300", lineHeight:"22px", color:"#9fa3a7"}} className="service-info">100% virtual without restrictions </p>
                        </div>
                    </div>
                    <div className="col-md-3 col-xs-6">
                        <div className="service">
                            <img src="../assets/img/paper-plane.svg" alt="" />
                            <h3 className="service-title" style={{fontFamily: 'Montserrat', fontSize: "13px", fontWeight: "500", lineHeight:"14px", color:"#26292c"}}>Global</h3>
                            <p style={{fontFamily: 'Montserrat', fontSize: "13px", fontWeight: "300", lineHeight:"22px", color:"#9fa3a7"}} className="service-info">Your talent is just a click away.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-xs-6">
                        <div className="service">
                            <img src="assets/img/photo.svg" alt="" />
                            <h3 className="service-title" style={{fontFamily: 'Montserrat', fontSize: "13px", fontWeight: "500", lineHeight:"14px", color:"#26292c"}}>Language</h3>
                            <p style={{fontFamily: 'Montserrat', fontSize: "13px", fontWeight: "300", lineHeight:"22px", color:"#9fa3a7"}} className="service-info">you choose the language and we do the rest.</p>
                        </div>
                    </div> 
                </div>
            </div>
        </section>


        </main>

    </div>
  )
}

export default MAIN