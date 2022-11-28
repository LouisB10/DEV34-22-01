
/*
var nom = 'bousquet';
var prenom = 'louis';
console.log(nom + prenom);
*/


/*
var ee = '2';
var pe = '6';
console.log(ee * pe, ee + pe, pe / ee);
*/


/*
alert("azdjz");
confirm("cocher la case");
*/


/*
confirm("bonjour");
let userConfirmation = confirm("etes vous sur ?");
console.log(userConfirmation);
if(userConfirmation){
    alert("confirmer")
}
else {
    alert("annuler")
}
*/


/*
let out = prompt("Etes vous majeur ?");
if(out == "Oui"){
    alert("Vous pouvez entrer sur le site");
}
else if (out == "Non"){
    alert("Veuillez quitter le site");
}
*/

/*
function blaze(nom){
    console.log("le plus fort developpeur c'est", nom);
}
console.log(blaze("jeremy"));
*/

/*
let age = parseInt(prompt("quel age as-tu ?"));
function year(age){
    alert(`L'utilisateur aura bientot ${age+1} ans`)
}
year(age);
*/


/*
function imc(){
    let poids = parseInt(prompt("Quel poids faites-vous en kilogramme ?"))
    let taille = parseInt(prompt("Quelle taille faites-vous en centimètre ?"))
    taille = taille/100
    let imc = poids / (taille * taille)
    return imc.toFixed(1)
}

alert(`Votre imc est de ${imc()}`)
*/

/*
function timeOfDay(heure) {
    if (heure >= 0 && heure < 24) {
      if (heure < 12) {
        console.log("c'est le matin");
      } else if (heure < 18) {
        console.log("c'est l'après-midi");
      } else {
        console.log("c'est la soirée");
      }
    } else {
      console.log("rentrez une heure valable !");
    }
  }  
  timeOfDay();
*/

/*
let genre = prompt("Quel est votre prénom ?")
    switch (genre) {
        case "Thomas":
        case "Léo":
        case "Julien":
          alert("Vous etes un garçon");
          break;
        case "Julie":
        case "Andrea":
        case "Laura":
          alert("Vous etes une fille");
          break;
        default:
          alert("Invalide ou Prénom non reconnu");
      }
    age = prompt("Quel âge as tu ?");
    age >= 18 ? console.log("tu es majeur") : console.log("tu es mineur");
*/

/*
function nom(){
  let blaze = prompt("Quel est votre prénom ?")
  do{
    alert("Veuillez saisir un prénom");
    prompt("Quel est votre prénom ?");
  } while (blaze == 0);
}
nom();
*/


/*
try {
  let sort = prompt(
    "Choisissez un nouveau sort parmis les suivant : boule de feu - trait de glace - chaine d'éclair"
  );
  let degat;
  switch (sort) {
    case "boule de feu":
      degat = 40;
      break;
    case "trait de glace":
      degat = 35;
      break;
    case "chaine d'éclair":
      degat = 25;
      break;
    default:
      throw new Error("Les autres sorts ne sont pas de votre niveau");
  }
  alert(
    "Félicitation vous avez choisis " +
      sort +
      " qui fait " +
      degat +
      " dégats. "
  );
} catch (error) {
  alert(error);
}
*/


function nombre1(){
  let nb1 = prompt("Veuillez choisir un 1er nombre");
  nb1 = +nb1;
  if(nb1 != +nb1){
    alert("erreur");
    nombre1();
  } 
  else{
    confirm(`Votre 1er nombre est ${nb1}`);
    return nb1
  }
}
function nombre2(){
  let nb2 = prompt("Veuillez choisir un 2eme nombre");
  nb2 = +nb2;
  if(nb2 != +nb2){
    alert("erreur");
    nombre2();
  } 
  else{
    confirm(`Votre 2eme nombre est ${nb2}`);
    return nb2
  }
}
function add(nb1,nb2){
  console.log(nb1, nb2)
    var resultat =  nb1 + nb2;
    alert(`Résultat: ${resultat}`)
}
function sous(nb1,nb2){
  var resultat = nb1 - nb2;
  alert(`Résultat: ${resultat}`)
}
function mul(nb1, nb2){
  var resultat = nb1 * nb2;
  alert(`Résultat: ${resultat}`)
}

function divide(nb1, nb2){
  var resultat = nb1 / nb2;
  alert(`Résultat: ${resultat}`)
}
function choix(){
  let calculette = prompt(
    "Choisissez un type de calcul parmis les suivants : 1/addition - 2/soustraction - 3/multiplication - 4/division"
  );
  calculette= +calculette;
  if(calculette ===1 || calculette ===2 || calculette ===3 || calculette ===4){
    if(calculette === 1){
     add(nombre1(), nombre2());
    }
      
    else if(calculette ===2){
      sous(nombre1(), nombre2());
    }
    else if(calculette ===3){
      mul(nombre1(), nombre2());
    }
    else if(calculette ===4){
      divide(nombre1(), nombre2());
    }
  }
  else{
    alert("Erreur veuillez réessayer");
    choix();
  }
}
choix();



