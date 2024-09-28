import { CharTest, CharTestResult } from "comp/testType/CharTest";
import { TestCont } from "./util/TestCont";
import { useTestReducer } from "./util/TestContReducer";
import { PracticeBtn, RestartBtn, ResultBar, ResultsCont } from "./util/ResultsCont";

export function CharTestCont({ genText }: { genText: () => string[] }) {
    const [{ isTyping, render }, dispatch] = useTestReducer(() => <CharTest chars={genText()} onDone={onDone} />);

    function onDone(res: CharTestResult) {
        dispatch({
            type: "done",
            render: (
                <ResultsCont>
                    <div>{res.cpm} CPM ({res.wpm} WPM)</div>
                    <div>{res.acc}% ACC</div>
                    <div>{res.wrongChars.map((c, i) => <span key={i}>{c}{' '}</span>)}</div>

                    <ResultBar>
                        <RestartBtn onClick={() => dispatch({ type: "restart" })} />
                        <PracticeBtn onClick={() => dispatch({
                            type: "redo",
                            genTest: () => <CharTest chars={res.wrongChars} onDone={onDone} />
                        })} />
                    </ResultBar>
                </ResultsCont>
            )
        });
    }

    return (
        <TestCont
            isTyping={isTyping}
            restart={() => dispatch({ type: "restart" })}
        >{render}</TestCont>
    );
}