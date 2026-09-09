const perguntas = [
{
enunciado:
"Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
alternativas: [
{
texto: "Isso é assustador!",
afirmacao:
"No início ficou com medo do que essa tecnologia pode fazer."
},
{
texto: "Isso é maravilhoso!",
afirmacao: "Quis saber como usar IA no seu dia a dia."
}
]
},
{
enunciado:
"Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
alternativas: [
{
texto:
"Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
afirmacao:
"Você utilizou a IA como uma ferramenta de apoio para pesquisar e compreender melhor o assunto."
},
{
texto:
"Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
afirmacao:
"Você preferiu utilizar pesquisas, conversas e seus próprios conhecimentos para desenvolver o trabalho."
}
]
},
{
enunciado:
"Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
alternativas: [
{
texto:
"Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
afirmacao:
"Você acredita que a IA pode criar novas oportunidades e ajudar a desenvolver habilidades humanas."
},
{
texto:
"Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
afirmacao:
"Você se preocupa com os impactos da IA no mercado de trabalho e defende a proteção dos trabalhadores."
}
]
},
{
enunciado:
"Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
alternativas: [
{
texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
afirmacao:
"Você decidiu criar a imagem utilizando uma ferramenta de design tradicional."
},
{
texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
afirmacao:
"Você decidiu experimentar a inteligência artificial para criar a imagem."
}
]
},
{
enunciado:
"Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
alternativas: [
{
texto:
"Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
afirmacao:
"Você considera que utilizar o texto inteiro gerado pela IA é uma forma válida de contribuir."
},
{
texto:
"O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
afirmacao:
"Você entende que a IA pode ajudar, mas que é essencial revisar as informações e acrescentar as perspectivas pessoais do grupo."
}
]
}
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
perguntaAtual = perguntas[atual];

caixaPerguntas.textContent = perguntaAtual.enunciado;

mostraAlternativas();
}

function mostraAlternativas() {
caixaAlternativas.textContent = "";

for (const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document.createElement("button");

botaoAlternativas.textContent = alternativa.texto;

botaoAlternativas.addEventListener("click", () => {
  respostaSelecionada(alternativa);
});

caixaAlternativas.appendChild(botaoAlternativas);


}
}

function respostaSelecionada(opcaoSelecionada) {
const afirmacao = opcaoSelecionada.afirmacao;

historiaFinal += afirmacao + " ";

atual++;

if (atual < perguntas.length) {
mostraPergunta();
} else {
mostraResultado();
}
}

function mostraResultado() {
caixaPerguntas.textContent = "Em 2049...";

textoResultado.textContent = historiaFinal;

caixaAlternativas.textContent = "";
}

mostraPergunta();
