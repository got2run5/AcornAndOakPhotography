import React from 'react';
import Slider from "react-slick";
import './home.css';

function Home() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2
    };

    return (
        <div className="home-image-grid">
            <div className="home-image-row">
                <div className="home-image-row-text">
                    <p>
                        "We do not remember days, we remember moments."
                    </p>
                </div>
                <div className="beach-image" />
            </div>
            <div className="home-image-row">
                <div className="ocean-image" />
                <div className="home-image-row-text">
                    <p>
                        Let us help capture them. <br /> <br />
                        (262) 627 - 9402 <br />
                        <a href="mailto:hartmannk@outlook.com">hartmannk<wbr />@outlook.com</a>
                    </p>
                </div>
            </div>
        </div>

    );
}

export default Home;