import React, { Component } from "react";
import "../css/homeScreen.css";
import AboutMe from "./aboutMe";

class HomeScreen extends Component {
  state = {};

  render() {
        return (
          <div className="homeScreen">
            <div className="content">
              <div className="profileDescription">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__cont">
                      <span >sandeepkumar.tucsb12@gmail.com</span>
                    </div>
                  </div>
                  <div className="card__side card__side--back">
                    <div className="card__cta">
                      <div className="profileName">
                        <span>sandeepkumar.tucsb12@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
                <AboutMe />
              </div>
            </div>
          </div>
        );
  }
}

export default HomeScreen;
