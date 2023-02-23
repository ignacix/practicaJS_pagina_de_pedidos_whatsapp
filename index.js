x = 0;

direccion = "NO PUSO DIRECCIÓN"

//FUNCIÓN PARA CAPTURAR LA DIRECCIÓN



//FUNCIONES QUE LLAMAN LOS BOTONES (CUÁNTOS PANCHITOS QUIERE)

function sumar(){
    x+=1;
    document.getElementById("contador").innerHTML= x+" panchitos";
    direccion= document.getElementById("direccion").value;
    cadena= "https://wa.me/1156575340?text=Hola%20quiero%20 "+ x +" PANCHITOS"+" a "+direccion;
    document.getElementById("enlace").setAttribute("href",cadena)
}

function restar(){
    if (x>0) {
        x-=1;    
    }
    document.getElementById("contador").innerHTML=x+" panchitos";
    direccion= document.getElementById("direccion").value;
    cadena = "https://wa.me/1156575340?text=Hola%20quiero%20 "+x+" PANCHITOS"+ " a "+direccion;
    document.getElementById("enlace").setAttribute("href",cadena);

}




