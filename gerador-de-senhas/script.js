const sliderElement = document.querySelector("#slider");
const buttonElement = document.querySelector("#button");

const sizePassword = document.querySelector("#valor");
const password = document.querySelector("#password");

const containerPassword = document.querySelector("#container-password");

const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
  sizePassword.innerHTML = this.value;
};


const generatePassword = () => {

  let pass = '';
  const n = charset.length;

  for(let i = 0; i < sliderElement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
};

const copyPassword = () => {
  alert("Senha copiada com sucesso!");
  navigator.clipboard.writeText(novaSenha);
};