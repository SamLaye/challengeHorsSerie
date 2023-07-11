let tab = []

let message = true;

while(message == true){
	message = confirm("Voulez vous ajouter un entier au tableau? ");
	if(message == true){
		let valeur = prompt("Ajouter un élément au tableau: "); 

		tab.push(valeur)
	}
	tab = tab.map(num => parseInt(num))
} 

function calculMoyenne(){

	let somme = tab.reduce((accumulateur, add) => accumulateur + add,0);

	let moyenne = 0;
	moyenne = somme / tab.length;

	document.getElementById("calcul").innerText = somme + " : " + tab.length + " = " + moyenne;

	// document.write(moyenne);
}
