//Setando os valores guardados no localstorage

import { cursor } from "../../files/components/cursor.js";
cursor();

const SavedProfile = JSON.parse(localStorage.getItem("personaData"));

const currentEmail = document.querySelector(".email");
const currentPhone = document.querySelector(".number");

currentEmail.innerHTML = SavedProfile.email;
currentPhone.innerHTML = SavedProfile.phone;

// Animações
const firshNameText = document.querySelector(".firsh-name");
const firshName = SavedProfile.name.split(" ")[0];
firshNameText.innerHTML = firshName;

gsap.set(".firsh-text", {
  opacity: 0,
});
gsap.set(".second-text", {
  opacity: 0,
});
gsap.to(".firsh-text", {
  opacity: 1,
  duration: 1,
});
gsap.to(".firsh-text", {
  opacity: 0,
  duration: 1,
  delay: 1.8,
});

gsap.to(".second-text", {
  opacity: 1,
  duration: 1,
  delay: 2.8,
});
gsap.to(".second-text", {
  opacity: 0,
  duration: 1,
  delay: 5.8,
});
gsap.to(".reveal-Page", {
  opacity: 0,
  delay: 6.8,
});

// Contagem de caracteres ---

const buttomForm = document.querySelector(".continue");
const textArea = document.querySelector(".textarea");
const subject = document.querySelector(".subject");
const limitCharTEXTAREA = document.querySelector(".limit-char-textarea");
const limitCharSubject = document.querySelector(".limit-char-subject");

let VALIDATION_CHAR_OF_TEXTAREA = 20;
let VALIDATION_CHAR_OF_SUBJECT = 10;

let valOftextArea = false;
let valOfSubject = false;

const validateObserver = (item) => {
  if (item.classList.contains("textarea")) {
    valOftextArea = item.value.length >= VALIDATION_CHAR_OF_TEXTAREA;
  } else if (item.classList.contains("subject")) {
    valOfSubject = item.value.length >= VALIDATION_CHAR_OF_SUBJECT;
  }
};

const characterObserver = (item) => {
  if (item.classList.contains("textarea")) {
    limitCharTEXTAREA.innerHTML = `${item.value.length}/950`;
  } else if (item.classList.contains("subject")) {
    limitCharSubject.innerHTML = `${item.value.length}/50`;
  }
};
const getValidateButton = () => {
  if (valOftextArea && valOfSubject) {
    buttomForm.disabled = false;
  } else {
    buttomForm.disabled = true;
  }
};
const getValidateChar = () => {
  if (valOftextArea) {
    limitCharTEXTAREA.classList.remove("no-enabled");
  } else {
    limitCharTEXTAREA.classList.add("no-enabled");
  }
  if (valOfSubject) {
    limitCharSubject.classList.remove("no-enabled");
  } else {
    limitCharSubject.classList.add("no-enabled");
  }
};

textArea.addEventListener("input", () => {
  characterObserver(textArea);
  validateObserver(textArea);
  getValidateButton();
  getValidateChar();
});
subject.addEventListener("input", () => {
  characterObserver(subject);
  validateObserver(subject);
  getValidateButton();
  getValidateChar();
});

emailjs.init({
  publicKey: "og5hvhtCDae1ODhL_",
  blockHeadless: true,
});

// Fim da configuração
gsap.set(".goodbye-page", {
  filter: "blur(20px)",
  opacity: 0,
});
gsap.set(".text-end-goodbye", {
  opacity: 0,
});

buttomForm.addEventListener("click", async (e) => {
  e.preventDefault();

  // Mostrar estado de carregamento
  buttomForm.disabled = true;
  buttomForm.innerHTML = "Sending...";

  try {
    // Criar objeto de contato
    const contactdata = {
      from_name: SavedProfile.name,
      from_email: SavedProfile.email,
      phone: SavedProfile.phone,
      message: textArea.value,
      subject: subject.value,
      date: new Date().toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    console.log("Dados sendo enviados:", contactdata);

    const response = await emailjs.send(
      "service_9qmsmfg",
      "template_gqt4sim",
      contactdata
    );

    console.log("Email enviado com sucesso!", response);

    textArea.value = "";
    subject.value = "";
    characterObserver(subject);
    validateObserver(subject);
  } catch (error) {
    console.error("Erro ao enviar:", error);
    alert(`Falha no envio: ${error.text || "Erro desconhecido"}`);
  } finally {
    gsap.to(".goodbye-page", {
      filter: "blur(0px)",
      opacity: 1,
      duration: 1,
    });
    gsap.to(".text-end-goodbye", {
      opacity: 1,
      duration: 1,
      delay: 1,
    });
    gsap.to(".text-end-goodbye", {
      opacity: 0,
      duration: 2,
      delay: 4,
      onComplete: () => {
        window.history.back();
        localStorage.clear();
      },
    });
  }
});
