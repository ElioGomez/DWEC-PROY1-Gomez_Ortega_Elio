//En esta primera función vamos a recibir dos eventos, los cuales seran presionar un botón o dar una tecla
//Esta dara lugar a que un comentario escrito en el text area de la entrada del blog se publique debajo de la noticia
//La función crea diferentes elementos, con un p en el que estará escrito el comentario, y un br que separará un comentario de otro
function comentar(evento) {
  if (evento.keyCode == 13 || evento.type == "click") {
    let comentario = document.getElementById("comentario").value

    if (comentario == null || comentario.length == 0 || /^\s+$/.test(comentario)) {
      alert("Error, no se detecto ningun comentario")
    }
    else {
      let comentarioT = document.createTextNode(comentario)
      let hr = document.createElement("hr")
      var nuevop = document.createElement("p")
      nuevop.appendChild(comentarioT)
      let zonaC = document.getElementById("zonaC")
      zonaC.appendChild(nuevop)
      zonaC.appendChild(hr)
      zonaC.style.width = "90%"
      zonaC.style.textAlign = "right"
      zonaC.style.paddingBottom = "10px"
      nuevop.style.fontSize = "20px"
      nuevop.style.borderBottom = "5px"
      nuevop.style.borderBottomColor = "#EEBB19"
      document.getElementById("comentario").value = ""
    }
  }
}
let comentario2 = document.getElementById("comentario")
let bcomen = document.getElementById("comen")

comentario2.addEventListener("keypress", comentar)
bcomen.addEventListener("click", comentar)


//En esta función recibimos el usuario y la clave para iniciar sesión y lo validamos
function VIniciar() {
  let usuarioI = document.getElementById("usuarioI").value
  let claveI = document.getElementById("claveI").value
  var espacios = false;
  var cont = 0;
  let espaciosr = false;
  let contr = 0;
  //generamos dos números aleatorios que sumaremos y usaremos posteriormente para el captcha
  let numero1 = Math.round(Math.random(1, 11) * 10)
  let numero2 = Math.round(Math.random(1, 11) * 10)
  let solu = numero1 + numero2
  //preguntamos por un promp cual es la respuesta del captcha
  let respuesta = prompt(`¿Cual es la suma de estos dos nuemoro ${numero1} + ${numero2}`)
  //En este while calculamos el número de espacios en blanco, en caso de que haya uno o mas devolvera un false
  while (!espacios && (cont < usuarioI.length)) {
    if (usuarioI.charAt(cont) == " ")
      espacios = true;
    cont++;
  }

  while (!espaciosr && (contr < claveI.length)) {
    if (claveI.charAt(contr) == " ")
      espaciosr = true;
    contr++;
  }

  //Aqui comprobamos que el campo usuario no este vacio 
  if (usuarioI == null || usuarioI.length == 0) {
    alert("Error, el campo usuario no puede estar vacio")
  }
  //Aqui hacemos que el nombre de usuario solo contenga números o letras
  else if (/[^A-Za-z\d]/.test(usuarioI)) {
    alert("El usuario solo pueude tener números y letras")
  }
  //Aqui comprobamos lo que recibimos del while de arriba, si es false devolvemos un mensaje de error
  //ya que no puede tener espacios en blanco
  else if (espacios == true) {
    alert("El usuario no puede contener espacios en blanco");
  }
  //Comprobamos la longuitud del nombre, y la acotamos entre 4 y 20 caracteres
  else if (usuarioI.length > 20 || usuarioI.length < 4) {
    alert("Error el usuario debe tener entre 4 y 20 caracteres")
  }
  //Comprobamos que el campo clave no este vacio
  else if (claveI == null || claveI.length == 0) {
    alert("Error, el campo clave no puede estar vacio")
  }
  //comprobamos que no tenga espacios en blanco 
  else if (espaciosr == true) {
    alert("La contraseña no puede contener espacios en blanco");
  }
  //Aqui acotamos la longuitud de la clave entre 6 y 16 caracteres y obligamos a que tenga al menos un número
  //y un símbolo especial
  else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(claveI)) {
    alert("Error la clave debe tener entre 6 y 16 caracteres y además un número o un símbolo especial")
  }
  //Comprobamos que no sea un robot con una suma simple, en caso de que sea correcta se efectuará el inicio de sesión
  else if (solu != respuesta) {
    alert("La respuesta a la suma no es correcta")
  }

  else {
    alert("Sesión iniciada correctamente")
  }
}

