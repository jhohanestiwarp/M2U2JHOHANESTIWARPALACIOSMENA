const numero1 = document.getElementById('n1');
const numero2 = document.getElementById('n2');
const numero3 = document.getElementById('n3');
const numero4 = document.getElementById('n4');
const boton = document.getElementById('boton');
parrafoMayor = document.getElementById("mayor");
parrafoMenor = document.getElementById("menor");

 function calculoNumeros() {
  parrafoMayor = document.getElementById("mayor");
  parrafoMenor = document.getElementById("menor");
  const numero1 = document.getElementById('n1');
  const numero2 = document.getElementById('n2');
  const numero3 = document.getElementById('n3');
  const numero4 = document.getElementById('n4');
  if((numero1.value == numero2.value) || (numero1.value == numero3.value) || (numero1.value == numero4.value)){
    alert("No pueden estar numeros repetidos")
  }else if((numero2.value == numero1.value) || (numero2.value == numero3.value) || (numero2.value == numero4.value)){
    alert("No pueden estar numeros repetidos")

  }else if((numero3.value == numero1.value) || (numero3.value == numero2.value) || (numero3.value == numero4.value)){
    alert("No pueden estar numeros repetidos")
  }else if((numero4.value == numero1.value) || (numero4.value == numero2.value) || (numero4.value == numero3.value)){
    alert("No pueden estar numeros repetidos")    
  }else{
    let mayor = Math.max(numero1.value, numero2.value, numero3.value, numero4.value);
    if(mayor == numero1.value){
      parrafoMayor.innerHTML = "El numero mayor es " + mayor + " ";
    }
    if(mayor == numero2.value){
      parrafoMayor.innerHTML = "El numero mayor es " + mayor + " ";
    }
    if(mayor == numero3.value){
      parrafoMayor.innerHTML = "El numero mayor es " + mayor + " ";
    }
    if(mayor == numero4.value){
      parrafoMayor.innerHTML = "El numero mayor es " + mayor + " ";
    }
    let menor = Math.min(numero1.value, numero2.value, numero3.value, numero4.value);
    if(menor == numero1.value){
      parrafoMenor.innerHTML = "El numero menor es " + menor + " ";
    }
    if(menor == numero2.value){
      parrafoMenor.innerHTML = "El numero menor es " + menor + " ";
    }
    if(menor == numero3.value){
      parrafoMenor.innerHTML = "El numero menor es " + menor + " ";
    }
    if(menor == numero4.value){
      parrafoMenor.innerHTML = "El numero menor es " + menor + " ";
    }
  }
 }

