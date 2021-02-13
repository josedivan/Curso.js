// aula 04 - String

//var sobrenome = "Gomes"; // ou aspas simples
//var nome = "João"; // podem ser usadas aspas duplas
//var cpf = "111.111.111-11";
//var telefone = "998887655";
//var ddd = "21";
//var email = "joao@gmail.com";
//var biografia =
//  "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como...";

//console.log("Nome completo: " + nome + " " + sobrenome);
//console.log("Meu telefone: " + "(" + ddd + ")" + "-" + telefone);
//
//console.log("Primeira letra do nome: " + nome[0]);
//console.log(" A última letra do nome: " + nome[3]);
//console.log(" quantos números tem o telefone: " + telefone.length);
//
// aula 06 - TIPOS DE DADOS -NUMBERS

//var num1 = 20;
//var num2 = 3;
//
//var soma = num1 + num2;
//var subtracao = num1 - num2;
//var divisao = num1 / num2;
//var multiplicacao = num1 * num2;
//
//var media = (num1 + num2) / 2;
//
//console.log("A média dos números é: " + media);
//
//console.log(Math.pow(num1, 3));

/* Parênteses podem ser usados para montar expressões. Neste caso eles são necessários para calcular a média de dois números, 
caso contrário a divisão num2 / 2 seria realizada antes da soma, devido à ordem das operações matemáticas.*/

// aula 06 - TIPOS DE DADOS -NUMBERS
//var valor = 20;
//
//console.log(valor + 5);

//var nome = "Edivan";
//var anoNascimento = 1989;
//console.log(
//  "Olá, eu me chamo " +
//    nome +
//    " tenho " +
//    (1989 - 2021) +
//    " e estou estudando Javascript",
//);
//
//var aluno = "Leonardo";
//var matricula = 20210123591;
//var prova1 = 6.5;
//var prova2 = 5.8;
//var media = (prova1 + prova2) / 2;
//
//console.log(
//  "O aluno " +
//    aluno +
//    " Matricula " +
//    matricula +
//    " obteve a média final " +
//    media,
//);
//

//var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;
//console.log(conteudo_caixa);
//document.getElementById("caixa_amarela").innerHTML =
//  "<h1>" + "caixa amarela" + conteudo_caixa + "</h1>";
//
//document.getElementById("caixa_azul").innerHTML =
//  "<h1>" + "caixa azul" + conteudo_caixa + "</h1>";

// aula 06 - Funções

//function soma_args(n1, n2) {
//  var n1 = 30;
////  var n2 = 100;
////  return n1 + n2;
////}
////
////console.log(soma_args());
//
//function calculaIMC(peso, altura) {
//  var imc = peso / (altura * altura);
//  return imc;
//}
//
//var meu_peso = parseFloat(document.//getElementById("peso").innerHTML);
//console.log(typeof meu_peso);
//var minha_altura = parseFloat(document.//getElementById("altura").innerHTML);
//
//var meu_imc = calculaIMC(meu_peso, minha_altura)//;
//console.log(typeof calculaIMC);
//
//document.getElementById("imc").innerHTML = //meu_imc.toFixed(2);
//console.log(imc);

// aula - ARRAYS

//var alunos = ["João", "Maria", "José"];
//var num_primos = [2, 3, 5, 7, 11, 13];

//console.log(alunos.length);
//console.log(alunos[0]);

//var grupos = [
//["João", "Maria"],
//["Pedro", "Joana", "André", "Júlio"],
//["Carolina", "Helena", "Marcelo"],
//];

//console.log(grupos.length);
//console.log(grupos[0][0]);
//console.log(grupos[1]);
//console.log(grupos[2]);
//
//var ingredientes = ["pão branco", "queijo", "presunto"];
//
//ingredientes[0] = "Pão integral"; // Altera um elemento na posição de um array
//
//console.log(ingredientes);

//alunos = ["João", "Maria", "José", "Fernanda", "Pedro", "Elisa"];
//
//console.log(alunos.slice(0, -5)); // Se eu quiser pegar o array 1 , tenho que colocar 2, pois o array 1 não conta. // trabalha com número negativos tbm, dá direita para a esquerda.
//==========================================================================
// Tipos de dados - Objetos

//var funcionario = {
//nome: "Pedro Souza Gomes",
//ano_nasc: 1972,
//cpf: "111.111.111.11",
//cargo: "Analista de Sistemas",
//};

//funcionario.cargo = "Desenvolvedor front-End"; // alterando o cargo da chave existente.
//funcionario.CNH = "19056509"; // adicionando nova chave Cnh

