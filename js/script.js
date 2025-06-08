
let perguntaAtual = 0;
const totalPerguntas = 20; // Substituir por 20 ao expandir

function mostrarPergunta(n) {
  document.querySelectorAll(".pergunta").forEach((el, i) => {
    el.classList.remove("ativa");
    if (i === n) el.classList.add("ativa");
  });
}

function navegar(direcao) {
  if (direcao === 'proxima' && perguntaAtual < totalPerguntas - 1) {
    perguntaAtual++;
  } else if (direcao === 'anterior' && perguntaAtual > 0) {
    perguntaAtual--;
  }
  mostrarPergunta(perguntaAtual);
}

function corrigir() {
  const respostas = {
    q1: "c", q2: "c", q3: "c", q4: "b", q5: "c",
    q6: "b", q7: "c", q8: "c", q9: "b", q10: "c",
    q11: "c", q12: "b", q13: "c", q14: "b", q15: "c",
    q16: "a", q17: "b", q18: "c", q19: "d", q20: "a"
  };

  let acertos = 0;
  for (let i = 1; i <= totalPerguntas; i++) {
    const sel = document.querySelector(`input[name="q${i}"]:checked`);
    if (sel && sel.value === respostas[`q${i}`]) acertos++;
  }

  // Oculta o formulário e exibe o resultado
  document.getElementById("quizForm").style.display = "none";
  document.getElementById("resultado").innerHTML =
    `Você acertou <strong>${acertos}</strong> de <strong>${totalPerguntas}</strong>.`;

  // Exibe o link para a próxima aula apenas se acertar 15 ou mais
  if (acertos >= 15) {
    document.getElementById("linkProximaAula").style.display = "block";
  } else {
    document.getElementById("linkProximaAula").style.display = "none";
  }
}
