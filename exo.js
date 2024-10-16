function tarif(age) {
	if (age <= 5) {
		result = "Gratuit";
	} else if (age > 5 && age < 18) {
		result = "Reduit";
	} else {
		result = "Plein tarif";
	}
	return result;
}
console.log(tarif(3));
console.log(tarif(15));
console.log(tarif(25));
