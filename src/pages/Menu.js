import React from "react";
import Navbar from "../components/Navbar";
import { GameContext } from "../context/game";

export const Menu = () => {
  const { username, level, handleStartChange, startGame } = React.useContext(
    GameContext
  );

  return (
    <>
      <Navbar />
      <section className="menu-page py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
              <h1>Thwords</h1>
              <form className="filter-form">
                <div className="form-group">
                  <label htmlFor="username">enter your name</label>
                  <div className="">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={username}
                      className=""
                      onChange={handleStartChange}
                    />
                    <p className="subscript">
                      We only use your name to credit you if make our high
                      scorers list.
                    </p>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="capacity">skill Level</label>
                  <select
                    id="level"
                    name="level"
                    value={level}
                    className=""
                    onChange={handleStartChange}
                  >
                    <option value="1">novice</option>
                    <option value="2">amateur</option>
                    <option value="3">pro</option>
                    <option value="4">expert</option>
                  </select>
                </div>
                <div className="form-group">
                  <button type="button" onClick={startGame}>
                    play
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
