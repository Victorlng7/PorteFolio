export type calc = {
    ecran : HTMLInputElement
    button : NodeListOf<HTMLButtonElement>
}

export class calculette{
    private _element : calc

    private _saisieCourante: string = ""; 
    private _premierNombre: number | null = null;
    private _operateur: string = "";


    constructor(element:calc){
        this._element=element
    }
    get element() {return this._element}

    init():void{
        this._element.button.forEach((bouton) => {
            
            bouton.addEventListener('click', () => {
                
                const valeur = bouton.innerText; 
                
                switch(valeur){
                    case "C":
                        this._saisieCourante = "";
                        this._premierNombre = null;
                        this._operateur = "";
                        this.actualiserEcran();
                        break;
                    case "<-":
                        this._saisieCourante = this._saisieCourante.slice(0, -1);
                        this.actualiserEcran();
                        break;
                    case ".":
                        if (this._saisieCourante === "") {
                            this._saisieCourante = "0.";
                        } 
                        else if (!this._saisieCourante.includes(".")) {
                            this._saisieCourante += ".";
                        }
                        this.actualiserEcran();
                        break;
                    case "=":
                        if (this._premierNombre !== null && this._saisieCourante !== "") {
                            const resultat = this.calculer(this._premierNombre, this._saisieCourante, this._operateur);
                            
                            this._saisieCourante = resultat.toString();
                            this.actualiserEcran();
                            
                            this._premierNombre = null; 
                            this._operateur = "";
                        }
                        break;
                    case "+":
                    case "-":
                    case "x":
                    case "/":
                        if (this._saisieCourante !== "") {
                            this._premierNombre = Number(this._saisieCourante);
                            this._operateur = valeur;
                            this._saisieCourante = "";
                        }
                        break;
                    default :
                        this._saisieCourante+=valeur
                        this.actualiserEcran()
                        break
                }
                
            });
        });
    }

    calculer(nb1:number,nb2:string,op:string):number{
        let res:number = 1
        let nb3=Number(nb2)

        switch(op){
            case "+":
                res=nb1+nb3
                break
            case "-":
                res=nb1-nb3
                break
            case "x":
                res=nb1*nb3
                break
            case "/":
                if (nb3 === 0) {
                    alert("Erreur (division par 0 impossible)");
                    res = 0;
                } else {
                    res = nb1 / nb3;
                }
                break;
        }

        return res
    }

    private actualiserEcran():void{
        this._element.ecran.value = this._saisieCourante
    }
}