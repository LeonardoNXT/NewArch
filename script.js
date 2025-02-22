let lenis; // Declara a variável globalmente

document.addEventListener("DOMContentLoaded", () => {
  lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Movendo as chamadas para dentro do evento DOMContentLoaded
  lenis.stop();
  document.body.classList.add("no-scroll");
});
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
// Seleciona todos os elementos com a classe .name-logo

// Filtra o elemento que NÃO deve ser animado (o que tem a classe .center)
const namelogoFiltered = Array.from(namelogo).filter(
  (element) => !element.classList.contains("center")
);

// Aplica a animação apenas aos elementos filtrados
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
gsap.from(".menu-toggle", 1, {
  opacity: 0,
  delay: 6.5,
});

// MENU

let selection = document.querySelector(".menu-toggle");
let togglemenu = false;
let menuText = gsap.utils.toArray(".text-menu-part");
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
function menuopen() {
  gsap.to(".menu", {
    duration: 1,
    height: "100vh",
    ease: "power2.out",
    onstart: () => {
      lockScroll();
    },
  });
  gsap.to(".menu-toggle", {
    transform: "rotate(90deg)",
    ease: "power2.out",
    duration: 1,
  });

  gsap.to(".text-menu-part", {
    y: "0",
    stagger: 0.1,
    ease: "power1.in",
  });
  console.log(buttom);
  buttom.forEach((Element) => {
    Element.addEventListener("mouseenter", handleMouseEnter);
    Element.addEventListener("mouseleave", handleMouseLeave);
  });
}
function menuclose() {
  gsap.to(".menu", {
    duration: 1,
    delay: 1,
    height: "0vh",
    ease: "power2.out",
    onComplete: () => {
      unlockScroll();
    },
  });
  gsap.to(".menu-toggle", {
    transform: "rotate(0deg)",
    ease: "power2.out",
    duration: 1,
  });
  gsap.to(".text-menu-part", {
    y: "100%",
    stagger: 0.1,
    ease: "power1.in",
  });

  buttom.forEach((Element) => {
    Element.removeEventListener("mouseenter", handleMouseEnter);
    Element.removeEventListener("mouseleave", handleMouseLeave);
  });
}
selection.addEventListener("click", () => {
  if (togglemenu == false) {
    menuopen();
  } else {
    menuclose();
  }
  togglemenu = !togglemenu;
});
