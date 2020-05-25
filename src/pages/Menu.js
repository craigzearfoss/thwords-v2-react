import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <section className="menu-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
            <h1>Thwords</h1>
          </div>
          <div class="col-10 mx-auto col-sm-8 col-md-6 my-3r">
            <Link className="btn btn-primary">thwords classic</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
