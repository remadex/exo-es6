/**
 * Créer un tableau sur base d'un tableau d'objet qui nous retourne l'aire de chaque élément
 * Ensuite afficher un message dans le cas où il y a au moins une valeur qui dépasse 1000
 * "L'aire d'au moins un rectangle dépasse 1000"
 */

const rectangle = [
  {
    largeur: 28,
    longueur: 35,
  },
  {
    largeur: 45,
    longueur: 23,
  },
  {
    largeur: 88,
    longueur: 2,
  },
  {
    largeur: 10,
    longueur: 10,
  },
]

const airayRectangle = rectangle.map(r => r.largeur * r.longueur);
if(airayRectangle.some(r => r > 1000)) {
  console.log("L'aire d'au moins un rectangle dépasse 1000");
}