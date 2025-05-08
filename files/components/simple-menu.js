export function simpleMenu() {
  const menu = document.querySelector(".menu");
  const buttomToogle = document.querySelector(".menu-toogle");
  const linesButtomToogle = document.querySelectorAll(".line-menu-toogle");
  console.log(linesButtomToogle);
  let toogleMenu = false;
  buttomToogle.addEventListener("click", () => {
    toogleMenu = !toogleMenu;
    console.log(toogleMenu);
    menuActive();
  });
  function menuActive() {
    if (toogleMenu) {
      buttomToogle.classList.add("active-toogle");
      gsap.to(menu, 1, {
        y: 0,
        height: "100svh",
        ease: "power3.inout",
      });
    } else {
      buttomToogle.classList.remove("active-toogle");
      gsap.to(menu, 1, {
        y: "-100%",
        height: "0svh",
        ease: "power3.inout",
      });
    }
  }
}
