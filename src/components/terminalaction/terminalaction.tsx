import { useState } from 'react';
import styles from './terminalaction.module.css'

import TerminalPrompt from './terminalprompt/terminalprompt';
import TerminalCommand from './terminalcommand/terminalcommand';
import TerminalOutput from './terminaloutput/terminaloutput';
import { OutputItem } from './interfaces';

interface TerminalActionProps {
    username: string;
    hostname: string;
    directory?: string;
    command: string;
    commandDelay?: number;
    cps: number;
    output?: OutputItem[];
    clickableActions?: (() => void)[]
    outputDelay?: number;
}

export default function TerminalAction({username, hostname, directory, command, commandDelay, cps, output, outputDelay, clickableActions}: TerminalActionProps) {
    const [showOutput, setShowOutput] = useState(false); 
    let outputContents;

    if (output) {
        outputContents = <TerminalOutput output={output} clickableActions={clickableActions} />;
    }

    return (
        <div className={styles.container}>
            <TerminalPrompt username={username} hostname={hostname} directory={directory} />
            <TerminalCommand command={command} commandDelay={commandDelay||undefined} cps={cps} outputDelay={outputDelay} outputState={setShowOutput}/>
            <br />
            {outputContents ? (showOutput ? outputContents : <></>) : <></>}
        </div>
    );
}