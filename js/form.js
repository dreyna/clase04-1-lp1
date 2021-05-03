function operacion(){
    var op = parseInt(document.getElementById("operacion").value);
    var rep = document.getElementById("resultado");
    var n1 = parseInt(document.getElementById("numero1").value);
    var n2 = parseInt(document.getElementById("numero2").value);
    if(op!=0){
        switch(op){
            case 1: rep.value = suma(n1,n2);
                    break;
            case 2: rep.value = resta(n1,n2);
                    break;
            case 3: rep.value = multiplicacion(n1,n2);
                   break;
            case 4: rep.value = division(n1,n2);
                   break;
        }
    }else{
        alert("Seleccionar Operación...!")
    }
}
function suma(a,b){ return a+b;}
function resta(a,b){ return a-b;}
function multiplicacion(a,b){ return a+b;}
function division(a,b){ return a/b;}