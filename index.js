const chatInput = document.querySelector(".chat-input textarea");

const sendChatBtn = document.querySelector(".chat-input span");
const chatBox = document.querySelector(".chat-box");

let userMessage;
const API_KEY ="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";

const createChatLi = ( message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p> ${message} </p>`: `<span> <i class="fas fa-robot"></i>  </span>
    <p> ${message} </p>`
    chatLi.innerHTML = chatContent;
    return chatLi;

}

const generateResponse = () => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
              {
                "role": "user",
                "content": userMessage }]
        })
    }
}


fetch handleChat(API_URL, requestOptions).then(res => res.json()).thrn(data => {
    console.log(data);
}).catch((error) => {
    console.log(error);
}
)

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;
    chatBox.appendChild(createChatLi(userMessage, "outgoing"));

    setTimeout(()=> {
        chatBox.appendChild(createChatLi("Thinking...", "incoming"));
        generateResponse();
    }, 600);
}

sendChatBtn.addEventListener("click", handleChat);
