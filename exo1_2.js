let number = prompt("Entrer un nombre");
number = number ** 2;

if (number >= 2 ** 8 && number <= 2 ** 10) {
  console.log(number);
} else {
  console.log ("Autre");
}