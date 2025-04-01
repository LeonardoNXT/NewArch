let lenis; // Declara a variável globalmente

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
// Seleciona todos os elementos com a classe .name-logo

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
gsap.from(".image-gallery", {
  opacity: 0,
  filter: "blur(20px)",
  scrollTrigger: {
    trigger: ".valuepage",
    start: "top bottom",
    end: "35% bottom",
    scrub: 1,
  },
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
gsap.from(".image-gallery", {
  scale: 0.5,
  scrollTrigger: {
    trigger: ".valuepage",
    start: "10% bottom",
    end: "bottom bottom",
    scrub: 1,
  },
});
gsap.from(".end-grid, .firsh-grid", {
  y: "200",
});
gsap.to(".end-grid, .firsh-grid", {
  y: "-200",
  scrollTrigger: {
    trigger: ".valuepage",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1,
  },
});
const backgroundVideo = document.querySelector(".background-video");
backgroundVideo.play();
gsap.from(".text-slider-1", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".slider",
    start: "top top",
    end: "12.5% top",
    scrub: 1,
    onUpdate: (self) => {
      if (self.progress > 0.5) {
        backgroundVideo.pause();
      } else {
        backgroundVideo.play();
      }
    },
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

gsap.from(".word6", {
  y: "100%",
  opacity: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".value-top-conteiner",
    start: "top bottom",
    end: "top top",
    scrub: 1,
  },
});

gsap
  .matchMedia()
  .add("(max-width: 768px)", () => {
    gsap.set(".value-img-config", {
      y: "-50%",
    });
    gsap.to(".value-img-config", {
      y: "50%",
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".value-bottom-conteiner",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.from(".value-top-bottom-img", {
      width: "30%",
    });
    gsap.to(".value-top-bottom-img", {
      width: "90%",
      scrollTrigger: {
        trigger: ".value-bottom-conteiner",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  })
  .add("(min-width: 769px)", () => {
    gsap.set(".value-img-config", {
      y: "-30%",
    });
    gsap.to(".value-img-config", {
      y: "20%",
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".value-bottom-conteiner",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.from(".value-top-bottom-img", {
      width: "10%",
    });
    gsap.to(".value-top-bottom-img", {
      width: "30%",
      scrollTrigger: {
        trigger: ".value-bottom-conteiner",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  });
gsap.to(".left-position", {
  x: "-100%",
  y: "50%",
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: ".value-bottom-conteiner",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
});
gsap.to(".right-position", {
  x: "100%",
  y: "50%",
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: ".value-bottom-conteiner",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
});

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
console.log(window.location.pathname);

gsap.to(".img-product", {
  scale: 2,
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: ".productpage",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1,
  },
});

gsap.to(".parent", {
  gap: "2vw",
  duration: 1.5,
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: ".aboutpage2",
    start: "top bottom",
    end: "bottom bottom",
  },
});
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
console.log(toggleArk);

gridAreaProduct.forEach((item) => {
  const accordian = item.nextElementSibling;
  const momElement = item.parentElement;
  momElement.addEventListener("mouseenter", () => {
    console.log(accordian.style.maxHeight);
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

// footer

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
