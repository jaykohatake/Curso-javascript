/*=============================================
	CONDICIONES
=============================================*/


var a = 15;
var b = 10;

if(a > b){
	console.log("a es mayor que b");
}

else if (a == b ){
	console.log("a es lo mismo que b")
}

else{
	console.log("a no es lo mismo que b y a es menor que b")
}

/*=============================================
=            Cambios            =
=============================================*/

var dia = "lunes";
switch(dia){
	case "sabado":
		console.log("voy a estudiar php");
		break;

	case "martes":
		console.log("voy a estudiar java");
		break;

	case "jueves":
		console.log("voy a estudiar C");
		break;

	case "lunes":
		console.log("no voy a estudiar");
		break;	

	default: console.log("voy a jugar lol");

}

