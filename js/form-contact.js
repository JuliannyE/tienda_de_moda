const inputName = document.querySelector("#input-name")
const inputEmail = document.querySelector("#input-email")
const inputMessage = document.querySelector("#input-message")
const formContact = document.querySelector("#form-contact")

formContact.addEventListener("submit", (event) => {
    event.preventDefault()
    const message = `¿Quieres enviar el siguiente mensaje? 
    nombre: ${inputName.value}
    correo: ${inputEmail.value}
    mensaje: ${inputMessage.value}
    `
    if (confirm(message)) {
        alert("Mensaje enviado - pronto te contactaremos")
    }
}, true)


