import { initFooterAnimation } from "../../files/components/footer.js";
import { simpleMenu } from "../../files/components/simple-menu.js";

let lenis;

document.addEventListener("DOMContentLoaded", () => {
  lenis = new Lenis({
    lerp: 0.05,
    smoothWheel: true,
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  lenis.stop();
  initFooterAnimation();
  simpleMenu(lenis);
});
// mouse-config

const mouse = {
  mouseX: 0,
  mouseY: 0,
};
let previewX = 0;
let previewY = 0;
window.addEventListener("mousemove", (e) => {
  mouse.mouseX = e.clientX;
  mouse.mouseY = e.clientY;
});
const tick = () => {
  previewX += (mouse.mouseX - previewX) / 17;
  previewY += (mouse.mouseY - previewY) / 17;
  gsap.set(".cursor", {
    x: previewX,
    y: previewY,
  });
  gsap.set(".learn-more", {
    x: previewX,
    y: previewY,
  });
  requestAnimationFrame(tick);
};
tick();
// Welcome-page config

gsap.set(".text-welcome", {
  opacity: 0,
});
gsap.to(".text-welcome", {
  opacity: 1,
  duration: 0.8,
});

gsap.to(".text-welcome", {
  opacity: 0,
  duration: 0.8,
  delay: 0.8,
});
gsap.to(".welcome-page", {
  opacity: 0,
  duration: 0.8,
  delay: 1.6,
  onComplete: () => {
    lenis.start();
  },
});

// Configurador de hora

const timeElement = document.querySelector(".time");
function refreshTime(timer) {
  timeElement.textContent = `${timer}PM`;
}
function atualizarHoraLocal() {
  const options = {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  function atualizar() {
    const horaAtual = new Date().toLocaleTimeString("pt-BR", options);
    refreshTime(horaAtual);
  }

  setInterval(atualizar, 1000);

  atualizar();
}

atualizarHoraLocal();

// service

gsap.registerPlugin(ScrollTrigger);

const observe = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const elements = document.querySelectorAll(".hidden");
elements.forEach((el) => observe.observe(el));

gsap.set(".img-services", {
  y: "-50%",
});
gsap.to(".img-services", {
  y: "50%",
  ease: "none",
  scrollTrigger: {
    trigger: ".services",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
});

// Footer

// test
gsap.set(".goodbye-page", {
  opacity: 0,
});
const nav = document.querySelector("nav");
const navLinks = nav.children;
const navLinksArray = [...navLinks];

navLinksArray.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    gsap.to(".goodbye-page", {
      opacity: 1,
      duration: 0.8,
    });
    setTimeout(() => {
      window.location.href = link.href;
    }, 1000);
  });
});

// config form

const nameInput = document.querySelector(".name-input");
const phoneInput = document.querySelector(".phone-input");
const buttonForm = document.querySelector(".continue");
const emailValue = document.querySelector(".email-value");
console.log(emailValue);

let nameStatus = false;
let phoneStatus = false;

const MIN_NAME_LENGTH = 3;
const MIN_PHONE_LENGTH = 9;

const verifyInput = (item) => {
  const valueLength = item.value.length;
  if (item.dataset.name) {
    nameStatus = valueLength >= MIN_NAME_LENGTH;
  } else if (item.dataset.phone) {
    phoneStatus = valueLength >= MIN_PHONE_LENGTH;
  }
};

const getButtomForm = () => {
  if (nameStatus && phoneStatus) {
    buttonForm.disabled = false;
  } else {
    buttonForm.disabled = true;
  }
};

nameInput.addEventListener("input", () => {
  verifyInput(nameInput);
  getButtomForm();
});
phoneInput.addEventListener("input", () => {
  verifyInput(phoneInput);
  getButtomForm();
});
class Persona {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}
buttonForm.addEventListener("click", (e) => {
  e.preventDefault();

  const persona = new Persona(
    nameInput.value,
    emailValue.value,
    phoneInput.value
  );
  localStorage.setItem("personaData", JSON.stringify(persona));

  gsap.to(".goodbye-page", {
    opacity: 1,
    duration: 0.3,
    onComplete: () => {
      window.location.href = "/pages/submit";
    },
  });
});
