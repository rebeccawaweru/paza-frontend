import { Dashboard } from "../../../layouts";
import axios from "axios";
import {
  BasicInput,
  SideBar,
  BasicSelect,
  BasicButton,
  BasicLabel,
  CheckBox,
} from "../../../components";
import { MenuItem, Grid } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import client from "../../../api/client";
import { toast, ToastContainer } from "react-toastify";
import { DashContext } from "../../../context/AuthContext";
export default function CreateTask() {
  const [searchParams] = useSearchParams();
  const [selectedFiles, setSelectedFiles] = useState([])
  const [removed, setRemoved] = useState(false)
  const [attachments, setAttachments] = useState([])
  const {account, user} = useContext(DashContext)
  const owner = account.creatorname || account.company || user.email;
  const id = searchParams.get("edit");
  const token = localStorage.getItem("token");
  const [assignee,setAssignee] = useState([])
  const navigate = useNavigate();
  const [choose, setChoose] = useState(false);
  const [initialValues, setInitialValues] = useState({
    createdby: owner,
    task: "",
    assignee: "",
    priority: "",
    budget: "",
    status: "",
    start: "",
    due: "",
    repeat: "",
    description: "",
    todos:[],
    milestones:[]
  });
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleUpload = async (e)=>{
     const files = e.target.files;
     setSelectedFiles((prev) => [...prev, ...Array.from(files)])
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedFiles.length > 0 && !id) {
      const uploads = await upload();
      createTask({...values, attachments:uploads})
    } else {
      try {
        if (id) {
          //Create object with only updated values
          const updatedValues = Object.keys(values).reduce((acc, key) => {
            if (values[key] !== initialValues[key]) {
              acc[key] = values[key];
            }
            return acc;
          }, {});
          //Check if there are any updates
          if (Object.keys(updatedValues).length > 0 || selectedFiles.length > 0  || removed) {
              let newarray = [...attachments]
              if(selectedFiles.length > 0) {
                const uploads = await upload()
                newarray = [...uploads];
              }
           
            const response = await client.put(`/tasks/${id}`, {...updatedValues, attachments:newarray}, {
              headers: { Authorization: `${token}` },
            });
             if (response.data === 'Task updated successfully') {
              toast.success(response.data)
              setTimeout(()=>{
                navigate('/tasks')
              }, 2000)
             }
          } else {
            toast.info("No changes made!");
          }
        } else {
          createTask(values)
        }
      } catch (error) {
        console.log(error);
      }
     };
    }
   
  async function upload(){
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("attachments", file);
    });
    const res = await axios.post(
      "http://54.163.27.140:5000/uploads/attachments",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    return res.data.attachmentUrls
  }
  async function createTask(data) {
    const response = await client.post("/tasks/create", data, {
      headers: { Authorization: `${token}` },
    });
    if (response.data.acknowledged) {
      toast.success("Task created!");
      setTimeout(() => {
        navigate("/tasks");
      }, 2000);
    }
  }
  async function getTask() {
    const response = await client.get(`/tasks/${id}`, {
      headers: { Authorization: `${token}` },
    });
    setInitialValues(response.data);
    setValues(response.data);
    setAttachments(response.data.attachments)
  }
  useEffect(() => {
    //query to get the members/assignees
    client.get('/users/members', {
      headers: { Authorization: `${token}` },
    }).then((response) => {
     setAssignee(response.data)
    })
    //if updating, use id to get the task
    if (id) {
      getTask();
    }
  }, [id]);
  return (
    <Dashboard sidebar={<SideBar />}>
      <Grid item xs={10} sm={10}>
        <form onSubmit={handleSubmit} className="p-4 space-y-6">
          <ToastContainer />
          <h2 className="font-bold text-xl">
            {id ? "Update Task" : "Create Task"}
          </h2>
          <div>
            <BasicLabel title="Task Name" />
            <BasicInput
              name="task"
              value={values.task}
              onChange={handleChange}
              custom="w-full grey"
              required
            />
          </div>
          <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-2">
            <div>
              <BasicLabel title="Appy To" />
              <div
                onClick={() => setChoose(!choose)}
                className="grey w-full text-zinc-300 flex justify-between  px-4 py-2"
              >
                <p>{values.assignee ? values.assignee : "Add Assignee"}</p>
                <i className="bi bi-plus-square"></i>
              </div>
              <div
                className={`bg-white p-4 text-black text-sm ${
                  choose ? "flex" : "hidden"
                } flex-col mt-2`}
              > 
              {assignee.length > 0 ? assignee.map((a) => {
                return <CheckBox
                label={a}
                name={a}
                value={a}
                checked={values.assignee === a}
                onChange={handleChange}
              />
              }) : <p className="font-semibold text-red-500"><i className="bi bi-exclamation-triangle mr-1"></i>Kindly add members to assign task...</p>}
                
              </div>
            </div>
            <div>
              <BasicLabel title="Priority" />
              <BasicSelect
                name="priority"
                value={values.priority}
                onChange={handleChange}
                custom="w-full grey"
              >
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              </BasicSelect>
            </div>
          </div>

          <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-2">
            <div>
              <BasicLabel title="Budget" />
              <BasicInput
                name="budget"
                value={values.budget}
                onChange={handleChange}
                placeholder="Ksh."
                custom="w-full grey"
                phcolor="grey"
                phweight={100}
                type="number"
                required
              />
            </div>
            <div>
              <BasicLabel title="Status" />
              <BasicSelect
                name="status"
                value={values.status}
                onChange={handleChange}
                custom="w-full grey"
              >
                <MenuItem value="Not Started">Not Started</MenuItem>
                <MenuItem value="Under review">Under review</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
                <MenuItem value="Cancelled">Cancelled</MenuItem>
              </BasicSelect>
            </div>
          </div>
          <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-2">
            <div>
              <BasicLabel title="Start Date" />
              <BasicInput
                name="start"
                value={values.start}
                onChange={handleChange}
                type="date"
                custom="w-full grey"
                phcolor="grey"
                phweight={100}
                required
              />
            </div>
            <div>
              <BasicLabel title="Due Date" />
              <BasicInput
                name="due"
                value={values.due}
                onChange={handleChange}
                type="date"
                custom="w-full grey"
                phcolor="grey"
                phweight={100}
                required
              />
            </div>
          </div>
          <div>
            <BasicLabel title="Repeat Task" />
            <BasicSelect
              name="repeat"
              value={values.repeat}
              onChange={handleChange}
              custom="w-full grey"
            >
              <MenuItem value="Never">Never</MenuItem>
              <MenuItem value="Daily">Daily</MenuItem>
              <MenuItem value="Weekly">Weekly</MenuItem>
              <MenuItem value="Monthly">Monthly</MenuItem>
              <MenuItem value="Yearly">Yearly</MenuItem>
            </BasicSelect>
          </div>
          <div>
            <BasicLabel title="Task Description" />
            <BasicInput
              name="description"
              value={values.description}
              onChange={handleChange}
              multiline
              rows={4}
              phcolor="grey"
              phweight={100}
              type="text"
              required
              custom="w-full grey"
            />
          </div>
          <div>
            <BasicLabel title="Attachment" />
            <div className="w-full h-auto py-2 flex flex-col space-y-4 cursor-pointer justify-center items-center border-dashed border-2 border-orange-700 rounded-md">
            <div className="flex justify-start flex-wrap space-x-2 p-2">
            {attachments && attachments.length > 0 && attachments.map((item, index) => {
                 return <div key={index} className="relative border my-2 border-zinc-500 text-white text-sm font-semibold px-4 py-2">
                 <i onClick={()=>{
                  setAttachments((prev) => prev.filter((item, i) => i !== index));
                  setRemoved(true)
                 }} className="bi bi-x absolute top-0 right-0"></i>
                 <a href={item} target="_blank" className="underline text-orange-700 font-semibold cursor-pointer">{item.split('/attachments/')[1]} </a>
                 </div>
            })}
           </div>
              <div className="flex flex-wrap space-x-2 p-2">
              {selectedFiles.length > 0 && selectedFiles.map((item,index) =>{
                  return <div key={index} className="relative border my-2 border-zinc-500 text-white text-sm font-semibold px-4 py-2">
                   <i onClick={()=>setSelectedFiles((prev) => prev.filter((item, i) => i !== index))} className="bi bi-x absolute top-0 right-0"></i>
                    <p>{item.name}</p>
                  </div>
              })}
              </div>
             

              <input
               multiple
                type="file"
                id="files"
                onChange={handleUpload}
                className="hidden"
              />
              <label className="flex flex-col items-center text-sm text-zinc-100 mb-2 space-y-2" for="files">
              <i className="bi bi-file-earmark-arrow-up orange text-black rounded-full px-3 py-2 font-bold text-2xl"></i>
              <p>Click to Upload</p>
              </label>
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => navigate("/tasks")}
              className="border border-zinc-500 text-zinc-400 py-2 px-8 rounded-sm text-sm hover:scale-90"
            >
              Cancel
            </button>
            <BasicButton title={id ? "Update Task" : "+ Create Task"} />
          </div>
        </form>
      </Grid>
    </Dashboard>
  );
}
