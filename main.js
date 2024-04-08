const form = document.getElementById('form_contato');
const nomes = [];
const telefones = [];
const mensagemErro = document.querySelector('.mensagem_erro');
const mensagemSucesso = document.querySelector('.mensagem_sucesso');

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    mensagemErro.style.display = 'none';
    mensagemSucesso.style.display = 'none';

    novoContato();
    atualizaTab();

});

function novoContato(){
    const inputNome = document.getElementById('nome_contato');
    const inputTele = document.getElementById('telefone_contato');

    if(inputNome.value === '' && inputTele.value === ''){
        mensagemErro.innerText = 'Por favor preencha os campos Nome e Telefone';
        mensagemErro.style.display = 'block';
        return
    }else if(inputNome.value === ''){
        mensagemErro.innerText = 'Por favor preencha o nome';
        mensagemErro.style.display = 'block';
        return
    }else if(inputTele.value === ''){
        mensagemErro.innerText = 'Por favor preencha o telefone';
        mensagemErro.style.display = 'block';
        return
    }else if(nomes.includes(inputNome.value) && telefones.includes(inputTele.value)){
        mensagemErro.innerText = `O contato: ${inputNome.value} - ${inputTele.value} já está na agenda`;
        mensagemErro.style.display = 'block';
    }else{
        nomes.push(inputNome.value);
        telefones.push(inputTele.value);

        let linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputTele.value}</td>`
        linha += `</tr>`

        linhas += linha;
    }

    mensagemSucesso.innerText = 'Novo contato cadastrado!';
    mensagemSucesso.style.display = 'block';

    inputNome.addEventListener('input', function(){
        mensagemSucesso.style.display = 'none';
        mensagemErro.style.display = 'none';
    });

    inputTele.addEventListener('input', function(){
        mensagemSucesso.style.display = 'none';
        mensagemErro.style.display = 'none';
    });

    inputNome.value = '';
    inputTele.value = '';
}

function atualizaTab(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}



