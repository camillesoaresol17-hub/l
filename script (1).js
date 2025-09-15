// script.js
// Ultra-Surpresa para o Luan

// Utilidades
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// Elementos principais
document.addEventListener('DOMContentLoaded', () => {
  const misterio = document.getElementById('misterio');
  const btnDescobrir = document.getElementById('btn-descobrir');
  const surpresa = document.getElementById('surpresa');

  // 1. Mostrar botão após 2s
  setTimeout(() => {
    btnDescobrir.style.display = 'inline-block';
  }, 2000);

  // 2. Ao clicar, inicia a explosão de magia
  btnDescobrir.addEventListener('click', async () => {
    misterio.style.display = 'none';
    await explosaoMagica();
    mostrarSurpresa();
  });
});

// 2. Explosão de magia: partículas, confetes, fogos, nome brilhante
async function explosaoMagica() {
  const s = document.getElementById('surpresa');
  s.innerHTML = '';
  s.style.display = 'flex';
  // Partículas brilhantes
  criarParticulas(s, 60);
  await sleep(1200);
  // BOOM: confetes e fogos
  criarConfetes(s, 80);
  criarFogos(s, 5);
  await sleep(900);
  // Nome brilhante
  const nome = document.createElement('div');
  nome.id = 'nome-luan';
  nome.textContent = 'Parabéns, Luan!';
  s.appendChild(nome);
}

// 3. Mostrar botões interativos
function mostrarSurpresa() {
  const s = document.getElementById('surpresa');
  // Botões
  const botoes = document.createElement('div');
  botoes.className = 'botoes-surpresa';
  botoes.innerHTML = `
    <button class="botao-surpresa" id="btn-celebrar">🎊 Celebrar!</button>
    <button class="botao-surpresa" id="btn-bolo">🎂 Soprar velinhas</button>
    <button class="botao-surpresa" id="btn-segredo">💖 Revelar segredo</button>
    <button class="botao-surpresa" id="btn-cartinha">💌 Ler cartinha</button>
    <button class="botao-surpresa" id="btn-surpresa-final">🌌 Surpresa final</button>
  `;
  s.appendChild(botoes);

  // Bolo em HTML/CSS
  const bolo = document.createElement('div');
  bolo.id = 'bolo';
  bolo.innerHTML = `
    <div class="camada camada1"></div>
    <div class="camada camada2"></div>
    <div class="camada camada3"></div>
    <div class="velas">
      <div class="vela"><div class="chama"></div></div>
      <div class="vela"><div class="chama"></div></div>
      <div class="vela"><div class="chama"></div></div>
    </div>
  `;
  bolo.style.display = 'none';
  s.appendChild(bolo);

  // Eventos dos botões
  document.getElementById('btn-celebrar').onclick = chuvaInfinitaConfetes;
  document.getElementById('btn-bolo').onclick = () => mostrarBolo(bolo);
  document.getElementById('btn-segredo').onclick = revelarSegredo;
  document.getElementById('btn-cartinha').onclick = mostrarCartinha;
  document.getElementById('btn-surpresa-final').onclick = surpresaFinal;

  // Cartinha animada (criada uma vez)
  if (!document.getElementById('cartinha')) {
    const carta = document.createElement('div');
    carta.id = 'cartinha';
    carta.innerHTML = `
      <div class="carta-envelope">
        <div class="carta-flap"></div>
        <div class="carta-papel">
          <div class="carta-texto">
            Querido Luan,<br><br>
            Hoje é o seu dia e eu só quero te lembrar o quanto você é especial para mim.<br><br>
            Que a vida te traga sempre motivos para sorrir, sonhos para realizar e muito amor!<br><br>
            Obrigada por ser quem você é. Te amo!<br><br>
            Com carinho,<br>Camille 💛
          </div>
        </div>
      </div>
      <button class="botao-surpresa carta-fechar">Fechar cartinha</button>
    `;
    carta.style.display = 'none';
    document.getElementById('surpresa').appendChild(carta);
    carta.querySelector('.carta-fechar').onclick = () => {
      carta.style.display = 'none';
    };
  }
// Função para mostrar a cartinha
function mostrarCartinha() {
  const carta = document.getElementById('cartinha');
  carta.style.display = 'flex';
  carta.classList.add('abrindo');
  setTimeout(() => carta.classList.remove('abrindo'), 800);
}

  // Mini-surpresa: 3 cliques no bolo
  let boloClicks = 0;
  bolo.addEventListener('click', () => {
    boloClicks++;
    if (boloClicks === 3) mostrarMensagemSecreta();
  });
}

