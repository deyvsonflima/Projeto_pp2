// Array para armazenar os usuários
const users = [
  {
    email: "usuario1@example.com",
    password: "senha1"
  },
  {
    email: "usuario2@example.com",
    password: "senha2"
  }
];
const form = document.querySelector("form");
const eField = form.querySelector(".email");
const eInput = eField.querySelector("input");
const pField = form.querySelector(".password");
const pInput = pField.querySelector("input");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // Evita o envio do formulário

  const email = eInput.value;
  const password = pInput.value;

  if (authenticate(email, password)) {
    window.location.href = "/inicio.html"; // Redireciona para a página de índice após a autenticação bem-sucedida
  } else {
    // Exiba uma mensagem de erro de autenticação incorreta
    displayErrorMessage("Credenciais inválidas. Por favor, tente novamente.");
  }
});

function authenticate(email, password) {
  // Verifica se as credenciais correspondem a algum usuário na lista de usuários
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      return true; // Autenticação bem-sucedida
    }
  }
  return false; // Autenticação falhou
}

function displayErrorMessage(message) {
  const errorTxt = document.createElement("div");
  errorTxt.classList.add("error-txt");
  errorTxt.innerText = message;
  eField.appendChild(errorTxt);
  eField.classList.add("error");
}
