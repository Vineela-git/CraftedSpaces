import React from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";
import DirectChat from "./DirectChat"; // Import the DirectChatPage component


const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username} 
        secret={props.user.secret} 
        style={{ height: "100%" }}
      />
            {/* <DirectChat/> Render the DirectChatPage component */}

    </div>
  );
};

export default ChatsPage;
