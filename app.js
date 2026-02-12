// ================== SAMPLE DATA ==================
const SAMPLE_DISEASES = [
  {
    id: "anxiety",
    name: "Anxiety Disorders",
    category: "mental health",
    severity: "moderate",
    tags: ["mental health"],
    symptoms: ["Excessive worry", "Restlessness", "Fatigue", "Irritability"],
    precautions: [
      "Practice stress management",
      "Maintain social connections",
      "Exercise regularly",
      "Limit caffeine",
    ],
    description:
      "Anxiety disorders involve excessive fear and worry. Treatment often includes psychotherapy, lifestyle changes, and sometimes medication.",
  },
  {
    id: "cold",
    name: "Common Cold",
    category: "infectious",
    severity: "mild",
    tags: ["infectious"],
    symptoms: ["Runny nose", "Sore throat", "Cough", "Sneezing"],
    precautions: [
      "Wash hands frequently",
      "Avoid close contact with sick individuals",
      "Rest and fluids"
    ],
    description:
      "A viral infection of the upper respiratory tract. Generally self-limiting; symptomatic care is recommended.",
  },
  {
    id: "diabetes2",
    name: "Type 2 Diabetes",
    category: "chronic",
    severity: "moderate",
    tags: ["chronic"],
    symptoms: ["Increased thirst", "Frequent urination", "Fatigue", "Blurred vision"],
    precautions: [
      "Maintain healthy weight",
      "Exercise regularly",
      "Healthy diet"
    ],
    description:
      "A metabolic condition characterized by high blood sugar. Lifestyle changes and medications manage the condition.",
  },
  {
    id: "flu",
    name: "Influenza (Flu)",
    category: "infectious",
    severity: "moderate",
    tags: ["infectious"],
    symptoms: ["Fever", "Chills", "Fatigue", "Cough", "Sore throat"],
    precautions: [
      "Annual flu vaccination",
      "Good hygiene practices",
      "Avoid contact with infected individuals"
    ],
    description: "The flu is a contagious respiratory illness caused by influenza viruses.",
  },
  {
    id: "covid19",
    name: "COVID-19",
    category: "infectious",
    severity: "severe",
    tags: ["infectious", "pandemic"],
    symptoms: [
      "Fever",
      "Cough",
      "Loss of taste or smell",
      "Shortness of breath",
      "Fatigue"
    ],
    precautions: [
      "Vaccination",
      "Wearing masks",
      "Hand hygiene",
      "Social distancing"
    ],
    description: "COVID-19 is a contagious disease caused by the SARS-CoV-2 virus.",
  },
  {
    id: "malaria",
    name: "Malaria",
    category: "infectious",
    severity: "severe",
    tags: ["infectious", "mosquito-borne"],
    symptoms: ["Fever", "Chills", "Sweats", "Fatigue"],
    precautions: [
      "Use mosquito nets",
      "Use repellents",
      "Anti-malarial medication"
    ],
    description: "A mosquito-borne disease caused by parasites.",
  },
  {
    id: "dengue",
    name: "Dengue",
    category: "infectious",
    severity: "severe",
    tags: ["infectious", "mosquito-borne"],
    symptoms: [
      "High fever",
      "Severe headache",
      "Pain behind eyes",
      "Joint and muscle pain"
    ],
    precautions: [
      "Avoid mosquito bites",
      "Eliminate mosquito breeding grounds",
      "Wear protective clothing"
    ],
    description: "A viral infection spread by mosquitoes.",
  },
  {
    id: "hypertension",
    name: "Hypertension (High Blood Pressure)",
    category: "cardiovascular",
    severity: "moderate",
    tags: ["cardiovascular"],
    symptoms: [
      "Headache",
      "Shortness of breath",
      "Nosebleeds (sometimes none)"
    ],
    precautions: [
      "Reduce salt intake",
      "Exercise regularly",
      "Maintain healthy weight",
      "Avoid smoking and alcohol"
    ],
    description: "A condition where the force of blood against artery walls is too high.",
  },
  {
    id: "heart_attack",
    name: "Heart Attack",
    category: "cardiovascular",
    severity: "severe",
    tags: ["cardiovascular", "emergency"],
    symptoms: [
      "Chest pain",
      "Shortness of breath",
      "Cold sweats",
      "Nausea"
    ],
    precautions: [
      "Eat a heart-healthy diet",
      "Avoid smoking",
      "Manage stress",
      "Exercise regularly"
    ],
    description: "Occurs when blood flow to the heart is blocked, requiring immediate care.",
  },
  {
    id: "stroke",
    name: "Stroke",
    category: "neurological",
    severity: "severe",
    tags: ["neurological", "emergency"],
    symptoms: [
      "Sudden numbness or weakness",
      "Trouble speaking",
      "Loss of balance"
    ],
    precautions: [
      "Control blood pressure",
      "Avoid smoking",
      "Exercise regularly",
      "Healthy diet"
    ],
    description: "A medical emergency where blood supply to part of the brain is interrupted.",
  },
  {
    id: "asthma",
    name: "Asthma",
    category: "respiratory",
    severity: "moderate",
    tags: ["respiratory"],
    symptoms: ["Wheezing", "Shortness of breath", "Chest tightness", "Coughing"],
   precautions: [
      "Avoid allergens",
      "Maintain clean air",
      "Follow medication plans"
    ],
    description: "Asthma is a chronic condition that affects the airways, causing breathing difficulty.",
  },
  {
    id: "cancer",
    name: "Cancer",
    category: "chronic",
    severity: "severe",
    tags: ["chronic"],
    symptoms: [
      "Unexplained weight loss",
      "Fatigue",
      "Lumps",
      "Changes in skin"
    ],
    precautions: [
      "Regular screenings",
      "Avoid tobacco and alcohol",
      "Healthy diet and exercise"
    ],
    description: "A disease where abnormal cells grow uncontrollably.",
  },
  {
    id: "pneumonia",
    name: "Pneumonia",
    category: "respiratory",
    severity: "moderate",
    tags: ["respiratory", "infectious"],
    symptoms: ["Cough", "Fever", "Chills", "Difficulty breathing"],
    precautions: [
      "Get vaccinated",
      "Good hygiene",
      "Avoid smoking"
    ],
    description: "An infection that inflames the air sacs in the lungs.",
  },
  {
    id: "tuberculosis",
    name: "Tuberculosis (TB)",
    category: "infectious",
    severity: "severe",
    tags: ["infectious"],
    symptoms: [
      "Persistent cough",
      "Weight loss",
      "Night sweats",
      "Fever"
    ],
    precautions: [
      "Vaccination (BCG)",
      "Early diagnosis",
      "Complete medication courses"
    ],
    description: "A serious infectious disease that mainly affects the lungs.",
  }
];

