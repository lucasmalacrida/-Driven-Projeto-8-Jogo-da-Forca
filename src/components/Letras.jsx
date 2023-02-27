import { useState } from "react";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function Letras({ wordSelected, setWordSelected, wordScreen, setWordScreen, lettersDisabled, setLettersDisabled, errorCount, setErrorCount, endGame, setEndGame }) {
    function selectLetter(l) {
        setLettersDisabled([...lettersDisabled, l]);
        if (wordSelected.includes(l)) {
            let wordScreenArray = wordScreen.split(' ');
            for (let i = 0; i < wordSelected.length; i++) {
                if (wordSelected[i] === l) {
                    wordScreenArray[i] = l;
                }
            }
            let newWordScreen = wordScreenArray.join(" ");
            setWordScreen(newWordScreen);

            if (newWordScreen.includes('_') === false) {
                let newEndGame = [true,'win'];
                setEndGame(newEndGame);
                let newWordSelected = [];
                setWordSelected(newWordSelected);
            }
        } else {
            if (errorCount < 6) {
                let newErrorCount = errorCount + 1;
                setErrorCount(newErrorCount);
            }
            if (errorCount === 5) {
                let newWordScreen = wordSelected.join('');
                setWordScreen(newWordScreen);
                let newEndGame = [true,'lose'];
                setEndGame(newEndGame);
                let newWordSelected = [];
                setWordSelected(newWordSelected);
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