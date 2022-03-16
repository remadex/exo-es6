/**
 * A l'aide de la déstructuration, créer 3 variables : menu (qui correspond au name), size, sauces
 */

const mcDo = {
  name: "CBO (Chicken Bacon Onions)",
  size: "large",
  sauces: ["frite", "andalouse"]
}

const { name: menu, size, sauces } = mcDo;

console.log(menu, size, sauces);