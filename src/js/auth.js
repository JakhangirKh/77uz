const loginModal = document.querySelector("#login-modal");
const loginBackground = document.querySelector("#modal-background");
const registrationModal = document.querySelector("#register-modal");
const addressModal = document.querySelector("#address-modal");
const completeModal = document.querySelector("#complete-modal"); 
const forgetModal = document.querySelector("#forget-modal");



window.openLoginModal = () => {
  loginModal.classList.toggle("hidden");
  loginBackground.classList.toggle("hidden");
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = "12px";
};

window.onApply = () => {
    loginModal.classList.toggle("hidden");
    registrationModal.classList.toggle("hidden");
};


window.onContinue = () => {
  // const loginMenu = document.querySelector("#loginMenu")
  // console.log('hello', loginMenu, addressTemplate());
  registrationModal.classList.toggle("hidden");
  addressModal.classList.toggle("hidden");
  // loginMenu.innerHTML = addressTemplate()
  // modal.style.display = 'block';
}


window.onComplete = () => {
  addressModal.classList.toggle("hidden");
  completeModal.classList.toggle("hidden");
  // modal.style.display = 'block';
  

}


window.onThanks = () => {
  completeModal.classList.toggle("hidden");
  loginBackground.classList.toggle("hidden");
  window.classList.toggle("hidden");
  
}

window.onForget = () => {
  loginModal.classList.toggle("hidden");
  forgetModal.classList.toggle("hidden");
  
}

