export type master = {
    ecran: HTMLElement;
    button: NodeListOf<HTMLButtonElement>;
    historique: HTMLElement;
};
export declare class mastermind {
    private _element;
    private _difficile;
    private _solution;
    private _saisieCourante;
    constructor(element: master, difficile: boolean);
    get element(): master;
    init(): void;
    private jeuInit;
    private verifierM;
    private verifier1;
    private verifier2;
    private actualiserEcran;
}
//# sourceMappingURL=class_mastermind.d.ts.map