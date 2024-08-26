import { useEffect, useState, createContext, useContext } from "react";
import { SideBar } from "../../../components";
import { Dashboard } from "../../../layouts";
import { Grid } from "@mui/material";
import { Content, Modal } from "./components";
import { ToastContainer, toast } from "react-toastify";
import { campaignsGet, campaignsPost, campaignsPut } from "../../../api/client";
import { useNavigate } from "react-router-dom";
import { DashContext } from "../../../context/AuthContext";

export const CampaignContext = createContext();
export default function Campaigns() {
  const navigate = useNavigate();
  const [open, isOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");
  const [step, setStep] = useState(1);
  const [campaigns, setCampaigns] = useState([]);
  const [topics, setTopics] = useState([]);
  const { account, user } = useContext(DashContext);
  const owner = account.creatorname || account.company || user.email;
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);
  const [values, setValues] = useState({
    createdby: owner,
    title: "",
    category: "Campaign",
    description: "",
    location: "",
    phone: "",
    age: false,
    docs: false,
    cards: false,
    email: "",
    budget: "",
    bank: "",
    milestones: [],
    topics: [],
  });
  const [refresh, setRefresh] = useState(false);
  const close = () => {
    isOpen(false);
    setValues({
      createdby: owner,
      title: "",
      category: "Campaign",
      description: "",
      location: "",
      phone: "",
      age: false,
      docs: false,
      cards: false,
      email: "",
      budget: "",
      bank: "",
      milestones: [],
      topics: [],
    });
  };
  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step < 4) {
      setStep((prev) => prev + 1);
    } else {
      //post new campaign route / edit campaign
      if (edit) {
        const response = await campaignsPut(`/campaigns/${id}`, {
          values,
          goals: goals,
          topics: topics,
        });
        isOpen(false);
        toast.success(response.data);
        setStep(1);
        console.log(values, goals);
      } else {
        const response = await campaignsPost("campaigns/create", {
          ...values,
          goals: goals,
          topics: topics,
        });
        isOpen(false);
        toast.success(response.data);
        setStep(1);
        setRefresh((prev) => !prev);
      }
    }
  };
  useEffect(() => {
    //get campaigns route
    const getCampaigns = async () => {
      try {
        const response = await campaignsGet("/campaigns");
        setCampaigns(response.data);
        console.log("🚀 ~ useEffect ~ response:", response);
      } catch (error) {
        console.error("Failed to fetch campaigns:", error);
      }
    };
    getCampaigns();
  }, [refresh]);
  return (
    <Dashboard sidebar={<SideBar />}>
      <CampaignContext.Provider
        value={{
          handleChange,
          setStep,
          handleSubmit,
          values,
          open,
          close,
          step,
          setStep,
          goal,
          setGoal,
          goals,
          setGoals,
          topics,
          setTopics,
        }}
      >
        <Grid item xs={10} sm={10} position="relative">
          <ToastContainer />
          <Modal />
          <div className="w-full p-4 space-y-4 ">
            <h2 className="font-bold text-2xl">Campaigns</h2>
            <div className="block 2xl:flex xl:flex lg:flex md:flex sm:flex w-full justify-between">
              <div className="block 2xl:flex xl:flex lg:flex md:flex sm:flex w-full justify-between">
                <div className="flex space-x-4 cursor-pointer mb-4 sm:mb-0">
                  <div className="flex space-x-2 text-orange-700 font-semibold border-b border-orange-700 px-4 py-2">
                    <p className={``}>All Campaigns </p>
                    <div className="grey px-2 hidden 2xl:flex xl:flex lg:flex md:flex sm:flex items-center text-xs rounded-md text-zinc-300">
                      {campaigns && campaigns.length}
                    </div>
                  </div>
                  <div className="flex space-x-2 font-semibold px-4 py-2">
                    <p className={`text-zinc-400`}>Recommended </p>
                    <div className="grey px-2 hidden 2xl:flex xl:flex lg:flex md:flex sm:flex items-center text-xs rounded-md text-zinc-300">
                      5
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => isOpen(true)}
                  className="grey text-sm p-2 cursor-pointer hover:bg-orange-700 hover:scale-90"
                >
                  + New Campaign
                </button>
              </div>
            </div>
            {campaigns.length > 0 &&
              campaigns.map((c) => {
                return (
                  <Content
                    key={c._id}
                    view={() => navigate(`/campaign/${c._id}`)}
                    edit={() => {
                      isOpen(true);
                      setId(c._id);
                      setGoals(c.goals);
                      setTopics(c.topics);
                      setValues({ ...c });
                      setEdit(true);
                    }}
                    {...c}
                  />
                );
              })}
          </div>
        </Grid>
      </CampaignContext.Provider>
    </Dashboard>
  );
}
