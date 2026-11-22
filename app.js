const chat = document.querySelector(".chat-container");
const input = document.querySelector(".area input");
const button = document.querySelector(".area button");

const demoResponses = [
  {
    match: ["html", "css", "javascript", "web"],
    reply: "This demo models a responsive chat interface built with HTML, CSS, and vanilla JavaScript. In a real application, a trusted server-side proxy would call an AI provider without exposing credentials in browser code."
  },
  {
    match: ["safe", "security", "privacy", "key"],
    reply: "This educational demo processes messages locally in your browser. It has no API key, sign-in form, personal-data form, analytics, or chat-history storage."
  },
  {
    match: ["hello", "hi", "hey"],
    reply: "Hello! This is a local interface demo. Try asking about the HTML, CSS, JavaScript, or safety model used by the project."
  }
];

button.addEventListener("click", sendMessage);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});

function sendMessage() {
  const message = input.value.trim();
  if (!message) return;

  const userMessage = document.createElement("div");
  userMessage.className = "user";
  userMessage.textContent = message;
  chat.appendChild(userMessage);
  input.value = "";

  const loading = document.createElement("div");
  loading.className = "bot loading";
  loading.textContent = "Thinking...";
  chat.appendChild(loading);
  chat.scrollTop = chat.scrollHeight;
  button.disabled = true;

  window.setTimeout(() => {
    loading.remove();
    const normalized = message.toLowerCase();
    const match = demoResponses.find((response) => response.match.some((keyword) => normalized.includes(keyword)));
    addBotMessage(
      match?.reply ||
        "This is a local educational demo. Your message was processed in this browser and was not sent to an AI service."
    );
    button.disabled = false;
    input.focus();
    chat.scrollTop = chat.scrollHeight;
  }, 450);
}

function addBotMessage(text) {
  const botMessage = document.createElement("div");
  botMessage.className = "bot";
  botMessage.textContent = text;
  chat.appendChild(botMessage);
  chat.scrollTop = chat.scrollHeight;
}
