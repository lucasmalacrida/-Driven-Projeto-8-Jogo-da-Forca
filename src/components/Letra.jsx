import { useState } from "react";

export default function Letra({letter}){
    const [letterDisabled,setletterDisabled] = useState(true);
    function selectLetter(){
        console.log("Click!");
    }
    return (
        <button className={`letter ${letterDisabled? 'l-disabled' : ''}`} onClick={selectLetter} disabled={letterDisabled}>{letter}</button>
    )
}