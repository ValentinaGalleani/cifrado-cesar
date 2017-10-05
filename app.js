function texto(principal){
	do{
		/*Se crea una variable para preguntar al usuario con prompt
		¿que es lo que se quiere hacer? */
		var question = prompt("¿Qué quieres hacer, 1)Cipher o 2)Decipher?"); //
		if(question != ""){ //si question no es igual a un string vacio, se generará una nueva condición
			if(question == "1"){ //si question es igual a 1 se cumple la primera funcíon por lo tanto me retorna cipher...
				var cifrar = prompt("Escriba el texto que desea cifrar")
				Cipher("cifrar"); 
			} else if (question === "2") { /*si no se cumple la primera función, utilizaremos una segunda función (else if), 
				que es igual a 2, entonces me retornaría decipher...*/
				var decifrar = prompt("Escriba el texto que desea descifrar")
				Decipher("decifrar");
			} else { /* y si no se cumplen las primeras dos funciones, por medio de un else me retornaría la alerta
				"ingrese el texto nuevamente"...*/
				alert("Ingrese el texto nuevamente");
			}
		}/* while sirve para ejecutar la funcion por lo tanto si mi pregunta es igual a un string vacío */
	} while (question == "" || (question == "1" && question == "2"));
}




































function cipher(text, shift=33){ //Aplicaremos la función Cipher
	var retVal="";
	for (var v of text) {
		var c=v.charCodeAt(0)+shift;
		retVal+=String.fromCharCode( (c%26)+65);
	}
	return retVal;
}

function decipher(text, shift=33){
	var retVal="";
	for (var v of text) {
		var c=v.charCodeAt(0)-shift;
		retVal+=String.fromCharCode( (c%26)+65);
	}
	return retVal;
}

console.log(cipher("ABC")+" - "+decipher("UVW"));