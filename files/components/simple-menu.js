export function simpleMenu() {
  const menu = document.querySelector(".menu");
  const menuOptions = document.querySelectorAll(".menu-options");
  const options = document.querySelectorAll(".menu-options p");
  const buttomToogle = document.querySelector(".menu-toogle");
  let toogleMenu = false;
  const DURATION_OF_ANIMATION = 1;
  const DELAY_OF_ANIMATION = 1;

  options.forEach((options) => {
    const text = new SplitType(options).words;
    for (let word of text) {
      word.classList.add("char-of-menu");
    }
  });
  const words = document.querySelectorAll(".char-of-menu");

  // Abrir

  buttomToogle.addEventListener("click", () => {
    toogleMenu = !toogleMenu;
    menuActive();
  });

  function menuActive() {
    if (toogleMenu) {
      buttomToogle.classList.add("active-toogle");
      // abre o menu
      gsap.to(menu, DURATION_OF_ANIMATION, {
        height: "100dvh",
        ease: "power1.inout",
      });
      for (let word of words) {
        const char = word.children;
        gsap.to(char, DURATION_OF_ANIMATION, {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          ease: "power3.inout",
        });
      }
      // characteres das opções
    } else {
      buttomToogle.classList.remove("active-toogle");

      // fecha o menu
      gsap.to(menu, 1, {
        height: "0svh",
        ease: "power1.inout",
      });

      // characteres das opções
      for (let word of words) {
        const char = word.children;
        gsap.to(char, DURATION_OF_ANIMATION, {
          y: "-100%",
          opacity: 0,
          stagger: 0.05,
          ease: "power3.inout",
        });
      }
    }
  }
  // Selecionar
  const routes = [
    {
      en: "/",
      pt: "/pt-br/",
    },
    {
      en: "/pages/about/",
      pt: "/pages/about/pt-br/",
    },
    {
      en: "/pages/contact/",
      pt: "/pages/contact/pt-br/",
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

  const URL = window.location.href;
  const regexPTBR = /\/pt-br\/$/i;

  const partOfSelect = document.querySelector(".menu-select")?.children;
  const partOfSelectVerified = partOfSelect ? [...partOfSelect] : null;

  menuOptions.forEach((option, i) => {
    const index = i;
    option.addEventListener("click", () => {
      if (partOfSelectVerified) {
        partOfSelectVerified.forEach((edge, i) => {
          gsap.to(edge, DURATION_OF_ANIMATION, {
            x: 0,
            onComplete: () => {
              if (i == 0) {
                regexPTBR.test(URL)
                  ? (window.location.pathname = routes[index].pt)
                  : (window.location.pathname = routes[index].en);
                gsap.to(edge, {
                  x: "-100%",
                  delay: DELAY_OF_ANIMATION,
                });
              } else {
                gsap.to(edge, {
                  x: "100%",
                  delay: DELAY_OF_ANIMATION,
                });
              }
            },
          });
        });
      }
    });
  });
}
