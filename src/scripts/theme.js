const htmlDocument = document.querySelector("html");
const darkModeButton = document.querySelector(".darkMode__img");
const logoImg = document.querySelector(".logo__img");

let darkMode = false;

export const handleTheme = () => {
  darkModeButton.addEventListener("click", () => {
    darkMode = !darkMode;
    htmlDocument.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (htmlDocument.classList.contains("dark-mode")) {
      darkModeButton.src = "./src/assets/img/light_mode.svg";
      logoImg.src = "./src/assets/img/fly nightmode.svg";
    } else {
      darkModeButton.src = "./src/assets/img/dark_mode.svg";
      logoImg.src = "./src/assets/img/fly.svg";
    }
  });
};

export const themePreference = () => {
  darkMode = JSON.parse(localStorage.getItem("darkMode"));

  if (darkMode) {
    htmlDocument.classList.add("dark-mode");
    darkModeButton.src = "./src/assets/img/light_mode.svg";
    logoImg.src = "./src/assets/img/fly nightmode.svg";
  } else {
    darkModeButton.src = "./src/assets/img/dark_mode.svg";
    logoImg.src = "./src/assets/img/fly.svg";
  }
};
