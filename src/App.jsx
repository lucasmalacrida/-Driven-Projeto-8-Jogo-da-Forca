import "./styles/reset.css";
import "./styles/style.css";

import { useState } from "react";

import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";

export default function App() {
    const [wordSelected,setWordSelected] = useState([]);
    const [errorCount,setErrorCount] = useState(0);
    return (
        <main>
            <Jogo words={palavras} wordSelected={wordSelected} setWordSelected={setWordSelected} errorCount={errorCount} />
            <Letras wordSelected={wordSelected} errorCount={errorCount} setErrorCount={setErrorCount} />
        </main>
    );
}