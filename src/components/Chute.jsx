import normalizeString from "../helpers/normalizeString";

export default function Chute({ wordSelected, setWordSelected, setWordScreen, setErrorCount, setEndGame, guessWord, setGuessWord }) {
    function handleChute() {
        if (normalizeString(guessWord) === normalizeString(wordSelected.join(''))) {
            setEndGame('win');
            setWordSelected([]);
            setWordScreen(wordSelected.join(' '));
        } else {
            setErrorCount(6);
            setEndGame('lose');
            setWordSelected([]);
            setWordScreen(wordSelected.join(''));
        }
    }

    return (
        <div className={`chute ${(wordSelected.length === 0) && 'hidden'}`}>
            <p>Já sei a palavra!</p>
            <input
                type="text"
                value={guessWord}
                onChange={e => setGuessWord(e.target.value)}
                data-test="guess-input"
            />
            <button onClick={() => handleChute()} data-test="guess-button">Chutar</button>
        </div>
    )
}