let base, altura, area, perimetro; //Declaración de variables

base = (prompt("Ingrese la base del terreno rectangular: ")); //datos de entrada
altura = (prompt("Ingrese la altura del terreno rectangular: "));

base = parseFloat(base); //Conversión de datos
altura = parseFloat(altura);

//Proceso
area = base * altura;
perimetro = 2 * (base + altura);

//Impresión de resultados
alert("El área del terreno es: " + area);
alert("El perímetro del terreno es: " + perimetro);