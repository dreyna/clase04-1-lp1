
function mensaje(){
    var x = parseInt(document.getElementById("numero").value);
    var boton = document.getElementById("botoncito");
    boton.classList.add("boton2");
    document.getElementById("resultado").value = Math.sqrt(x);
    //creado elemento "DIV"
    var ndiv = document.createElement("div");    
    var ntext = document.createTextNode("Este es un nuevo elemento");
    ndiv.appendChild(ntext);
    //create boton
    var b1 = document.createElement("button");
    var txtboton = document.createTextNode("Nuevo Boton");
    b1.appendChild(txtboton);

    var prueba = document.getElementById("prueba");
    //document.body.insertBefore(ndiv, prueba);
    document.body.insertBefore(b1, prueba);
    //aplicando estilos
    b1.classList.add("boton");
   // ndiv.classList.add("nuevo");
    
}
