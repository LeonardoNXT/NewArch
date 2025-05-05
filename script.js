let lenis; // Declara a variável globalmente

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    location.reload();
  }
});

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
  document.body.classList.add("no-scroll");
});
gsap.registerPlugin(ScrollTrigger);
const word2 = document.querySelectorAll(".word2");
const word3 = document.querySelectorAll(".word3");
const word4 = document.querySelectorAll(".word4");
const namelogo = document.querySelectorAll(".name-logo");
gsap.from(".top-carousel, .center-carousel, .bottom-carousel", 3, {
  opacity: 0,
  filter: "blur(5px)",
  ease: "power3.inOut",
});
gsap.from(".top-carousel, .bottom-carousel", 2, {
  x: "100%",
  ease: "power2.inOut",
});
gsap.from(".center-carousel", 2, {
  x: "-100%",
  ease: "power4.inOut",
});
gsap.from(word2, 1, {
  opacity: 0,
  transform: "translateY(100%)",
  stagger: 0.04,
  ease: "power4.inOut",
});
gsap.from(word3, 1, {
  opacity: 0,
  transform: "translateY(100%)",
  stagger: 0.04,
  ease: "power3.inOut",
});
gsap.from(word4, 1, {
  opacity: 0,
  transform: "translateY(100%)",
  stagger: 0.04,
  ease: "power3.inOut",
});

const namelogoFiltered = Array.from(namelogo).filter(
  (element) => !element.classList.contains("center")
);

gsap.to(namelogoFiltered, {
  duration: 1,
  opacity: 0,
  ease: "power3.inOut",
  delay: 2,
});
gsap.to(namelogo, {
  duration: 1,
  opacity: 0,
  ease: "power3.inOut",
  delay: 6,
  onComplete: () => {
    document.body.classList.remove("no-scroll");
    lenis.start();
  },
});
gsap.to(".left-part-loading", 2, {
  left: "-50%",
  ease: "power3.inOut",
  delay: 3,
});
gsap.to(".right-part-loading", 2, {
  right: "-50%",
  ease: "power3.inOut",
  delay: 3,
});
gsap.from(".homepage", 2, {
  opacity: 0,
  ease: "power3.inOut",
  delay: 3,
});
const word5 = document.querySelectorAll(".fixed-min-logo");
gsap.from(word5, 1, {
  opacity: 0,
  ease: "power3.inOut",
  delay: 6.5,
  stagger: 0.4,
  onComplete: () => {
    const carouselInit = document.querySelector(".carousel-init");
    const loadingContent = document.querySelector(".loading-conteiner");
    carouselInit.remove();
    loadingContent.remove();
  },
});
gsap.to(word5, 2, {
  bottom: "110%",
  filter: "blur(5px)",
  ease: "power3.inOut",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".slider",
    start: "top bottom",
    scrub: true,
  },
});
gsap.from(".menu-toggle", 1, {
  opacity: 0,
  delay: 6.5,
});
const videosALLArray = document.querySelectorAll(".video");
const Observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.play();
    } else {
      entry.target.pause();
    }
  });
});
videosALLArray.forEach((video) => {
  Observer2.observe(video);
});
// Menu

let selection = document.querySelector(".menu-toggle");
let togglemenu = false;
let arrowMenu = gsap.utils.toArray(".arrow-menu");
function lockScroll() {
  lenis.stop(); // Pausa o Lenis
  document.body.classList.add("no-scroll");
}

function unlockScroll() {
  document.documentElement.classList.remove("no-scroll");
  document.body.classList.remove("no-scroll");
  lenis.start(); // Reativa o Lenis
}
const buttom = document.querySelectorAll(".text-menu-part");

function handleMouseEnter() {
  this.style.transform = "translateX(0px)";
  this.previousElementSibling.style.transform = "translateX(0px)";
}

function handleMouseLeave() {
  this.style.transform = "translateX(-64px)";
  this.previousElementSibling.style.transform = "translateX(-64px)";
}
selection.addEventListener("click", () => {
  if (togglemenu == false) {
    menuopen();
  } else {
    menuclose();
  }
  togglemenu = !togglemenu;
});

