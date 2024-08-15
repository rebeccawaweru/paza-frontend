import { BasicButton, BasicInput, CheckBox} from "../../../../components";
export default function Step3(){
    return (
        <div className="space-y-6"> 
        <div>
            <p className="text-lg font-bold text-center">Finally, lets confirm your eligibility</p>
            <p className="font-bold text-zinc-500 text-sm text-center">Tell us where you are based and confirm a few other details before we proceed.</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
            <div>
            <BasicInput name="title" custom="w-full grey" placeholder="Location" phcolor="grey" phweight={200} start="bi bi-geo-alt text-white" required/>
            </div>
        <div>
        <BasicInput name="phone" type="number" custom="w-full grey" placeholder="+254" phcolor="grey" phweight={200} start="bi bi-telephone text-white" required/>
        <p className="text-zinc-500 text-xs">Please provide your phone number for account verification</p>
        </div>
        </div>
        <div className="grid">
        <CheckBox label="I am atleast 18 years old" name="verify"  value="18 years"/>
        <CheckBox label="I can verify a bank account and government issue ID" name="verify"  value="documents"/>
        <CheckBox label="I have a debit/credit card" name="verify"  value="cards"/>
        </div>        
          <div className="flex justify-between">
          <BasicButton  title="Previous"/>
          <BasicButton  title="Continue"/>
          </div>
         </div>
    )
}