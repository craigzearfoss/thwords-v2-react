import React from "react";
import { Link } from "react-router-dom";

export const Help = () => {
  return (
    <section className="about-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
            <h1>Thwords Help</h1>
            <p>
              I'm baby shaman typewriter direct trade, art party kombucha
              brooklyn jianbing knausgaard palo santo umami. Microdosing
              succulents yr ennui, mumblecore artisan pinterest. Keytar
              chillwave palo santo, chia pork belly lomo jianbing blog food
              truck whatever kickstarter tumblr succulents heirloom. Actually
              cronut pitchfork kogi. IPhone shabby chic dreamcatcher banh mi
              artisan palo santo. Neutra keytar jianbing kinfolk tacos
              succulents art party. Z
            </p>
          </div>
          <div className="col-10 mx-auto col-sm-8 col-md-6 my-3r">
            <Link to="/menu" className="btn btn-primary">
              game menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
