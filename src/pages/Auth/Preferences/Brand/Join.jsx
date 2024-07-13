import AuthWrapper from "../../../../layouts/AuthWrapper";
import { ToastContainer, toast } from "react-toastify";
import { BasicInput } from "../../../../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "../../../../api/client";

export default function Join() {
  const [code, setCode] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    client
      .post(
        "/users/join",
        { inviteCode: code },
        { headers: { Authorization: `${token}` } }
      )
      .then((res) => {
        if (res.status === 200) {
          toast.success("Joined Successfully");
          navigate("/overview");
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <AuthWrapper>
      <ToastContainer theme="dark" />
      <form
        onSubmit={handleUpdate}
        className="flex flex-col mt-24 pb-8 items-center justify-center space-y-6 px-4 2xl:px-0 xl:px-0 lg:px-0 md:px-0 "
      >
        <div className="space-y-2 text-center">
          <p className="text-xl">Please Fill Up These Details</p>
          <p className="text-sm text-zinc-600 font-bold">
            How are you planning to use Paza? We’ll fit the experience to your
            needs.
          </p>
          <p className="text-sm text-zinc-600 font-bold">
            {" "}
            Don’t worry, you’ll be able to change this later on
          </p>
        </div>
        <div className="border border-zinc-800 border-2 rounded-md p-4 flex flex-col items-center justify-center space-y-4 h-52 w-1/4">
          <p className="text-zinc-300">Enter Invitation Code</p>
          <BasicInput
            name="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            custom="w-5/6 grey bg-transparent"
            required
          />
          <p className="text-xs text-zinc-600 font-bold">Companies & Groups</p>
        </div>
        <button
          type="submit"
          className="orange text-black hover:bg-white p-4 w-1/3 font-semibold"
        >
          Request To Join <i className="bi bi-arrow-right-short"></i>
        </button>
      </form>
    </AuthWrapper>
  );
}
