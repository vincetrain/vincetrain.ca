import { useEffect, useState } from 'react';
import styles from './terminalcommand.module.css';

interface TerminalCommand {
    command: string;
    commandDelay?: number;
    cps: number;
    outputDelay?: number;
    outputState?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TerminalCommand({command, commandDelay, cps, outputDelay, outputState}: TerminalCommand) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cursorStatus, setCursorStatus] = useState<'typing'|'idle'|'none'>('idle');

    function typeNextCharacter() {
        if (currentIndex < command.length+1) {
            setCursorStatus('typing');
            setTimeout(() => {setCurrentIndex(currentIndex => currentIndex+1)}, 1000/cps);
        }
        else {
            setCursorStatus('idle');
            if (outputState) {
                setTimeout(async () => {
                    setCursorStatus('none');
                    outputState(true);
                }, (outputDelay||0)*1000);
            }
        }
    }

    useEffect(() => {
        setTimeout(() => {typeNextCharacter()}, currentIndex == 0 ? (commandDelay||0) * 1000 : 0)
    }, [currentIndex]);

    const typed = command.substring(0, currentIndex)

    return(
        <p className={styles.container}>
            {typed}
            <span className={`${styles['cursor']} ${styles[`cursor--${cursorStatus}`]}`}>_</span>
        </p>
    );
}