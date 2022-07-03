const { createContext, useState, useContext } = require('react');

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //   openSidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  //   close sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <AppContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
