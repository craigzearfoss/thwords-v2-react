import React from "react";
import { useHistory } from "react-router-dom";

const GameContext = React.createContext();

function GameProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [redirectToHome, setRedirectToHome] = React.useState(false);
  const [initializing, setInitializing] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [level, setLevel] = React.useState(3);

  React.useEffect(() => {
    setLoading(true);
    setSidebarOpen(true);
    return () => {};
  }, [sidebarOpen]);

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const submitUsername = () => {
    if (username.length === 0) {
      showAlert("Enter a name stupid.");
      return;
    }
    setRedirectToHome(true);
  };

  // start game
  const startGame = () => {
    console.log(username);

    console.log("game starting");
  };

  // handle sidebar
  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log("sidebarOpen : ", sidebarOpen);
  };

  const fetchGameData = () => {
    console.log("fetching game data");
  };

  // alert
  const [alert, setAlert] = React.useState({
    show: false,
    msg: "",
    type: "success",
  });
  const showAlert = ({ msg, type = "success" }) => {
    setAlert({ show: true, msg, type });
  };
  const hideAlert = () => {
    setAlert({ ...alert, show: false });
  };

  return (
    <GameContext.Provider
      value={{
        sidebarOpen,
        loading,
        initializing,
        username,
        level,
        alert,
        showAlert,
        hideAlert,
        updateUsername,
        submitUsername,
        redirectToHome,
        startGame,
        handleSidebar,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export { GameContext, GameProvider };
