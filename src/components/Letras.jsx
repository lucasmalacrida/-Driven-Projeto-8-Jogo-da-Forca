import Letra from "./Letra";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function Letras() {
    return (
        <div className="letras">
            {alfabeto.map(
                l => <Letra key={l} letter={l.toUpperCase()} />
            )}
        </div>
    )
}