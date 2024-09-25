import { useContext, useState } from "react"
import { BasicInput, BasicButton, BasicLabel } from "../../../../components"
import { JobContext } from "../Board"
import { RadioGroup, FormControlLabel, Radio } from "@mui/material"
export default function Step7(){
    const {handleSubmit, handleChange, values} = useContext(JobContext);
    const [attachments, setAttachments] = useState([])
    const [selectedFiles, setSelectedFiles] = useState([])
    const [removed, setRemoved] = useState(false)
      const handleUpload = async (e)=>{
        const files = e.target.files;
        setSelectedFiles((prev) => [...prev, ...Array.from(files)])
    }
    return <form onSubmit={handleSubmit} className="space-y-6 p-4 text-center">
        <div className="flex flex-col items-center justify-center text-center">
        <p className="text-xl font-bold">Next, Attach Your Work</p>
        <p className="text-zinc-500 w-3/4 font-bold text-sm">A good title helps your post stand out to the right candidates. It's the first thing they see, make it good</p>
        </div>
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
    <p className="text-left text-sm">Website</p>
    <BasicInput name="link" values={values.link} onChange={handleChange} placeholder="Add Link" custom="w-full grey" end="bi bi-paperclip text-white"/>

     <div className="flex justify-between">
     <p className="font-bold text-orange-700">Cancel</p>
     <BasicButton custom="float-right" title="Finish"/>
     </div>
    </form>
}