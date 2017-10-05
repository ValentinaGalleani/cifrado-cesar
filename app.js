function texto(principal){
	do{
		/*Se crea una variable para preguntar al usuario con prompt
		¿que es lo que se quiere hacer? */
		var question = prompt("¿Qué quieres hacer, 1)Cipher o 2)Decipher?"); //
		if(question != ""){ //si question no es igual a un string vacio, se generará una nueva condición
			if(question == "1"){ //si question es igual a 1 se cumple la primera funcíon por lo tanto me retorna cipher...
				var string = prompt("Escriba el texto que desea cifrar")
				Cipher("string"); 
			} else if (question == "2"){ /*si no se cumple la primera función, utilizaremos una segunda función (else if), 
				que es igual a 2, entonces me retornaría decipher...*/
				var string = prompt("Escriba el texto que desea descifrar")
				Decipher("string");
			} else { /* y si no se cumplen las primeras dos funciones, por medio de un else me retornaría la alerta
				"ingrese el texto nuevamente"...*/
				alert("Ingrese el texto nuevamente");
			}
		}/* while sirve para ejecutar la funcion por lo tanto si mi pregunta es igual a un string vacío */
	} while (question == "" || (question == "1" && question == "2"));
}

function cipher(string){
   
       var cifrado = "";
       var ascii = 0;

       string = string.toUpperCase();

       for (var i=0; i<string.length; i++){
           ascii = string.charCodeAt(i);
           ascii = (ascii-65-7+26)+65;
           cifrado = cifrado + String.fromCharCode(ascii);
       }
           alert(cifrado);
       }
   
function decipher(string){

       var descifrado = "";
       var ascii = 0;

       string = string.toUpperCase();    

       for (var i=0; i<string.length; i++){
           ascii = string.charCodeAt(i);
           
           ascii = ((ascii-65-7+26)%26+65);
           descifrado = descifrado + String.fromCharCode(ascii);
       }
       string = string.toLowerCase();
       
           alert(descifrado);
}
principal2();


