const SAMPLE_TIPS = [
  {
    id: "nutrition",
    title: "Nutrition",
    bullets: [
      "Eat a variety of colorful fruits and vegetables daily",
      "Choose whole grains over refined grains",
      "Include lean proteins in your meals",
      "Limit processed foods and added sugars",
      "Stay hydrated with plenty of water",
    ],
  },
  {
    id: "activity",
    title: "Physical Activity",
    bullets: [
      "Aim for at least 150 minutes of moderate exercise weekly",
      "Include strength training exercises twice a week",
      "Take regular breaks from sitting throughout the day",
      "Find physical activities you enjoy",
      "Start slowly and gradually increase intensity",
    ],
  },
];




const diseaseGrid = document.getElementById("diseaseGrid");
const searchInput = document.getElementById("searchInput");
const conditionsCount = document.getElementById("conditionsCount");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalTags = document.getElementById("modalTags");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");
const healthTipsDiv = document.getElementById("healthTips");

const chatToggle = document.getElementById("chat-toggle");
const chatOverlay = document.getElementById("chat-overlay");
const closeChat = document.getElementById("close-chat");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

const askButton = document.getElementById("askButton");
const questionInput = document.getElementById("questionInput");
const outputArea = document.getElementById("outputArea");
const loadingIndicator = document.getElementById("loadingIndicator");

// ================== FUNCTIONS ==================
function renderDiseases(list) {
  diseaseGrid.innerHTML = "";
  conditionsCount.textContent = `Showing ${list.length} conditions`;
  list.forEach(disease => {
    const card = document.createElement("div");
    card.className = "p-4 border rounded-md shadow hover:shadow-lg cursor-pointer bg-white transition";
    card.innerHTML = `<h3 class="font-semibold text-lg">${disease.name}</h3>
                      <p class="text-slate-500 text-sm">Category: ${disease.category}</p>
                      <p class="text-slate-400 text-sm">Severity: ${disease.severity}</p>`;
    card.addEventListener("click", () => openModal(disease));
    diseaseGrid.appendChild(card);
  });
}

