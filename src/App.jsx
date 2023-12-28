import { useState } from "react";

import "./styles/reset.css";
import "./styles/style.css";

import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import Chute from "./components/Chute";
import palavras from "./constants/palavras";

export default function App() {
    const [wordSelected, setWordSelected] = useState([]);
    const [wordScreen, setWordScreen] = useState("");
    const [lettersDisabled, setLettersDisabled] = useState([]);
    const [errorCount, setErrorCount] = useState(0);
    const [endGame, setEndGame] = useState(null);
    const [guessWord, setGuessWord] = useState('');

    const gameProps = { palavras, wordSelected, setWordSelected, wordScreen, setWordScreen, lettersDisabled, setLettersDisabled, errorCount, setErrorCount, endGame, setEndGame, guessWord, setGuessWord };

    return (
        <main>
            <Jogo {...gameProps} />
            <Letras {...gameProps} />
            <Chute {...gameProps} />
        </main>
    );
}