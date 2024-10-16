function peutVoter(age, nationalite) {
    if (age >= 18 && nationalite == "française") {
    result = "Eligible";
     }
    else {
      result = "Non Eligible";
    }
    return result;
  }
  console.log(peutVoter(20, "française")); // Résultat attendu : "Éligible"
  console.log(peutVoter(16, "française")); // Résultat attendu : "Non éligible"
  console.log(peutVoter(20, "espagnole")); // Résultat attendu : "Non éligible"