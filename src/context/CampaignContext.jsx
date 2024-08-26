import { createContext, useState } from "react";

export const CampaignsRefreshContext = createContext();
export const CampaignsRefreshContextProvider = ({ children }) => {
  const [refresh, setRefresh] = useState(false);
  const triggerRefresh = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <CampaignsRefreshContext.Provider value={{ refresh, triggerRefresh }}>
      {children}
    </CampaignsRefreshContext.Provider>
  );
};
