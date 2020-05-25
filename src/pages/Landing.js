import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <section className="landing-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
            <div className=" blackboard">
              <h1>Welcome to Thwords!</h1>
            </div>
          </div>
          <div className="col-10 mx-auto col-sm-8 col-md-6 my-3r">
            <Link to="/home" className="btn btn-primary">
              enter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
