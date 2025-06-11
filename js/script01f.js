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
// --- GABARITO CORRETO ---
const respostasCorretas = {
  q1: "c",   // Uma área da IA que interpreta imagens e vídeos
  q2: "c",   // Computer Vision
  q3: "b",   // Reconhecer campos e valores em recibos, faturas, etc.
  q4: "b",   // Receipts (recibos)
  q5: "c",   // AzureKeyCredential
  q6: "c",   // A imagem do recibo
  q7: "a",   // 'begin_recognize_receipts'
  q8: "c",   // .result()
  q9: "b",   // 'Subtotal'
  q10: "c",  // Total
  q11: "b",  // azure.ai.formrecognizer
  q12: "c",  // matplotlib.pyplot
  q13: "a",  // receipt_data[0]
  q14: "c",  // O valor total antes de impostos
  q15: "a",  // TransactionDate
  q16: "b",  // O nome e valor de cada item comprado
  q17: "b",  // plt.axis('off')
  q18: "d",  // F0
  q19: "b",  // PIL
  q20: "c"   // Extrair informações estruturadas de documentos como recibos e faturas
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