gsap.to(".background-video", {
  y: "25%",
  filter: "blur(20px)",
  scale: -0,
  opacity: 0.3,
  scrollTrigger: {
    trigger: ".homepage",
    start: "top top",
    end: "bottom top",
    scrub: 1,
  },
});
gsap.from(".video-slider", {
  opacity: 0,
  scale: 20,
});
gsap.to(".video-slider", {
  opacity: 1,
  scale: 1,
  scrollTrigger: {
    trigger: ".slider",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
  },
});

gsap.from(".text-slider-1", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".slider",
    start: "top top",
    end: "12.5% top",
    scrub: 1,
  },
});
gsap.to(".text-slider-1", {
  color: "transparent",
  scrollTrigger: {
    trigger: ".slider",
    start: "12.5% top",
    end: "25% top",
    scrub: 1,
  },
});

gsap.to(".text-slider-2", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".slider",
    start: "25% top",
    end: "37.5% top",
    scrub: 1,
  },
});

gsap.to(".text-slider-2", {
  color: "transparent",
  delay: 0.5,
  scrollTrigger: {
    trigger: ".slider",
    start: "37.5% top",
    end: "50% top",
    scrub: 1,
  },
});
gsap.to(".text-slider-3", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".slider",
    start: "50% top",
    end: "75% top",
    scrub: 1,
  },
});
const linksFlag = [
  "https://www.gov.br/agricultura/pt-br/assuntos/relacoes-internacionais/agro-mais-investimentos/imagens/bandeira-dos-estados-unidos.png/@@images/image.png",
  "https://www.gov.br/agricultura/pt-br/assuntos/relacoes-internacionais/agro-mais-investimentos/imagens/bandeira-do-brasil.png/@@images/image.png",
];
const imgLanguage = document.querySelector(".img-language");

if (
  window.location.pathname === "/index.html" ||
  window.location.pathname === "/"
) {
  imgLanguage.src = linksFlag[1];
} else {
  imgLanguage.src = linksFlag[0];
}

function changeLanguage(event) {
  event.preventDefault();

  gsap.to(".loading-menu-conteiner", {
    zIndex: 10000,
  });
  gsap.to(".main, .menu", 1, {
    filter: "blur(5px)",
    ease: "power3.inOut",
  });
  gsap.to(".left-part-loading-menu", 2, {
    left: "0%",
    ease: "power3.inOut",
  });
  gsap.to(".right-part-loading-menu", 2, {
    right: "0%",
    ease: "power3.inOut",
  });
  gsap.to(".right-part-loading-menu,.left-part-loading-menu", 1, {
    backgroundColor: "#000",
    delay: 2,
    ease: "power3.inOut",

    onComplete: () => {
      if (
        window.location.pathname === "/index.html" ||
        window.location.pathname === "/"
      ) {
        window.location.href = "./pt-br/";
      } else {
        window.location.href = "/";
      }
    },
  });

  console.log("Idioma alterado!");
}

gsap.set(".img-abt-2-item-1, .img-abt-2-item-2", {
  scale: 1.5,
  yPercent: -10,
});

