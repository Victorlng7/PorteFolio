import { calculette } from "./class_calc.js";
import { mastermind } from "./class_mastermind.js";
const ecranHtmlcalc = document.getElementById("ecran-calc");
const boutonsHtmlcalc = document.querySelectorAll(".btn-calc");
const ecranHtmlmm = document.getElementById("ecran-mastermind");
const boutonsHtmlmm = document.querySelectorAll(".btn-mm");
const historiqueHtmlmm = document.getElementById("historique-mm");
const maCalculette = new calculette({
    ecran: ecranHtmlcalc,
    button: boutonsHtmlcalc,
});
maCalculette.init();
const partieMastermind = new mastermind({
    ecran: ecranHtmlmm,
    button: boutonsHtmlmm,
    historique: historiqueHtmlmm,
}, false);
partieMastermind.init();
//# sourceMappingURL=script.js.map