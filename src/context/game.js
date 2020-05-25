import React from "react";

const GameContext = React.createContext();

export default function GameProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    return () => {};
  }, []);

  // handle sidebar
  const handleSidebar = () => {};

  return (
    <GameContext.Provider value={{ loading, sidebarOpen }}>
      {children}
    </GameContext.Provider>
  );
}

const GameConsumer = GameContext.Consumer;

export { GameContext, GameConsumer };
