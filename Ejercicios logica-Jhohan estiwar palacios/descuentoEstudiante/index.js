nombreUsuario = document.getElementById("nombre");
NumeroMaterias = document.getElementById("materias");
ValorMateria = document.getElementById("valorMateria");
resultado = document.getElementById("result");
Boton = document.getElementById("boton");
let carne_valor = 8.000;
let costo_fijo = 20.000;
valor_papeleria = costo_fijo + carne_valor;
let descuento = 0.20;
console.log(valor_papeleria)



Boton.addEventListener("click", () => {
  let valorTotal = 0;
  valorTotal = (ValorMateria.value * NumeroMaterias.value) / descuento + valor_papeleria;
  resultado.innerHTML = "El valor total de las materias es " + valorTotal + " ";
  console.log(valorTotal);
});