// Partículas brilhantes
function criarParticulas(container, qtd) {
  for (let i = 0; i < qtd; i++) {
    const p = document.createElement('div');
    p.style.position = 'absolute';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.top = Math.random() * 100 + 'vh';
    p.style.width = p.style.height = (Math.random() * 4 + 2) + 'px';
    p.style.borderRadius = '50%';
    p.style.background = 'white';
    p.style.opacity = Math.random() * 0.7 + 0.3;
    p.style.boxShadow = `0 0 12px #fff, 0 0 40px #ffde59`;
    p.style.animation = `particulaPisca ${1 + Math.random()}s infinite alternate`;
    container.appendChild(p);
  }
}

// Confetes
function criarConfetes(container, qtd) {
  for (let i = 0; i < qtd; i++) {
    const c = document.createElement('div');
    c.style.position = 'absolute';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.top = '-30px';
    c.style.width = '10px';
    c.style.height = '18px';
    c.style.background = `hsl(${Math.random()*360},90%,60%)`;
    c.style.borderRadius = '4px';
    c.style.transform = `rotate(${Math.random()*360}deg)`;
    c.style.opacity = 0.85;
    c.style.zIndex = 20;
    c.style.animation = `confeteCai ${1.5 + Math.random()}s linear forwards`;
    container.appendChild(c);
    setTimeout(() => c.remove(), 2000);
  }
}

// Fogos de artifício
function criarFogos(container, qtd) {
  for (let i = 0; i < qtd; i++) {
    setTimeout(() => {
      const f = document.createElement('div');
      f.style.position = 'absolute';
      f.style.left = (20 + Math.random()*60) + 'vw';
      f.style.top = (20 + Math.random()*40) + 'vh';
      f.style.width = f.style.height = '0px';
      f.style.borderRadius = '50%';
      f.style.boxShadow = `0 0 60px 20px hsl(${Math.random()*360},100%,60%)`;
      f.style.opacity = 0.7;
      f.style.zIndex = 30;
      container.appendChild(f);
      setTimeout(() => f.remove(), 900);
    }, i*200);
  }
}

// Chuva infinita de confetes
function chuvaInfinitaConfetes() {
  let rodando = true;
  const s = document.getElementById('surpresa');
  function loop() {
    if (!rodando) return;
    criarConfetes(s, 10);
    setTimeout(loop, 300);
  }
  loop();
  // Para parar, pode-se adicionar um botão de "parar" se quiser.
}

// Mostrar bolo e animar velas
function mostrarBolo(bolo) {
  bolo.style.display = 'block';
  animarVelas(bolo);
}
function animarVelas(bolo) {
  // Apaga as chamas das velas após 1.5s e mostra fumaça
  setTimeout(() => {
    const chamas = bolo.querySelectorAll('.chama');
    chamas.forEach(c => c.style.opacity = 0);
    mostrarFumaca(bolo);
  }, 1500);
}
function mostrarFumaca(bolo) {
  // Fumaça animada acima das velas
  const velas = bolo.querySelectorAll('.vela');
  velas.forEach((vela, i) => {
    const fumaca = document.createElement('div');
    fumaca.className = 'fumaca';
    fumaca.style.left = (vela.offsetLeft + 10) + 'px';
    fumaca.style.top = (vela.offsetTop - 20) + 'px';
    bolo.appendChild(fumaca);
    setTimeout(() => { fumaca.style.opacity = 0; }, 900);
    setTimeout(() => { fumaca.remove(); }, 1300);
  });
}

// Revelar segredo
function revelarSegredo() {
  const s = document.getElementById('surpresa');
  let msg = document.getElementById('mensagem-segredo');
  if (!msg) {
    msg = document.createElement('div');
    msg.id = 'mensagem-segredo';
    msg.textContent = 'Ter você na minha vida é o melhor presente que já ganhei 💛.';
    s.appendChild(msg);
  }
}

