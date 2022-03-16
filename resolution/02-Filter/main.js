/**
 * Créer une fonction qui prend trois paramètres:
 * - Le tableau d'objet
 * - la propriété de l'objet
 * - la valeur
 * La fonction devra filtrer le tableau d'objet sur base de la propriété (paramètre) dans l'objet et la valeur(paramètre) qu'elle doit contenir
 * Exemple: filterArrayByObjectProperties(products, 'type', 'fruit')
 * Nous retournera un tableau avec uniquement des fruits
 */

 const products = [
  { name: 'banana', type: 'fruit' },
  { name: 'cucumber', type: 'vegetable' },
  { name: 'orange', type: 'fruit' },
  { name: 'celery', type: 'vegetable' },
  { name: 'horseradish', type: 'vegetable' },
];

const filterArrayByObjectProperties = (array, key, value) => {
  return array.filter(el => el[key] === value);
}

console.log(filterArrayByObjectProperties(products, 'type', 'fruit'));