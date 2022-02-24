document.getElementById("btn").addEventListener("click", () => {
  var result = document.getElementById("result");
  var nome = document.getElementsByClassName("f1")[0].value;
  var salario = document.getElementsByClassName("f2")[0].value;
  var passagem = document.getElementsByClassName("f3")[0].value;
  var bagagem = document.getElementsByClassName("f4")[0].value;
  var dias = document.getElementsByClassName("f5")[0].value;
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

  var restante = Math.abs(salario - gastos - bagagem - passagem);

  if (salario === "" || passagem === "" || bagagem === "" || dias === "") {
    alert("Todos os campos devem ser preenchidos");
  } else if (restante >= 0) {
    result.style.animationName = "result";
    result.innerHTML = `<h2 class="pp">Boas notícias ${nome}</h2> <p>Você pode viajar e vai te sobrar R$${restante}</p>`;
  } else {
    result.style.animationName = "result";
    result.innerHTML = `<h2>Más notícias ${nome}</h2> <p>Você não pode viajar :/ ainda falta R$ ${restante}</p>`;
  }
});
