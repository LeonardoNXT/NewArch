let footerAnimation; // Variável para armazenar a instância da animação

export function initFooterAnimation() {
  function setupFooterAnimation() {
    // Limpa animações anteriores se existirem
    if (footerAnimation) {
      footerAnimation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          trigger.trigger === ".footer" ||
          trigger.trigger === ".footer-conteiner"
        ) {
          trigger.kill();
        }
      });
    }

    // Limpa os caracteres anteriores
    const newArchEndText = document.querySelector(".text-footer-end");
    newArchEndText.innerHTML = newArchEndText.textContent.trim();

    console.log("Animação do footer está sendo configurada");

    gsap.set(".footer", { y: "-50%" });
    footerAnimation = gsap.to(".footer", {
      y: "0%",
      ease: "none",
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    // Prepara o texto dividido
    const textContentNWA = newArchEndText.textContent;
    const splitTextNWA = textContentNWA.split("");
    newArchEndText.innerHTML = "";
    splitTextNWA.forEach((char) => {
      const divNewArchText = document.createElement("div");
      divNewArchText.classList.add("charFooter");
      divNewArchText.textContent = char;
      newArchEndText.appendChild(divNewArchText);
    });

    gsap.set(".charFooter", { y: "-100%" });
    gsap.set(".text-footer-end", { y: "-10%" });

    gsap.to(".text-footer-end", {
      y: "0%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".footer",
        start: "bottom bottom",
      },
    });

    const heightPercent =
      document.querySelector(".footer-conteiner").clientHeight;
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
  }

  // Debounce para evitar múltiplas chamadas durante resize
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(setupFooterAnimation, 250);
  });

  setupFooterAnimation();
}
