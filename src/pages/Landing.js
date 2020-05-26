import React from "react";
import { Link, Redirect } from "react-router-dom";
import { GameContext } from "../context/game";

export default function Landing() {
  const {
    username,
    updateUsername,
    submitUsername,
    redirectToHome,
  } = React.useContext(GameContext);

  if (redirectToHome) {
    return <Redirect to="/home" />;
  }

  return (
    <section className="enter-section">
      <h2 className="section-title">welcome to thwords!</h2>
      <form className="enter-form">
        <div>
          <div className="form-group">
            <label htmlFor="search">enter your name</label>
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              value={username}
              onChange={updateUsername}
            />
            <p className="subscript">
              We only use your name to credit you if make our high scorers list.
            </p>
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={submitUsername}
            >
              enter
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
