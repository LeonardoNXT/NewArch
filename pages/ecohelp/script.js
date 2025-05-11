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
  simpleMenu();
  lenis.stop();
});

gsap.registerPlugin(ScrollTrigger);

const ecohelp = new SplitType(".Ecohelp");
const textinit = new SplitType(".text-init");

const tl = gsap.timeline();

gsap.from(".img-init", 2, {
  y: "50%",
  delay: 2,
});
tl.to(".reveal-page p", 1, {
  opacity: 1,
})
  .to(".reveal-page p", 1, {
    opacity: 0,
    delay: 0.5,
  })
  .to(".reveal-page", 1, {
    opacity: 0,
  })
  .set(
    ecohelp.chars,
    {
      y: "100%",
    },
    "<"
  )
  .to(
    ecohelp.chars,
    1,
    {
      y: "0",
      opacity: "1",
      stagger: 0.05,
    },
    "<"
  )
  .set(
    textinit.words,
    {
      y: "100%",
      opacity: "0",
    },
    "<"
  )
  .to(
    textinit.words,
    1,
    {
      y: "0",
      opacity: "1",
      stagger: 0.05,
    },
    "<"
  )
  .set(
    textinit.chars,
    {
      y: "100%",
      transform: "rotateX(90deg)",
      opacity: "0",
    },
    "<"
  )
  .to(
    textinit.chars,
    {
      y: "0",
      transform: "rotateX(0)",
      opacity: "1",
      stagger: 0.011,
      onComplete: () => {
        lenis.start();
      },
    },
    "<"
  );
// PRIMEIRA IMAGEM -- ECOHELP

gsap.set(".primary-image", {
  y: "-20%",
  scale: "1.3",
});
gsap.to(".primary-image", {
  y: "20%",
  scrollTrigger: {
    trigger: ".img-init",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
});
