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
  const respostas = {
    q1: "c", q2: "c", q3: "c", q4: "b", q5: "c",
    q6: "b", q7: "c", q8: "c", q9: "b", q10: "c",
    q11: "c", q12: "b", q13: "c", q14: "b", q15: "c",
    q16: "a", q17: "b", q18: "c", q19: "d", q20: "a"
  };

  let acertos = 0;
  // Loop para verificar cada resposta de q1 a q20
  for (let i = 1; i <= totalPerguntas; i++) {
    const respostaSelecionada = document.querySelector(`input[name="q${i}"]:checked`);

    // Verifica se uma resposta foi selecionada e se ela é a correta
    if (respostaSelecionada && respostaSelecionada.value === respostas[`q${i}`]) {
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
