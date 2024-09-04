
let pontuacao = 0;
let batidasEmObstaculos = 0;
let voltasCompletadas = 0;
const voltasParaBonus = 5;


const voltasElement = document.getElementById('voltas');
const batidasElement = document.getElementById('batidas');
const pontuacaoElement = document.getElementById('pontuacao');
const mensagemElement = document.getElementById('mensagem');
const voltaButton = document.getElementById('volta');
const batidaButton = document.getElementById('batida');

function atualizarExibicao() {
    voltasElement.textContent = voltasCompletadas;
    batidasElement.textContent = batidasEmObstaculos;
    pontuacaoElement.textContent = pontuacao;
}


voltaButton.addEventListener('click', () => {
    voltasCompletadas++;
    pontuacao += 20;
    atualizarExibicao();
    verificarFimDeJogo();
});
batidaButton.addEventListener('click', () => {
    batidasEmObstaculos++;
    pontuacao = Math.max(0, pontuacao - 15);
    atualizarExibicao();
    verificarFimDeJogo();
});


function verificarFimDeJogo() {
    if (batidasEmObstaculos > 3) {
        finalizarJogo("Fim de jogo, seu newba. você bateu mais de 3 vezes.");
    } else if (voltasCompletadas === voltasParaBonus && batidasEmObstaculos === 0) {
        pontuacao += 50;
        finalizarJogo("boa carai, tu é bom em? ganhou 50 pontos por não ser barbeiro.");
    }
}


function finalizarJogo(mensagem) {
    mensagemElement.textContent = mensagem + ` Pontuação final: ${pontuacao} pontos.`;
    voltaButton.disabled = true;
    batidaButton.disabled = true;
}


atualizarExibicao();

//criei a dinâmica do jogo (GetElementById) usando a maior parte chat gpt, pois não sei usar funções muito bem ainda :(