import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";

export default function Jogo({words,wordSelected,setWordSelected,errorCount}) {
    function chooseWord(){ 
        function compareFunction(){ 
            return Math.random() - 0.5; 
        }
        let randomWord = words.sort(compareFunction)[0];
        setWordSelected(randomWord.split(''));
    }
    const word = wordSelected.map( l => '_' ).join(" ");
    return (
        <div className="jogo">
            <img src={forca0} alt={forca0.substring(10, 16)} />
            <div className="container-word">
                <button className="choose-word" onClick={chooseWord}> Escolher Palavra </button>
                <div className="word">{word}</div>
            </div>
        </div>
    )
}