import React from "react";
import Sidebar from "../components/sidebar";
import Chat from "../components/Chat";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Chats from "../components/Chats";

const Home=()=>{
    return(
         <div className="home">
            <div className="container">
                <Sidebar />
                <Chat />
                
            </div>
         </div>
    );
}
export default Home