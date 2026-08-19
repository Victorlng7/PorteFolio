export class mastermind {
    constructor(element, difficile) {
        this._difficile = false;
        this._solution = "";
        this._saisieCourante = "";
        this._difficile = difficile;
        this._element = element;
        this._solution = this.jeuInit();
    }
    get element() {
        return this._element;
    }
    init() {
        this._element.button.forEach((bouton) => {
            bouton.addEventListener("click", () => {
                const valeur = bouton.innerText;
                switch (valeur) {
                    case "Difficulté":
                        if (this._difficile)
                            this._difficile = false;
                        else
                            this._difficile = true;
                        break;
                    case "C":
                        this._saisieCourante = "";
                        this.actualiserEcran();
                        break;
                    case "<-":
                        this._saisieCourante = this._saisieCourante.slice(0, -1);
                        this.actualiserEcran();
                        break;
                    case "Reset":
                        this._solution = this.jeuInit();
                        this._saisieCourante = "";
                        this._element.historique.innerHTML = "";
                        this.actualiserEcran();
                        break;
                    case "Valider":
                        if (this._saisieCourante.length === 4) {
                            this.verifierM();
                        }
                        break;
                    default:
                        if (this._saisieCourante.length < 4) {
                            this._saisieCourante += valeur;
                            this.actualiserEcran();
                        }
                        break;
                }
            });
        });
    }
    jeuInit() {
        let chaineAtrouver = new Array();
        const voyelles = ["A", "E", "I", "O", "U", "Y"];
        while (chaineAtrouver.length < 4) {
            let indexAleatoire = Math.floor(Math.random() * 6);
            let lettreTiree = voyelles[indexAleatoire];
            if (chaineAtrouver.indexOf(lettreTiree) === -1) {
                chaineAtrouver.push(lettreTiree);
            }
        }
        return chaineAtrouver.join("");
    }
    verifierM() {
        switch (this._difficile) {
            case true:
                this.verifier2();
                break;
            case false:
                this.verifier1();
                break;
        }
    }
    verifier1() {
        let ligneHtml = `<div class="ligne-essai">`;
        ligneHtml += `<span>${this._saisieCourante}</span> <span class="indices">-></span> `;
        for (let i = 0; i < 4; i++) {
            const lettre = this._saisieCourante[i];
            if (this._solution[i] === this._saisieCourante[i]) {
                ligneHtml += `<span class="lettre-bp">${lettre}</span>`;
            }
            else if (lettre && this._solution.includes(lettre)) {
                ligneHtml += `<span class="lettre-mp">${lettre}</span>`;
            }
            else {
                ligneHtml += `<span class="lettre-inc">${lettre}</span>`;
            }
        }
        ligneHtml += `</div>`;
        this._element.historique.innerHTML += ligneHtml;
        if (this._saisieCourante === this._solution) {
            setTimeout(() => alert("Bravo ! Vous avez trouvé la suite '" +
                this._solution +
                "' !"), 10);
        }
        this._saisieCourante = "";
        this.actualiserEcran();
    }
    verifier2() {
        let ligneHtml = `<div class="ligne-essai">`;
        ligneHtml += `<span>${this._saisieCourante}</span> <span class="indices">-></span> `;
        let bp = 0;
        let mp = 0;
        let inc = 0;
        for (let i = 0; i < 4; i++) {
            const lettre = this._saisieCourante[i];
            if (this._solution[i] === this._saisieCourante[i]) {
                bp++;
            }
            else if (lettre && this._solution.includes(lettre)) {
                mp++;
            }
            else
                inc++;
        }
        for (let i = 0; i < bp; i++)
            ligneHtml += '<span class="lettre-bp"></span>';
        for (let i = 0; i < mp; i++)
            ligneHtml += '<span class="lettre-mp"></span>';
        for (let i = 0; i < inc; i++)
            ligneHtml += '<span class="lettre-inc"></span>';
        ligneHtml += `</div>`;
        this._element.historique.innerHTML += ligneHtml;
        if (this._saisieCourante === this._solution) {
            setTimeout(() => alert("Bravo ! Vous avez trouvé la suite '" +
                this._solution +
                "' !"), 10);
        }
        this._saisieCourante = "";
        this.actualiserEcran();
    }
    actualiserEcran() {
        this._element.ecran.innerText = this._saisieCourante;
    }
}
//# sourceMappingURL=class_mastermind.js.map