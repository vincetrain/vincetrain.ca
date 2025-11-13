import styles from './styles.module.css';

interface TerminalPromptProps {
    username: string;
    hostname: string;
    directory?: string;
    shellsymbol?: string;
}

export default function TerminalPrompt({username, hostname, directory, shellsymbol}: TerminalPromptProps) {
    return (
        <p className={styles.container}>
            <span className={styles['username']}>{username}</span>
            <span className={styles['delimiter']}>@</span>
            <span className={styles['hostname']}>{hostname}</span>
            <span className={styles['separator']}>:</span>
            <span className={styles['directory']}>{directory||'~'}</span>
            <span className={styles['shellsymbol']}>{shellsymbol||'#'}</span>
        </p>
    );
}