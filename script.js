
<script type="text/javascript">
  var valores = [true, 5, false, "hola", "adios", 2];
  var resultado = valores[3] > valores[4];
  document.write(resultado);
//colocar document.writte () en cada uno de los alert para que se muestre como resultado
  // Combinar valores booleanos
  var valor1 = valores[0];
  var valor2 = valores[2];

  // Obtener un resultado TRUE
  var resultado = valor1 || valor2;
  document.write("resultado 1:" + resultado + "<br/>");

  // Obtener un resultado FALSE
  var resultado = valor1 && valor2;
  document.write("resultado 2:" + resultado + "<br/>");

  // Operaciones matemáticas
  var num1 = valores[1];
  var num2 = valores[5];

  var suma = num1 + num2;
  document.write(suma);

  //var resta = num1 - num2;
  //alert(resta);

  // var multiplicacion = num1 * num2;
  document.write(multiplicacion);
  // var division = num1 / num2;
  // alert(division);

  // var modulo = num1 % num2;
  // alert(modulo);

</script>