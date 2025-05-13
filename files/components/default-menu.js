export function menuDefaultPC() {
  const routes = [
    {
      en: "/",
      pt: "/pt-br/",
    },
    {
      en: "/pages/contact/",
      pt: "/pages/contact/pt-br/",
    },
    {
      en: "/pages/about/",
      pt: "/pages/about/pt-br/",
    },

    {
      en: "/pages/projects/",
      pt: "/pages/projects/pt-br/",
    },
    {
      en: "/pages/services/",
      pt: "/pages/services/pt-br/",
    },
  ];
  const CONFIG_ANIMATE = {
    DURATION_OF_ANIMATION: 1,
    DELAY_OF_ANIMATION: 1,
  };

  const URL = window.location.href;
  const regexPTBR = /\/pt-br\/$/i;

  const partOfSelect = document.querySelector(".menu-select")?.children;
  const partOfSelectVerified = partOfSelect ? [...partOfSelect] : null; // retorna dois lados
  const options = document.querySelectorAll(".nav a"); // sempre será igual a 5
  options.forEach((option, i) => {
    const index = i;
    option.addEventListener("click", (e) => {
      e.preventDefault();
      gsap.to("main", {
        opacity: 0,
        onComplete: () => {
          gsap.to("main", {
            opacity: 1,
            delay: CONFIG_ANIMATE.DELAY_OF_ANIMATION,
          });
        },
      });
      if (partOfSelectVerified) {
        partOfSelectVerified.forEach((side, i) => {
          const sideLeftIndex = 0;
          const sideRightIndex = 1;
          gsap.to(side, {
            x: 0,
            duration: CONFIG_ANIMATE.DURATION_OF_ANIMATION,
            onComplete: () => {
              if (i == sideLeftIndex) {
                regexPTBR.test(URL)
                  ? (window.location.pathname = routes[index].pt)
                  : (window.location.pathname = routes[index].en);
                gsap.to(side, {
                  x: "-100%",
                  duration: CONFIG_ANIMATE.DURATION_OF_ANIMATION,
                  delay: CONFIG_ANIMATE.DELAY_OF_ANIMATION,
                });
              } else if (i == sideRightIndex) {
                gsap.to(side, {
                  x: "100%",
                  duration: CONFIG_ANIMATE.DURATION_OF_ANIMATION,
                  delay: CONFIG_ANIMATE.DELAY_OF_ANIMATION,
                });
              }
            },
          });
        });
      }
    });
  });
}
