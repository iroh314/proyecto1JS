let calculoSueldo1, calculoSueldo2 , horasExtras, calculoSueldoExtra;
const HORASBASE = 40, VALORHORANORMAL = 20000, VALORHORAEXTRA = 25000;

let nombreEmpleado = prompt (`Ingrese el nombre del empleado`);
let numeroHoras = prompt (`Ingrese las horas laboradas`);

numHoras = parseFloat (numeroHoras);

if(numHoras >= 0 && numHoras  <= 40){

    calculoSueldo1 = numHoras * VALORHORANORMAL;
    console.log(`El empleado ${nombreEmpleado} recibira un pago de $${calculoSueldo1}`);
}
else if(numHoras >= 40){
    
    horasExtras = numHoras - HORASBASE;
    calculoSueldoExtra = horasExtras * VALORHORAEXTRA;
    calculoSueldo2 = (HORASBASE * VALORHORANORMAL) + calculoSueldoExtra;
    console.log (`El empleado ${nombreEmpleado} recibira un pago de $${calculoSueldo2}`);
}
else{
    console.log (`Numero de horas erradas`);
}