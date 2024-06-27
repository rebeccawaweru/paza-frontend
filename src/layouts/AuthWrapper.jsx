import { createContext,useReducer } from "react";
import { pazadark } from "../assets"
import { reducer2 } from "../utils/helpers";
export const AuthContext = createContext()
export default function AuthWrapper({children,navbtn,initialValues}){
    const [state2, dispatch] = useReducer(reducer2,initialValues)
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'HANDLE_CHANGE', payload: { name, value } });
    };
    const handleAdd = (arrayName,value) => {
        dispatch({type:'ADD', payload: {arrayName, value}})
    }
    const handleRemove = (arrayName,value)=> {
        dispatch({type:'REMOVE', payload: {arrayName, value}})
    }
    const handleAvatar = (e) => {
        const file = e.target.files[0]
        dispatch({type:'UPLOAD', payload:{file}})
    }
    return <AuthContext.Provider value={{state2,handleChange,handleAdd,handleRemove,handleAvatar}}><div className="min-h-screen w-full flex flex-col justify-center relative overflow-hidden ">
    <div className="w-full absolute top-0 p-3 flex  justify-between">
    <img src={pazadark} alt="pazalogo" className="w-36 object-contain" />
    {navbtn}
    </div>
    {children}
    </div>
    </AuthContext.Provider>
}