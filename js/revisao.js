// document.write("Recursividade ... <br>");



// function contador(numero){
   
//     for(var i = numero ; i >= 0; i--){
//         document.write(i +  '<br>');
//     }

//     // document.write(numero +  '<br>');

//     // if(numero > 0){
//     //     contador(numero - 1);
//     // }
// }


// contador(50);



// Como usa
// dispararAlerta();
// dispararAlerta2("Aqui eu coloco a minha mensagem");
// dispararAlerta2("Bombinha de chocolate");


// var resultado = validarNumero('Batata');

// var dataEHora = retornarDataEHoraAtual();

// alert(dataEHora);


// 2) - Crie um sistema que receba uma pessoa e salve todas as 
// alterações que tiveram na pessoa. (nome, idade e sexo).
// Essa pessoa pode ser alterada até 5 vezes pelo usuário. 
// O usuário pode alterar qualquer informação sobre a pessoa.
// Mostrar todas as alterações feitas.


var pessoa = {
    nome: prompt("Digite seu nome."),
    idade: prompt('Digite sua idade'),
    sexo: prompt('Informe seu sexo \nM - Masculino\nF - Feminino')
};

var alteracoes = [pessoa];

fazerAlteracoes();

for(var posicao in alteracoes){

    let chegueiNoFinalDoArray = (posicao == alteracoes.length - 1) ? true : false;

    if(!chegueiNoFinalDoArray){
        
        let pessoaDeAntes = alteracoes[posicao];
        let pessoaDePosterior = alteracoes[parseInt(posicao) + 1]; 

        escreverNaTela(pessoaDeAntes, pessoaDePosterior);
    }

}


function fazerAlteracoes(){
    
    const quantidadeDeVezes = 5;
    var contador = 0;

    while(contador < quantidadeDeVezes){

        let alterar = prompt('Deseja alterar alguma informação na pessoa? \nS - Sim \nN -Não');

        if(alterar.toLowerCase() == 's'){

            pessoa = {
                nome: prompt("Digite seu nome."),
                idade: prompt('Digite sua idade'),
                sexo: prompt('Informe seu sexo \nM - Masculino\nF - Feminino')
            };

            alteracoes.push(pessoa);

            contador++;

        }else{
            contador = 5;
        }
    }
}


function escreverNaTela(antes, depois){
    
    document.write("<h1>Segue abaixo as alterações feitas na pessoa informada:</h1>");

    document.write(`<p>Antes da mudança:</p>`)
    document.write(`<p>Nome:<strong>${antes.nome}</strong></p>`);
    document.write(`<p>Idade:<strong>${antes.idade}</strong></p>`);
    document.write(`<p>Sexo:<strong>${antes.sexo}</strong> </p>`);

    document.write(`<p>Depois da mudança:</p>`)
    document.write(`<p>Nome:<strong>${depois.nome}</strong></p>`);
    document.write(`<p>Idade:<strong>${depois.idade}</strong></p>`);
    document.write(`<p>Sexo:<strong>${depois.sexo}</strong></p>`);
}


