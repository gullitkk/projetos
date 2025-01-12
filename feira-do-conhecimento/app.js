function calcularImc() {
    let alturaUsuario = document.getElementById('altura').value;
    let pesoUsuario = document.getElementById('peso').value;
    let imcUsuario = (pesoUsuario/ (alturaUsuario ** 2));
    let mensagemImc = document.getElementById('texto_imc');
    mensagemImc.innerHTML = `Seu imc e ${imcUsuario.toFixed (2)}, e a sua classificação e ${

        imcUsuario < 18.5 ? 'abaixo do peso':
        imcUsuario < 25 ? 'normal':
        imcUsuario < 30 ? 'sobre peso' :
        imcUsuario < 35 ? 'obesidade grau 1':
        imcUsuario < 40 ? 'obesidade grau 2' : 'obesidade extrema'
    }`
}