//console.log(funcionario);
//
//var cursos = [
//  {
//    titulo: "Aprenda programação em Python 3 com facilidade do zero",
//    avaliacoes: 680,
//    alunos: 2300,
//    categorias: ["programacao", "tecnologia"],
//  },
//
//  {
//    titulo: "Aprenda PHP e faça sites dinâmicos",
//    avaliacoes: 180,
//    alunos: 350,
//    categorias: ["desenvolvimento web", "programacao"],
//  },
//
//  {
//    titulo: "Excel do Zero ao Avançado",
//    avaliacoes: 420,
//    alunos: 1800,
//    categorias: ["produtividade", "gestão"],
//  },
//];
//
//cursos[2].categorias[1] = "Administração de empresas";
//
//console.log(cursos[1].categorias[0]);
//
//console.log(cursos[2]);
//
////=============================================================================
//// Métodos de Objetos
//
//pessoa = {
//  nome: "Jose",
//  sobrenome: "Lima",
//  ano_nasc: 1992,
//  idade_aluno: function () {
//    var idade_alun = 2018 - this.ano_nasc + " anos";
//    return idade_alun;
//  },
//
//  nome_completo: function () {
//    var meu_nome = this.nome + " " + this.sobrenome;
//    return meu_nome;
//  },
//};
//
//console.log("A idade do aluno é: " + pessoa.idade_aluno());
//
//soma = {
//  num_1: 5,
//  num_2: 20,
//  soma: function () {
//    resultado = this.num_1 + this.num_2;
//    return resultado;
//  },
//};
//
//// Folha de Exercícios no 2
//var num_1 = 5;
//var num_2 = 20;
//resultado = num_1 + num_2;
//
//document.getElementById("num_1").innerHTML = num_1;
//document.getElementById("num_2").innerHTML = num_2;
//document.getElementById("resultado").innerHTML =
//  "<strong>" + resultado + "</strong>";
//
////====================================================================
//
//// Exercício 2
//function grausCelsius() {
//  var graus = (38 * 9) / 5 + 32;
//
//  return graus;
//}
//
//document.getElementById("caixa_amarela").innerHTML = grausCelsius();
////==========================================================================
////  Exercício 3
//
//var grupos = [
//  ["João", "Maria"],
//  ["Pedro", "Joana", "André", "Júlio"],
//  ["Carolina", "Helena", "Marcelo"],
//  ["Helena", "Marcelo"],
//];
//var novos_grupos = grupos.slice(-2);
//novos_grupos.push(["Marina", "Felipe", "Carla"]);
//
//console.log(novos_grupos);
////==========================================================================
////  Exercício 4
//
//var curso = {
//  titulo: "Aprenda programação em Python",
//  categoria: ["programação", "tecnologia", "python"],
//  n_aval_5_estrelas: 420,
//  n_aval_4_estrelas: 80,
//  n_aval_3_estrelas: 33,
//  n_aval_2_estrelas: 20,
//  n_aval_1_estrela: 4,
//  total_avaliacao: function () {
//    var total_aval =
//      this.n_aval_1_estrela +
//      this.n_aval_2_estrelas +
//      this.n_aval_3_estrelas +
//      this.n_aval_4_estrelas +
//      this.n_aval_5_estrelas;
//
//    return total_aval;
//  },
//
//  media_poderada: function () {
//    var total_media =
//      5 * this.n_aval_5_estrelas +
//      4 * this.n_aval_4_estrelas +
//      3 * this.n_aval_3_estrelas +
//      2 * this.n_aval_5_estrelas +
//      1 * this.n_aval_5_estrelas;
//    return total_media;
//  },
//};
//
//var cat_principal = curso.categoria[0];
//document.getElementById("categoria_principal").innerHTML = cat_principal;
//
//var total_avaliacao = curso.total_avaliacao();
//var total_media = curso.media_poderada();
//
//document.getElementById("total_aval").innerHTML = total_avaliacao;
//document.getElementById("media_aval").innerHTML = total_media;
//
////==========================================================================
////  Exercício 4
//
//var pessoa = {
//  Nome: "Jose",
//  Sbrenome: "Lima",
//  Email: "joselima@gmail.com",
//};
//
//function criar_tabela(person) {
//  var tabelaHTML = '<div class="tableBox">';
//  tabelaHTML += "<table>";
//  tabelaHTML += "<tr>";
//  tabelaHTML += "<th>Nome Completo</th>";
//  tabelaHTML += "<th>Email</th>";
//  tabelaHTML += "</tr>";
//  tabelaHTML += "<tr>";
//  tabelaHTML += "<td>" + person.Nome + " " + person.Sbrenome + "</td>";
//  tabelaHTML += "<td>" + person.Email + "</td>";
//  tabelaHTML += "</tr>";
//  tabelaHTML += "</table>";
//  tabelaHTML += "</div>";
//  return tabelaHTML;
//}
//
//var tabela = criar_tabela(pessoa);
//
//document.getElementById("tabela").innerHTML = tabela;
//
//// AULA 16 - EVENTOS

