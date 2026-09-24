import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:""});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "symptoms of dengue?",
    config: {
      systemInstruction: "You are a Disease awareness bot . Your will only reply problem related to Disease .",
    },
  });
  console.log(response.text);
}

await main();








// ================== DOM ELEMENTS ==================
const diseaseGrid = document.getElementById("diseaseGrid");
const searchInput = document.getElementById("searchInput");
const conditionsCount = document.getElementById("conditionsCount");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalTags = document.getElementById("modalTags");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");
const healthTipsDiv = document.getElementById("healthTips");

// ================== FUNCTIONS ==================
function renderDiseases(list) {
  diseaseGrid.innerHTML = "";
  conditionsCount.textContent = `Showing ${list.length} conditions`;
  list.forEach(disease => {
    const card = document.createElement("div");
    card.className = "p-4 border rounded-md shadow hover:shadow-lg cursor-pointer bg-white transition";
    card.innerHTML = `
      <h3 class="font-semibold text-lg">${disease.name}</h3>
      <p class="text-slate-500 text-sm">Category: ${disease.category}</p>
      <p class="text-slate-400 text-sm">Severity: ${disease.severity}</p>
    `;
    card.addEventListener("click", () => openModal(disease));
    diseaseGrid.appendChild(card);
  });
}

function renderHealthTips() {
  SAMPLE_TIPS.forEach(tip => {
    const card = document.createElement("div");
    card.className = "p-4 border rounded-md shadow hover:shadow-lg bg-white transition";
    card.innerHTML = `
      <h4 class="font-semibold mb-2">${tip.title}</h4>
      <ul class="list-disc list-inside text-sm text-slate-600">
        ${tip.bullets.map(b => `<li>${b}</li>`).join("")}
      </ul>
    `;
    healthTipsDiv.appendChild(card);
  });
}

function openModal(disease) {
  modal.classList.remove("hidden");
  modalTitle.textContent = disease.name;
  modalTags.textContent = `Category: ${disease.category} | Severity: ${disease.severity}`;
  modalContent.innerHTML = `
    <div>
      <h4 class="font-semibold mb-1">Description</h4>
      <p>${disease.description}</p>
    </div>
    <div>
      <h4 class="font-semibold mb-1">Symptoms</h4>
      <ul class="list-disc list-inside text-sm text-slate-600">
        ${disease.symptoms.map(s => `<li>${s}</li>`).join("")}
      </ul>
      <h4 class="font-semibold mb-1 mt-2">Precautions</h4>
      <ul class="list-disc list-inside text-sm text-slate-600">
        ${disease.precautions.map(p => `<li>${p}</li>`).join("")}
      </ul>
    </div>
  `;
}

closeModal.addEventListener("click", () => modal.classList.add("hidden"));

// ================== SEARCH ==================
searchInput.addEventListener("input", () => {
  const val = searchInput.value.toLowerCase();
  const filtered = SAMPLE_DISEASES.filter(d => 
    d.name.toLowerCase().includes(val) || 
    d.category.toLowerCase().includes(val) ||
    d.tags.join(" ").toLowerCase().includes(val)
  );
  renderDiseases(filtered);
});

// ================== INIT ==================
renderDiseases(SAMPLE_DISEASES);
renderHealthTips();

// ================== CHAT ==================
const chatToggle = document.getElementById("chat-toggle");
const chatOverlay = document.getElementById("chat-overlay");
const closeChat = document.getElementById("close-chat");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

chatToggle.addEventListener("click", () => chatOverlay.classList.remove("hidden"));
closeChat.addEventListener("click", () => chatOverlay.classList.add("hidden"));

function appendMessage(text, sender="bot") {
  const div = document.createElement("div");
  div.className = sender === "bot" ? "bot-message" : "user-message";
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Simple simulated bot response
sendBtn.addEventListener("click", () => {
  const msg = chatInput.value.trim();
  if(!msg) return;
  appendMessage(msg, "user");
  chatInput.value = "";
  setTimeout(() => {
    appendMessage(`I received your message: "${msg}"`);
  }, 600);
});
chatInput.addEventListener("keypress", e => {
  if(e.key === "Enter") sendBtn.click();
});
  // ================== CHATBOT ==================

const GEMINI_API_KEY = "AIzaSyD8_dNKyc4sh807_-ufBJeJtgeR5rHY20k";
const MODEL_NAME = "gemini-2.5-flash";
sendBtn.addEventListener("click", async () => {
  const userMsg = chatInput.value.trim();
  if (!userMsg) return;

  appendMessage("user", userMsg);
  chatInput.value = "";
  appendMessage("bot", "Thinking...");

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: userMsg }] }],
          systemInstruction: {
            parts: [{
              text: "You are Zoiee, a friendly AI health assistant. Give only general wellness advice, not medical diagnoses."
            }]
          },
        }),
      }
    );

    const data = await response.json();
    const botReply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn’t understand that.";

    // Replace "Thinking..." with actual reply
    const lastBot = chatMessages.querySelectorAll(".bot-message");
    lastBot[lastBot.length - 1].textContent = botReply;
  } catch (err) {
    console.error(err);
    const lastBot = chatMessages.querySelectorAll(".bot-message");
    lastBot[lastBot.length - 1].textContent = "Error connecting to AI service.";
  }
});

// Enter key sends message
chatInput.addEventListener("keypress", e => {
  if(e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendBtn.click();
  }
});

