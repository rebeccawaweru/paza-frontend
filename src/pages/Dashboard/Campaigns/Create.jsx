import { createContext } from "react";
import { SideBar } from "../../../components";
import { Dashboard } from "../../../layouts";
export const CampaignContext = createContext()
export default function CreateCampaign(){
   return (
    <Dashboard sidebar={<SideBar/>}>
      <CampaignContext.Provider value={{}}>
     
      </CampaignContext.Provider>
    </Dashboard>
   )
}