//document.getElementById("click-me").onclick = function () {
//  alert("Você clicou no botão");
//};
//
//document.getElementById("hover-me").onmouseover = function () {
//  alert("Você passsou o mouse no botâo");
//};
//
//document.getElementById("leave-me").onmouseout = function () {
//  alert("Você saiu com o curso do botâo");
//};
//
//document.onkeydown = function () {
//  console.log("Você apertou alguma tecla");
//};

//function button_clicked() {
//  alert("você clicou no botão");
//}

//=================================================================
// AULA 17 - MANIPULANDO O CSS

//document.getElementById("botao_cor").onclick = function () {
//  document.getElementById("botao_cor").style["background-color"] = "purple";
//  document.getElementById("botao_cor").style.transform = "translateX(100px)";
//};

/* temos que usar a notação com colchetes com o background-color 
porque o nome da propriedade contém um traço. Falamos isso na aula sobre objetos. */

// Outra maneira de fazer abaixo, criando uma variável

//var botao = document.getElementById("botao_cor");
//
//botao.onclick = function () {
//  botao.style["background-color"] = "purple";
//  botao.style.transform = "translateX(100px)";
//};

//var exemplo = document.getElementsByClassName("exemplo");
//exemplo[2].innerHTML = "teste";
//
//console.log(exemplo);

//var exemplo = document.getElementsByTagName("p");
//
//console.log(exemplo);

//for (var a = 0; a < 5; a++) {
//  console.log(a);
//}
//var alunos = ["Pedro", "Maria", "José", "João", "Carlos"];
//
//for (var b = 0; b < alunos.length; b++) {
////  console.log(alunos[b]);
////}
////
////var carro = {
////  Ano: 2018,
////  Modelo: "Fox",
////  Cilindradas: "1.8",
////  Combustível: "Gasolina",
////};
////
////for (var prop in carro) {
////  console.log(prop + ": " + carro[prop]);
////}
////
////var elementos = document.getElementsByClassName("exemplo");
////console.log(elementos);
//
//for (var c = 0; c < elementos.length; c++) {
//  elementos[c].style.color = "orange";
//elementos[c].style["font-weight"] = "bold";
//}
//
// LOOP WHILE
//var count = 0;
//while (count < 10) {
//  console.log(count);
//  count++;
//}

// LOOP DO WHILE
//var count2 = 10;

//do {
//  console.log(count2);
//  count2++;
//} while (count2 < 5);

//var idade = 18;
//
//if (idade < 18) {
//  console.log("É menor de idade");
//} else if (idade == 18) {
//  console.log("Tem 18 anos");
//} else {
//  console.log("É maior de idade");
//}

//var nota = 8;
//var falta = 1;
//
//if (nota < 7 || falta > 4) {
//  console.log("Está reprovado");
//} else {
//  console.log("Está aprovado");
//}

//var nome = "";
//if (nome) {
//  console.log("Nome: " + nome);
//} else {
//  console.log("Nome não informado ");
//}

//var socio = false;
//var idade = 25;
//if (socio == true || idade >= 25) {
//  console.log(" O ingresso gratis");
//} else {
//  if (idade < 18) {
//    console.log("Preço a pagar : R$ 6,00");
//  } else {
//    console.log("Preço a pagar : R$ 12,00");
//  }
//}

var funcionarios = [
  {
    nome: "Carlos Henrique da Silva",
    idade: 45,
    filhos: ["Mariana Alves da Silva", "Fernanda Alves da Silva"],
  },

  {
    nome: "Maria Helena Pereira",
    idade: 32,
    filhos: ["Luiz Ricardo Lima"],
  },

  {
    nome: "José Feliciano Maia",
    idade: 39,
    filhos: [
      "Felipe Ferreira Maia",
      "Fábio Ferreira Maia",
      "João Ferreira Maia",
    ],
  },
];

//var list_element = document.getElementById("filhos");
//list_element.innerHTML = "";
//
//for (var a = 0; a < funcionarios.length; a++) {
//  if (funcionarios[a].filhos) {
//    var lista_filhos = funcionarios[a].filhos;
//
//    for (var b = 0; b < lista_filhos.length; b++) {
//      list_element.innerHTML +=
//        "<li>" +
//        lista_filhos[b] +
//        "- filhos de " +
//        funcionarios[a].nome +
//        "</li>";
//    }
//  }
//}

// Exercício 2
