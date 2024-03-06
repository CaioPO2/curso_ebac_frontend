const form = document.getElementById('formulario');
const ValorA = document.getElementById('CampoA');
const ValorB = document.getElementById('CampoB');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const menssagemValido = `O valor B: <b>${ValorB.value}</b> é maior que o valor A: <b>${ValorA.value}</b>, formulário válido`;
    const menssagemInvalido = `O valor B: <b>${ValorB.value}</b> é menor que o valor A: <b>${ValorA.value}</b>, formulário inválido`;
    if (ValorB.value > ValorA.value){
        const containerValido = document.querySelector('.válido');
        containerValido.innerHTML = menssagemValido;
        containerValido.style.display = 'block';

        ValorA.value = ' ';
        ValorB.value = ' ';
    } else{
        const containerInvalido = document.querySelector('.inválido');
        containerInvalido.innerHTML = menssagemInvalido;
        containerInvalido.style.display = 'block';
    }
})

