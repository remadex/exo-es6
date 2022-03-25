/**
 * Créer une fonction qui prend comme paramètre un nombre aléatoire entre 1 et 1000 (généré en js).
 * Cette fonction retournera une promesse
 * La promesse retournera un reject avec un petit message dans le cas où le nombre aléatoire est compris entre 200 et 420 inclus.
 * Dans l'autre cas, attendez 2000ms pour resolve la promesse avec le message suivant:
 * "Vous venez de gagner mon respect"
 */

const random = Math.round(Math.random() * 1000);

const randomRespect = (r) => {
  return new Promise((resolve, reject) => {
    if(r >= 200 && r <= 420) reject("Retente ta chance dans un autre pays")
    setTimeout(() => {
      resolve("Vous venez de gagner mon respect");
    }, 2000)
  })
}

randomRespect(random)
  .then(result => console.log(result))
  .catch(err => console.log(err));