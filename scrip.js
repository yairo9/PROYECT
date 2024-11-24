// Primero definimos las variables
let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');

// Evento de clic en el botón de menú
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    // Eliminamos las clases "active" de los otros elementos si están definidos
    if (searchForm) searchForm.classList.remove('active');
    if (cartItem) cartItem.classList.remove('active');
};

// Evento de clic en el botón de búsqueda
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    // Eliminamos las clases "active" de los otros elementos
    if (navbar) navbar.classList.remove('active');
    if (cartItem) cartItem.classList.remove('active');
};

// Evento de clic en el botón de carrito
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    // Eliminamos las clases "active" de los otros elementos
    if (navbar) navbar.classList.remove('active');
    if (searchForm) searchForm.classList.remove('active');
};

// Evento de scroll en la ventana
window.onscroll = () => {
    // Eliminamos todas las clases "active" al hacer scroll
    if (navbar) navbar.classList.remove('active');
    if (searchForm) searchForm.classList.remove('active');
    if (cartItem) cartItem.classList.remove('active');
};
//registro de citas
// Función para agendar citas
function agendarCita() {
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const mensaje = document.getElementById('mensaje');

    if (nombre && fecha && hora) {
        mensaje.innerHTML = `¡Cita agendada para ${nombre} el ${fecha} a las ${hora}!`;
        // mensaje.innerHTML ='!Cita agendada exitosamente';
        mensaje.style.color = "green";
        document.getElementById("citaForm").reset();
    } else {
        mensaje.innerHTML = "Por favor, completa todos los campos.";
        mensaje.style.color = "red";
    }
}
//fin

// INICIO REGISTRO
 //Función que maneja el registro de usuario
 function registrarUsuario() {
     // Obtiene los valores de los campos de entrada del formulario
     const nombreRegistro = document.getElementById('nombreRegistro').value; // Valor del nombre de usuario
     const email = document.getElementById('email').value; // Valor del correo
     const password = document.getElementById('password').value; // Valor de la contraseña
     // Elemento donde se mostrará el mensaje de confirmación o error
     const mensajeRegistro = document.getElementById('mensajeRegistro');
     // Comprueba si todos los campos tienen valores
     if (nombreRegistro && email && password) {
         // Si los campos están completos, muestra un mensaje de éxito
         mensajeRegistro.innerHTML = `¡Registro exitoso, ${nombreRegistro}!`;
         mensajeRegistro.innerHTML = `¡Registro exitoso, ${nombreRegistro}!`;
         mensajeRegistro.style.color = "green"; // Cambia el color del mensaje a verde
         document.getElementById("registroForm").reset(); // Limpia el formulario después del registro
     } else {
         // Si falta algún campo, muestra un mensaje de error
         mensajeRegistro.innerHTML = "Por favor, completa todos los campos.";
         mensajeRegistro.style.color = "red"; // Cambia el color del mensaje a rojo
     }
 }

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active'); 
}
 
//FIN REGISTRO

// Elementos del chat
const chatbox = document.getElementById("chatbox");
const chatContainer = document.getElementById("chat-container");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const openChatButton = document.getElementById("open-chat-logo");  // Cambiado a abrir con el logo de WhatsApp
const closeChatButton = document.getElementById("close-chat");

let isChatboxOpen = false;  // Se inicia con el chat cerrado

// Función para alternar la visibilidad del chat
function toggleChatbox() {
    chatContainer.classList.toggle("hidden");
    isChatboxOpen = !isChatboxOpen; // Cambiar estado del chat
}

// Abrir el chat al hacer clic en el logo de WhatsApp
openChatButton.addEventListener("click", toggleChatbox);

// Cerrar el chat
closeChatButton.addEventListener("click", toggleChatbox);

// Enviar el mensaje del usuario
sendButton.addEventListener("click", function () {
    const userMessage = userInput.value;
    if (userMessage.trim() !== "") {
        addUserMessage(userMessage);
        respondToUser(userMessage);
        userInput.value = "";
    }
});

// Detectar la tecla "Enter" para enviar el mensaje
userInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const userMessage = userInput.value;
        addUserMessage(userMessage);
        respondToUser(userMessage);
        userInput.value = "";
    }
});

// Añadir el mensaje del usuario
function addUserMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("mb-2", "text-right");
    messageElement.innerHTML = `<p class="bg-green-500 text-white rounded-lg py-2 px-4 inline-block">${message}</p>`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Añadir el mensaje del bot
function addBotMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("mb-2");
    messageElement.innerHTML = `<p class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">${message}</p>`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Responder al usuario
function respondToUser(userMessage) {
    // Lógica del chatbot (puedes personalizar la respuesta aquí)
    setTimeout(() => {
        addBotMessage("Gracias por tu mensaje. ¿Te gustaría saber más sobre nuestros servicios de corte o productos?");
    }, 500);
}

// Al cargar la página, aseguramos que el chat esté vacío
document.addEventListener("DOMContentLoaded", function() {
    // Aseguramos que el chat comienza vacío y sin mensajes predeterminados
    chatbox.innerHTML = "";
});
