import React, { useContext } from "react";

import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";

import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <img Style={"width:30px;height:30px;border-radius:50%;"}src={data.user?.photoURL} alt=""/>
        <span>{data.user?.displayName}</span>
        <a href="https://stegnography-de70a.web.app/"><button className="btn1">Encode / Decode</button></a>
        <div className="chatIcons">
          
          
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
