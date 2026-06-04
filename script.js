const button = document.querySelector(".pageUp");

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

