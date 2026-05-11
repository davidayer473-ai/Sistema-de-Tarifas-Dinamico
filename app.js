function datos(){
    let precioBase = parseInt(document.getElementById("precioBase").value);
    let edad = parseInt(document.getElementById("edad").value);

    document.getElementById("sub_resultado");
    document.getElementById("resultado");

    if(precioBase<=0){
        sub_resultado.innerText = "Debe ingresar un precio mayor a 0";
    }
    else if(edad<=0 || edad>120){
        sub_resultado.innerText = "La edad esta fuera del rango";
        resultado.innerText = "Edades validas: 1 a 120 años";
    }
    else if(edad<18){
        sub_resultado.innerText = "El precio base es de: "+ precioBase;
        resultado.innerText = "Pero con el 10% de descuento:"+ (precioBase-(precioBase*0.1));
    }
    else if(edad>=18 && edad<65){
        sub_resultado.innerText = "El precio base es de: "+ precioBase;
        resultado.innerText = "Su entrada no tiene descuento";
    }
    else{
        sub_resultado.innerText = "El precio base es de: "+ precioBase;
        resultado.innerText = "Pero con el 20% de descuento :"+ (precioBase-(precioBase*0.2));
    }
}