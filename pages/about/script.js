import { cursor } from "../../files/components/cursor.js";
import { menuDefaultPC } from "../../files/components/default-menu.js";
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
  cursor();
  simpleMenu();
  menuDefaultPC();
  lenis.stop();
});
gsap.registerPlugin(ScrollTrigger);

// Animação de entrada
const tlInit = gsap.timeline();
const title = new SplitType(".title-newarch");
const hOfTitle = document.querySelector(".title-newarch").scrollHeight;
const textLearn = new SplitType(".text-learnMore");
const textSee = new SplitType(".text-seeWhat");

tlInit
  .set(".text-welcome", {
    opacity: 0,
  })
  .to(".text-welcome", 2, {
    opacity: 1,
    onComplete: () => {
      document.querySelector(".background-video").play();
    },
  })
  .to(".background-video", 1, {
    opacity: 1,
  })
  .to(".background-video-conteiner", 2, {
    width: "100%",
    height: "100svh",
    borderRadius: 0,
    ease: "power3.inout",
    delay: 1,
  })
  .to(
    ".text-welcome",
    1,
    {
      opacity: 0,
    },
    "<"
  )
  .to(".welcome-page", 1, {
    opacity: 0,
  })
  .to(
    ".title-newarch",
    1,
    {
      opacity: 1,
    },
    "<"
  )
  .set(
    title.chars,
    {
      y: "100%",
      fontSize: "20vw",
    },
    "<"
  )
  .to(
    title.chars,
    1,
    {
      y: 0,
      fontSize: "26vw",
      stagger: 0.05,
      ease: "power3.inout",
      onComplete: () => {
        titleAnimate();
        lenis.start();
      },
    },
    "<"
  )
  .set(
    ".other-text-homepage",
    {
      opacity: 1,
    },
    "<"
  )
  .to(
    textLearn.chars,
    2,
    {
      opacity: 1,
      stagger: 0.05,
    },
    "<"
  )
  .to(
    textSee.chars,
    2,
    {
      opacity: 1,
      stagger: 0.05,
    },
    "<"
  )
  .to(
    "header",
    1,
    {
      opacity: 1,
    },
    "<"
  );

function titleAnimate() {
  gsap.set(".title-increment", {
    height: `${hOfTitle + 100}px`,
  });

  gsap.to(".title-newarch", {
    color: "#000",
    scrollTrigger: {
      trigger: ".title-increment",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
    },
  });
  gsap.to(title.chars, {
    y: "100%",
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".title-increment",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
    },
  });
  gsap.to(textLearn.chars, {
    opacity: 0,
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".title-increment",
      start: "top bottom",
      end: "40% bottom",
      scrub: 1,
    },
  });
  gsap.to(textSee.chars, {
    opacity: 0,
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".title-increment",
      start: "top bottom",
      end: "40% bottom",
      scrub: 1,
    },
  });
  gsap.to(".background-video", {
    filter: "brightness(0)",
    scrollTrigger: {
      trigger: ".homepage",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });
}
