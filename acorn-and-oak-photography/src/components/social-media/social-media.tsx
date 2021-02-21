import React from 'react';
import './social-media.css';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialMedia() {
    return (
        <>
            <FontAwesomeIcon className="social-media" icon={faFacebookF} size="lg" />
            <FontAwesomeIcon className="social-media" icon={faTwitter} size="lg" />
            <FontAwesomeIcon className="social-media" icon={faInstagram} size="lg" />
        </>
    );
}

export default SocialMedia;
