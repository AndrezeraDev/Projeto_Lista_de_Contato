// Seleciona o formulário pelo seu ID
const form = document.getElementById('user-content');

// Inicializa uma string vazia para armazenar as linhas da tabela
let linhas = '';

// Inicializa um array para armazenar os números de telefone
let telefones = [];

// Adiciona um ouvinte de evento para o envio do formulário
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o comportamento padrão do envio do formulário

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    // Seleciona os elementos de entrada do formulário pelo ID
    const inputNome = document.getElementById('nome-list');
    const inputTelefone = document.getElementById('tel-list');

    // Verifica se o número de telefone já está na lista
    if (telefones.includes(inputTelefone.value)) {
        alert("Este número de telefone já foi adicionado.");
        return; // Sai da função se o telefone já estiver na lista
    }

    // Constrói a linha da tabela com os valores dos inputs
    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`; // Adiciona o nome na célula da tabela
    linha += `<td>${inputTelefone.value}</td>`; // Adiciona o telefone na célula da tabela
    linha += '</tr>';

    linhas += linha; // Adiciona a linha construída à variável linhas, que armazena todas as linhas da tabela

    // Adiciona o número de telefone à lista de telefones
    telefones.push(inputTelefone.value);

    // Limpa os valores dos inputs do formulário
    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.getElementById('contact-table-body'); // Seleciona o corpo da tabela
    corpoTabela.innerHTML = linhas; // Atualiza o conteúdo do corpo da tabela com as linhas construídas
}
