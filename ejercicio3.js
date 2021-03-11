let sumaPrecioZapatos = 0, precioFinal;
let DESCUENTO1 = 0.1, DESCUENTO2 = 0.2, DESCUENTO3 = 0.5;

let cantidadCompra = prompt(`Cuantos pares de zapatos compra el cliente`);
cantCompra = parseInt(cantidadCompra);

for (i = 1; i<= cantCompra; i++){
    let precioZapato = prompt(`Ingrese el precio del ${i} par de zapatos`);
    precioZapato = parseInt (precioZapato);

    
    if(cantCompra>=0 && cantCompra <3){
        sumaPrecioZapatos = sumaPrecioZapatos + precioZapato;
        precioFinal = sumaPrecioZapatos;
    }
    else if (cantCompra == 3){        
        sumaPrecioZapatos = sumaPrecioZapatos + precioZapato;
        precioFinal = sumaPrecioZapatos - (sumaPrecioZapatos * DESCUENTO1);
    }
    else if (cantCompra > 3 && cantCompra <= 5){
        sumaPrecioZapatos = sumaPrecioZapatos + precioZapato;
        precioFinal = sumaPrecioZapatos - (sumaPrecioZapatos * DESCUENTO2);
    }
    else{
        sumaPrecioZapatos = sumaPrecioZapatos + precioZapato;
        precioFinal = sumaPrecioZapatos - (sumaPrecioZapatos * DESCUENTO3);
    }   

}

console.log(`El precio de los ${cantCompra} pares de zapatos, incluyendo descuento es de = $${precioFinal} `);