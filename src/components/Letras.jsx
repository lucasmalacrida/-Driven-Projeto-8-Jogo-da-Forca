import alfabeto from "../constants/alfabeto";
import normalizeString from "../helpers/normalizeString";

export default function Letras({ wordSelected, setWordSelected, wordScreen, setWordScreen, lettersDisabled, setLettersDisabled, errorCount, setErrorCount, setEndGame }) {
    function selectLetter(l) {
        setLettersDisabled([...lettersDisabled, l]);
        if (normalizeString(wordSelected.join('')).includes(l)) {
            let wordScreenArray = wordScreen.split(' ');
            wordSelected.forEach((letter,i) => {
                if (normalizeString(letter) === l) wordScreenArray[i] = letter;
            });

            let newWordScreen = wordScreenArray.join(" ");
            setWordScreen(newWordScreen);
            if (newWordScreen.includes('_') === false) {
                setEndGame('win');
                setWordSelected([]);
            }
        } else {
            if (errorCount < 6) setErrorCount(errorCount + 1);
            if (errorCount === 5) {
                setWordScreen(wordSelected.join(''));
                setEndGame('lose');
                setWordSelected([]);
            }
        }
    }

    const isDisabledLetter = (l) => lettersDisabled.includes(l) || (wordSelected.length === 0);

    return (
        <div className="letras">
            {alfabeto.map(l =>
                <button
                    key={l}
                    className={`letter ${isDisabledLetter(l) ? 'l-disabled' : ''}`}
                    disabled={isDisabledLetter(l)}
                    onClick={() => selectLetter(l)}
                    data-test="letter" >
                    {l.toUpperCase()}
                </button>
            )}
        </div>
    )
}