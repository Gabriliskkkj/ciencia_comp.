let tarefas=[];
let numeros= [1, 2, 3, 4, 5, 6, 7, 8, 9];

    tarefas.push('somar');
    tarefas.push('subtrair');
    tarefas.push('multiplicar');
    tarefas.push('dividir');
    
    function somarNumeros(a, b) {
        return a + b;
    }
    somarNumeros=somar;
 let resultadoSoma = somarNumeros(numeros[0], numeros[1]);
console.log ("resultado da soma é:"resultadoSoma)
