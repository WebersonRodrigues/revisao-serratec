
// 2) - Crie um sistema que receba uma pessoa e salve todas as 
// alterações que tiveram na pessoa. (nome, idade e sexo).
// Essa pessoa pode ser alterada até 5 vezes pelo usuário. 
// O usuário pode alterar qualquer informação sobre a pessoa.
// Mostrar todas as alterações feitas.


var pessoa = 
{
    nome: prompt("Digite seu nome:"),
    idade: prompt("Digite sua idade:"),
    sexo: prompt('Informe seu sexo: \nMasculino - M\nFeminino - F')
};

var alteracoes = [pessoa];

fazerAlteracoes();

for(var posicao in alteracoes)
{
    // let chegueiNoFinalDoArray = (posicao == alteracoes.length - 1) ? true : false; //ternário
    // if(!chegueiNoFinalDoArray)
    // {
    //     let pessoaDeAntes = alteracoes[posicao];
    //     let pessoaDePosterior = alteracoes[parseInt(posicao) + 1]; 
    //     escreverNaTela(pessoaDeAntes, pessoaDePosterior);
    // }
    if(posicao < (alteracoes.length - 1))
    {
        let pessoaAntes = alteracoes[posicao];
        let pessoaPosterior = alteracoes[parseInt(posicao) + 1]; //"versão sem ternário"
        escreverNaTela(pessoaAntes, pessoaPosterior);
    }
}
function fazerAlteracoes()
{
    const quantidadeDeAlteracoes = 5;
    var contador = 0;
    while(contador < quantidadeDeAlteracoes)
    {
        let alterar = prompt("Deseja alterar alguma informação de pessoa? \nSim - S \nNão -N");
        if(alterar.toLowerCase() == 's')
        {
            pessoa = 
            {
                nome: prompt("Digite seu nome."),
                idade: prompt("Digite sua idade"),
                sexo: prompt("Informe seu sexo \nM - Masculino\nF - Feminino")
            };
            alteracoes.push(pessoa);
            contador++;
        }
        else
        {
            contador = quantidadeDeAlteracoes;
        }
    }
}
function escreverNaTela(antes, depois)
{
    document.write("<h1>Segue abaixo as alterações feitas na pessoa informada:</h1>");

    document.write(`<p>Antes da mudança:</p>`)
    document.write(`<p>Nome: <strong>${antes.nome}</strong></p>`);
    document.write(`<p>Idade: <strong>${antes.idade}</strong></p>`);
    document.write(`<p>Sexo: <strong>${antes.sexo}</strong> </p>`);

    document.write(`<p>Depois da mudança:</p>`)
    document.write(`<p>Nome: <strong>${depois.nome}</strong></p>`);
    document.write(`<p>Idade: <strong>${depois.idade}</strong></p>`);
    document.write(`<p>Sexo: <strong>${depois.sexo}</strong></p>`);
}


