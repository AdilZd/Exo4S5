// *** Exo 1 Switch ***
//     -  Stockez dans une variable, via un prompt, un jour de la semaine.

//     -  À l'aide d'un switch, affichez ce que vous avez planifié de faire ce jour-ci. 
//         - Ex:  On est lundi. Tu as cours  à MolenGeek et tu as sport en soirée.

//  *** Exo 2 Switch ***
//     - Déclarer une variable qui prendra comme valeur un type de météo

//     - À l'aide d'un switch, affichez une réaction appropriée au temps
//         -  Ex: Il pleut. Je prend un parapluie

// *** Exo 3 Switch ***
//     - Déclarez une variable dont la valeur sera donnée par l'utilisateur.

//     -  Faites un switch, si la variable donnée est divisible par 2, faite une alert qui renvoit "Le nombre est un multiple de 2" sinon "Le nombre n'est pas un multiple de 2" ou encore si l'utilisateur n'a pas rentré un nombre "Ceci n'est pas un nombre"

// *** Exo 4 Switch ***
//     -  Déclarez trois variables que l'utilisateur remplira : nbr1 / operateur(+-/*) / nbr2;

//     -   Faite switch qui en fonction de l'opérateur donné, effectuera le calcul avec cet opérateur et afficher le résultat.

//         -  Ex:nbr1 = 1 | operateur = "+" | nbr2 = 3  => affichera 4


let jour = prompt("Entrez le jour de la semaine :");

switch (jour) {

    case "lundi":
    console.log("Tu as foot.");
    break;

    case "Mardi":
        console.log("Nous sommes Mardi j'ai piano");
        break;

    case "Mercredi":
    console.log("Tu as rien.");
        break;

    case "Jeudi":
        console.log("Tu as la fete");
        break;

    case "Vendredi":
        console.log("Tu es au max");
        break;

    case "Samedi":
        console.log("Tu dors");
        break;

    case "Dimanche":
        console.log("Tu joues");
        break;
    
}