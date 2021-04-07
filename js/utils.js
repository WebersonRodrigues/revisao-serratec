/**
 * Funções
 */

//Como cria
//Função void, sem parametros.
function dispararAlerta(){
    alert('Oi');
}

//Função void, com parametros.
function dispararAlerta2(mensagem){
    alert(mensagem);
}

// função com retorno e sem parametro
function retornarDataEHoraAtual(){
    return new Date().toLocaleString();
}

//Função com retorno, com parametro
// function validarNumero(numero){
//     return !isNaN(parseFloat(numero));    
// }

function validarNumero(numero){
    var num = parseFloat(numero);

    return !isNaN(num);    
}

// function validarNumero(numero){
//     var num = parseFloat(numero);

//     if(isNaN(num)){
//         return false;
//     }

//     return true;
    
// }

// function validarNumero(numero){
//     var num = parseFloat(numero);

//     if(isNaN(num)){
//         return false;
//     }else{

//         return true;
//     }
// }