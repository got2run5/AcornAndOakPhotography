import React from 'react';
import './under-construction.css';
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UnderConstruction({ pageTitle }: {pageTitle: string}) {
  return (
    <div className="construction-container">
      <h2>
        {pageTitle} is currently under construction!  <br /> Please check back later.
      </h2>
      <FontAwesomeIcon icon={faTools} size="10x" />
    </div>
  );
}

export default UnderConstruction;
