

const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const loginButton = document.querySelector(".login-button");

const validUser = {
  email: "t@t.com",
  password: "test",
};

const validateUser = (email, password) => {
  return email === validUser.email && password === validUser.password;
};

const handleLogin = () => {
  if (!validateUser(emailInput.value, passwordInput.value)) {
    alert("Email ou senha inválidos");
    return;
  }
  window.location.href = "/movies.html";
};

loginButton.addEventListener("click", handleLogin);