gsap.to(".img-abt-2-item-1, .img-abt-2-item-2", {
  yPercent: 10,
  ease: "none",
  scrollTrigger: {
    trigger: ".aboutpage2",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
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

const historySection = document.querySelector(".img-abt-2-item-2");
historySection.addEventListener("mouseenter", () => {
  gsap.to(".cursor", {
    scale: 2,
  });
  gsap.to(".learn-more", {
    scale: 1,
  });
});

historySection.addEventListener("mouseleave", () => {
  gsap.to(".cursor", {
    scale: 1,
  });
  gsap.to(".learn-more", {
    scale: 0,
  });
});

// ProductPage
let heighttela = window.innerHeight;
window.addEventListener("resize", () => {
  heighttela = window.innerHeight;
});
gsap.to(".text-eco-place", {
  top: "90%",
  ease: "linear",
  scrollTrigger: {
    trigger: ".eco-project",
    start: `${heighttela}px bottom`,
    end: `${heighttela * 2}px top`,
    scrub: 1,
  },
});
gsap.set(".img-eco-place", {
  y: "-50%",
});
gsap.to(".img-eco-place", {
  y: "50%",
  ease: "linear",
  scrollTrigger: {
    trigger: ".test-div",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
});
const gridAreaProduct = document.querySelectorAll(".top-content-grid-area");
const bottomContentGrid = document.querySelector(".bottom-content-grid-area");
let toggleArk = false;

gridAreaProduct.forEach((item) => {
  const accordian = item.nextElementSibling;
  const momElement = item.parentElement;
  momElement.addEventListener("mouseenter", () => {
    if (accordian.style.maxHeight == "") {
      momElement.style.backgroundColor = "#f5f5f5";
    } else {
      return;
    }
    gsap.to(".cursor", {
      scale: 2,
    });
    gsap.to(".learn-more", {
      scale: 1,
    });
  });
  momElement.addEventListener("mouseleave", () => {
    if (accordian.style.maxHeight == "") {
      momElement.style.backgroundColor = "transparent";
    } else {
      return;
    }
    gsap.to(".cursor", {
      scale: 1,
    });
    gsap.to(".learn-more", {
      scale: 0,
    });
  });
  item.addEventListener("click", () => {
    if (accordian.style.maxHeight == "") {
      momElement.style.backgroundColor = "#f5f5f5";
      accordian.style.maxHeight = bottomContentGrid.scrollHeight + "px";
    } else {
      accordian.style.maxHeight = null;
      momElement.style.backgroundColor = "transparent";
    }
  });
});

const ecoHelp = document.querySelector(".test-div");
ecoHelp.addEventListener("mouseenter", () => {
  gsap.to(".cursor", {
    scale: 2,
  });
  gsap.to(".learn-more", {
    scale: 1,
  });
});
ecoHelp.addEventListener("mouseleave", () => {
  gsap.to(".cursor", {
    scale: 1,
  });
  gsap.to(".learn-more", {
    scale: 0,
  });
});
// test

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const elements = document.querySelectorAll(".hidden");
elements.forEach((el) => myObserver.observe(el));
const contact = document.querySelector(".contact-content");
// Contact
gsap.set(".contact-image", {
  y: "-50%",
  scale: 1.2,
  ease: "none",
});
gsap.to(".contact-image", {
  y: "50%",
  ease: "none",
  scrollTrigger: {
    trigger: ".contact-content",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
});
// Contact
const contactSection = document.querySelector(".contact-content");
contactSection.addEventListener("click", () => {
  gsap.to(".hidden-page", 1, {
    opacity: 1,
    onComplete: () => {
      window.location.href = "/pages/contact/";
    },
  });
});

// footer
contact.addEventListener("mouseenter", () => {
  gsap.to(".cursor", {
    scale: 2,
  });
  gsap.to(".learn-more", {
    scale: 1,
  });
});
contact.addEventListener("mouseleave", () => {
  gsap.to(".cursor", {
    scale: 1,
  });
  gsap.to(".learn-more", {
    scale: 0,
  });
});
gsap.set(".footer", {
  y: "-50%",
});
gsap.to(".footer", {
  y: "0%",
  ease: "none",
  scrollTrigger: {
    trigger: ".footer",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1,
  },
});
const newArchEndText = document.querySelector(".text-footer-end");
const textContentNWA = newArchEndText.textContent;
const splitTextNWA = textContentNWA.split("");
newArchEndText.innerHTML = "";
splitTextNWA.forEach((char) => {
  const divNewArchText = document.createElement("div");
  divNewArchText.classList.add("charFooter");
  divNewArchText.textContent = char;
  newArchEndText.appendChild(divNewArchText);
});
const body = document.querySelector("body");

gsap.set(".charFooter", {
  y: "-100%",
});
gsap.set(".text-footer-end", {
  y: "-10%",
});
gsap.to(".text-footer-end", {
  y: "0%",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".footer",
    start: "bottom bottom",
  },
});
const heightPercent = document.querySelector(".footer-conteiner").clientHeight;
gsap.to(".charFooter", {
  y: "0%",
  duration: 2,
  ease: "power4.out",
  stagger: 0.09,
  scrollTrigger: {
    trigger: ".footer-conteiner",
    start: `${heightPercent - 100}px bottom`,
    end: "bottom bottom",
  },
});

//menu-configurante
const startMenu = document.querySelector(".inicio-menu");
const contactMenu = document.querySelector(".contato-menu");
const aboutMenu = document.querySelector(".sobre-menu");
const projectMenu = document.querySelector(".projetos-menu");

const item = document.querySelector(".homepage");
const item2 = document.querySelector(".contact-content");
const item3 = document.querySelector(".aboutpage");
const item4 = document.querySelector(".eco-project");

const menuGridArea = document.querySelector(".menu-grid-area");

function closeMenuGlobal() {
  gsap.to(spansOfMenu, {
    y: "100%",
    stagger: 0.09,
    filter: "blur(5px)",
    opacity: 0,
    ease: "power4.inout",
  });
  gsap.to(spansALLGrid, {
    y: "100%",
    stagger: 0.01,
    opacity: 0,
    ease: "power4.inout",
  });
  gsap.to(".main", {
    filter: "blur(0px) grayScale(0%)",
    opacity: 1,
    duration: 1,
    ease: "power3.out",
  });
  gsap.to(".footer-conteiner", {
    filter: "blur(0px)",
    opacity: 1,
    duration: 1,
    ease: "power3.out",
  });
  gsap.to(reformCharNodeList, {
    y: "100%",
    ease: "power3.inout",
    stagger: 0.01,
  });
}
const optionMenuGrid = [
  {
    nameItem: "Home.",
    NamePortuguese: "Início.",
    item: item,
  },
  {
    nameItem: "Contact.",
    NamePortuguese: "Contato.",
    item: item2,
  },
  {
    nameItem: "About.",
    NamePortuguese: "Sobre.",
    item: item3,
  },
  {
    nameItem: "Projects.",
    NamePortuguese: "Projetos.",
    item: item4,
  },
  {
    nameItem: "Services.",
    NamePortuguese: "Serviços.",
    link: "",
  },
];
function customEasing(t) {
  return 1 - Math.pow(1 - t, 5); // Easing "easeOutQuint" - super suave
}
const resumeComandMenu = (elementAttribute) => {
  gsap.to(".menu-toggle", {
    transform: "rotate(0deg)",
    ease: "power2.out",
    duration: 1,
  });
  closeMenuGlobal();
  gsap.to(".menu", {
    duration: 1,
    height: "0%",
    ease: "power2.out",
    onComplete: () => {
      unlockScroll();
      lenis.scrollTo(elementAttribute, {
        duration: 2,
        easing: customEasing,
      });
    },
  });
};
function createMenuGrid(item) {
  const div = document.createElement("div");
  div.classList.add("menu-grid");
  const div2 = document.createElement("div");
  div2.classList.add("line-right-grid-menu");
  const link = document.createElement("a");
  const p = document.createElement("p");
  if (item.item) {
    div.addEventListener("click", () => {
      resumeComandMenu(item.item);
      togglemenu = !togglemenu;
    });
  }
  if (
    window.location.pathname == "/" ||
    window.location.pathname == "/index.html"
  ) {
    link.textContent = item.nameItem;
    p.textContent = "(learn more)";
  } else {
    p.textContent = "(saiba mais)";
    link.textContent = item.NamePortuguese;
  }
  div.appendChild(div2);
  div.appendChild(link);
  div.appendChild(p);
  menuGridArea.appendChild(div);
}
optionMenuGrid.forEach((item) => {
  createMenuGrid(item);
});
const menuGrid = optionMenuGrid.filter((item) => "item" in item);
const childrenMenu = [...menuGridArea.children];
childrenMenu?.forEach((selection, i) => {
  selection.addEventListener("click", () => {
    resumeComandMenu(optionMenuGrid[i].item);
  });
});

const menuGridALL = document.querySelectorAll(".menu-grid a");
menuGridALL.forEach((a) => {
  const textContentGrid = a.textContent;
  const refactorText = textContentGrid.split("");
  a.textContent = "";
  refactorText.forEach((letter) => {
    const span = document.createElement("div");
    span.textContent = letter;
    span.classList.add("span-menu-grid");
    a.appendChild(span);
  });
});
const spansALLGrid = gsap.utils.toArray(".span-menu-grid");

function textMenuNWA() {
  const pmenu = document.querySelector(".p-menu");
  const textContent = pmenu.textContent;
  const splitText = textContent.split("");
  pmenu.innerHTML = "";
  splitText.forEach((char) => {
    const span = document.createElement("div");
    span.textContent = char;
    span.classList.add("span-menu");
    pmenu.appendChild(span);
  });
}
textMenuNWA();
const spansOfMenu = document.querySelectorAll(".span-menu");

const pname3 = document.querySelector(".p-menu-3");
const pnameTextContent = pname3.textContent;
const reformPname3 = pnameTextContent.trim().replace(/\s+/g, " ");
const reformSplitPname3 = reformPname3.split(/(\s)/);
pname3.textContent = "";
reformSplitPname3.forEach((char) => {
  const div = document.createElement("div");
  div.classList = "word-menu";
  div.textContent = char;
  pname3.appendChild(div);
});

const wordMenus = document.querySelectorAll(".word-menu");
const tranformMenus = [...wordMenus];
const wordMenuSpaces = tranformMenus.filter((space) => space.innerHTML == " ");
wordMenuSpaces.forEach((words) => {
  words.classList.add("spaceLine");
});
const wordsOFBottomImovible = tranformMenus.filter(
  (word) => !word.classList.contains("spaceLine")
);
wordsOFBottomImovible.forEach((word) => {
  const contentOfWord = word.textContent.split("");
  word.textContent = "";
  contentOfWord.forEach((char) => {
    const div = document.createElement("div");
    div.classList.add("char-menu-word");
    div.textContent = char;
    word.appendChild(div);
  });
});
const charOFWordMenu = document.querySelectorAll(".char-menu-word");
const reformCharNodeList = [...charOFWordMenu];

gsap.set(reformCharNodeList, {
  y: "100%",
});

gsap.set(spansOfMenu, {
  y: "100%",
  opacity: 0,
  filter: "blur(5px)",
});
gsap.set(spansALLGrid, {
  y: "100%",
  opacity: 0,
});
gsap.set(".menu", {
  height: "0%",
  filter: "blur(5px) brightness(30%)",
});
function menuopen() {
  gsap.to(".menu", {
    duration: 1.5,
    height: "100dvh",
    filter: "blur(0px)",
    ease: "power3.out",
    onstart: () => {
      lockScroll();
    },
  });
  gsap.to(reformCharNodeList, {
    y: 0,
    ease: "power3.inout",
    stagger: 0.01,
  });
  gsap.to(".main", {
    filter: "blur(5px) gray(100%)",
    opacity: 0,
    ease: "power3.out",
  });
  gsap.to(".footer-conteiner", {
    filter: "blur(5px)",
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
  gsap.to(spansOfMenu, {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    stagger: 0.15,
    ease: "power4.inout",
  });
  gsap.to(spansALLGrid, {
    y: "0%",
    opacity: 1,

    stagger: 0.01,
    ease: "power3.inout",
  });
  gsap.to(".menu-toggle", {
    transform: "rotate(90deg)",
    ease: "power4.out",
    duration: 1,
  });
  buttom.forEach((Element) => {
    Element.addEventListener("mouseenter", handleMouseEnter);
    Element.addEventListener("mouseleave", handleMouseLeave);
  });
}

function menuclose() {
  gsap.to(".menu", {
    duration: 1,
    delay: 0,
    height: "0%",
    filter: "blur(5px)",
    ease: "power2.out",

    onComplete: () => {
      unlockScroll();
    },
  });
  closeMenuGlobal();
  gsap.to(".menu-toggle", {
    transform: "rotate(0deg)",
    ease: "power2.out",
    duration: 1,
  });
  buttom.forEach((Element) => {
    Element.removeEventListener("mouseenter", handleMouseEnter);
    Element.removeEventListener("mouseleave", handleMouseLeave);
  });
}

const aboutButtom = menuGridArea.children[2];
function addLinetop() {
  const line = document.createElement("div");
  line.classList.add("line-left-grid-menu");
  aboutButtom.appendChild(line);
}
addLinetop();
// footer
const homefooter = document.querySelector(".home-footer");
const projectsfooter = document.querySelector(".projects-footer");
const aboutfooter = document.querySelector(".about-footer");
const servicesfooter = document.querySelector(".services-footer");
const contactfooter = document.querySelector(".contact-footer");

history.pushState({ requireReload: true }, "");

// No evento popstate, verifique se precisa recarregar
window.addEventListener("popstate", (event) => {
  console.log("funcionou");
});
