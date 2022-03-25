/**
 * Dans cet exercice, vous allez créer un ensemble de modules qui seront des utilitaires.
 * Cet ensemble d'utilitaire devra se trouver dans un dossier 'utils'
 * Le premier utilitaire sera un utilitaire qui remplace chaque lettre "v"/"V" par "*"
 * Le deuxième utilitaire contiendra deux fonctions:
 *  - une fonction qui retourne le mois sur base d'une date
 *  - une fonction qui retourne le jour sur base d'une date
 * 
 * Ces deux utilitaires devront être appelés et testés dans le main.js
 */

import { getDay, getMonth } from "./utils/getDate.js";
import { replaceV } from "./utils/replaceLetter.js";


const s = "Ceci va vous étonner mais il n'y a rien de secret au Virus";
console.log(replaceV(s));

const today = new Date();
console.log(getDay(today));
console.log(getMonth(today));