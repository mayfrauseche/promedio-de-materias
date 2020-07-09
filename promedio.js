//El programa pedira 5 notas y te va a devoler el promedio de las 5 notas
var acum = 0;
for(var index = 0; index < 5; index++){
    var edad = Number(prompt(`Ingresa la nota: ${index}`));
    acum += edad;
}

var promedio = acum / 5;
console.log(`Promedio de notas es: ${promedio}`);