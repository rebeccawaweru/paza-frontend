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

  const defaultInitialValues = {
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
  };
  const [initialValues, setInitialValues] = useState(defaultInitialValues);
  const [values, setValues] = useState(defaultInitialValues);
  const [refresh, setRefresh] = useState(false);

  //Reset form values and step
  const resetForm = () => {
    setInitialValues(defaultInitialValues);
    setValues(defaultInitialValues);
    setGoals([]);
    setTopics([]);
    setStep(1);
  };
  const close = () => {
    isOpen(false);
    setValues(initialValues);
    resetForm(); // reset form to clear values
    setEdit(false);
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
        const updatedValues = Object.keys(values).reduce((acc, key) => {
          if (values[key] !== initialValues[key]) {
            acc[key] = values[key];
          }
          return acc;
        }, {}); //Create object with only updated values

        if (Object.keys(updatedValues).length > 0) {
          try {
            const response = await campaignsPut(`/${id}`, {
              ...updatedValues,
            });

            isOpen(false);
            toast.success(response.data);
            resetForm(); //Reset form after successful update
            setRefresh((prev) => !prev);
          } catch (error) {
            toast.error("Failed to update campaign");
            console.error("Failed to update campaign:", error);
          }
        } else {
          toast.info("No changes made.Please update at least one field!");
          setStep(1);
        }
      } else {
        const response = await campaignsPost("/create", {
          ...values,
          goals: goals,
          topics: topics,
        });
        isOpen(false);
        toast.success(response.data);
        resetForm(); //Reset form after created campaign
        setRefresh((prev) => !prev); // Trigger refresh to fetch new campaign
      }
    }
  };
  async function getCampaign() {
    const response = await campaignsGet(`/${id}`);
    setInitialValues(response.data);
    setValues(response.data);
  }
  useEffect(() => {
    if (id) {
      getCampaign();
    }
  }, [id]);
  useEffect(() => {
    //get campaigns route
    const getCampaigns = async () => {
      try {
        const response = await campaignsGet("/");
        setCampaigns(response.data);
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
          refresh,
          setRefresh,
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
                  onClick={() => {
                    isOpen(true);
                    setEdit(false); // Reset edit ensuring new campaign creation
                  }}
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
