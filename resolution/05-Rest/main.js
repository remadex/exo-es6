/**
 * Ecrire une fonction qui retourne un tableau avec les chiffres pairs qu'on reçoit en paramètre.
 * filterOdds(2, 132, 1024);
 * filterOdds(1, 2, 35, 88, 450, 999, 121212);
 */


const filterOdds = (...nums) => {
  return nums.filter(n => (n % 2) === 0);
}

console.log(filterOdds(1, 2, 35, 88, 450, 999, 121212));