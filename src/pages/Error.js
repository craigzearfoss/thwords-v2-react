import React from "react";
import { Link } from "react-router-dom";

export default Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>oops! it's a dead link</h1>
        <Link to="/home" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  );
};
