// Lógica de Programação DIO

let name = "Ronron";
let xp = 5000;
let nivel = "";

if(xp <= 1000){
	nivel = "ferro";
} else if (xp > 1000 && xp <=2000){
	nivel = "bronze";
} else if (xp > 2000 && xp <= 5000){
	nivel = "prata";
} else if (xp > 5000 && xp <= 7000){
	nivel = "ouro";
} else if (xp > 7000 && xp <= 8000){
	nivel = "platina";
} else if (xp > 8000 && xp <= 9000){
	nivel = "ascendente";
} else if (xp > 9000 && xp <= 10000){
	nivel = "imortal";    
} else if (xp > 10000){
	nivel = "radiante";    
}

console.log("O Herói de nome " + name + " está no nível " + nivel + ".");