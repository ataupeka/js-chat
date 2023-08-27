const chatInput = document.querySelector(".chat-input textarea");

const sendChatBtn = document.querySelector(".chat-input span");

let userMessage;

const createChatLi = ( message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p> ${message} </p>`: `<span> <i class="fas fa-robot"></i>  </span>
    <p> ${message} </p>`
    chatLi.innerHTML = chatContent;
    return chatLi;

}


const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;
    createChatLi(userMessage, "outgoing");
}

sendChatBtn.addEventListener("click", handleChat);
