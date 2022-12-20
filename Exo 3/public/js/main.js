// *** Exo 3 Switch ***
//     - Déclarez une variable dont la valeur sera donnée par l'utilisateur.

//     -  Faites un switch, si la variable donnée est divisible par 2, 
//     faite une alert qui renvoit "Le nombre est un multiple de 2" 
//     sinon "Le nombre n'est pas un multiple de 2" ou encore si l'utilisateur 
//     n'a pas rentré un nombre "Ceci n'est pas un nombre"

let valeur = prompt(` Quelle est la valeur ? `)

switch (true) {
    case valeur % 2 == 0:
        alert("Le nombre est un multiple de 2");
        break;
    case valeur % 2 == 1:
        alert(`Le nombre est un pas multiple de deux `);
        break;
    default:
        alert(`Ceci n'est pas un nombre`);
        break;
}