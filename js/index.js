//-----==Dados==-----//
//Links sem acesso
const block = document.querySelectorAll(".block");
//Formulário Todo
const form = document.querySelector(".formLogin");
//Enviar formulário (Submit)
const logar = document.querySelector(".logar");
//Aviso de verificação de campos
const avisoE = document.querySelector(".avisoE");
avisoE.style.display = "none";
const avisoS = document.querySelector(".avisoS");
avisoS.style.display = "none";
//Campos
const userInput = document.getElementById("user");
const passwordInput = document.getElementById("password");
//Array que guarda Usuários
var formulario = [{
  user: 'adm@adm',
  password: 'admin'
}];
//Usuário atualmente logado
//Declarando a variável para que ela possa ser chamada por outros arquivos
window.usuarioAtual = false;

//-----==Events==-----//
//Usuário sem permissão tentando
block.forEach((link) => {
  link.addEventListener("click", bloqueio);
});
//form
form.addEventListener("submit", function (e) {
  e.preventDefault();

  var usuario = document.getElementById("user").value;
  var senha = document.getElementById("password").value;
  var vcu = verifyCampoUser();
  var vcp = verifyCampoPassword();
  
  if (vcu && vcp) {
    var dadosFormulario = {
      user: usuario,
      password: senha
    };
    formulario.push(dadosFormulario);
    usuarioAtual = dadosFormulario;
    alert("Você fez login com o usuário: "+ usuario);
    window.location.href = "html/secretaria.html";
  }
})

function verifyCampoUser(){
  var usuario = document.getElementById("user").value;

  if (usuario.length <= 2) {
    avisoE.style.display = "block";
    return false;
  }
  else if(!usuario.includes("@")){
    avisoE.style.display = "block";
    return false;
  }
  else{
    avisoE.style.display = "none";
  }

  return true;
}
function verifyCampoPassword(){
  var senha = document.getElementById("password").value;

  if (senha.length <= 5) {
    avisoS.style.display = "block";
    return false;
  }
  else{
    avisoS.style.display = "none";
  }

  return true;
}


function bloqueio(event){
  event.preventDefault();
  alert("As páginas só poderão ser acessadas após o Login!");
}
