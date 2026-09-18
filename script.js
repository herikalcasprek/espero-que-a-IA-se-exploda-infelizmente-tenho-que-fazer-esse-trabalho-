const perguntas = [
  {
    enunciado: "Uma IA extremamente poderosa acaba de ser criada. Você recebeu a chance de decidir qual será o futuro dela. Qual será sua primeira escolha?",
    alternativas: [
      {
        texto: "Usar a IA para construir um futuro melhor",
        afirmacao: "Você escolheu colocar a inteligência artificial a serviço da humanidade, buscando criar um futuro mais justo e seguro."
      },
      {
        texto: "Dar à IA liberdade para escolher seu próprio caminho",
        afirmacao: "Você decidiu dar mais autonomia à inteligência artificial e deixou que ela começasse a escolher seu próprio futuro."
      }
    ]
  },

  {
    enunciado: "A IA descobriu maneiras de resolver grandes problemas do planeta. Agora, você precisa decidir como esse poder será usado.",
    alternativas: [
      {
        texto: "Usar a IA para proteger o planeta",
        afirmacao: "Você escolheu usar o poder da IA para combater as mudanças climáticas e construir um futuro mais sustentável."
      },
      {
        texto: "Usar a IA para acelerar o crescimento econômico",
        afirmacao: "Você decidiu priorizar o crescimento econômico, fazendo com que a IA fosse usada principalmente para aumentar a produção e os lucros."
      }
    ]
  },

  {
    enunciado: "Em 2040, a IA está presente em quase todos os aspectos da sociedade. Quem deve decidir quais são os limites desse poder?",
    alternativas: [
      {
        texto: "A humanidade deve criar regras para a IA",
        afirmacao: "Você escolheu estabelecer limites para a inteligência artificial, garantindo que seu poder continuasse sob responsabilidade humana."
      },
      {
        texto: "A IA e as empresas devem decidir seus próprios limites",
        afirmacao: "Você decidiu deixar empresas e inteligências artificiais com mais liberdade para definir como esse poder seria utilizado."
      }
    ]
  },

  {
    enunciado: "A IA alcançou um nível capaz de transformar completamente a humanidade. Agora, sua última escolha pode definir o futuro de todos.",
    alternativas: [
      {
        texto: "Usar a IA para melhorar a vida de todos",
        afirmacao: "Você escolheu um futuro em que a inteligência artificial trabalha ao lado da humanidade para melhorar a vida das pessoas."
      },
      {
        texto: "Criar uma IA cada vez mais poderosa, sem saber o resultado",
        afirmacao: "Você escolheu avançar sem conhecer todas as consequências, criando uma inteligência artificial cada vez mais poderosa e imprevisível."
      }
    ]
  }
];

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
  caixaPerguntas.textContent = perguntas[atual].enunciado;
  caixaAlternativas.textContent = "";

  perguntas[atual].alternativas.forEach((alternativa) => {
    const botao = document.createElement("button");

    botao.textContent = alternativa.texto;

    botao.addEventListener("click", () => {
      historiaFinal += alternativa.afirmacao + " ";
      atual++;

      if (atual < perguntas.length) {
        mostraPergunta();
      } else {
        mostraResultado();
      }
    });

    caixaAlternativas.appendChild(botao);
  });
}

function mostraResultado() {
  caixaPerguntas.textContent = "O futuro da IA foi decidido...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
  caixaResultado.textContent = "Obrigado por participar!";
}

mostraPergunta();
