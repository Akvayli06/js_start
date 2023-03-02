
let resultat = prompt("De quel nombre veux-tu calculer la factorielle ?");
const num = resultat;

  for(let i = 1; i <= num; i++){
    resultat *= i;
  }

console.log("le resultat est : " + resultat);