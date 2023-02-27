import "./styles/reset.css";
import "./styles/style.css";

import Jogo from "./components/Jogo";
import Letras from "./components/Letras";

export default function App() {
    return (
        <main>
            <Jogo />
            <Letras />
        </main>
    );
}