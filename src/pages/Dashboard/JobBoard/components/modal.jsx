import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from './Step7'
import { useContext } from "react";
import { JobContext } from "../Board";
export default function Modal() {
  const {close,open,step} = useContext(JobContext);
  return (
      <div
        className={`${
        open ? "block absolute" : "hidden"
        } top-4 h-auto w-2/3 transform translate-x-1/4 w-2/3 py-2 space-y-2 bg-black z-10 shadow-sm shadow-orange-700`}
      >
        <i
          onClick={() => {
          close();
          }}
          className="bi bi-x float-right text-lg cursor-pointer absolute right-2 top-0"
        ></i>
      
        {/* forms */}
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4/>}
        {step === 5 && <Step5/>}
        {step === 6 && <Step6/>}
        {step === 7 && <Step7/>}
      </div>
 
  );
}
