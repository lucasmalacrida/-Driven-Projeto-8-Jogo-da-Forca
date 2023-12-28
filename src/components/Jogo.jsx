import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";

const imgArray = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

export default function Jogo({ palavras, setWordSelected, wordScreen, setLettersDisabled, setWordScreen, errorCount, setErrorCount, endGame, setEndGame, setGuessWord }) {
    function compareFunction() {
        return Math.random() - 0.5;
    }

    function chooseWord() {
        const randomWord = palavras.sort(compareFunction)[0];
        setWordSelected(randomWord.split(''));
        setWordScreen(randomWord.split('').map(l => '_').join(" "));
        setLettersDisabled([]);
        setErrorCount(0);
        setEndGame(false);
        setGuessWord('');
    }

    return (
        <div className="jogo">
            <img src={imgArray[errorCount]} alt={forca0.substring(10, 16)} data-test="game-image" />
            <div className="container-word">
                <button className="choose-word" onClick={chooseWord} data-test="choose-word"> Escolher Palavra </button>
                <div className={`word ${endGame}`} data-test="word" >{wordScreen}</div>
            </div>
        </div>
    )
}