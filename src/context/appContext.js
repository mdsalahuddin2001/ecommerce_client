const { createContext, useState, useContext } = require('react');

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileSearchBoxOpen, setIsMobileSearchBoxOpen] = useState(false);
  //   openSidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  //   close sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  // open mobile search box
  const openMobileSearchBox = () => {
    setIsMobileSearchBoxOpen(true);
  };
  // close mobile searchbox
  const closeMobileSearchBox = () => {
    setIsMobileSearchBoxOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isMobileSearchBoxOpen,
        openMobileSearchBox,
        closeMobileSearchBox,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
