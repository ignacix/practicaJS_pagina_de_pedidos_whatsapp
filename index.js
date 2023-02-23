x = 0;

direccion = "NO PUSO DIRECCIÓN";



function sumar(){
    x+=1;
    document.getElementById("contador").innerHTML= x+" panchitos";
    direccion= document.getElementById("direccion").value;
}

function restar(){
    if (x>0) {
        x-=1;    
    }
    document.getElementById("contador").innerHTML=x+" panchitos";
    direccion= document.getElementById("direccion").value;


}

function cargardireccion(){
    
    direccion = document.getElementById("direccion").value

    if (x==0 || direccion=="") {
        alert("Por favor, Ingrese la CANTIDAD DE PANCHITOS y su DIRECCIÓN")
    }else{
        cadena = "https://wa.me/56575340?text=Hola%20quiero%20 "+x+" PANCHITOS"+ " a "+direccion+"%20";
        document.getElementById("enlace").setAttribute("href",cadena);
    }
    
}



