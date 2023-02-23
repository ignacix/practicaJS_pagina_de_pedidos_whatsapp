x = 0;

direccion = "NO PUSO DIRECCIÓN"

//FUNCIÓN PARA CAPTURAR LA DIRECCIÓN



//FUNCIONES QUE LLAMAN LOS BOTONES (CUÁNTOS PANCHITOS QUIERE)

function sumar(){
    x+=1;
    document.getElementById("contador").innerHTML= x+" panchitos";
    direccion= document.getElementById("direccion").value;
<<<<<<< HEAD
=======
    cadena= "https://wa.me/1156575340?text="+"Hola quiero "+ x +" PANCHITOS"+" a "+direccion;
    document.getElementById("enlace").setAttribute("href",cadena)
>>>>>>> 6ccb0e016b7e4de00f7369f7e3104604060202ea
}

function restar(){
    if (x>0) {
        x-=1;    
    }
    document.getElementById("contador").innerHTML=x+" panchitos";
    direccion= document.getElementById("direccion").value;
<<<<<<< HEAD
=======
    cadena = "https://wa.me/1156575340?text="+"Hola quiero "+x+" PANCHITOS"+ " a "+direccion;
    document.getElementById("enlace").setAttribute("href",cadena);
>>>>>>> 6ccb0e016b7e4de00f7369f7e3104604060202ea


}

function cargardireccion(){
    direccion = document.getElementById("direccion").value
    cadena = "https://wa.me/56575340?text=Hola%20quiero%20 "+x+" PANCHITOS"+ " a "+direccion+"%20";
    document.getElementById("enlace").setAttribute("href",cadena);
}



