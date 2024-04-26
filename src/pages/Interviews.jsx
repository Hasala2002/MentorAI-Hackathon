// import axios from "../components/Axios"
// import sdk from '@api/eden-ai';

// const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
// const { GoogleAuth } = require("google-auth-library");

// import { GoogleAuth } from "google-auth-library";

// import { TextServiceClient } from "@google-ai/generativelanguage";
// import GoogleAuth from "google-auth-library";
// import { useState } from "react";



const Interviews = () => {

    const MODEL_NAME = "models/text-bison-001";
    const API_KEY = "qjnwK83Rs2slvhaHr0im9WYo0G0"

    // const client = new TextServiceClient({
    //     authClient: new GoogleAuth().fromAPIKey(API_KEY),
    // });

    // gAAAAABmLA3hx - WeAPECOPB42Yv1JJOzTU9gGqH4U9LcxLlQe9O1iTddQZW5SREPRnzQVy0rKFrB9GsMIAzYeO2NG8NnTX1nhK93BihUIgLA7OIW4Qie9wLPskE2ZFbLHCYSoGN2P_tE

    // AIzaSyAvGdm - qjnwK83Rs2slvhaHr0im9WYo0G0

    // const [prompt, setPrompt] = useState("")

    // const sendMessage = (req) => {
    //     // axios.get(
    //     //     {
    //     //         max_tokens: 2048,
    //     //         mode: "python",
    //     //         model: "icortex-1",
    //     //         n: 1,
    //     //         temperature: 0,
    //     //         text: "string"
    //     //     }
    //     // ).then((response) => {
    //     //     console.log(response)
    //     // })
    //     client
    //         .generateText({
    //             model: MODEL_NAME,
    //             prompt: {
    //                 text: prompt,
    //             },
    //         })
    //         .then((result) => {
    //             console.log(JSON.stringify(result, null, 2));
    //         });
    // }

    return (
        <div className="flex flex-col h-[90%] max-h-[96px]: pt-10 gap-5">
            <div className="flex-1 border border-slate-900 rounded-md p-5 text-left">Ask Me Anything you want, I'll help you prepare for your interview</div>
            <input className="w-full h-12 border border-slate-900 outline-none p-2 bg-black" type="text" placeholder="type something here" />
            <button className="bg-blue-500 font-extrabold">Submit</button>
        </div>

    )
}

export default Interviews