import Swal from "sweetalert2";
import { useContext, useState, useEffect } from "react";
import { DashContext } from "../../../../context/AuthContext";
import { campaignsDelete } from "../../../../api/client";
export default function Content(props) {
  const { account, user } = useContext(DashContext);
  const permission =
    props.createdby === (account.creatorname || account.company || user.email);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure ?",
      text: "All the details of this campaign will be deleted",
      icon: "warning",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await campaignsDelete("/campaigns/" + props._id);
          Swal.fire("Success", response.data, "success");
        } catch (error) {
          Swal.fire("Error", error.response?.data?.message);
        }
      }
    });
  };
  return (
    <div
      key={props.key}
      className="grey px-4 py-6 block 2xl:flex xl:flex lg:flex md:flex items-center justify-between rounded-md cursor-pointer hover:border hover:border-zinc-500"
    >
      <div className="space-y-2">
        <p className="font-semibold text-lg">{props.title}</p>
        <div className="flex space-x-2 text-xs">
          <p
            className="bg-green-800 rounded-lg px-4 cursor-ponter hover:scale-110"
            onClick={props.view}
          >
            Open
          </p>
          <p className="text-zinc-500">posted a month ago</p>
        </div>

        <div className="inline-flex space-x-4">
          <i className="bi bi-pen" onClick={props.edit}></i>
          <i onClick={handleDelete} className="bi bi-trash text-red-500"></i>
        </div>
      </div>
      <div className="flex flex-wrap space-x-2 mt-4 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
        <div className="border border-zinc-600 rounded-md space-y-2 p-2 flex flex-col text-center items-center text-sm">
          <p className="text-orange-700 font-semibold">23</p>
          <p>Creators</p>
        </div>
        <div className="border border-zinc-600 rounded-md space-y-2 p-2 flex flex-col text-center items-center text-sm">
          <p className="text-orange-700 font-semibold">Ksh. 34,000</p>
          <p>Amount Spent</p>
        </div>
        <div className="border border-zinc-600 rounded-md space-y-2 p-2 flex flex-col text-center items-center text-sm">
          <p className="text-orange-700 font-semibold">Deliverables</p>
          <p>23</p>
        </div>
      </div>
    </div>
  );
}
