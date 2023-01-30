const numeros=prompt('ingrese 3 numeros separados por comas');
let partido = numeros.split(',').map(item => Number(item));
let numero1=partido[0];
let numero2= partido[1];
let numero3= partido[2];
let menores=partido.sort((a, b) => a - b);
let mayores=partido.sort((a, b) => b- a);
if (numero1===numero2 && numero2===numero3){
    console.log('los numeros son iguales');
    

}else{
    console.log(`el numero mayor es ${Math.max(...partido)} y el numero menor es ${Math.min(...partido)} y el numero del centro es ${numero2}`);
    console.log(menores);
    console.log(mayores)
}



