const brasilapi = axios.create({
    baseURL: 'https://brasilapi.com.br/api',
    timeout: 1000,
});

const inputCep = document.getElementById('inputCep')
const buttonPesquisar = document.getElementById('buttonPesquisar')

const inputEndereco = document.getElementById('inputEndereco')
const inputBairro = document.getElementById('inputBairro')
const inputCidade = document.getElementById('inputCidade')
const inputEstado = document.getElementById('inputEstado')

buttonPesquisar.addEventListener('click', () => {
    const cep = inputCep.value

    brasilapi.get(`/cep/v1/${cep}`).then((response) => {

        const enderecoCompleto = response.data

        inputEndereco.value = enderecoCompleto.street
        inputBairro.value = enderecoCompleto.neighborhood
        inputCidade.value = enderecoCompleto.city
        inputEstado.value = enderecoCompleto.state

    }).catch((error) => {

        alert('Ocorreu um erro')

    })
})
