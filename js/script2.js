const b = document.querySelector("#bo");
const combo = document.querySelector("#operacion");
b.onclick = (event) => {
    event.preventDefault();
    var n1 = parseInt(document.getElementById("numero").value);

    switch(combo.selectedIndex){
        case 0:alert("Seleccionar operación");break;
        case 1: document.getElementById("resultado").value = par_impar(n1);
                break;
        case 2:document.getElementById("resultado").value = primo(n1);
                break;
        case 3:document.getElementById("resultado").value = factorial(n1);
                break;
        case 4:document.getElementById("resultado").value = raizcubica(n1);
                break;
    }
}
function par_impar(n){
    var p ="";
    if(n % 2 == 0){
        p = "PAR"
    }else{
        p = "IMPAR"
    }
    return p;
}
function primo(n){
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }    
      }    
      return n !== 1;
}
function raizcubica(n){
    return Math.pow(n, 1/3);
}
function factorial(n){
    var f =1;
    for(i=2;i<=n;i++){
        f=f*i;
    }
    return f;
}