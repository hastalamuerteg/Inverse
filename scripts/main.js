const loginContainer = document.querySelector(".login__box");
const welcomeTitle = document.querySelector(".heading__primary");
const switchTitle = document.querySelector(".switch__title");
const loginNotice = document.querySelector(".login__box--notice");

const forgotPasswordBtn = document.querySelector(".form__forgot");
const loginBtn = document.querySelector(".btn__login");
const signupBtn = document.querySelector(".btn__signup");
const switchDarkModeBtn = document.querySelector(".checkbox");
const closeModal = document.querySelector(".modal__back--btn");
const socialMediaLinks = document.querySelector(".social__media");

const emailInput = document.querySelector(".form__email");
const passwordInput = document.querySelector(".form__password");

const background = document.querySelector(".background");
const backgroundDark = document.querySelector(".background__dark");

const modal = document.querySelector(".modal");
const modalForm = document.querySelector(".modal__form");
const modalBackground = document.querySelector(".modal__background--default");
const modalBackgroundDark = document.querySelector(".modal__background--dark");

const handleDarkModeSwitcher = () => {
  if (switchDarkModeBtn.checked) {
    loginContainer.classList.add("login__box--dark");
    welcomeTitle.classList.add("heading__primary--dark");

    forgotPasswordBtn.classList.add("form__forgot--dark");
    loginBtn.classList.add("btn__login--dark");
    signupBtn.classList.add("btn__signup--dark");

    emailInput.classList.add("form__email--dark");
    passwordInput.classList.add("form__password--dark");

    socialMediaLinks.classList.add("social__media--dark");
    switchTitle.classList.add("switch__title--dark");

    background.hidden = true;
    backgroundDark.hidden = false;
  } else {
    loginContainer.classList.remove("login__box--dark");
    welcomeTitle.classList.remove("heading__primary--dark");

    forgotPasswordBtn.classList.remove("form__forgot--dark");
    loginBtn.classList.remove("btn__login--dark");
    signupBtn.classList.remove("btn__signup--dark");

    emailInput.classList.remove("form__email--dark");
    passwordInput.classList.remove("form__password--dark");

    socialMediaLinks.classList.remove("social__media--dark");
    switchTitle.classList.remove("switch__title--dark");

    background.hidden = false;
    backgroundDark.hidden = true;
  }
};

const toggleModal = () => {
  modal.style.display = "flex";
  loginContainer.style.opacity = 0;

  closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";
    loginContainer.style.opacity = 1;
  });
};

const showDarkModal = (active = true) => {
  if (active) {
    modal.classList.add("modal__box--dark");
    modalForm.classList.add("modal__form--dark");
    modalBackground.hidden = true;
    modalBackgroundDark.hidden = false;
  } else {
    modal.classList.remove("modal__box--dark");
    modalForm.classList.remove("modal__form--dark");
    modalBackground.hidden = false;
    modalBackgroundDark.hidden = true;
  }
};

const handleForgotPassword = (e) => {
  e.preventDefault();

  if (switchDarkModeBtn.checked) {
    showDarkModal();
    toggleModal();
  } else {
    showDarkModal(false);
    toggleModal();
  }
};

const handleLoginBtn = (e) => {
  e.preventDefault();
  if (emailInput.value === "" || passwordInput.value === "") {
    loginContainer.classList.toggle("login__box--animated");
    loginNotice.style.display = "flex";
    switchDarkModeBtn.checked
      ? (loginNotice.style.color = "white")
      : (loginNotice.style.color = "orangered");
  } else {
    loginNotice.style.display = "none";
  }
};

switchDarkModeBtn.addEventListener("click", handleDarkModeSwitcher);
forgotPasswordBtn.addEventListener("click", handleForgotPassword);
loginBtn.addEventListener("click", handleLoginBtn);
