// import { useState } from "react";
// import { BasicButton, BasicInput, BasicLabel, SideBar } from "../../../components";
// import { Dashboard } from "../../../layouts";
// import { Avatar, Grid } from "@mui/material";
// export default function Inbox(){
//     const [send, setSend] = useState(false)
//     return <Dashboard sidebar={<SideBar/>}>
//     <Grid item xs={10} sm={10}>
//     <div className="p-4 space-y-6 tracking-wide text-sm relative">
//      <div className="flex justify-between">
//      <p>Messages</p>
//      {!send && <BasicButton handleClick={()=>setSend(true)} title="+ New Message"/>}
//      </div>
//      {!send &&
//      <div className="flex items-center space-x-4">
//      <Avatar/>
//      <div className="w-full border border-zinc-400 h-20 p-4 space-y-2">
//         <p className="font-semibold">Rebecca Waweru</p>
//         <p className="text-zinc-400">Message content here.....</p>
//      </div>
//      </div>}

//      {send && <>
//         <div>
//      <BasicLabel title="Send To"/>
//      <BasicInput name="to" custom="w-full grey" end="bi bi-plus text-white"/>
//      </div>

//     <BasicInput name="message" custom="w-full grey" multiline rows={4} placeholder="Write a message"/>
//     <div className="flex space-x-8">
//         <BasicButton title="Send"/>
//         <button onClick={()=>setSend(false)}>Cancel</button>
//     </div>
//      </>}

//     </div>
//     </Grid>
//     </Dashboard>
// }

import { useState } from "react";
import {
  BasicButton,
  BasicInput,
  BasicLabel,
  SideBar,
} from "../../../components";
import { Dashboard } from "../../../layouts";
import { Avatar, Grid } from "@mui/material";

export default function Inbox() {
  const [send, setSend] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  const handleSendMessage = () => {
    if (message && currentChat) {
      const newMessage = { to: currentChat, content: message };
      setMessages((prev) => [...prev, newMessage]); // Add the message to the chat window
      setMessage(""); // Reset message input
      setSend(false); // Close the send window after sending
    }
  };

  return (
    <Dashboard sidebar={<SideBar />}>
      <Grid item xs={10} sm={10}>
        <Grid container>
          {/* Left Sidebar - List of Conversations */}
          <Grid item xs={3}>
            <div className="p-4 space-y-4">
              <div className="flex items-center space-x-2">
                <Avatar />
                <p className="font-semibold">David Peters</p>
                <p className="text-sm text-zinc-400">Last message...</p>
              </div>
              <div className="flex items-center space-x-2">
                <Avatar />
                <p className="font-semibold">Mario Kay</p>
                <p className="text-sm text-zinc-400">Last message...</p>
              </div>
              <div className="flex items-center space-x-2">
                <Avatar />
                <p className="font-semibold">Kelly Nice</p>
                <p className="text-sm text-zinc-400">Last message...</p>
              </div>
              {/* Add more conversations here */}
            </div>
          </Grid>

          {/* Right Chat Window */}
          <Grid item xs={9}>
            <div className="p-4 space-y-6 tracking-wide text-sm relative">
              {/* Chat Header */}
              <div className="flex justify-between">
                <p>{currentChat ? currentChat : "Messages"}</p>
                {!send && (
                  <BasicButton
                    handleClick={() => setSend(true)}
                    title="+ New Message"
                  />
                )}
              </div>

              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto   p-4">
                {messages.map((msg, index) => (
                  <div key={index} className="space-y-2">
                    <div
                      className={`flex items-start space-x-2 ${
                        msg.to ? "justify-start" : "justify-end"
                      }`}
                    >
                      {/* Avatar only for received messages */}
                      {msg.to && <Avatar className="self-start" />}

                      {/* Message Content */}
                      <div
                        className={`${
                          msg.to ? "bg-gray-100" : "bg-blue-100"
                        } border border-zinc-400 p-2 rounded-md max-w-xs`}
                      >
                        <p className="text-sm text-zinc-400 break-words">
                          {msg.content}
                        </p>
                      </div>

                      {/* Avatar for sent messages */}
                      {!msg.to && <Avatar className="self-start" />}
                    </div>
                  </div>
                ))}
              </div>

              {/* Send Message */}
              {send && (
                <>
                  <div>
                    <BasicLabel title="Send To" />
                    <BasicInput
                      name="to"
                      custom="w-full grey"
                      end="bi bi-plus text-white"
                      value={currentChat}
                      onChange={(e) => setCurrentChat(e.target.value)}
                    />
                  </div>

                  <BasicInput
                    name="message"
                    custom="w-full grey"
                    multiline
                    rows={4}
                    placeholder="Write a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />

                  <div className="flex space-x-8">
                    <BasicButton title="Send" handleClick={handleSendMessage} />
                    <button onClick={() => setSend(false)}>Cancel</button>
                  </div>
                </>
              )}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Dashboard>
  );
}
