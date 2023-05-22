//-----==Create==-----//
function criaUsuario(login){
    formulario.push({
        user: login.user,
        password: login.password
    });
}
criaUsuario({user: 'a@a', password: '123'});

//-----==Read==-----//
function lerUsuario(){
    return formulario;
}
console.log(lerUsuario());

//-----==Update==-----//
function atualizarUsuario(usuario, newPassword){
    const userPAtualizar = lerUsuario().find((formulario) => {
        return formulario.user === usuario;
    });

    userPAtualizar.password = newPassword;
}
atualizarUsuario('adm@adm', 'admin123');
console.log(lerUsuario());

//-----==Delete==-----//
function deletarUsuario(user){
    const usuariosExistentes = lerUsuario().filter((usuarioEscolhido) => {
        return usuarioEscolhido.user !== user;
    });
    formulario = usuariosExistentes;
}
deletarUsuario('a@a');
console.log(lerUsuario());