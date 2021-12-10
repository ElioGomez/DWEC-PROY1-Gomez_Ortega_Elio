function comentar(){
  
    let comentario = document.getElementById("comentario").value
    
    if( comentario == null || comentario.length == 0 || /^\s+$/.test(comentario) ){
      alert("Error, no se detecto ningun comentario")
  }
  else{
    let comentarioT = document.createTextNode(comentario)
    let hr = document.createElement("hr")
    var nuevop = document.createElement("p")
    nuevop.appendChild(comentarioT)
    let zonaC = document.getElementById("zonaC")
    zonaC.appendChild(nuevop)
    zonaC.appendChild(hr)
    zonaC.style.width = "90%"
    zonaC.style.textAlign="right"
    zonaC.style.paddingBottom= "10px"
    nuevop.style.fontSize = "20px"
    nuevop.style.borderBottom="5px"
    nuevop.style.borderBottomColor="#EEBB19"
    document.getElementById("comentario").value = ""  
}
}


function VIniciar(){
    let usuarioI = document.getElementById("usuarioI").value
    let claveI= document.getElementById("claveI").value
    var espacios = false;
    var cont = 0;
    let espaciosr = false;
    let contr = 0;

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


    if( usuarioI == null || usuarioI.length == 0 || /^\s+$/.test(usuarioI) ){
        alert("Error, el campo usuario no puede estar vacio")
    }

    else if (espacios == true) {
        alert ("El usuario no puede contener espacios en blanco");
      }

    else if(usuarioI.length>20 || usuarioI.length<4){
        alert("Error el usuario debe tener entre 4 y 20 caracteres")
    }



    else if( claveI == null || claveI.length == 0 || /^\s+$/.test(claveI) ){
        alert("Error, el campo clave no puede estar vacio")
    }

    else if (espaciosr == true) {
        alert ("La contraseña no puede contener espacios en blanco");
      }

    else if(claveI.length<8){
        alert("Error la clave debe tener mas de 8 caracteres, le recomendamos usar numeros y signos")
    }

    else{
        alert("Sesión iniciada correctamente")
    }
}

function VRegistro(){
    let usuarioR = document.getElementById("usuarioR").value
    let claveR= document.getElementById("claveR").value
    let claveRR=document.getElementById("claveRR").value
    let terminos=document.getElementById("terminos")
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


    if( usuarioR == null || usuarioR.length == 0 || /^\s+$/.test(usuarioR) ){
        alert("Error, el campo usuario no puede estar vacio")
    }

    else if (espacios == true) {
        alert ("El usuario no puede contener espacios en blanco");
      }

    else if(usuarioR.length>20 || usuarioR.length<4){
        alert("Error el usuario debe tener entre 4 y 20 caracteres")
    }



    else if( claveR == null || claveR.length == 0 || /^\s+$/.test(claveR) ){
        alert("Error, el campo clave no puede estar vacio")
    }

    else if (espaciosr == true) {
        alert ("La contraseña no puede contener espacios en blanco");
      }

    else if(claveR.length<8){
        alert("Error la clave debe tener mas de 8 caracteres, le recomendamos usar numeros y signos")
    }

    else if(claveR != claveRR ){
        alert("Error en la coincidencia de claves")
    }

    else if(!terminos.checked){
        alert("Debe aceptar los terminos de uso para registrarse")
    }

    else{
        alert("El registro ha sido realizado")
    }
}


function Vcontacto(){
  let usuarioC = document.getElementById("userC").value
  let emailC= document.getElementById("emailC").value
  let sobreti = document.getElementById("sobreti").value
  var espacios = false;
  var cont = 0;
  let espaciosr = false;
  let contr = 0;

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



  if( usuarioC == null || usuarioC.length == 0 || /^\s+$/.test(usuarioC) ){
      alert("Error, el campo usuario no puede estar vacio")
  }

  else if (espacios == true) {
      alert ("El usuario no puede contener espacios en blanco");
    }

  else if(usuarioC.length>20 || usuarioC.length<4){
      alert("Error el usuario debe tener entre 4 y 20 caracteres")
  }

  else if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(emailC)){
      alert("El email no es valido")
    }


  else if( emailC == null || emailC.length == 0 || /^\s+$/.test(emailC) ){
      alert("Error, el campo email no puede estar vacio")
  }


  else if (espaciosr == true) {
      alert ("El campo email no puede contener espacios en blanco");
    }

  else if( sobreti == null || sobreti.length == 0 || /^\s+$/.test(sobreti) ){
    alert("Error, no se detecto ningun comentario")}

  else{
      alert("Informacion enviada correctamente")
  }
  }
