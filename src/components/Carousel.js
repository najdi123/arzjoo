import React from 'react';
import "./SlickCarousel.css"

import pic1 from "../images/slider_items-18UyoC8yNPFMLdWXhfogKKf.jpg";
import pic2 from "../images/slider_items-19UmhPqfQ7B2hRmbYpfJs1W.jpg";
import pic3 from "../images/slider_items-20UFOu9xxidbIMljcghZcZB.jpg";
import pic4 from "../images/slider_items-21UAZVGr7CjkLUWcAMKNNz9.jpg";
import pic5 from "../images/slider_items-22-PQnuo1XUk746QF8V69sL.jpg";

const Carousel = () => {

    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={pic1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={pic2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={pic3} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={pic4} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={pic5} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );

}

export default Carousel;
