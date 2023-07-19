import "./App.css";
import { CharTest } from "./comp/tynput/testType/CharTest";
import { WordTest, wordMapToChars } from "./comp/tynput/testType/WordTest";

function App() {
    return (
        <div style={{ position: "relative", padding: "10px" }}>
            {
                // ... whatever var
                <CharTest chars={"thequickbrownfoxjumpsoverthelazydog".split("")} onDone={console.log} />
                // <WordTest words={wordMapToChars("the quick brown fox jumps over the lazy dog".split(" ").map(k => k.split("")))} onDone={console.log} />
            }
        </div>
    );
}

export default App;
