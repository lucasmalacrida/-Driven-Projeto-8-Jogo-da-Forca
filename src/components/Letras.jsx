import { useState } from "react";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function Letras({ wordSelected, errorCount, setErrorCount}) {
    const [lettersDisabled, setLettersDisabled] = useState([]);
    function selectLetter(l) {
        setLettersDisabled([...lettersDisabled,l]);
    }

    if (wordSelected.length !== 0) {
        return (
            <div className="letras">
                {
                    alfabeto.map(
                        l =>
                        <button key={l} className={"letter"} onClick={l => selectLetter(l)} disabled={false} >{l.toUpperCase()}</button>
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
                        <button key={l} className={"letter l-disabled"} onClick={l => selectLetter(l)} disabled={true}>{l.toUpperCase()}</button>
                    )
                }

            </div>
        )
    }
}