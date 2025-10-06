let nota1, nota2, nota3, promedio; //Declaración de variables

nota1 = (prompt("Ingrese la primera nota: ")) //datos de entrada
nota2 = (prompt("Ingrese la segunda nota: "))
nota3 = (prompt("Ingrese la tercera nota: "))

nota1 = parseFloat(nota1); //Conversión de datos
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);

//Proceso
promedio = (nota1 + nota2 + nota3) / 3;

//Impresión de resultados
alert("El promedio de las notas es: " + promedio);