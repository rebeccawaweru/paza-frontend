import { createContext, useReducer } from "react";
import { pazadark } from "../assets";
import { reducer2 } from "../utils/helpers";
import axios from "axios";
export const AuthContext = createContext();
export default function AuthWrapper({ children, navbtn, initialValues }) {
  const [state2, dispatch] = useReducer(reducer2, initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "HANDLE_CHANGE", payload: { name, value } });
  };
  const handleSelect = (name, value) => {
    if (state2.subCategory.length > 0) {
      dispatch({
        type: "HANDLE_CHANGE",
        payload: { name: "subCategory", value: [] },
      });
    }
    dispatch({ type: "HANDLE_CHANGE", payload: { name, value } });
  };
  const handleAdd = (arrayName, value) => {
    dispatch({ type: "ADD", payload: { arrayName, value } });
  };
  const handleRemove = (arrayName, value) => {
    dispatch({ type: "REMOVE", payload: { arrayName, value } });
  };
  const handleAvatar = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const res = await axios.post(
        "http://54.90.77.200:5000/uploads",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      const avatarUrl = res.data.avatarUrl;
      dispatch({ type: "UPLOAD_SUCCESS", payload: { value: avatarUrl } });
    } catch (error) {
      console.error("Error uploading avatar", error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        state2,
        handleChange,
        handleAdd,
        handleRemove,
        handleAvatar,
        handleSelect,
      }}
    >
      <div className="min-h-screen w-full flex flex-col justify-center relative overflow-hidden ">
        <div className="w-full absolute top-0 p-3 flex  justify-between">
          <img src={pazadark} alt="pazalogo" className="w-36 object-contain" />
          {navbtn}
        </div>
        {children}
      </div>
    </AuthContext.Provider>
  );
}
