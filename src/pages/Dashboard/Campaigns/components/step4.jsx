import { BasicButton, BasicInput, CheckBox} from "../../../../components";
export default function Step4(){
    return (
        <div className="space-y-6"> 
        <div>
            <p className="text-lg font-bold text-center">Confirm your details</p>
            <p className="font-bold text-zinc-500 text-sm text-center">Last step for your campaign setup, almost done!</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
            <div>
            <BasicInput name="email" custom="w-full grey" placeholder="Email Address" phcolor="grey" phweight={200} start="bi bi-envelope-fill text-white" required/>
            </div>
        <div>
        <BasicInput name="phone" type="number" custom="w-full grey"  phcolor="grey" phweight={200} start="bi bi-shield-shaded text-white" required/>
        <p className="text-zinc-500 text-xs">State your target amount in KES</p>
        </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
            <div>
            <BasicInput name="bank" type="number" custom="w-full grey" placeholder="Bank Account"  phcolor="grey" phweight={200} start="bi bi-bank text-white" required/>
            </div>
        <div>
        <BasicInput name="phone" type="number" custom="w-full grey"  phcolor="grey" phweight={200} start="bi bi-camera text-white" required/>
        <p className="text-zinc-500 text-xs">Please take a clear photo of your ID. Both sides are required.</p>
        </div>
        </div>

          
          <div className="flex justify-between">
          <BasicButton  title="Previous"/>
          <BasicButton  title="Continue"/>
          </div>
         </div>
    )
}