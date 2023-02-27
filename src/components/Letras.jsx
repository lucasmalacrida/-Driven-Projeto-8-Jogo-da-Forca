import { useState } from "react";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function Letras({ wordSelected, wordScreen, setWordScreen, errorCount, setErrorCount }) {
    const [lettersDisabled, setLettersDisabled] = useState([]);
    function selectLetter(l) {
        setLettersDisabled([...lettersDisabled, l]);
        if (wordSelected.includes(l)){
            let wordScreenArray = wordScreen.split(' ');
            for (let i=0; i<wordSelected.length; i++) {
                if (wordSelected[i]===l) {
                    wordScreenArray[i] = l;
                }
            }
            setWordScreen(wordScreenArray.join(" "));
        } else {
            if (errorCount!==6){
                let newErrorCount = errorCount+1;
                setErrorCount(newErrorCount);
            }
        }   
    }

    if (wordSelected.length !== 0) {
        return (
            <div className="letras">
                {
                    alfabeto.map(
                        l =>
                            <button
                                key={l}
                                className={`letter ${lettersDisabled.includes(l) ? 'l-disabled' : ''}`}
                                onClick={() => selectLetter(l)} disabled={lettersDisabled.includes(l)} >
                                {l.toUpperCase()}
                            </button>
                    )
                }

            </div>
        )
    } else {
        return (
            <div className="letras">
                {
                    alfabeto.map(
                        l =>
                            <button
                                key={l}
                                className={"letter l-disabled"}
                                onClick={() => selectLetter(l)} disabled={true}>
                                {l.toUpperCase()}
                            </button>
                    )
                }

            </div>
        )
    }
}