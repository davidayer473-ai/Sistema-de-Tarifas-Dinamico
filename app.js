function datos(){
    let precioBase = parseInt(document.getElementById("precioBase").value);
    let edad = parseInt(document.getElementById("edad").value);
    let mensaje = "";

    document.getElementById("precio");
    document.getElementById("resultado");

    precio.innerText = "El precio base es de: "+ precioBase;
    if(edad<18){
        resultado.innerText = "Pero con el 10% de descuento:"+ (precioBase-(precioBase*0.1));
    }else if(edad>=18 && edad<65){
        resultado.innerText = "Su entrada no tiene descuento";
    }else{
        resultado.innerText = "Pero con el 20% de descuento :"+ (precioBase-(precioBase*0.2));
    }
    
    
}
