function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];

	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo Electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar sesión";
}

translate();



function imprimir(){
	var resultado = document.getElementById("resultado");
	var email = document.getElementById("inputEmail").value;
	var password = document.getElementById("inputPassword").value;

	resultado.innerHTML = "<table> <tr> <td> <h3>Datos de formulario</h3> </td> </tr>" + " <tr> <td> <b> El correo electrónico ingresado es: </b> </td> </tr>" + "<tr> <td>" + email + "</td> </tr>" + 
						  "<tr> <td> <b> La clave ingresada es: </b> </td> </tr>" + "<tr> <td> " + password + "</td> "+ "</tr> </table>";
	
}