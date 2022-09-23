import React, { useState } from "react";
import "./index.css";

const App=()=>{
    let newtime=new Date().toLocaleTimeString();
    const[ctime,setCtime]=useState(newtime);

    const Updatetime=()=>{
        newtime=new Date().toLocaleTimeString();
        setCtime(newtime);
    }
    setInterval(() => {
        Updatetime();
    },1000);
    return(
        <>
        <div>
        <h1>{ctime}</h1>
        </div>
        </>
    );
}

export default App;
