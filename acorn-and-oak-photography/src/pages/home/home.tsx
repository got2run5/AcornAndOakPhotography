import React from 'react';
import './home.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-parallax-container">
            <div className="beach-image">
                <div className="content-overlay">
                    <div>
                        Weddings
                    </div>
                    <div>
                        Birthdays
                    </div>
                    <div>
                        Graduations
                    </div>
                    <div>
                        & More
                    </div>
                </div>
            </div>
            <div className="content-container">
                <h3 className="test-header">More than Photography</h3>
                <p>
                    We all have memories that we want to preserve with the same crystal clear
                    sharpness we originally experienced.  We understand, and we promise that if you
                    trust us to safeguard your memories, the photos we take will elicit the same emotions
                    you felt on the day we snapped them.
                </p>
            </div>
            <div className="ocean-image">
            </div>
            <div className="content-container">
                <h3 className="test-header">Our Goal</h3>
                <p>
                    Our goal isn't just to create a pretty picture.  The most important moments of our
                    lives are those we spend with others.  Our photos are tailored to reflect the
                    relationships that are important to you.
                </p>
            </div>
            <div className="cave-image"></div>
            <div className="content-container">
                <h3 className="home-header">Get a Quote Today</h3>
                <p>
                    Get a quote that is just as tailored to your event as our photos will be.
                </p>
                <div className="quote-button-container">
                    <Link to="/pricing">
                        <Button color="primary" variant="contained">Reqest Pricing</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;