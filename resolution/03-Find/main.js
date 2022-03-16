/**
 * Ecrire une fonction qui aurait comme paramètre un nom et retrouver l'utilisateur dans le tableau d'objet.
 * Afficher le message suivant dans le cas où l'utilisateur est trouvé:
 * "L'utilisateur "amaury" est présent et possède l'ID .."
 * Dans le cas où aucun utilisateur a été trouvé, afficher le message suivant:
 * "Aucun utilisateur a été retrouvé"
 */

let users = [
  { id: 1, name: "gilles" },
  { id: 2, name: "joelle" },
  { id: 3, name: "sébastien" },
  { id: 4, name: "stéphane" },
  { id: 5, name: "amaury" },
  { id: 6, name: "romain" },
];

const findUser = (name) => {
  return users.find(u => u.name.toLowerCase() === name.toLowerCase());
}

const user = findUser('romain');

if(user) {
  console.log(`L'utilisateur ${user.name} est présent et possède l'ID ${user.id}`)
} else {
  console.log("Aucun utilisateur a été retrouvé");
}