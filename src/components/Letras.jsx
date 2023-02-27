import Letra from "./Letra";

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

export default function Letras() {
    return (
        <div className="letras">
            {letters.map(
                l => <Letra key={l} letter={l} />
            )}
        </div>
    )
}