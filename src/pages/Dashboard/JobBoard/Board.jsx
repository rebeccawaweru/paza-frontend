import { Avatar, Grid } from "@mui/material";
import { BasicButton, SideBar } from "../../../components";
import { Dashboard } from "../../../layouts";
import { labelArray } from "../../../utils/helpers";
import { createContext, useEffect, useState } from "react";
import { Modal } from "./components";
import { jobsPost, jobsGet } from "../../../api/client";
export const JobContext = createContext();
export default function JobBoard() {
  const [job, setJob] = useState({
    title: "",
    description: "",
    skills: [],
  });
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };
  const [values, setValues] = useState({
    title: "",
    description: "",
    further: "",
    gender: "",
    availability: "",
    location: "",
    experience: "",
    priority: "",
    visibility: "",
    payment: "",
    paymentdesc: "",
    link: "",
  });
  const [skills, setSkills] = useState([]);
  const [contents, setContent] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const close = () => {
    setStep(1);
    setOpen(false);
    setSkills([]);
    setContent([]);
    setPlatforms([]);
    setValues({
      title: "",
      description: "",
      further: "",
      gender: "",
      availability: "",
      location: "",
      experience: "",
      priority: "",
      visibility: "",
      payment: "",
      paymentdesc: "",
      link: "",
    });
  };
  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step < 7) {
      setStep((prev) => prev + 1);
    } else {
      console.log(
        "Val check",
        values,
        "Skills check",
        skills,
        "contents check",
        contents,
        "platforms check",
        platforms
      );
      //insert backend logic
      try {
        const response = await jobsPost("/create", {
          values,
          skills,
          contents,
          platforms,
        });
        console.log("Job posted successfully", response.data);
      } catch (error) {
        console.error("error posting job", error);
      }
    }
  };
  // Test fetch jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await jobsGet("/");
        console.log("Jobs fetched successfully", response.data);
      } catch (error) {
        console.error("Error fetching jobs", error);
      }
    };
    fetchJobs();
  });
  return (
    <Dashboard sidebar={<SideBar />}>
      <JobContext.Provider
        value={{
          platforms,
          setPlatforms,
          skills,
          setSkills,
          contents,
          setContent,
          job,
          setJob,
          open,
          setOpen,
          step,
          setStep,
          close,
          values,
          handleChange,
          handleSubmit,
          handlePrev,
        }}
      >
        <Grid item xs={10} sm={10} position="relative">
          <div className="p-4 space-y-6 tracking-wide leading-loose text-sm relative">
            <Modal />
            <div className="flex justify-between">
              <p>Job Details</p>
              <button
                onClick={() => setOpen(true)}
                className="grey text-sm p-2 cursor-pointer hover:bg-orange-700 hover:scale-90"
              >
                + Create Job
              </button>
            </div>
            <div className="grid grid-cols-3">
              <div className="col-span-2">
                <p className="font-bold text-lg">Job Title</p>
                <div className="flex flex-wrap">
                  {labelArray.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="p-4 my-2 mr-2 rounded-md border border-zinc-400"
                      >
                        {item.label}
                      </div>
                    );
                  })}
                </div>
                <p className="font-bold">About Job</p>
                <p className="text-zinc-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus maiores architecto distinctio aspernatur! Reiciendis
                  exercitationem facere consequatur iusto deserunt dolorem qui,
                  minus repellat ipsum consequuntur sunt commodi. Pariatur,
                  omnis! Sint.
                </p>
                <p className="font-bold">Job requirements</p>
                <p className="font-bold">Skills</p>
                <p className="font-bold">Files</p>
              </div>
              <div className="col-span-1 flex flex-col space-y-4">
                <BasicButton title="Send Proposal" />
                <button className="hover:scale-90 border border-orange-700 flex text-center items-center justify-center p-2 font-bold">
                  <i className="bi bi-bookmark text-orange-700 mx-2"></i>Save
                  job
                </button>
                <p className="font-bold">About Client</p>
                <div className="inline-flex items-center space-x-2">
                  <Avatar />
                  <p>Client Name</p>
                </div>
                <div className="flex space-x-8">
                  <div className="flex items-center space-x-4 rounded-md border border-zinc-500 text-sm p-4">
                    <i className="bi bi-briefcase text-lg"></i>
                    <div className="text-xs">
                      <p>Jobs Posted</p>
                      <p>-</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 rounded-md  border border-zinc-500 text-sm p-4">
                    <i className="bi bi-arrow-up-right"></i>
                    <div className="text-xs">
                      <p>Campaigns</p>
                      <p>-</p>
                    </div>
                  </div>
                </div>
                <p className="font-bold">Job link</p>
                <div className="grey p-4 flex text-zinc-500 font-bold">
                  <p className="flex-1">https://pazaplatform/jobs/id....</p>
                  <i className="bi bi-clipboard text-orange-700"></i>
                </div>
              </div>
              <i className="bi bi-caret-right-fill text-sm border border-orange-700  p-1 absolute right-2 top-1/2 text-3xl cursor-pointer hover:scale-90 text-orange-700 hover:text-white hover:border-white"></i>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div className="rounded-full orange h-4 w-4"></div>
            <div className="rounded-full bg-white h-4 w-4"></div>
            <div className="rounded-full bg-white h-4 w-4"></div>
          </div>
        </Grid>
      </JobContext.Provider>
    </Dashboard>
  );
}
