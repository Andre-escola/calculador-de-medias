

/*let anoDeNascimento= window.prompt("Em que ano você naceu?");
console.log(anoDeNascimento);
alert("Quem nasceu em " + anoDeNascimento + " vai fazer" + idade + " anos em 2023");

let idade = 2023 - anoDeNascimento;
*/

//------------------------------------------------------------------------------------------//
//calculos de nerd

let mudaNota1 = window.prompt("Nota de primeiro trimestre: ");


//aqui trás as notas do html e tira o conteúdo do texto apenas (sem códigos, fica feio)
let notaPrimTrim = parseFloat(document.querySelector(".primeiroTrim").textContent);
let notaSegTrim = parseFloat(document.querySelector(".segundoTrim").textContent);
let notaTercTrim = parseFloat(document.querySelector(".terceiroTrim").textContent);
console.log(notaSegTrim);



//variavel que aramazena o conteúdo do resultado
let aprovacaoFinal = document.querySelector(".aprovacao");
let media = notaPrimTrim + notaSegTrim + notaTercTrim;
let faltando = document.querySelector(".resultado");

//se passou ou n (bichin irresponsável)
if(media >= 180){
    aprovacaoFinal.textContent = "parabéns, da próxima tu perde";
}
else{
    let faltando = 180 - media;
    aprovacaoFinal.textContent = "perdeu menó, faltou esse tantinho aqui ó: " + faltando;
}