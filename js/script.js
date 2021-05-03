const b = document.querySelector("#bo");
const combo = document.querySelector("#operacion");
b.onclick = (event) => {
    event.preventDefault();
    //console.log(combo.selectedIndex);
    var n1 = parseInt(document.getElementById("numero1").value);
    var n2 = parseInt(document.getElementById("numero2").value);
    switch(combo.selectedIndex){
        case 0:alert("Seleccionar operación");break;
        case 1: document.getElementById("resultado").value = n1 + n2;
                break;
        case 2:document.getElementById("resultado").value = n1 - n2;
                break;
        case 3:document.getElementById("resultado").value = n1 * n2;
                break;
        case 4:document.getElementById("resultado").value = n1 / n2;
                break;
    }
}

/*

function calcular(){
    const b = document.querySelector("#bo");
    const combo = document.querySelector("#operacion");
    b.onclick=(event)=>{
        event.preventDefault();
        console.log(combo.selectedIndex);
    }
    /*
    var oper = document.getElementById("operacion");
    oper.addEventListener('change',function(){
        var sel = this.options[oper.selectedIndex];
        console.log(sel);
    });
    /*
    var n = document.getElementById("numero").value;
    document.getElementById("resultado").value = Math.sqrt(n);

}*/