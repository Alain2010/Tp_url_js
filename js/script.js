// let nomValue = document.getElementById('#prenom').value 
// let prenomValue = document.getElementById('#Nom').value 
// let ageValue = document.getElementById('#age').value

// urlValue = window.location.search
// console.log(urlValue);
// a = urlValue.split('&');
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// b = a[0]
// console.log(b.split('='));
// console.log(b[0]);

// let dataValue = window.location.search
// console.log(dataValue);
let urlValue = new URLSearchParams(window.location.search);
console.log(urlValue);
console.log(typeof(urlValue));
// let aObjet = {
//     nom: "alain",
//     prenom: "beya"
// }
const prenom = urlValue.get('Prenom')
console.log(prenom);
const nom = urlValue.get('Nom')
console.log(nom);
const age = urlValue.get('age')
console.log(age);


