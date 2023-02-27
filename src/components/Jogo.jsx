import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";

const imgArray = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

export default function Jogo({ words, wordSelected, setWordSelected, wordScreen, lettersDisabled, setLettersDisabled, setWordScreen, errorCount, setErrorCount, endGame, setEndGame }) {
    function chooseWord() {
        function compareFunction() {
            return Math.random() - 0.5;
        }
        const randomWord = words.sort(compareFunction)[0];
        setWordSelected(randomWord.split(''));
        setWordScreen(randomWord.split('').map(l => '_').join(" "));
        setEndGame([false, 'none']);

        let newLettersDisabled = [];
        setLettersDisabled(newLettersDisabled);
        let newErrorCount = 0;
        setErrorCount(newErrorCount);
    }
    return (
        <div className="jogo">
            <img src={imgArray[errorCount]} alt={forca0.substring(10, 16)} data-test="game-image"/>
            <div className="container-word">
                <button className="choose-word" onClick={chooseWord} disabled={!endGame[0]} data-test="choose-word"> Escolher Palavra </button>
                <div className={`word ${endGame[1]==='lose'? 'w-lose':''} ${endGame[1]==='win'? 'w-win':''}`} data-test="word" >{wordScreen}</div>
            </div>
        </div>
    )
}