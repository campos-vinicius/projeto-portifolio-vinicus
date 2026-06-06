const button = document.querySelector(".pageUp");

//  dependendo de onde o usuário estiver o botão pageUp é ocultado ou exibido

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    button.style.display = "flex";
  } else {
    button.style.display = "none";
  }
});

button.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const allSections = document.querySelectorAll("section, footer");

const allLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
});

let currentSection = "";

window.addEventListener("scroll", () => {
  allSections.forEach((section) => {
    console.log(section.id, section.offsetTop, window.scrollY);

    if (window.scrollY >= section.offsetTop - 100) {
      currentSection = section.id;
    }
  });

  //  dependendo da localização do usuário na tela o currentSection é alterado e consequentemente a
  //  classe ativo que realça o sidebar é substítuido
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 10
  ) {
    currentSection = "contato";
  }
  allLinks.forEach((link) => {
    link.classList.remove("ativo");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("ativo");
    }
  });
});

// formulários

document.querySelector("#form").addEventListener("submit", (event) => {
  const inputEmail = document.querySelector("#email");
  const inputName = document.querySelector("#name");

  let contentName = inputName.value;
  let contentEmail = inputEmail.value;

  if (!contentEmail.includes("@")) {
    alert("insira um email válido, por gentileza");
    event.preventDefault();
  } else if (/\d/.test(contentName)) {
    alert("insira um nome válido, por gentileza");
    event.preventDefault();
  } else {
    alert("formulário enviado com sucesso"); //o formulário nunca será enviado, até que o usuário preencha corretamente os seus dados
  }
});

//  toda vez que o usuário seleciona uma das opções do select mobile,
//  ele será direcionado a seção que deseja

document.getElementById("navegacao").addEventListener("change", function () {
  const target = this.value;
  window.location.hash = target;
});
