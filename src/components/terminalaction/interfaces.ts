export interface FlowItem {
    username: string;
    hostname: string;
    directory?: string;
    command: string;
    output?: OutputItem[];
    "command-delay"?: number;
    "output-delay"?: number;
    cps: number;
}

export interface OutputItem {
    text: string;
    type: 'text'|'directory'|'executable';
    clickable: boolean;
}