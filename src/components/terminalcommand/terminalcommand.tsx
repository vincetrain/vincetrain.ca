import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import TerminalPrompt from '../terminalprompt/terminalprompt';

interface TerminalCommand {
    command: string;
    commandDelay?: number;
    cps: number;
}

export default function TerminalCommand({command, commandDelay, cps}: TerminalCommand) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cursorStatus, setCursorStatus] = useState<'cursor--typing'|'cursor--idle'|'cursor--none'>('cursor--idle');

    function typeNextCharacter() {
        if (currentIndex < command.length+1) {
            setCursorStatus('cursor--typing');
            setTimeout(() => {setCurrentIndex(currentIndex => currentIndex+1)}, 1000/cps);
        }
        else {
            setCursorStatus('cursor--idle');
        }
    }

    useEffect(() => {
        setTimeout(() => {typeNextCharacter()}, currentIndex == 0 ? (commandDelay||0) * 1000 : 0)
    }, [currentIndex]);

    const typed = command.substring(0, currentIndex)

    return(
        <p className={styles.container}>
            {typed}
            <span className={`${styles['cursor']} ${styles[cursorStatus]}`}>_</span>
        </p>
    );
}