const numeros=prompt("ingrese 3 numeros separados por comas");
let partido = numeros.split(',').map(item => Number(item));
let numero1=partido[0];
let numero2= partido[1];
let numero3= partido[2];
let ordenados = partido.sort((a,b)=>a-b)
if (numero1===numero2 && numero2===numero3){
    console.log('los numeros son iguales');    

}else{
 
   let contenido = document.getElementById('resultado');
   let mayoresMenores= document.getElementById('listas')
   contenido.innerHTML = `<h2>el numero mayor es ${Math.max(...partido)} y el numero menor es ${Math.min(...partido)} y el numero del centro es ${numero2}</h2>`;
   
   mayoresMenores.innerHTML = `<h3>ordenados de menor a mayor ${ordenados}, ordenados de mayor a menor ${ordenados.reverse()}</h3>`;

}


