import React from "react";
import Lottie from "lottie-react";
import animationData from "../../animation/react.json";
import htmlIcon from "../../animation/html.json";
import Typed from "react-typed";
import loading from "../../animation/loading.json";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="col-12">
            <div class="col-8">
              <div className="colh-12">
              </div>
              <div className="type-wrap">
                <Typed
                  strings={[
                    "Hello Everyone. I am Aditya. m, Full Stact and Mern Stack Developer.",
                  ]}
                  typeSpeed={100}
                  startDelay={0}
                  backSpeed={60}
                  backDelay={999}
                  loop
                  cursorChar="|"
                  contentType="html"
                />
              </div>
            </div>

            <div class="col-3">
              
                <div className="image-container">
                <Lottie
                animationData={animationData}
                className="overlay-image1"
              />
                  {/* <Lottie animationData={htmlIcon} className="overlay-image" /> */}
                  <Lottie animationData={loading} className="overlay-image" />
                  <img
                    src="./Banner.png"
                    alt="loading"
                    className="background-image"
                  />
                </div>
              </div>
            </div>
          </div>
  );
};

export default Home;
