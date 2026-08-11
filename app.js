const chat = document.querySelector(".chat-container");
const input = document.querySelector(".area input");
const button = document.querySelector(".area button");
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent";

button.addEventListener("click", sendMessage);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        sendMessage();
    }
});

async function sendMessage() {
    const message = input.value.trim();
    if (!message) return;

    // Add user message
    const userMessage = document.createElement("div");
    userMessage.className = "user";
    userMessage.textContent = message;
    chat.appendChild(userMessage);
    input.value = "";

    // Add loading message
    const loading = document.createElement("div");
    loading.className = "bot loading";
    loading.textContent = "Thinking...";
    chat.appendChild(loading);
    chat.scrollTop = chat.scrollHeight;
    button.disabled = true;
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: message
                    }]
                }]
            })
        });
        const data = await response.json();
        loading.remove();
        if (!response.ok) {
            const errorMessage =
                (data && data.error && data.error.message) ||
                `Request failed with status ${response.status}`;
            addBotMessage("❌ " + errorMessage);
            return;
        }
        if (
            data.candidates &&
            data.candidates.length > 0 &&
            data.candidates[0].content &&
            data.candidates[0].content.parts &&
            data.candidates[0].content.parts.length > 0
        ) {
            const reply =
                data.candidates[0].content.parts[0].text;
            addBotMessage(reply);
        } else {
            addBotMessage("No response was generated.");
        }

    } catch (error) {
        console.error("Error:", error);
        if (loading.parentNode) {
            loading.remove();
        }
        addBotMessage(
            "❌ Unable to connect to Gemini."
        );
    } finally {
        button.disabled = false;
        input.focus();
        chat.scrollTop = chat.scrollHeight;
    }
}

// Add bot message
function addBotMessage(text) {
    const botMessage = document.createElement("div");
    botMessage.className = "bot";
    botMessage.textContent = text;
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
}