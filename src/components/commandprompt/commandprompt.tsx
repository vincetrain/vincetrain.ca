import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

interface CommandPromptProps {
    command: string;
    output?: string;
    enterDelay?: number;
    cps: number;
    actionStage?: string;
    currentStage?: string;
}

export default function CommandPrompt({command, output, enterDelay, cps}: CommandPromptProps) {
    const previouslyRendered = useRef(false);
    const currentText = useRef('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shouldShowOutput, showOutput] = useState(false);
    useEffect(() => {
        if (currentIndex < command.length+1) {
            setTimeout(() => {setCurrentIndex(currentIndex+1)}, 1000/cps);
        }
        else {
            previouslyRendered.current = true;
            if (output != undefined) {
                setTimeout(() => {showOutput(true)}, (enterDelay||0)*1000)
            }
        }
        currentText.current = command.substring(0, currentIndex);
    }, [currentIndex]);

    useEffect(() => {
        if (!previouslyRendered.current) {
            setCurrentIndex(1);
        } else {
            setCurrentIndex(command.length);
        }
    }, []);

    const cursor_status = shouldShowOutput ? 'cursor--none' : (currentIndex < command.length ? 'cursor--typing' : 'cursor--idle');

    return(
        <div className={styles.container}>
            <p className={styles['text']}>
                <span className={styles['prompt']}>vincent@vincetrain.ca:~$ </span>
                {currentText.current}
                <span className={`${styles['cursor']} ${styles[cursor_status]}`}>_</span>
            </p>
            {shouldShowOutput ? 
                <p className={styles['text']}>{output}</p>
                :
                <></>
            }
        </div>
    );
}