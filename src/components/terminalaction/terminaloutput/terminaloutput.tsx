import styles from './terminaloutput.module.css';

interface OutputItem {
    text: string;
    type: 'text'|'directory'|'executable';
    clickable: boolean;
}

interface TerminalOutputProps {
    output: OutputItem[];
    clickableActions?: (()=>void)[]
}

export default function TerminalOutput({output, clickableActions}: TerminalOutputProps) {
    let currentClickableIndex = 0;

    const outputMap = output.map((item, index) => {
        let onClickAction;
        if (clickableActions && item.clickable == true) {
            onClickAction = clickableActions[currentClickableIndex];
            currentClickableIndex++;
        }
        return (
            <li className={`${styles['item'], styles[`item--${item.type}`]} ${onClickAction ? styles['item--clickable'] : ''}`} onClick={onClickAction||undefined} key={index}>
                {item.text}
            </li>
        );
    });
    
    return (
        <ul className={styles.container}>
            {outputMap}
        </ul>
    );
}