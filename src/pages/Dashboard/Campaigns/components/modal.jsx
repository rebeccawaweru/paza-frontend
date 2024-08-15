import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
export default function Modal (props){
    const cls = "rounded-full px-4 py-2 border border-orange-700 flex items-center justify-center"
    
    return (
        <form onSubmit={(e) => {e.preventDefault(); props.next()}} className={`${props.open ? 'block absolute' : 'hidden'} left-1/2 top-1/2 mb-4 px-8 transform -translate-x-1/2 -translate-y-1/2 bg-black shadow-lg shadow-zinc-800 h-auto w-2/3 py-4 space-y-4`}>
            <i onClick={props.close} className="bi bi-x float-right text-lg cursor-pointer absolute right-2 top-0"></i>
            <div className="flex justify-between py-4">
                <div className={`${props.step === 1 ? 'bg-orange-700' : null} ${cls}`}>1</div>
                <div className={`${props.step === 2 ? 'bg-orange-700' : null} ${cls}`}>2</div>
                <div className={`${props.step === 3 ? 'bg-orange-700' : null} ${cls}`}>3</div>
                <div className={`${props.step === 4 ? 'bg-orange-700' : null} ${cls}`}>4</div>
            </div>
      {/* forms */}
      {props.step === 1 && <Step1 step={props.step}/>}
      {props.step === 2 && <Step2 step={props.step}/>}
      {props.step === 3 && <Step3 step={props.step}/>}
      {props.step === 4 && <Step4 step={props.step}/>}
      </form>
    )
}