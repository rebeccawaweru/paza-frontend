import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import { createContext, useState } from "react";
export const CampaignContext = createContext()
export default function Modal (props){
    const [step,setStep] = useState(1)
    const [values, setValues] = useState({
        title:"",
        category:"",
        description:"",
        location:"",
        phone:"",
        age:false,
        docs:false,
        cards:false,
        email:"",
        budget:"",
        bank:""
    });
    const handleChange = (e) => {
        setValues((prev) => ({...prev, [e.target.name]:e.target.value}))
    }
    const cls = "rounded-full px-4 py-2 border border-orange-700 flex items-center justify-center"
    const handleSubmit = (e) => {
       e.preventDefault()
       if (step < 4) {
        setStep((prev) => prev + 1)
       } else {
          //post new campaign route
          console.log(values)
       }
  
    }
    return (
        <CampaignContext.Provider value={{handleChange,setStep,handleSubmit,values}}>
        <div className={`${props.open ? 'block absolute' : 'hidden'} left-1/2 top-96 mb-4 px-4 transform -translate-x-1/2 -translate-y-1/2 bg-black shadow-lg shadow-zinc-800 h-auto w-2/3 py-2 space-y-4`}>
            <i onClick={()=>{
                props.close();
                setValues({
                    title:"",
                    category:"",
                    description:"",
                    location:"",
                    phone:"",
                    age:false,
                    docs:false,
                    cards:false,
                    email:"",
                    budget:"",
                    bank:""
                })
            }} className="bi bi-x float-right text-lg cursor-pointer absolute right-2 top-0"></i>
            <div className="flex items-center justify-between py-4">
                <div className="flex w-full items-center">
                <div className={`${step === 1 ? 'bg-orange-700' : null} ${cls}`}>1</div>
                <hr className="w-full border border-orange-700"/>
                </div>
                <div className="flex w-full items-center">
                <div className={`${step === 2 ? 'bg-orange-700' : null} ${cls}`}>2</div>
                <hr className="w-full border border-orange-700"/>
                </div>
                <div className="flex w-full items-center">
                <div className={`${step === 3 ? 'bg-orange-700' : null} ${cls}`}>3</div>
                <hr className="w-full border border-orange-700"/>
                </div>
                <div className="flex  items-center">
                <div className={`${step === 4 ? 'bg-orange-700' : null} ${cls}`}>4</div>
          
                </div>
                {/* <div className={`${step === 2 ? 'bg-orange-700' : null} ${cls}`}>2</div>
                <div className={`${step === 3 ? 'bg-orange-700' : null} ${cls}`}>3</div>
                <div className={`${step === 4 ? 'bg-orange-700' : null} ${cls}`}>4</div> */}
            </div>
      {/* forms */}
      {step === 1 && <Step1/>}
      {step === 2 && <Step2/>}
      {step === 3 && <Step3/>}
      {step === 4 && <Step4/>}
      </div>
      </CampaignContext.Provider>
    )
}