import { useEffect, useState, createContext} from "react";
import client from "../api/client";
export const DashContext = createContext()
export default function AuthProvider({children}){
    const data = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem("token");
    const [account, setAccount] = useState({})
    const [user, setUser] = useState({})
    useEffect(()=>{
      client.get(`/users/${data?._id}`, { headers: { Authorization: `${token}` } }).then((res)=>{
          setUser(res.data)
         if (res.data.account.type) {
            setAccount(res.data.account)
        }
      
      })
   },[data])
    return <DashContext.Provider value={{account, user}}> 
        {children}
    </DashContext.Provider>
}