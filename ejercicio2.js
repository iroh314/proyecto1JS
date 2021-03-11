let calculoImc;

let nombreUsuario = prompt(`Ingrese el nombre del usuario`);
let pesoUsuario = prompt(`Ingrese el peso del usuario en kilogramos`);
let estaturaUsuario = prompt(`Ingrese la estatura del usuario en metros`);

pesoUsuario = parseFloat (pesoUsuario);
estaturaUsuario = parseFloat (estaturaUsuario);

calculoImc = pesoUsuario / (estaturaUsuario ** 2);

if(calculoImc >= 0 && calculoImc <18.5){
    console.log(`El usuario ${nombreUsuario} tiene peso insuficiente`)
}
else if(calculoImc >= 18.5 && calculoImc <= 24.9){
    console.log(`El usuario ${nombreUsuario} tiene Normopeso`);
}
else if(calculoImc >= 25 && calculoImc <= 26.9){
    console.log(`El usuario ${nombreUsuario} tiene Sobrepeso grado I`);
}
else if(calculoImc >= 27 && calculoImc <= 29.9){
    console.log(`El usuario ${nombreUsuario} tiene Sobrepeso grado II (preobesidad)`);
}
else if(calculoImc >= 30 && calculoImc <= 34.9){
    console.log(`El usuario ${nombreUsuario} tiene Obesidad de tipo I`);
}
else if(calculoImc >= 35 && calculoImc <= 39.9){
    console.log(`El usuario ${nombreUsuario} tiene Obesidad de tipo II`);
}
else if(calculoImc >= 40 && calculoImc <= 49.9){
    console.log(`El usuario ${nombreUsuario} tiene Obesidad de tipo III (mórbida)`);
}
else{
    console.log(`El usuario ${nombreUsuario} tiene Obesidad de tipo IV (extrema)`);
}
