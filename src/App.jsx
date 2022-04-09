// import React, { useState } from "react";


// const App=()=>{
//     const state=useState();
//     // console.log(state);
//     const [count,setCount]=useState(0);

//     // let count=1;
    
//     const Incnum=()=>{
//         setCount(count + 1);
//         // console.log("clicked "+ count++);
//     };
//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={Incnum}>Click me</button>
//         </>
//     )
// };

// export default App;

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
        {/* through button */}
        {/* <button onClick={Updatetime}>Get Current Time</button> */}
        </>
    );
}

export default App;