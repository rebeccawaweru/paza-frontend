import { BasicButton, BasicInput } from "../../../components";
import { AuthWrapper } from "../../../layouts";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import client from "../../../api/client";
import { toast, ToastContainer } from "react-toastify";
export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState({
    password: "",
    confirmpassword: "",
  });
  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get("resetToken");

  const matchPassword = () => {
    if (values.password !== values.confirmpassword) {
      toast.error("Passwords do not match");
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (matchPassword()) {
      const resetToken = value; //Extracted from query params
      client
        .post(`/auth/reset-password?resetToken=${resetToken}`, {
          password: values.password,
        })
        .then((res) => {
          if (res.status === 200) {
            toast.success(res.data);
          }
          setTimeout(() => {
            navigate("/");
          }, 5000);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    }
  };
  return (
    <AuthWrapper
      navbtn={
        <BasicButton
          custom="px-8 text-sm"
          title="Sign up"
          handleClick={() => navigate("/signup")}
        />
      }
    >
      <ToastContainer theme="dark" />
      <div className="flex flex-col text-center items-center justify-center space-y-2 mt-8">
        <p className="font-bold text-xl">Reset your password</p>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center space-y-4 pt-4 px-4 2xl:px-0 xl:px-0 lg:px-0 md:px-0"
        >
          <BasicInput
            name="password"
            onChange={handleChange}
            show={() => setVisible(!visible)}
            type={visible ? "text" : "password"}
            required
            placeholder="New Password"
            start="bi bi-search text-white"
            end={`${visible ? "bi bi-eye" : "bi bi-eye-slash"}  text-white`}
          />
          <BasicInput
            name="confirmpassword"
            onChange={handleChange}
            show={() => setVisible(!visible)}
            type={visible ? "text" : "password"}
            required
            placeholder="Confirm Password"
            start="bi bi-search text-white"
            end={`${visible ? "bi bi-eye" : "bi bi-eye-slash"}  text-white`}
          />
          <BasicButton
            title="Reset"
            custom="w-full 2xl:w-1/2 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-2/3 text-lg"
          />
        </form>
      </div>
    </AuthWrapper>
  );
}
