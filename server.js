import express from "express";

const port = 8080;

const app = express();

app.use(express.json());

// Experimente acessar:
// /cores/red
// /cores/blue
// /cores/verde
app.get("/cores/:corEscolhida", (req, res) => {
  const corEscolhida = req.params.corEscolhida;
  corEscolhida === "red" &&
    res.send('<h1 style="background-color: red">Vermelho</h1>');

  corEscolhida === "blue" &&
    res.send('<h1 style="background-color: blue">Azul</h1>');

  corEscolhida !== "red" &&
    corEscolhida !== "blue" &&
    res.send("<span>Cor não encontrada</span>");
});

// Experimente acessar /dobrar/12
app.get("/dobrar/:numero", (req, res) => {
  const dobro = Number(req.params.numero) * 2;
  res.send(`<p>O dobro do número é: ${dobro}<p>`);
});

// Experimente acessar /dobrar-varios/2,5,4,2,10
app.get("/dobrar-varios/:numeros", (req, res) => {
  const numeros = req.params.numeros.split(",").map((numero) => Number(numero));
  const dobros = numeros.map((numero) => numero * 2);
  res.send(`<p>Os dobros dos números são: ${dobros.join(", ")}</p>`);
});

// Experimente acessar /oi/Duda/Velho
app.get("/oi/:nome/:sobrenome", (req, res) => {
  const nome = req.params.nome;
  const sobrenome = req.params.sobrenome;
  const nomeCompleto = `${nome} ${sobrenome}`;
  res.send(`Oi, ${nomeCompleto}!`);
});

app.get("/impares/:numeros", (req, res) => {
  const numeros = req.params.numeros.split(",").map((numero) => Number(numero));
  const impares = numeros.filter((numero) => numero % 2 !== 0);
  res.send(`<p>Os números ímpares são: ${impares.join(", ")}</p>`);
});

app.get("/por-extenso/:numeroEscolhido", (req, res) => {
  const numeroEscolhido = Number(req.params.numeroEscolhido);
  //   numeroEscolhido === 0 && res.send("<h1>Zero</h1>");
  //   numeroEscolhido === 1 && res.send("<h1>Um</h1>");
  //   numeroEscolhido === 2 && res.send("<h1>Dois</h1>");
  //   numeroEscolhido === 3 && res.send("<h1>Três</h1>");
  //   numeroEscolhido === 4 && res.send("<h1>Quatro</h1>");
  //   numeroEscolhido === 5 && res.send("<h1>Cinco</h1>");
  //   numeroEscolhido === 6 && res.send("<h1>Six</h1>");
  //   numeroEscolhido === 7 && res.send("<h1>Seven</h1>");
  //   numeroEscolhido === 8 && res.send("<h1>Oito</h1>");
  //   numeroEscolhido === 9 && res.send("<h1>Nove</h1>");
  //   numeroEscolhido === 10 && res.send("<h1>Dez</h1>");
  // acho que foi em pensamento computacional q eu aprendi que se eu fiz uma coisa repetidas vezes, to fazendo o trabalho da máquina, vou pensar em algo melhor, mas vou deixar o código aqui pq sei ele funciona

  const extensos = [
    "Zero",
    "Um",
    "Dois",
    "Três",
    "Quatro",
    "Cinco",
    "Six",
    "Seven",
    "Oito",
    "Nove",
    "Dez",
  ];
  res.send(`<p>O número digitado é: ${extensos[numeroEscolhido]}</p>`);
});

app.get("/somatorio/:numeros", (req, res) => {
  const numeros = req.params.numeros
    .split(",")
    .map((numeros) => Number(numeros));
  const somagem = numeros.reduce((acc, p) => acc + p, 0);
  res.send(`<h1>O resultado da soma dos números é: ${somagem}</h1>`);
});

app.get("/contar-ate/:numero", (req, res) => {
  const numero = Number(req.params.numero);
  const contagem = [];

  for (let i = 0; i <= numero; i++) {
    contagem.push(i);
  }
  res.send(`<h1>Resultado da contagem é: ${contagem.join(", ")}</h1>`);
});

app.get("/caixa/:corEscolhida/:largu/:altu", (req, res) => {
  const corEscolhida = req.params.corEscolhida;
  const largura = Number(req.params.largu);
  const altura = Number(req.params.altu);

  res.send(
    `<h1 style="background-color: ${corEscolhida}; width: ${largura}px; height: ${altura}px"></h1>`,
  );
});

app.listen(port, () => console.log("temo on"));
