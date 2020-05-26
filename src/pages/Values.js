import React from "react";
import { Link } from "react-router-dom";

export const Values = () => {
  return (
    <section className="values-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
            <h1>Thwords</h1>
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

export default Values;
