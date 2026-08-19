export type calc = {
    ecran: HTMLInputElement;
    button: NodeListOf<HTMLButtonElement>;
};
export declare class calculette {
    private _element;
    private _saisieCourante;
    private _premierNombre;
    private _operateur;
    constructor(element: calc);
    get element(): calc;
    init(): void;
    calculer(nb1: number, nb2: string, op: string): number;
    private actualiserEcran;
}
//# sourceMappingURL=class_calc.d.ts.map