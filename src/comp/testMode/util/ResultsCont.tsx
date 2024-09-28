import React, { useRef, useEffect } from "react";

export function ResultsCont({ children }: React.PropsWithChildren) {
    return (
        <div>
            {children}
        </div>
    );
}

export function ResultBar({ children }: React.PropsWithChildren) {
    return (
        <div>
            {children}
        </div>
    );
}

export function PracticeBtn({ onClick }: { onClick: () => void }) {
    const redoButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        function keydown(e: KeyboardEvent) {
            if (e.key == "Enter") {
                redoButtonRef.current?.click();
                e.preventDefault();
            }
        }

        document.body.addEventListener("keydown", keydown);
        return () => document.body.removeEventListener("keydown", keydown);
    }, []);

    return (
        <button onClick={onClick} ref={redoButtonRef}>Practice Wrong (Enter)</button>
    );
}

export function RestartBtn({ onClick }: { onClick: () => void }) {
    const restartButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        function keydown(e: KeyboardEvent) {
            if (e.key == "Tab") {
                restartButtonRef.current?.click();
                e.preventDefault();
            }
        }

        document.body.addEventListener("keydown", keydown);
        return () => document.body.removeEventListener("keydown", keydown);
    }, []);


    return (
        <button onClick={onClick} ref={restartButtonRef}>Restart (Tab)</button>
    );
}