// Surpresa final: céu estrelado e nome nas estrelas
function surpresaFinal() {
  const s = document.getElementById('surpresa');
  // Céu estrelado
  let ceu = document.getElementById('ceu-estrelado');
  if (!ceu) {
    ceu = document.createElement('canvas');
    ceu.id = 'ceu-estrelado';
    ceu.width = window.innerWidth;
    ceu.height = window.innerHeight;
    s.appendChild(ceu);
  }
  desenharCeuEstrelado(ceu);
  // Nome nas estrelas
  setTimeout(() => desenharNomeEstrelas(ceu), 1200);
}
function desenharCeuEstrelado(canvas) {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for (let i=0; i<120; i++) {
    ctx.beginPath();
    ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height, Math.random()*2+1, 0, 2*Math.PI);
    ctx.fillStyle = '#fff';
    ctx.globalAlpha = Math.random()*0.7+0.3;
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}
function desenharNomeEstrelas(canvas) {
  const ctx = canvas.getContext('2d');
  ctx.font = 'bold 60px Segoe UI, Arial';
  ctx.strokeStyle = '#ffde59';
  ctx.lineWidth = 3;
  ctx.shadowColor = '#fff';
  ctx.shadowBlur = 18;
  ctx.strokeText('LUAN', canvas.width/2-120, canvas.height/2);
  // Linhas conectando estrelas (simples)
  ctx.shadowBlur = 0;
  ctx.beginPath();
  ctx.moveTo(canvas.width/2-110, canvas.height/2-10);
  ctx.lineTo(canvas.width/2-60, canvas.height/2-40);
  ctx.lineTo(canvas.width/2, canvas.height/2-20);
  ctx.lineTo(canvas.width/2+60, canvas.height/2-30);
  ctx.lineTo(canvas.width/2+110, canvas.height/2-5);
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2;
  ctx.stroke();
}

// Mini-surpresa: mensagem secreta ao clicar 3x no bolo
function mostrarMensagemSecreta() {
  const s = document.getElementById('surpresa');
  let msg = document.getElementById('mensagem-secreta');
  if (!msg) {
    msg = document.createElement('div');
    msg.id = 'mensagem-secreta';
    msg.textContent = 'Você é o meu sonho realizado ❤️';
    s.appendChild(msg);
  }
}

// Encerramento épico: chuva de corações e mensagem final
function chuvaCoracoes() {
  let coracoes = document.getElementById('chuva-coracoes');
  if (!coracoes) {
    coracoes = document.createElement('div');
    coracoes.id = 'chuva-coracoes';
    document.body.appendChild(coracoes);
  }
  for (let i=0; i<18; i++) {
    setTimeout(() => criarCora(coracoes), i*200);
  }
}
function criarCora(container) {
  const c = document.createElement('div');
  c.textContent = '💖';
  c.style.position = 'absolute';
  c.style.left = Math.random()*100 + 'vw';
  c.style.top = '-40px';
  c.style.fontSize = (2+Math.random()*2)+'rem';
  c.style.opacity = 0.8;
  c.style.animation = `coraCai ${2+Math.random()*2}s linear forwards`;
  container.appendChild(c);
  setTimeout(() => c.remove(), 4000);
}

// Mensagem final e botão de recomeçar
function mostrarMensagemFinal() {
  const s = document.getElementById('surpresa');
  let msg = document.getElementById('mensagem-final');
  if (!msg) {
    msg = document.createElement('div');
    msg.id = 'mensagem-final';
    msg.textContent = 'Com todo o meu amor, da sua Camille 💛';
    s.appendChild(msg);
    // Botão de recomeçar
    const btn = document.createElement('button');
    btn.className = 'botao-surpresa';
    btn.textContent = 'Recomeçar a surpresa';
    btn.onclick = () => window.location.reload();
    s.appendChild(btn);
  }
}

// Surpresa final completa
function surpresaFinal() {
  surpresaFinalExecutada = true;
  surpresaFinalBase();
}
async function surpresaFinalBase() {
  surpresaFinalExecutada = true;
  surpresaFinal();
  await sleep(1800);
  chuvaCoracoes();
  await sleep(2000);
  mostrarMensagemFinal();
}

// Animações extras
const style = document.createElement('style');
style.innerHTML = `
@keyframes particulaPisca { 0%{opacity:0.3;} 100%{opacity:1;} }
@keyframes confeteCai { to { top: 110vh; transform: rotate(360deg); } }
@keyframes coraCai { to { top: 110vh; opacity: 0; } }
`;
document.head.appendChild(style);
