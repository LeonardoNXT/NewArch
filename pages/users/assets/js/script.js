window.onload = () => {
  getUsers();
};
async function getUsers() {
  try {
    const response = await fetch("https://newarch.onrender.com/users/", {
      credentials: "include", // Envia o cookie automaticamente
    });
    if (!response.ok) throw new Error(await response.text());
    const data = await response.json();
    isLogged(data);
    gsap.to(".startpageDiv", 1, {
      opacity: 0,
      delay: 1,
    });
  } catch (error) {
    console.error(error);
    const tl = gsap.timeline();
    tl.to(".not-logged", {
      duration: 1,
      opacity: 1,
    }).to(".not-logged", {
      opacity: 0,
      duration: 1,
      delay: 1,
      onComplete: () => {
        window.location.href = "/pages/users/login/";
      },
    });
  }
}
const isLogged = (data) => {
  const firshName = data.user.name.split(" ")[0];
  document.querySelector(".name-logged").textContent = firshName;
  console.log(data.name);
};
const buttomAi = document.querySelector(".buttom-Ai");
buttomAi.addEventListener("click", () => {
  gsap.to(".startpageDiv", 1, {
    opacity: 1,
    onComplete: () => {
      window.location.pathname = "/pages/users/AI/";
    },
  });
});
