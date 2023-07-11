let tab = []

function addToTab(){

	let valeurSaisie = document.getElementById("input");
	if(valeurSaisie.value != ''){
		tab.push(valeurSaisie.value)
		tab = tab.map(num => parseFloat(num))
		valeurSaisie.value = ''
		document.getElementById('tableau').innerText = tab + " ";
	}else{
		alert('Veuillez saisir un nombre!')
	}
}

function calculMoyenne(){

	let somme = tab.reduce((accumulateur, add) => accumulateur + add,0);

	let moyenne = 0;
	moyenne = somme / tab.length;

	document.getElementById("laSomme").innerText = "La somme des éléments du tableau est: " + somme;
	document.getElementById("laTaille").innerText = "Le tableau a une taille de: " + tab.length;
	document.getElementById("calcul").innerText = "Moyenne: " + somme + " : " + tab.length + " = " + moyenne;
}
