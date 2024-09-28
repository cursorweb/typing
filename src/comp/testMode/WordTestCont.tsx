import { WordTest, WordTestResult } from "comp/testType/WordTest";
import { TestCont } from "./util/TestCont";
import { useTestReducer } from "./util/TestContReducer";
import { ResultsCont, ResultBar, RestartBtn, PracticeBtn } from "./util/ResultsCont";

export function WordTestCont({ genText }: { genText: () => string[] }) {
    const [{ isTyping, render }, dispatch] = useTestReducer(() => <WordTest chars={genText()} onDone={onDone} key={Math.random()} />);

    function onDone(res: WordTestResult) {
        dispatch({
            type: "done",
            render: (
                <ResultsCont>
                    <div>{res.wpm} WPM</div>
                    <div>{res.acc}% ACC</div>
                    <div>
                        {res.wpms.map(({ wpm, word }, i) =>
                            <div style={{ display: "inline-block", margin: 10 }} key={i}>
                                <div>{word}</div>
                                <div>{wpm.toFixed(2)}wpm</div>
                            </div>
                        )}
                    </div>
                    <ResultBar>
                        <RestartBtn onClick={() => dispatch({ type: "restart" })} />
                        <PracticeBtn onClick={() => dispatch({
                            type: "redo",
                            genTest: () => <WordTest chars={res.wrongWords.join(" ").split("")} onDone={onDone} key={Math.random()} />
                        })} />
                    </ResultBar>
                </ResultsCont>
            )
        })
    }

    return (
        <TestCont
            isTyping={isTyping}
            restart={() => dispatch({ type: "restart" })}
        >{render}</TestCont>
    );
}