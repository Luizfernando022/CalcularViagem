document.getElementsByClassName("btn")[0].addEventListener("click", () => {
  var result = document.getElementById("result");
  var resulth2 = document.getElementById('resulth2')
  var resultp = document.getElementById('resultp')
  var nome = document.getElementsByClassName("f1")[0].value;
  var salario = parseInt(document.getElementsByClassName("f2")[0].value);
  var passagem = parseInt(document.getElementsByClassName("f3")[0].value);
  var bagagem = parseInt(document.getElementsByClassName("f4")[0].value);
  var dias = parseInt(document.getElementsByClassName("f5")[0].value);
  if (bagagem > 0 && bagagem <= 10) {
    bagagem = 50;
  } else if (bagagem > 10 && bagagem <= 20) {
    bagagem = 100;
  } else if (bagagem > 20) {
    bagagem = 150;
  }

  var gastos = 0;
  if (dias === "") {
    gastos = 0;
  } else {
    gastos = 250 * dias;
  }

  var restante = salario - gastos - bagagem - passagem;

  if (salario == '' || passagem == '' || bagagem == '' || dias == '') {
    alert("Todos os campos devem ser preenchidos");
  } else if (restante >= 0) {
    result.style.animationName = "result";
    resulth2.innerHTML = `Boas notícias ${nome}`;
    resultp.innerHTML = `Você pode viajar :) e vai te sobrar R$ ${restante}`
  } else {
    result.style.animationName = "result";
    var restante = Math.abs(salario - gastos - bagagem - passagem);
    resulth2.innerHTML = `Más notícias ${nome}`;
    resultp.innerHTML = `Você não pode viajar :/ ainda falta R$ ${restante}`
  }
  
  
});

function restart(){
  result.style.animationName = "";
  document.getElementsByClassName("f1")[0].focus()
  document.getElementsByClassName("f1")[0].value = ''
  document.getElementsByClassName("f2")[0].value = ''
  document.getElementsByClassName("f3")[0].value = ''
  document.getElementsByClassName("f4")[0].value = ''
  document.getElementsByClassName("f5")[0].value = ''

  
}



