import React from "react";
import "./Portfolio.css";
// import styles from './Portfolio.css';
import { Link } from "react-router-dom";

const PortfoilioData = ({ images }) => {
  return (
    <>
      {images.map((image) => (
        <div className="box1" key={image.id}>
          <Link to={image.links}>
            <div className="imageBackground">
              <img src={image.src} className="img1" alt={image.title} />
            </div>
            <span className="subTitle1">{image.title}</span>
          </Link>
        </div>
      ))}
    </>
  );
};

export default PortfoilioData;
// {/* <span src={props.url} className="button1">Click Here</span> */}

    // <div className="portfolio-container">
    //   <div className="column-container">

    //     {images.map((image) => (
    //       <div key={image.id} className="box1">

    //         <img width="100px" className="img1" src={image.src} alt={image.title} />
    //         <span className="subTitle1">{image.title}</span>
    //       </div>
    //     ))}
    //   </div>
    // </div>