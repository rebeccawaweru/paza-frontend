import { BasicButton, BasicInput, BasicSelect } from "../../../../components";
import { useState } from "react";
export default function Step1(props){
    const [selectedFiles, setSelectedFiles] = useState([])
    const [removed, setRemoved] = useState(false)
    const [attachments, setAttachments] = useState([])
    const handleUpload = async (e)=>{
        const files = e.target.files;
        setSelectedFiles((prev) => [...prev, ...Array.from(files)])
     }
    return (
        <div  className="space-y-6"> 
        <div>
            <p className="text-lg font-bold text-center">Name your campaign</p>
            <p className="font-bold text-zinc-500 text-sm text-center">And don't worry, you can edit this later on</p>
        </div>
          <BasicInput name="title" custom="w-full grey" placeholder="Campaign Name" phcolor="grey" phweight={200} start="bi bi-grid-3x2-gap text-white" required/>
          <div>
          <BasicSelect custom="w-full grey" start="bi bi-grid-3x2-gap text-white"></BasicSelect>
          <p className="text-zinc-500 font-bold text-xs">State your rate to do the job</p>
          </div>
          <div>
          <BasicInput name="description" custom="w-full grey" multiline rows={4} required placeholder="Describe your campaign" phcolor="grey" phweight={200}/>
          <p className="text-zinc-500 font-bold text-xs">Write a small brief about your campaign</p>
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
            <p className="text-zinc-500 font-bold text-xs">Upload photos or videos of your campaign</p>
            <BasicButton  custom="float-right" title="Continue" />
            </div>
    )
}