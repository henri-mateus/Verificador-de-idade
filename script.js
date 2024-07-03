function verificar() {
  var dataAtual = new Date();
  var anoAtual = dataAtual.getFullYear();
  var mesAtual = dataAtual.getMonth() + 1;
  var diaAtual = dataAtual.getDate();

  var fdata = document.getElementById("txtano").value;
  var res = document.querySelector("div#res");

  if (fdata.length == 0) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var dataNascimento = new Date(fdata);
    var anoNascimento = dataNascimento.getFullYear();
    var mesNascimento = dataNascimento.getMonth() + 1;
    var diaNascimento = dataNascimento.getDate();

    var idade = anoAtual - anoNascimento;

    if (
      mesAtual < mesNascimento ||
      (mesAtual == mesNascimento && diaAtual < diaNascimento)
    ) {
      idade--;
    }

    var fsex = document.getElementsByName("radsex");
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //crianca
        img.setAttribute("src", "homemcrianca.jpg");
      } else if (idade >= 10 && idade < 21) {
        //jovem
        img.setAttribute("src", "homemjovem.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "homemadulto.jpg");
      } else {
        //idoso
        img.setAttribute("src", "idoso.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //crianca
        img.setAttribute("src", "mulhercrianca.jpg");
      } else if (idade >= 10 && idade < 21) {
        //jovem
        img.setAttribute("src", "mulherjovem.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "mulheradulta.jpg");
      } else {
        //idoso
        img.setAttribute("src", "idosa.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
