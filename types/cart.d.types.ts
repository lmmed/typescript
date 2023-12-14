export type CartTypes = {
    addLine (ref: string, ste: number): void;
    deleteLine(ref: string): void;
    emptyCart():void;
    commandLine(ref: string): void;
    editLine(ref:string, qty: number): void;
}