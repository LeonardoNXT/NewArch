const inputStartName = document.querySelector(".inputStartName");
const inputEndName = document.querySelector(".inputEndName");
const inputEmail = document.querySelector(".inputEmail");
const inputPassword = document.querySelector(".inputPassword");
const loginButton = document.querySelector(".login-button");
const loginForm = document.querySelector(".login-form-content");
let inputValueStartValid = false;
let inputValueEndValid = false;
let inputValueEmailValid = false;
let inputValuePasswordValid = false;
async function getUsers() {
  try {
    const response = await fetch("https://newarch.onrender.com/users/", {
      credentials: "include", // Envia o cookie automaticamente
    });

    if (!response.ok) throw new Error(await response.text());
    const data = await response.json();
    isLogged(data);
    const tl = gsap.timeline();
    tl.to(".startpageDiv", 1, {
      opacity: 1,
    })
      .to(".logado", 1, {
        opacity: 1,
      })
      .to(".logado", 1, {
        opacity: 0,
        delay: 1,
      })
      .to(".redirect", 1, {
        opacity: 1,
      })
      .to(".redirect", 1, {
        opacity: 0,
        delay: 1,
        onComplete: () => {
          window.location.href = "/pages/users/";
        },
      });
  } catch (error) {
    console.log(error);
    gsap.to(".startpageDiv", {
      duration: 0.5,
      opacity: 0,
    });
  }
}
const isLogged = (data) => {
  const name = data.user.name.split(" ")[0];
  const nameUser = document.querySelector(".name-user");
  nameUser.textContent = name;
};
window.onload = () => {
  getUsers();
};
const inputValueEmail = ({ target }) => {
  inputValueEmailValid = target.value.length >= 3;
  updateButtonState();
};

const inputValuePassword = ({ target }) => {
  inputValuePasswordValid = target.value.length >= 8;
  updateButtonState();
};

const updateButtonState = () => {
  if (inputValueEmailValid && inputValuePasswordValid) {
    loginButton.removeAttribute("disabled");
  } else {
    loginButton.setAttribute("disabled", "disabled");
  }
};

const handleSubmit = (e) => {
  loginButton.textContent = "Carregando...";
  const URL = "https://newarch.onrender.com";
  const user = {
    email: inputEmail.value.toLowerCase(),
    password: inputPassword.value,
  };
  e.preventDefault();
  fetch(`${URL}/auth/login`, {
    method: "POST",
    credentials: "include", // Envia cookies/tokens
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then(async (response) => {
      if (!response.ok) throw new Error(await response.text());
      return response.json();
    })
    .then((data) => {
      console.log("você foi logado com sucesso");
      getUsers();
    })
    .catch((error) => {
      loginButton.textContent = "Entrar";

      document.querySelector(".error p").textContent = error.message;
      gsap.to(".error", 1, {
        opacity: 1,
        height: document.querySelector(".error p").scrollHeight,
      });
    });
};
inputStartName?.addEventListener("input", inputValueStart);
inputEndName?.addEventListener("input", inputValueEnd);
inputEmail?.addEventListener("input", inputValueEmail);
inputPassword?.addEventListener("input", inputValuePassword);
loginForm?.addEventListener("submit", handleSubmit);
