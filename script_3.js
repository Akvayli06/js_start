
let number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

for(let i = 1; i <= number; i++){
    let etage = '';
    for (let j = 0; j <= number - i; j++) {
        etage += ' ';
    }
    for (let j = 1; j <= i; j++) {
        etage += '#';
    }
console.log(etage);
}

