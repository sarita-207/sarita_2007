// Clase Usuario
class UsuarioFacebook {           
  constructor(usuario,contraseña) { //<TAREA - agregar con una coma contraseña> (usuario, contraseña)  
    this.usuario = usuario; //ejemplo de que a la clase UsuarioFacebook se le agrega un atributo usuario
    this.contraseña = contraseña
  }
}




//lista de usuarios
var users = [
  new UsuarioFacebook("usuario1", "contraseña1"),
  new UsuarioFacebook("usuario2", "contraseña2"),
  new UsuarioFacebook("juan", "123") //TAREA - Agregar Nuevo usuarios con usuario: juan y contraseña: 123
]; 




// Función para saber si el usuario existe
function validarCredenciales() {
  var username = document.getElementById("email").value; //obtener el valor del input con id="email"
  //TAREA - Agregar el valor del input con id="contraseña" a una variable llamada contraseña
  var contraseña = document.getElementById("contraseña").value;




  //una variable con valor false
  var usuarioValido = false;

  // Buscar el usuario en el JSON logica que veremos 
  for (var i = 0; i < users.length; i++) {
    if (users[i].usuario == username  && users[i].contraseña === contraseña) {
      usuarioValido = true;
    }
  }

  return usuarioValido;
}


// Función para mostrar alerta
function alertaCredeciales(event) {
  event.preventDefault(); //evitar que se recargue la página
  
  if (validarCredenciales() == false) { //si la funcion validarCredenciales es true
    alert("Credenciales incorrectas!");
  }
  if (validarCredenciales() == true) { 
    alert("Credenciales correctas!");
  }
  // TAREA - agregar if en caso de true
}



document.getElementById("login-button").addEventListener("click", alertaCredeciales); //agregar el evento click al boton con id="login-button"
