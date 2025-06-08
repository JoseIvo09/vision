// A variável 'perguntaAtual' controla o índice da pergunta exibida (começando em 0)
let perguntaAtual = 0;
const totalPerguntas = 20;

// Função para exibir a pergunta correta e esconder as outras
function mostrarPergunta(n) {
  // Pega todos os elementos com a classe 'pergunta'
  document.querySelectorAll(".pergunta").forEach((perguntaDiv, indice) => {
    perguntaDiv.classList.remove("ativa"); // Remove a classe 'ativa' de todas
    if (indice === n) {
      perguntaDiv.classList.add("ativa"); // Adiciona 'ativa' apenas na pergunta atual
    }
  });
}

// --- FUNÇÕES DE NAVEGAÇÃO ADICIONADAS ---
// Estas funções são chamadas pelos botões no HTML
function proxima() {
  navegar('proxima');
}

function anterior() {
  navegar('anterior');
}

// Lógica principal de navegação
function navegar(direcao) {
  if (direcao === 'proxima' && perguntaAtual < totalPerguntas - 1) {
    perguntaAtual++;
  } else if (direcao === 'anterior' && perguntaAtual > 0) {
    perguntaAtual--;
  }
  mostrarPergunta(perguntaAtual);
}

// Função para corrigir o quiz ao finalizar
function corrigir() {
  // --- GABARITO CORRIGIDO ---
  const respostasCorretas = {
  q1: "b",  // Custom Vision
  q2: "a",  // Classificação
  q3: "c",  // Tag
  q4: "b",  // Boa variedade de imagens
  q5: "d",  // Treinar o modelo
  q6: "c",  // Classificação geral compacta
  q7: "a",  // Acurácia
  q8: "b",  // Confiança
  q9: "c",  // Torna o modelo acessível via API
  q10: "b", // ID do Projeto, Chave e Endpoint
  q11: "c", // Configurações do projeto
  q12: "c", // Custom Vision ou Serviços Cognitivos
  q13: "c", // Food
  q14: "a", // Treinamento Padrão
  q15: "b", // Avaliar previsões com imagem externa
  q16: "b", // Configurações do recurso de previsão
  q17: "b", // azure-cognitiveservices-vision-customvision
  q18: "c", // apple
  q19: "b", // Matplotlib
  q20: "c"  // Identifica a localização dos objetos
};

  let acertos = 0;
  // Loop para verificar cada resposta de q1 a q20
  for (let i = 1; i <= totalPerguntas; i++) {
    const respostaSelecionada = document.querySelector(`input[name="q${i}"]:checked`);

    // Verifica se uma resposta foi selecionada e se ela é a correta
    if (respostaSelecionada && respostaSelecionada.value === respostasCorretas[`q${i}`]) {
      acertos++;
    }
  }

  // Oculta o formulário do quiz
  document.getElementById("quizForm").style.display = "none";
  
  // Exibe a pontuação final
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `Você acertou <strong>${acertos}</strong> de <strong>${totalPerguntas}</strong> perguntas.`;
  resultadoDiv.style.display = "block";


  // Exibe o link para a próxima aula apenas se o aluno atingir a nota de corte
  if (acertos >= 15) {
    document.getElementById("linkProximaAula").style.display = "block";
  } else {
    // Garante que o link não seja exibido se a nota for baixa
    document.getElementById("linkProximaAula").style.display = "none";
  }
}

// Garante que a primeira pergunta seja exibida ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    mostrarPergunta(perguntaAtual);
});