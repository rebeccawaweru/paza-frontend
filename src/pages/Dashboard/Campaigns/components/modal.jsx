import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import { useContext } from "react";
import { CampaignContext } from "../Campaigns";
export default function Modal() {
  const {close,open,step} = useContext(CampaignContext);
  const cls =
    "rounded-full px-4 py-2 border border-orange-700 flex items-center justify-center";

  return (
      <div
        className={`${
        open ? "block absolute" : "hidden"
        } left-1/2 top-96 mb-4 px-4 transform -translate-x-1/2 -translate-y-1/2 bg-black shadow-lg shadow-zinc-800 h-auto w-2/3 py-2 space-y-2`}
      >
        <i
          onClick={() => {
          close();
          }}
          className="bi bi-x float-right text-lg cursor-pointer absolute right-2 top-0"
        ></i>
        <div className="flex items-center justify-between py-2 ">
          <div className="flex w-full items-center">
            <div className={`${step === 1 ? "bg-orange-700" : null} ${cls}`}>
              1
            </div>
            <hr className="w-full border border-orange-700" />
          </div>
          <div className="flex w-full items-center">
            <div className={`${step === 2 ? "bg-orange-700" : null} ${cls}`}>
              2
            </div>
            <hr className="w-full border border-orange-700" />
          </div>
          <div className="flex w-full items-center">
            <div className={`${step === 3 ? "bg-orange-700" : null} ${cls}`}>
              3
            </div>
            <hr className="w-full border border-orange-700" />
          </div>
          <div className="flex  items-center">
            <div className={`${step === 4 ? "bg-orange-700" : null} ${cls}`}>
              4
            </div>
          </div>
          {/* <div className={`${step === 2 ? 'bg-orange-700' : null} ${cls}`}>2</div>
                <div className={`${step === 3 ? 'bg-orange-700' : null} ${cls}`}>3</div>
                <div className={`${step === 4 ? 'bg-orange-700' : null} ${cls}`}>4</div> */}
        </div>
        {/* forms */}
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
      </div>
 
  );
}
