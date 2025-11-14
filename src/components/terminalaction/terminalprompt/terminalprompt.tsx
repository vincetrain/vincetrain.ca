import styles from './terminalprompt.module.css';

interface TerminalPromptProps {
    username: string;
    hostname: string;
    separator?: string;
    directory?: string;
    shellsymbol?: string;
}

export default function TerminalPrompt({username, hostname, separator, directory, shellsymbol}: TerminalPromptProps) {
    return (
        <p className={styles.container}>
            <span className={styles['username']}>{username}</span>
            <span className={styles['delimiter']}>@</span>
            <span className={styles['hostname']}>{hostname}</span>
            <span className={styles['separator']}>{separator||':'}</span>
            <span className={styles['directory']}>{directory||'~'}</span>
            <span className={styles['shellsymbol']}>{(shellsymbol||'$') + ' '}</span>
        </p>
    );
}