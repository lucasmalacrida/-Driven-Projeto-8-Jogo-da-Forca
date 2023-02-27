import "./styles/reset.css";
import "./styles/style.css";

import { useState } from "react";

import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";

export default function App() {
    const [wordSelected,setWordSelected] = useState([]);
    const [wordScreen,setWordScreen] = useState("");
    const [errorCount,setErrorCount] = useState(0);
    return (
        <main>
            <Jogo
                words={palavras}
                wordSelected={wordSelected}
                setWordSelected={setWordSelected}
                wordScreen={wordScreen}
                setWordScreen={setWordScreen}
                errorCount={errorCount} />
            <Letras
                wordSelected={wordSelected}
                wordScreen={wordScreen}
                setWordScreen={setWordScreen}
                errorCount={errorCount}
                setErrorCount={setErrorCount} />
        </main>
    );
}