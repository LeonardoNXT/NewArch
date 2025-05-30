import { menuDefaultPC } from "../../../files/components/default-menu.js";
import { simpleMenu } from "../../../files/components/simple-menu.js";

const sendBotttom = document.querySelector(".send-button");
const form = document.querySelector(".form");
const inputAsk = document.querySelector(".input-ask");
const chat = document.querySelector(".chat");
let lenis;
let isValidInput = true;

window.onload = () => {
  getUsers();
  lenis = new Lenis({
    lerp: 0.05,
    smoothwheel: true,
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  simpleMenu();
  menuDefaultPC();
};

const fetchAPICHATGPT = async (content) => {
  try {
    const response = await fetch("https://newarch.onrender.com/ai/chat", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: content,
    });

    const data = await response.json();
    createChatAI(data.content);
    if (!response.ok) throw new Error(await response.text());
  } catch (error) {
    const text = JSON.parse(error.message);
    console.log(text.error, ".", text.solution);
  }
};
const createLoading = () => {
  const loading = document.createElement("p");
  loading.textContent = "Carregando";
  loading.classList.add("loading");
  chat.appendChild(loading);
  gsap.set(loading, {
    opacity: 0,
  });
  gsap.to(loading, 0.3, {
    opacity: 1,
  });
};
async function getUsers() {
  try {
    const response = await fetch("https://newarch.onrender.com/users/", {
      credentials: "include", // Envia o cookie automaticamente
    });
    if (!response.ok) {
      throw new Error(await response.text());
    }
    const data = await response.json();
    configPage(data);
    gsap.to(".startpageDiv", 1, {
      opacity: 0,
      delay: 1,
    });
  } catch (error) {
    const text = JSON.parse(error.message);
    console.log(text.error, ".", text.solution);
    const tl = gsap.timeline();
    tl.to(".not-logged", {
      duration: 1,
      opacity: 1,
    }).to(".not-logged", {
      opacity: 0,
      duration: 1,
      delay: 1,
      onComplete: () => {
        window.location.href = "/pages/users/login/";
      },
    });
  }
}
function configPage(data) {
  document.querySelector(".user").textContent = data.user.name.split(" ")[0];
}
inputAsk.addEventListener("input", () => {
  if (inputAsk.value.length > 0 && isValidInput == true) {
    sendBotttom.removeAttribute("disabled");
  } else {
    sendBotttom.setAttribute("disabled", "disabled");
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const content = {
    mensage: inputAsk.value,
  };
  const contentJSON = JSON.stringify(content);
  gsap.to(".initial-introduction", 0.3, {
    opacity: 0,
  });
  fetchAPICHATGPT(contentJSON);
  createChatPerson(content.mensage);
  createLoading();
  inputAsk.value = "";
});

const createChatPerson = (content) => {
  isValidInput = false;
  sendBotttom.setAttribute("disabled", "disabled");
  const chatConteinerPerson = document.createElement("div");
  chatConteinerPerson.classList.add("chat-conteiner-person");
  const chatPerson = document.createElement("div");
  chatPerson.classList.add("chat-person");
  const paragraf = document.createElement("p");
  paragraf.textContent = content;
  chatConteinerPerson.appendChild(chatPerson);
  chatPerson.appendChild(paragraf);
  chat.appendChild(chatConteinerPerson);
  gsap.set(chatPerson, {
    opacity: 0,
  });
  gsap.to(chatPerson, 0.3, {
    opacity: 1,
  });
};
const createChatAI = (content) => {
  isValidInput = true;
  const chatConteinerAI = document.createElement("div");
  chatConteinerAI.classList.add("chat-conteiner-ai");
  const chatAI = document.createElement("div");
  chatAI.classList.add("chat-ai");
  chatConteinerAI.appendChild(chatAI);
  chatAI.innerHTML = content;
  chat.appendChild(chatConteinerAI);
  gsap.set(chatAI, {
    opacity: 0,
  });
  gsap.to(chatAI, 0.3, {
    opacity: 1,
  });
  gsap.to(".loading", 0.3, {
    opacity: 0,
  });
  lenis.scrollTo("max");
};
