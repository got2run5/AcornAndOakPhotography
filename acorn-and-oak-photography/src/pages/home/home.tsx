import React from 'react';
import Slider from "react-slick";
import './home.css';
import beach_image from "./../../beach.jpg";

function Home() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2
    };

    return (
        <div className="image-grid">
            <div className="image-row">
                <div className="image-row-text">
                    <p>
                        "We do not remember days, we remember moments." <br /> <br />
                        Let us capture them.
                    </p>
                </div>
                <div className="beach-image" />
            </div>
            <div className="image-row">
                <div className="ocean-image" />
                <div className="image-row-text">
                    <p>
                        Book Today <br />
                        (262) 627 - 9402 <br />
                        <a href="mailto:hartmannk@outlook.com">hartmannk@outlook.com</a>
                    </p>
                </div>
            </div>
        </div>

    );
}

export default Home;

//      <img className="home-image" src={beach_image}></img>