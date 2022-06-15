import { clienteService } from "../service/cliente-service.js"

const pegaURL = new URL(window.location)

const id =  pegaURL.searchParams.get('id')//pega o id na url

const inputNome = document.querySelector('[data-nome]')// percorre o DOM, buscando data-nome 
const inputEmail = document.querySelector('[data-email]')



clienteService.detalhaCliente(id)
.then( dados=>{
    inputNome.value = dados.nome
    inputEmail.value = dados.email
})

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento)=> {
    evento.preventDefault()

    clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
    .then(()=> {
        window.location.href = "../telas/edicao_concluida.html"
    })
})