//En esta función a partir de un formulario de registro comprobaremos que todo este correcto
function VRegistro() {
  //La validación del registro y del inicio de sesión son basicamente iguales con un par de diferencias que comentaré abajo
  let usuarioR = document.getElementById("usuarioR").value
  let claveR = document.getElementById("claveR").value
  let claveRR = document.getElementById("claveRR").value
  let terminos = document.getElementById("terminos")
  let numero1 = Math.round(Math.random(1, 11) * 10)
  let numero2 = Math.round(Math.random(1, 11) * 10)
  let solu = numero1 + numero2
  let respuesta = prompt(`¿Cual es la suma de estos dos nuemoro ${numero1} + ${numero2}`)
  var espacios = false;
  var cont = 0;
  let espaciosr = false;
  let contr = 0;

  while (!espacios && (cont < usuarioR.length)) {
    if (usuarioR.charAt(cont) == " ")
      espacios = true;
    cont++;
  }

  while (!espaciosr && (contr < claveR.length)) {
    if (claveR.charAt(contr) == " ")
      espaciosr = true;
    contr++;
  }


  if (usuarioR == null || usuarioR.length == 0) {
    alert("Error, el campo usuario no puede estar vacio")
  }

  else if (/[^A-Za-z\d]/.test(usuarioR)) {
    alert("El usuario solo pueude tener números y letras")
  }

  else if (espacios == true) {
    alert("El usuario no puede contener espacios en blanco");
  }

  else if (usuarioR.length > 20 || usuarioR.length < 4) {
    alert("Error el usuario debe tener entre 4 y 20 caracteres")
  }

  else if (claveR == null || claveR.length == 0) {
    alert("Error, el campo clave no puede estar vacio")
  }

  else if (espaciosr == true) {
    alert("La contraseña no puede contener espacios en blanco");
  }

  else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(claveR)) {
    alert("Error la clave debe tener entre 6 y 16 caracteres y ademas un número o un simbolo especial")
  }

  //Al ser un registro pediremos que repita la clave, en caso de que no coincida mandaremos un mensaje de error
  //y el registro no se realizará
  else if (claveR != claveRR) {
    alert("Error en la coincidencia de claves")
  }

  //Comprobamos que se acpeten los terminos de uso 
  else if (!terminos.checked) {
    alert("Debe aceptar los terminos de uso para registrarse")
  }

  else if (solu != respuesta) {
    alert("La respuesta a la suma no es correcta")
  }

  else {
    alert("El registro ha sido realizado")
  }
}

//En esta función validaremos los datos del formulario de contacto (nombre, email y un text area)
function Vcontacto() {
  //Al igual que en los anteriores la validación del nombre es igual, por lo que solo comentaré la del correo y la del textarea
  let usuarioC = document.getElementById("userC").value
  let emailC = document.getElementById("emailC").value
  let sobreti = document.getElementById("sobreti").value
  var espacios = false;
  var cont = 0;
  let espaciosr = false;
  let contr = 0;
  let numero1 = Math.round(Math.random(1, 11) * 10)
  let numero2 = Math.round(Math.random(1, 11) * 10)
  let solu = numero1 + numero2
  let respuesta = prompt(`¿Cual es la suma de estos dos nuemoro ${numero1} + ${numero2}`)

  while (!espacios && (cont < usuarioC.length)) {
    if (usuarioC.charAt(cont) == " ")
      espacios = true;
    cont++;
  }

  while (!espaciosr && (contr < emailC.length)) {
    if (emailC.charAt(contr) == " ")
      espaciosr = true;
    contr++;
  }



  if (usuarioC == null || usuarioC.length == 0) {
    alert("Error, el campo usuario no puede estar vacio")
  }

  else if (espacios == true) {
    alert("El usuario no puede contener espacios en blanco");
  }
  else if (/[^A-Za-z\d]/.test(usuarioC)) {
    alert("El usuario solo pueude tener númerosº y letras")
  }

  else if (usuarioC.length > 20 || usuarioC.length < 4) {
    alert("Error el usuario debe tener entre 4 y 20 caracteres")
  }
//comprobamos que el correor este formado por un cuerpo, un arroba, un dominio, y una extensión con un .
  else if (!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(emailC)) {
    alert("El email no es valido")
  }

//En los siguientes else if comprobamos que el campo correo no este vacio ni tenga espacios en blanco
  else if (emailC == null || emailC.length == 0) {
    alert("Error, el campo email no puede estar vacio")
  }


  else if (espaciosr == true) {
    alert("El campo email no puede contener espacios en blanco");
  }

  else if (sobreti == null || sobreti.length == 0) {
    alert("Error, no se detecto ningun comentario")
  }
  else if (/[^A-Za-z\d]/.test(sobreti)) {
    alert("El mensaje solo pueude tener números y letras")
  }
  else if (solu != respuesta) {
    alert("La respuesta a la suma no es correcta")
  }

  else {
    alert("Informacion enviada correctamente")
  }
}




