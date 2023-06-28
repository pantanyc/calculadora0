function calculoInfernal(event){ //chamado quando o formulario é enviado
    event.preventDefault();

    let valorEscolhido = 0;
    let nome1 = document.getElementById('nome1').value.toUpperCase();
    let nome2 = document.getElementById('nome2').value.toUpperCase();
    
    if((nome1 === 'LARISSA' && nome2 === 'LUCAS') || (nome1 === 'LUCAS' && nome2 === 'LARISSA')){
      valorEscolhido = 100;

    } else if((nome1 === 'RAFAELA' && nome2 === 'ISABELA') || (nome1 === 'ISABELA' && nome2 === 'RAFAELA')){
        valorEscolhido = 0;
        document.getElementById('trouxa').style.display = "block";
        document.getElementById('mariana').style.display = "none";

    } else if((nome1 === 'MARIANA' && nome2 === 'WALTER') || (nome1 === 'WALTER' && nome2 === 'MARIANA')){
      valorEscolhido = 0;
      document.getElementById('trouxa').style.display = "none";
      document.getElementById('mariana').style.display = "block";

    } else {
      valorEscolhido = Math.floor(Math.random() * 101);
    }
    
    document.getElementById('total').innerHTML = valorEscolhido;
    document.getElementById('amorTotal').style.display = "block";
      

    
}


document.getElementById('amorTotal').style.display = "none";
document.getElementById('trouxa').style.display = "none";
document.getElementById('mariana').style.display = "none";

document.getElementById('nomes').addEventListener('submit', calculoInfernal);


/*
document é um objeto global que faz referencia ao documento html;
getElementById('tip') é um método desse objeto que seleciona o elemento HTML com o ID "tip" na página;
innerHTML é uma propriedade do elemento HTML que permite acessar ou modificar o conteúdo HTML dentro dele;
total é uma variável que contém o valor calculado da gorjeta;
a variavel total foi criada em let total;
let == var;
event é uma ação

*/