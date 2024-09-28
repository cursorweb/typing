import styles from "./TestCont.module.css";
import React from "react";
import { RestartBtn } from "./ResultsCont";

export function TestCont({ restart, children, isTyping }: { restart: () => void, isTyping: boolean } & React.PropsWithChildren) {
    return (
        <div>
            {isTyping
                ? <div>
                    <div className={styles.testCont}>{children}</div>
                    <RestartBtn onClick={restart} />
                </div>
                : children}
        </div>
    );
}
