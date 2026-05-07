import { type calc, calculette } from "./class_calc.js";
import { type master, mastermind } from "./class_mastermind.js";

const ecranHtmlcalc = document.getElementById("ecran-calc") as HTMLInputElement;
const boutonsHtmlcalc = document.querySelectorAll(
    ".btn-calc",
) as NodeListOf<HTMLButtonElement>;

const ecranHtmlmm = document.getElementById(
    "ecran-mastermind",
) as HTMLInputElement;
const boutonsHtmlmm = document.querySelectorAll(
    ".btn-mm",
) as NodeListOf<HTMLButtonElement>;
const historiqueHtmlmm = document.getElementById(
    "historique-mm",
) as HTMLDivElement;

const maCalculette = new calculette({
    ecran: ecranHtmlcalc,
    button: boutonsHtmlcalc,
});

maCalculette.init();

const partieMastermind = new mastermind(
    {
        ecran: ecranHtmlmm,
        button: boutonsHtmlmm,
        historique: historiqueHtmlmm,
    },
    false,
);

partieMastermind.init();
