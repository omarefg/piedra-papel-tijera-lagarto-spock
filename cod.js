function opcion(humano){

var nombre=["Piedra","Papel","Tijera","Lagarto","Spock"];

var resultado_texto=["Spock rompe tijera, ganas","Spock rompe tijera, pierdes","Tijera corta papel, ganas","Tijera 

corta papel, pierdes","Papel envuelve piedra, ganas","Papel envuelve piedra, pierdes","Piedra aplasta a lagarto, 

ganas","Piedra aplasta a lagarto, pierdes","Lagarto envenena a Spock, ganas","Lagarto envenena a Spock, 

pierdes","Spock vaporiza a piedra, ganas","Spock vaporiza a piedra, pierdes","Piedra aplasta a tijera, ganas","Piedra 

aplasta a tijera, pierdes","Tijera decapita a lagarto, ganas","Tijera decapita a lagarto, pierdes","Lagarto devora papel, 

ganas","Lagarto devora papel, pierdes","Papel desautoriza a Spock, ganas","Papel desautoriza a Spock, pierdes","No 

pasa nada, empate"];

var jugada=[
	[20,4,13,7,10],
	[5,20,2,16,19],
	[12,3,20,15,0],
	[6,17,14,20,9],
	[11,18,1,8,20]
	
];

var cpu=Math.floor(Math.random()*5);

var resultado=jugada[cpu][humano];

console.log("HUMANO : "+nombre[humano]);
console.log("MÁQUINA: "+nombre[cpu]);
console.log("RESULTADO: "+resultado_texto[resultado]);
}
