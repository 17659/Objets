var objet1 = new Object;
objet1.couleur = "rouge";
objet1.taille = 100;

objet1.afficherCouleur = function() {
  alert(objet1.couleur);
};

objet1.afficherCouleur()
//document.write("La couleur de cet objet est " + objet1.couleur);//

objet1.couleur = "vert";



voiture1 = new Object;

voiture1.masse = 1200;
voiture1.vitesse = 22;
voiture1.marque = "Ford";
voiture1.modele = "Mustang1967";

voiture1.calculerEnergieCinetique = function() {
  if (voiture1.masse <= 0) {
    return false;
  }

  else {
    return 0.5 * voiture1.masse * (voiture1.vitesse ** 2);
  }
};

alert(voiture1.calculerEnergieCinetique());

voiture1.masse = 1600;

alert(voiture1.calculerEnergieCinetique());
