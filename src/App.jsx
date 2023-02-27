import "./styles/reset.css";
import "./styles/style.css";

import { useState } from "react";

import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";

export default function App() {
    const [wordSelected,setWordSelected] = useState([]);
    const [wordScreen,setWordScreen] = useState("");
    const [lettersDisabled, setLettersDisabled] = useState([]);
    const [errorCount,setErrorCount] = useState(0);
    const [endGame,setEndGame] = useState([true,'none']);
    return (
        <main>
            <Jogo
                words={palavras}
                wordSelected={wordSelected}
                setWordSelected={setWordSelected}
                wordScreen={wordScreen}
                setWordScreen={setWordScreen}
                lettersDisabled={lettersDisabled}
                setLettersDisabled={setLettersDisabled}
                errorCount={errorCount}
                setErrorCount={setErrorCount}
                endGame={endGame}
                setEndGame={setEndGame} />
            <Letras
                wordSelected={wordSelected}
                setWordSelected={setWordSelected}
                wordScreen={wordScreen}
                setWordScreen={setWordScreen}
                lettersDisabled={lettersDisabled}
                setLettersDisabled={setLettersDisabled}
                errorCount={errorCount}
                setErrorCount={setErrorCount}
                endGame={endGame}
                setEndGame={setEndGame} />
        </main>
    );
}