function renderHealthTips() {
  SAMPLE_TIPS.forEach(tip => {
    const card = document.createElement("div");
    card.className = "p-4 border rounded-md shadow hover:shadow-lg bg-white transition";
    card.innerHTML = `<h4 class="font-semibold mb-2">${tip.title}</h4>
                      <ul class="list-disc list-inside text-sm text-slate-600">
                        ${tip.bullets.map(b => `<li>${b}</li>`).join("")}
                      </ul>`;
    healthTipsDiv.appendChild(card);
  });
}

function openModal(disease) {
  modal.classList.remove("hidden");
  modalTitle.textContent = disease.name;
  modalTags.textContent = `Category: ${disease.category} | Severity: ${disease.severity}`;
  modalContent.innerHTML = `<div>
      <h4 class="font-semibold mb-1">Description</h4><p>${disease.description}</p>
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
    </div>`;
}

closeModal.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", e => { if(e.target===modal) modal.classList.add("hidden"); });

searchInput.addEventListener("input", () => {
  const val = searchInput.value.toLowerCase();
  const filtered = SAMPLE_DISEASES.filter(d =>
    d.name.toLowerCase().includes(val) ||
    d.category.toLowerCase().includes(val) ||
    d.tags.join(" ").toLowerCase().includes(val)
  );
  renderDiseases(filtered);
});

renderDiseases(SAMPLE_DISEASES);
renderHealthTips();

// Ensure chat is hidden by default
chatOverlay.classList.add("hidden");

// Open chatbot
chatToggle.addEventListener("click", () => {
  chatOverlay.classList.remove("hidden");
  chatOverlay.style.display = "flex";
});

// Close chatbot
closeChat.addEventListener("click", () => {
  chatOverlay.classList.add("hidden");
  chatOverlay.style.display = "none";
});

function appendMessage(text, sender="bot") {
  const div = document.createElement("div");
  div.className = sender==="bot"?"bot-message":"user-message";
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ================== GEMINI API ==================
const GEMINI_API_KEY = ""

const MODEL_NAME = "gemini-2.5-flash";
const systemInstructionText = "You are a Disease awareness bot. You will only reply to questions related to diseases.And you can also tell about medical insurance,medicine,";

async function sendToGemini(message) {
  appendMessage(message,"user");
  appendMessage("Typing...","bot");
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;
  const requestBody = {
    contents:[{role:"user",parts:[{text:message}]}],
    systemInstruction:{parts:[{text:systemInstructionText}]}
  };
  try {
    const res = await fetch(API_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(requestBody)});
    const data = await res.json();
    const typingMsg = chatMessages.querySelector(".bot-message:last-child");
    if(typingMsg && typingMsg.textContent==="Typing...") typingMsg.remove();
    if(data.candidates?.[0]?.content?.parts?.[0]?.text){
      appendMessage(data.candidates[0].content.parts[0].text,"bot");
    } else appendMessage("No response from AI","bot");
  } catch(err){
    appendMessage("Error: "+err.message,"bot");
  }
}

// Chat input
sendBtn.addEventListener("click",()=>{ const msg=chatInput.value.trim(); if(msg){ chatInput.value=""; sendToGemini(msg);} });
chatInput.addEventListener("keypress",e=>{ if(e.key==="Enter"&&!e.shiftKey){ e.preventDefault(); sendBtn.click(); } });

// ================== GEMINI CODING QUESTION ==================
askButton.addEventListener("click", async () => {
  const question = questionInput.value.trim();
  if(!question){ outputArea.innerHTML="Please enter a coding question."; return;}
  outputArea.innerHTML=""; loadingIndicator.style.display="block"; askButton.disabled=true;
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;
  const requestBody = {
  contents: [
    {
      role: "user",
      parts: [{ text: question }]
    }
  ],
  systemInstruction: {
    parts: [
      { text: "You are a Disease awareness bot. You will only reply to questions related to diseases." }
    ]
  }
};

try {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody)
  });

  if (!res.ok) throw new Error(`API Error: ${res.status}`);

  const data = await res.json();
  const answerText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No answer.";

  outputArea.innerHTML = answerText.replace(
    /(```[\s\S]*?```)|(`[^`]+`)/g,
    m =>
      m.startsWith("```")
        ? `<pre><code>${m.replace(/```/g, '')}</code></pre>`
        : `<code>${m.replace(/`/g, '')}</code>`
  );
} catch (err) {
  outputArea.innerHTML = "Error: " + err.message;
} finally {
  askButton.disabled = false;
  loadingIndicator.style.display = "none";
}

});
