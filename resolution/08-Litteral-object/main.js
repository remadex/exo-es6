/**
 * Ecrire un objet qui contient une clé "nbr" avec un nombre aléatoire entre 1 et 10000.
 * Dans ce même objet, ajouter une clé "random" qui sera une fonction qui retourne le nombre aléatoire.
 * Toujours dans ce même objet, ajouter une clé "notRandom" qui sera une fonction qui retourne le nombre 12
 * 
 * Ecrire une fonction qui prendra comme paramètre le nom de la fonction qu'on souhaite récupérer
 * generateNumber("random");
 * generateNumber("notRandom");
 */

const lottery = {
  nbr: Math.round(Math.random() * 10000),
  random() {
    return this.nbr;
  },
  notRandom() {
    return 12;
  }
}

const generateNumber = (name) => {
  return lottery[name]();
} 

console.log(generateNumber("random"));
console.log(generateNumber("notRandom"));