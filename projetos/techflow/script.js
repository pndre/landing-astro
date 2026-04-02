/* =====================================================
   DATA
===================================================== */
const POSTS = [{
        id: 1,
        category: "Web Dev",
        catColor: "web",
        title: "Neo-Brutalismo: O Retorno do Design Autêntico",
        excerpt: "Bordas grossas, sombras deslocadas e uma estética que não tem medo de ser diferente. O minimalismo deu lugar à personalidade.",
        date: "02 ABR 2026",
        readTime: "9 MIN",
        author: "Pedro André",
        tags: ["design", "css", "tendências", "ui"],
        image: "https://picsum.photos/id/20/1200/700",
        imageThumb: "https://picsum.photos/id/20/800/450",
        likes: 47,
        comments: 12,
        content: `<p>O design minimalista ficou cansativo. Depois de uma década de brancos puros, espaçamentos excessivos e tipografia quase invisível, o mercado anseia por autenticidade. O Neo-Brutalismo digital não é apenas uma estética — é uma declaração.</p><h3>O que define o Neo-Brutalismo</h3><p>Ao contrário do brutalismo arquitetônico — que expõe estruturas de concreto bruto — o Neo-Brutalismo digital abraça as possibilidades do CSS com honestidade brutal: bordas pretas explícitas, sombras que não fingem ser tridimensionais e uma paleta de cores que grita em vez de sussurrar.</p><blockquote>Design honesto não esconde sua natureza. Expõe-a com orgulho e sem desculpas.</blockquote><p>Figma e Dribbble estão cheios de interfaces que poderiam ser de qualquer produto. O Neo-Brutalismo resolve isso na raiz: você olha e imediatamente sabe que foi uma escolha deliberada.</p><h3>Quem está adotando</h3><p>Startups de tecnologia, plataformas de mídia independente e estúdios criativos estão na vanguarda. <strong>Gumroad, Linear e Notion</strong> já incorporaram elementos dessa estética com excelente recepção.</p><p>A principal vantagem competitiva é a memorabilidade. Em um mercado saturado, ser reconhecível vale mais do que ser convencionalmente bonito.</p><h3>Como implementar</h3><p>CSS puro é suficiente para 90% dos efeitos. Variáveis CSS, flexbox e grid são as únicas ferramentas necessárias. O segredo está na consistência e na coragem de ir até o fim — meio-brutalismo não funciona.</p>`
    },
    {
        id: 2,
        category: "IA",
        catColor: "ai",
        title: "IA Sem Antropomorfismo: Por Que Isso É Bom",
        excerpt: "Entender a inteligência artificial como ferramenta, não como substituto humano, é o caminho mais produtivo e honesto.",
        date: "01 ABR 2026",
        readTime: "11 MIN",
        author: "Pedro André",
        tags: ["ia", "llm", "filosofia", "tecnologia"],
        image: "https://picsum.photos/id/26/1200/700",
        imageThumb: "https://picsum.photos/id/26/800/450",
        likes: 83,
        comments: 24,
        content: `<p>A tendência de antropomorfizar modelos de linguagem tem um custo oculto: cria expectativas que o sistema não pode cumprir e obscurece como ele realmente funciona.</p><h3>Máquinas de probabilidade</h3><p>LLMs são, em essência, sistemas que calculam a palavra mais provável dado um contexto. Isso é extraordinariamente poderoso — mas não é raciocínio humano, nem criatividade no sentido filosófico, e certamente não é empatia genuína.</p><blockquote>Quando você para de esperar que a IA 'entenda' e começa a usá-la como uma ferramenta estatística sofisticada, os resultados melhoram significativamente.</blockquote><p>A analogia mais precisa é a de uma calculadora de linguagem avançada. Sua calculadora não 'quer' ajudar você. Ela simplesmente executa operações com precisão. Trate os LLMs da mesma forma e terá muito menos frustração.</p><h3>Implicações práticas</h3><p>Quando você para de projetar sentimentos em um modelo de IA, começa a usar prompts mais precisos, verificar as saídas com mais cuidado e escolher a ferramenta certa para o problema certo. <strong>A eficiência aumenta, a frustração diminui.</strong></p><p>O antropomorfismo excessivo também alimenta medos infundados sobre consciência das máquinas, o que dificulta discussões sérias sobre riscos reais, como viés algorítmico e concentração de poder.</p>`
    },
    {
        id: 3,
        category: "Hardware",
        catColor: "hw",
        title: "PC Customizado: Vale a Pena em 2026?",
        excerpt: "Montar seu próprio computador continua sendo uma experiência recompensadora — seja por desempenho, aprendizado ou pura diversão.",
        date: "31 MAR 2026",
        readTime: "7 MIN",
        author: "Pedro André",
        tags: ["hardware", "pc", "gaming", "faça você mesmo"],
        image: "https://picsum.photos/id/0/1200/700",
        imageThumb: "https://picsum.photos/id/0/800/450",
        likes: 62,
        comments: 18,
        content: `<p>Com laptops cada vez mais poderosos e mini PCs ganhando espaço, a pergunta faz sentido: ainda vale a pena montar um desktop personalizado em 2026?</p><h3>O argumento técnico</h3><p>Para cargas de trabalho pesadas — renderização 3D, edição de vídeo 4K, treinamento de modelos de ML — um desktop personalizado ainda oferece a melhor relação custo/desempenho. A capacidade de trocar componentes individuais elimina a necessidade de comprar um sistema completamente novo quando um único componente fica obsoleto.</p><blockquote>A flexibilidade de upgrade é o recurso matador que nenhum laptop jamais replicará totalmente.</blockquote><h3>O argumento educacional</h3><p>Montar um PC ensina como os computadores funcionam de forma visceral. Entender a relação entre CPU, RAM, armazenamento e GPU cria intuições que tornam você um profissional de tecnologia melhor, independentemente da especialidade.</p><p>A comunidade de entusiastas — fóruns, canais do YouTube, subreddits — continua vibrante e acolhedora para iniciantes. <strong>É um hobby que rende dividendos em conhecimento.</strong></p><h3>Quando NÃO montar</h3><p>Se você precisa de mobilidade, se seu orçamento é limitado ou se você simplesmente quer algo que funcione pronto para uso, um laptop premium ou um mini PC moderno é a escolha mais inteligente. Ferramentas certas para os problemas certos.</p>`
    },
    {
        id: 4,
        category: "Cultura Tech",
        catColor: "cultura",
        title: "O Renascimento dos Fóruns e do Texto Puro",
        excerpt: "As redes sociais visuais perderam terreno para comunidades baseadas em texto: Discord, Reddit, newsletters e blogs independentes.",
        date: "30 MAR 2026",
        readTime: "8 MIN",
        author: "Pedro André",
        tags: ["internet", "comunidade", "blog", "escrita"],
        image: "https://picsum.photos/id/96/1200/700",
        imageThumb: "https://picsum.photos/id/96/800/450",
        likes: 91,
        comments: 31,
        content: `<p>Algo está acontecendo nas margens da internet mainstream: as pessoas estão migrando de plataformas algorítmicas de imagem e vídeo de volta para espaços de comunidade baseados em texto.</p><h3>Por que o texto está voltando</h3><p>A fadiga com o rolar infinito de conteúdo superficial criou um apetite genuíno por substância. Um bom texto longo comunica nuances que um Reel de 30 segundos simplesmente não consegue. A profundidade está sendo valorizada novamente.</p><blockquote>Newsletters independentes com 10.000 assinantes engajados têm mais influência real do que perfis com milhões de seguidores passivos.</blockquote><h3>A nova geração de fóruns</h3><p>Discord, fóruns especializados como Hacker News e Lobsters, e plataformas como Substack criaram espaços onde discussões longas e aprofundadas prosperam. O modelo não é novo, mas a escala e a qualidade são sem precedentes.</p><p>Blogs independentes também estão ressurgindo. A promessa original da web — publicar para qualquer um, sem intermediários — nunca foi tão acessível tecnicamente. <strong>E as pessoas estão redescobrindo isso.</strong></p><h3>O que isso significa</h3><p>Para criadores de conteúdo, a mensagem é clara: profundidade > alcance. Para leitores, é um convite para sair da bolha algorítmica e construir uma dieta de informação intencional.</p>`
    },
    {
        id: 5,
        category: "Design Brutal",
        catColor: "design",
        title: "CSS Puro: O Retorno do Controle Total",
        excerpt: "Frameworks são úteis, mas escrever CSS manualmente dá liberdade criativa, desempenho e compreensão profunda da plataforma.",
        date: "29 MAR 2026",
        readTime: "6 MIN",
        author: "Pedro André",
        tags: ["css", "frontend", "performance", "web"],
        image: "https://picsum.photos/id/106/1200/700",
        imageThumb: "https://picsum.photos/id/106/800/450",
        likes: 55,
        comments: 9,
        content: `<p>Após anos de dependência de frameworks CSS — Bootstrap, Tailwind, Material UI — muitos desenvolvedores estão redescobrindo o prazer e a eficiência do CSS escrito à mão.</p><h3>O problema com abstrações excessivas</h3><p>Frameworks são excelentes para velocidade de desenvolvimento em equipe. Mas eles têm um custo: você começa a pensar nos termos do framework, não nos termos da plataforma. Quando algo não funciona, você não sabe se o problema está no seu código, no framework ou no CSS subjacente.</p><blockquote>Conhecer CSS profundamente é uma vantagem competitiva. A maioria dos desenvolvedores front-end modernos não sabe o que é um 'contexto de empilhamento'.</blockquote><h3>O que o CSS moderno oferece</h3><p>Propriedades personalizadas CSS (variáveis nativas), Grid, Flexbox, Consultas de Contêiner, :has() e @layer mudaram completamente o jogo. <strong>O CSS de 2026 é uma linguagem completamente diferente</strong> do CSS 2.0 que justificou a criação dos principais frameworks.</p><p>O desempenho também é real: zero bytes de CSS não utilizado, zero JavaScript em tempo de execução para estilos e controle total sobre a cascata.</p><h3>Quando usar frameworks</h3><p>Em projetos de equipe com prazos apertados, Tailwind ainda faz sentido. A questão não é abandono — é saber que existe uma alternativa viável e ter o conhecimento para escolher conscientemente.</p>`
    },
    {
        id: 6,
        category: "IA",
        catColor: "ai",
        title: "Engenharia de Prompt: A Nova Habilidade Essencial",
        excerpt: "Saber se comunicar eficientemente com modelos de IA se tornou uma competência-chave no mercado de tecnologia — e ainda é subestimada.",
        date: "28 MAR 2026",
        readTime: "5 MIN",
        author: "Pedro André",
        tags: ["ia", "prompts", "produtividade", "llm"],
        image: "https://picsum.photos/id/155/1200/700",
        imageThumb: "https://picsum.photos/id/155/800/450",
        likes: 120,
        comments: 42,
        content: `<p>A engenharia de prompt passou de curiosidade de nicho para competência valorizada em equipes técnicas e não técnicas. Mas o que exatamente isso significa na prática?</p><h3>Além de 'faça X para mim'</h3><p>O prompting eficaz envolve fornecer contexto suficiente, especificar o formato de saída desejado, usar exemplos concretos (few-shot prompting) e entender as limitações do modelo que você está usando. Está mais próximo de escrever especificações técnicas do que dar ordens.</p><blockquote>O melhor engenheiro de prompt não é aquele que escreve o prompt mais elaborado — é aquele que sabe quando um problema não deve ser resolvido com um LLM.</blockquote><h3>Técnicas que funcionam</h3><p>Chain-of-thought prompting (peça ao modelo para raciocinar passo a passo), role prompting (defina quem o modelo deve 'ser') e constraint prompting (especifique o que o modelo NÃO deve fazer) são três técnicas com impacto imediato e mensurável.</p><p><strong>A iteração é fundamental</strong>: o primeiro prompt raramente é o melhor. Tratar o desenvolvimento de prompt como desenvolvimento de código — com versionamento, testes e refinamento — é o que separa amadores de especialistas.</p>`
    },
    {
        id: 7,
        category: "Web Dev",
        catColor: "web",
        title: "JavaScript Moderno: Frameworks São Opcionais",
        excerpt: "Vanilla JS, Web Components e APIs nativas são mais poderosas do que nunca — e podem ser a escolha certa para o seu próximo projeto.",
        date: "27 MAR 2026",
        readTime: "10 MIN",
        author: "Pedro André",
        tags: ["javascript", "vanilla", "web components", "frontend"],
        image: "https://picsum.photos/id/169/1200/700",
        imageThumb: "https://picsum.photos/id/169/800/450",
        likes: 74,
        comments: 27,
        content: `<p>React acabou de completar 13 anos. Vue e Angular têm histórias semelhantes. Embora esses frameworks continuem relevantes, o ecossistema nativo do navegador evoluiu a ponto de tornar muitos casos de uso de framework completamente desnecessários.</p><h3>O que o navegador oferece nativamente</h3><p>Web Components permitem criar elementos HTML reutilizáveis com shadow DOM e lifecycle hooks. ES Modules tornam a modularização nativa. Fetch API e async/await simplificaram as requisições. Intersection Observer, ResizeObserver e MutationObserver cobrem casos de uso que antes exigiam jQuery inteiro.</p><blockquote>A plataforma web é o maior framework de todos. E continua melhorando sem mudanças bruscas.</blockquote><h3>O custo real dos frameworks</h3><p>React + ReactDOM adicionam cerca de 130kb de JavaScript (minificado). Esse é um custo de desempenho real, especialmente em dispositivos de médio porte. Para aplicações simples ou sites de conteúdo, essa sobrecarga raramente é justificada.</p><p><strong>A questão não é evitar frameworks</strong> — é escolher conscientemente. Projeto de equipe grande? React faz sentido. Site de conteúdo ou ferramenta pequena? Vanilla JS provavelmente é a escolha correta.</p>`
    },
    {
        id: 8,
        category: "Hardware",
        catColor: "hw",
        title: "PCs Portáteis: O Futuro do Gaming Portátil",
        excerpt: "Dispositivos como o Steam Deck e seus sucessores mostram que é possível ter toda a sua biblioteca de PC no bolso.",
        date: "26 MAR 2026",
        readTime: "7 MIN",
        author: "Pedro André",
        tags: ["gaming", "hardware", "steam deck", "portátil"],
        image: "https://picsum.photos/id/177/1200/700",
        imageThumb: "https://picsum.photos/id/177/800/450",
        likes: 88,
        comments: 35,
        content: `<p>O Steam Deck provou que havia uma demanda reprimida por jogos portáteis no PC. Em 2026, o mercado explodiu — ROG Ally X, Lenovo Legion Go e uma dúzia de concorrentes transformaram a categoria em um segmento respeitável.</p><h3>Por que agora</h3><p>A convergência de APUs AMD com eficiência energética, baterias de alta densidade e SSDs ultracompactos criou a janela de oportunidade. A arquitetura x86 significa compatibilidade nativa com décadas de catálogo de jogos — sem camada de emulação, sem compromissos.</p><blockquote>Ter 15.000 jogos no bolso, jogáveis offline, em qualquer lugar do mundo, é um argumento que os consoles tradicionais simplesmente não podem contrapor.</blockquote><h3>Os verdadeiros desafios</h3><p>A duração da bateria continua sendo o calcanhar de Aquiles: 90 minutos em jogos exigentes ainda é a realidade para a maioria dos dispositivos. O perfil de usuário ideal é alguém que joga em sessões curtas ou tem acesso frequente a tomadas.</p><p><strong>O ecossistema de software também importa:</strong> O SteamOS da Valve continua sendo a melhor experiência pronta para uso. O Windows em concorrentes geralmente exige configuração adicional para funcionar de maneira ideal.</p>`
    }
];

/* STATE */
let activeCategory = null;
let activeSearch = '';
let displayCount = 4;
let likedPosts = new Set(JSON.parse(localStorage.getItem('tf_likes') || '[]'));
let isDark = localStorage.getItem('tf_dark') === 'true';

/* CURSOR */
const cursorDot = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');
let ringX = 0,
    ringY = 0;
document.addEventListener('mousemove', e => {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
    ringX += (e.clientX - ringX) * 0.18;
    ringY += (e.clientY - ringY) * 0.18;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
});

function animCursor() {
    ringX += (parseFloat(cursorDot.style.left || 0) - ringX) * 0.18;
    ringY += (parseFloat(cursorDot.style.top || 0) - ringY) * 0.18;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    requestAnimationFrame(animCursor);
}
animCursor();

/* THEME */
function applyTheme() {
    document.body.classList.toggle('dark', isDark);
    document.getElementById('themeToggle').textContent = isDark ? '☽' : '☀';
}
document.getElementById('themeToggle').addEventListener('click', () => {
    isDark = !isDark;
    localStorage.setItem('tf_dark', isDark);
    applyTheme();
    showToast(isDark ? 'MODO ESCURO ATIVADO' : 'MODO CLARO ATIVADO');
});
applyTheme();

/* PAGE PROGRESS */
window.addEventListener('scroll', () => {
    const st = window.scrollY;
    const dh = document.documentElement.scrollHeight - window.innerHeight;
    document.getElementById('page-progress').style.width = (st / dh * 100) + '%';
    const fabTop = document.getElementById('fab-top');
    fabTop.classList.toggle('visible', st > 400);
});

/* TICKER */
function buildTicker() {
    const items = [
        '2026 — BLOG TECHFLOW',
        'NEO-BRUTALISMO EM ALTA',
        'IA TRANSFORMA O MERCADO',
        'CSS MODERNO DISPENSA FRAMEWORKS',
        'STEAM DECK 2 ANUNCIADO',
        'CÓDIGO ABERTO NUNCA MORRE',
        'CONSTRUIR EM PÚBLICO É O NOVO NORMAL',
        'TYPESCRIPT DOMINA O ECOSSISTEMA',
        'RUST NA WEB? WASM RESPONDE'
    ];
    const inner = document.getElementById('ticker-inner');
    const doubled = [...items, ...items].map(t => `<span>${t}</span>`).join('');
    inner.innerHTML = doubled;
}

/* HELPERS */
function getFiltered() {
    let posts = [...POSTS];
    if (activeCategory) posts = posts.filter(p => p.category === activeCategory);
    if (activeSearch.trim()) {
        const t = activeSearch.toLowerCase();
        posts = posts.filter(p =>
            p.title.toLowerCase().includes(t) ||
            p.excerpt.toLowerCase().includes(t) ||
            p.tags.some(tag => tag.includes(t))
        );
    }
    return posts;
}

function getCatColor(cat) {
    const map = {
        'Web Dev': 'web',
        'IA': 'ai',
        'Hardware': 'hw',
        'Cultura Tech': 'cultura',
        'Design Brutal': 'design'
    };
    return map[cat] || 'web';
}

function renderStars(rating) {
    let f = Math.floor(rating);
    let html = '';
    for (let i = 0; i < f; i++) html += '<i class="fas fa-star"></i>';
    if (rating % 1 >= 0.5) html += '<i class="fas fa-star-half-alt"></i>';
    for (let i = 0; i < 5 - Math.ceil(rating); i++) html += '<i class="far fa-star"></i>';
    return `<span class="stars">${html}</span> ${rating.toFixed(1)}`;
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(window.toastTimeout);
    window.toastTimeout = setTimeout(() => t.classList.remove('show'), 2800);
}

/* RENDER POSTS */
function renderPosts() {
    const container = document.getElementById('posts-container');
    container.innerHTML = '';
    const filtered = getFiltered();
    const toShow = filtered.slice(0, displayCount);
    document.getElementById('section-title').textContent = activeCategory || 'POSTS';
    document.getElementById('section-count').textContent = activeCategory ? `${filtered.length} ARTIGO${filtered.length !== 1 ? 'S' : ''}` : 'TODOS';
    if (toShow.length === 0) {
        container.innerHTML = `<div class="empty-state"><span class="big-emoji">🔍</span><h3>NADA AQUI</h3><p>Nenhum post encontrado para a busca atual.</p><button class="btn-read" onclick="resetAll()">LIMPAR FILTROS <span class="arrow">→</span></button></div>`;
        document.getElementById('load-more').style.display = 'none';
        document.getElementById('posts-count-label').textContent = '';
        return;
    }
    toShow.forEach((post, i) => {
        const isFirst = i === 0 && !activeCategory && !activeSearch;
        const art = document.createElement('article');
        art.className = `post-card animate-in ${isFirst ? 'full-width' : ''}`;
        art.innerHTML = `
      <div class="post-card-img-wrap"><img class="post-card-img" src="${post.imageThumb}" alt="${post.title}" loading="lazy"><div class="read-time-badge">⏱ ${post.readTime}</div></div>
      <div class="post-card-body"><span class="cat-tag" data-color="${post.catColor}">${post.category}</span><h2 class="post-card-title">${post.title}</h2><p class="post-card-excerpt">${post.excerpt}</p><div class="post-card-footer"><div class="post-meta"><strong>${post.author}</strong> — ${post.date}<br>♥ ${post.likes + (likedPosts.has(post.id) ? 1 : 0)} · 💬 ${post.comments}</div><button class="btn-read" data-id="${post.id}">LER <span class="arrow">→</span></button></div></div>
      <div class="post-number">${String(i + 1).padStart(2, '0')}</div>`;
        art.querySelector('.btn-read').addEventListener('click', e => {
            e.stopPropagation();
            openPost(post.id);
        });
        art.addEventListener('click', () => openPost(post.id));
        container.appendChild(art);
    });
    const loadBtn = document.getElementById('load-more');
    const hasMore = displayCount < filtered.length;
    loadBtn.style.display = hasMore ? 'block' : 'none';
    document.getElementById('posts-count-label').textContent = `MOSTRANDO ${toShow.length} DE ${filtered.length} POSTS`;
}

/* MODAL */
function getCatBg(c) {
    const m = {
        web: '#0057ff',
        ai: '#ff2d55',
        hw: '#ffe500',
        cultura: '#a259ff',
        design: '#c8ff00'
    };
    return m[c] || '#111';
}

function getCatColor2(c) {
    const m = {
        web: '#fff',
        ai: '#fff',
        hw: '#111',
        cultura: '#fff',
        design: '#111'
    };
    return m[c] || '#fff';
}

function openPost(id) {
    const post = POSTS.find(p => p.id === id);
    if (!post) return;
    const liked = likedPosts.has(post.id);
    const likeCount = post.likes + (liked ? 1 : 0);
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
    <img class="modal-hero-img" src="${post.image}" alt="${post.title}" loading="lazy">
    <div class="modal-body">
      <span class="modal-cat-badge" style="background:${getCatBg(post.catColor)};color:${getCatColor2(post.catColor)};border-color:transparent">${post.category}</span>
      <h1 class="modal-title">${post.title}</h1>
      <div class="modal-meta"><div class="author-avatar">${post.author[0]}</div><div><strong>${post.author}</strong><br>${post.date} · ${post.readTime} DE LEITURA</div><div style="margin-left:auto;display:flex;gap:14px;font-size:0.75rem;"><span>♥ ${likeCount}</span><span>💬 ${post.comments}</span></div></div>
      <div class="modal-article-body">${post.content}</div>
      <div class="share-bar"><span class="share-label">COMPARTILHAR:</span><button class="share-btn" onclick="copyLink(${post.id})">🔗 LINK</button><button class="share-btn" onclick="showToast('Abrir Twitter...')">𝕏 TWITTER</button><button class="share-btn" onclick="showToast('Abrir LinkedIn...')">in LINKEDIN</button><button class="like-btn ${liked ? 'liked' : ''}" id="like-btn-${post.id}" onclick="toggleLike(${post.id})"><span class="heart">${liked ? '♥' : '♡'}</span><span id="like-count-${post.id}">${likeCount}</span></button></div>
      <div class="comments-section"><h2 class="comments-title">COMENTÁRIOS (${post.comments})</h2><div class="comment-item"><div class="comment-author">@curious_dev <span class="badge">LEITOR</span></div><p class="comment-text">Conteúdo excelente! Direto ao ponto, sem enrolação. Exatamente o que eu precisava ler hoje.</p></div><div class="comment-item"><div class="comment-author">@br_design <span class="badge">LEITOR</span></div><p class="comment-text">A estética do blog é perfeita para o conteúdo. Design e editorial alinhados — raro de ver.</p></div><div class="comment-item"><div class="comment-author">@mateusfrancisco <span class="badge">LEITOR</span></div><p class="comment-text">Já compartilhei com toda a equipe. Parabéns pela qualidade.</p></div><div class="comment-form-wrap"><div class="comment-form-title">DEIXE SEU COMENTÁRIO</div><div class="comment-inputs"><input type="text" class="comment-input" id="cmt-name" placeholder="Seu nome"><input type="email" class="comment-input" id="cmt-email" placeholder="seu@email.com"></div><textarea class="comment-textarea" id="cmt-text" placeholder="O que você achou?"></textarea><button class="btn-comment" onclick="submitComment()">ENVIAR COMENTÁRIO →</button></div></div>
    </div>`;
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    const modalBox = document.getElementById('modal-box');
    modalBox.scrollTop = 0;
    modalBox.addEventListener('scroll', updateModalProgress);
    document.getElementById('modal-reading-label').textContent = `LENDO: ${post.title.substring(0,24)}...`;
}

function updateModalProgress() {
    const box = document.getElementById('modal-box');
    const pct = (box.scrollTop / (box.scrollHeight - box.clientHeight)) * 100;
    document.getElementById('modal-progress').style.width = pct + '%';
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
    document.getElementById('modal-box').removeEventListener('scroll', updateModalProgress);
}
document.getElementById('close-modal').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});

/* LIKE */
function toggleLike(id) {
    const btn = document.getElementById(`like-btn-${id}`);
    const countEl = document.getElementById(`like-count-${id}`);
    const post = POSTS.find(p => p.id === id);
    if (!post) return;
    if (likedPosts.has(id)) {
        likedPosts.delete(id);
        btn.classList.remove('liked');
        btn.querySelector('.heart').textContent = '♡';
        countEl.textContent = post.likes;
        showToast('LIKE REMOVIDO');
    } else {
        likedPosts.add(id);
        btn.classList.add('liked');
        btn.querySelector('.heart').textContent = '♥';
        countEl.textContent = post.likes + 1;
        showToast('ARTIGO CURTIDO! ♥');
    }
    localStorage.setItem('tf_likes', JSON.stringify([...likedPosts]));
    renderPosts();
}

function copyLink(id) {
    navigator.clipboard?.writeText(window.location.href + '#post-' + id).then(() => showToast('LINK COPIADO!')).catch(() => showToast('CTRL+C PARA COPIAR'));
}

function submitComment() {
    const name = document.getElementById('cmt-name')?.value.trim();
    const text = document.getElementById('cmt-text')?.value.trim();
    if (!name || !text) {
        showToast('PREENCHA NOME E COMENTÁRIO');
        return;
    }
    const form = document.querySelector('.comment-form-wrap');
    const newComment = document.createElement('div');
    newComment.className = 'comment-item';
    newComment.innerHTML = `<div class="comment-author">@${name.toLowerCase().replace(/\s+/g,'_')} <span class="badge" style="background:var(--hot);color:white;border-color:var(--hot)">NOVO</span></div><p class="comment-text">${text}</p>`;
    newComment.style.animation = 'fadeSlideUp .4s var(--ease)';
    form.parentNode.insertBefore(newComment, form);
    document.getElementById('cmt-name').value = '';
    document.getElementById('cmt-text').value = '';
    showToast('COMENTÁRIO PUBLICADO! ✓');
}

/* NEWSLETTER */
function handleSubscribe() {
    const email = document.getElementById('newsletter-email')?.value.trim();
    if (!email || !email.includes('@')) {
        showToast('E-MAIL INVÁLIDO');
        return;
    }
    const widget = document.querySelector('.newsletter-widget');
    widget.innerHTML = `<h3 style="color:var(--ink);margin-bottom:12px;">✅ INSCRITO!</h3><p style="font-family:var(--mono);font-size:0.8rem;color:rgba(0,0,0,0.7);">Ótimo! <strong>${email}</strong> está na lista.<br>Próxima edição: semana que vem.</p>`;
    showToast('INSCRIÇÃO CONFIRMADA! ✓');
}

/* CATEGORIES */
function buildCategories() {
    const container = document.getElementById('category-list');
    const cats = [...new Set(POSTS.map(p => p.category))];
    container.innerHTML = '';
    const allItem = document.createElement('div');
    allItem.className = 'cat-item' + (!activeCategory ? ' active' : '');
    allItem.innerHTML = `<span>TODOS OS POSTS</span><span class="count-badge">${POSTS.length}</span>`;
    allItem.addEventListener('click', () => {
        resetAll();
    });
    container.appendChild(allItem);
    cats.forEach(cat => {
        const count = POSTS.filter(p => p.category === cat).length;
        const item = document.createElement('div');
        item.className = 'cat-item' + (activeCategory === cat ? ' active' : '');
        item.innerHTML = `<span>${cat}</span><span class="count-badge">${count}</span>`;
        item.addEventListener('click', () => {
            activeCategory = cat;
            activeSearch = '';
            document.getElementById('search-input').value = '';
            displayCount = 4;
            renderPosts();
            buildCategories();
            updateNavActive();
            updateHero();
        });
        container.appendChild(item);
    });
}

function updateNavActive() {
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    if (!activeCategory) document.getElementById('nav-inicio')?.classList.add('active');
    else document.querySelectorAll('.nav-links a[data-cat]').forEach(a => {
        if (a.dataset.cat === activeCategory) a.classList.add('active');
    });
}

function updateHero() {
    const featured = document.getElementById('hero-featured');
    const post = POSTS.find(p => !activeCategory || p.category === activeCategory) || POSTS[0];
    featured.innerHTML = `<div class="hero-card" onclick="openPost(${post.id})"><img class="hero-card-img" src="${post.imageThumb}" alt="${post.title}" loading="lazy"><div class="hero-card-body"><div class="hero-card-cat">${post.category}</div><div class="hero-card-title">${post.title}</div><div class="hero-card-meta">${post.date} · ${post.readTime} DE LEITURA</div></div></div>`;
}

function buildRecent() {
    const container = document.getElementById('recent-posts');
    container.innerHTML = '';
    POSTS.slice(0, 5).forEach(post => {
        const div = document.createElement('div');
        div.className = 'recent-item';
        div.innerHTML = `<img class="recent-thumb" src="${post.imageThumb}" alt="${post.title}" loading="lazy"><div class="recent-info"><span class="recent-cat">${post.category}</span><span class="recent-title">${post.title}</span><span class="recent-date">${post.date}</span></div>`;
        div.addEventListener('click', () => openPost(post.id));
        container.appendChild(div);
    });
}

function buildTags() {
    const all = POSTS.flatMap(p => p.tags);
    const unique = [...new Set(all)];
    const container = document.getElementById('tags-cloud');
    container.innerHTML = unique.map(tag => `<span class="tag" onclick="filterByTag('${tag}')">#${tag}</span>`).join('');
}

function filterByTag(tag) {
    document.getElementById('search-input').value = tag;
    activeSearch = tag;
    activeCategory = null;
    displayCount = 4;
    renderPosts();
    buildCategories();
    updateNavActive();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    showToast(`TAG: #${tag}`);
}

/* SEARCH */
document.getElementById('search-input').addEventListener('input', e => {
    activeSearch = e.target.value;
    activeCategory = null;
    displayCount = 4;
    renderPosts();
    buildCategories();
    updateNavActive();
    const filtered = getFiltered();
    const info = document.getElementById('search-info');
    info.textContent = activeSearch ? `${filtered.length} resultado${filtered.length !== 1 ? 's' : ''} encontrado` : '';
});
document.getElementById('load-more').addEventListener('click', () => {
    const total = getFiltered().length;
    displayCount = Math.min(displayCount + 3, total);
    renderPosts();
    showToast(`CARREGADOS ${displayCount} DE ${total} POSTS`);
});

/* NAV LINKS */
document.querySelectorAll('.nav-links a[data-cat]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        activeCategory = link.dataset.cat;
        activeSearch = '';
        document.getElementById('search-input').value = '';
        displayCount = 4;
        renderPosts();
        buildCategories();
        updateNavActive();
        updateHero();
        closeMenu();
        window.scrollTo({
            top: document.querySelector('.container').offsetTop - 80,
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('[data-cat-footer]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        activeCategory = link.dataset.catFooter;
        activeSearch = '';
        displayCount = 4;
        renderPosts();
        buildCategories();
        updateNavActive();
        updateHero();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

/* HAMBURGER */
const hamburger = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

function closeMenu() {
    navLinks.classList.remove('open');
}

/* RESET */
window.resetAll = function() {
    activeCategory = null;
    activeSearch = '';
    document.getElementById('search-input').value = '';
    document.getElementById('search-info').textContent = '';
    displayCount = 4;
    renderPosts();
    buildCategories();
    updateNavActive();
    updateHero();
};

/* INIT */
function init() {
    buildTicker();
    buildCategories();
    buildRecent();
    buildTags();
    updateHero();
    renderPosts();
    animateCounter('stat-posts', 0, POSTS.length, 1200);
    animateCounter('stat-reads', 0, 2400, 1800, true);
    console.log('%cTECHFLOW', 'font-size:2rem;font-weight:bold;color:#c8ff00;background:#111;padding:8px 16px;');
    console.log('%c© 2026 — Portfólio de blog tech com Neo-Brutalismo', 'font-size:0.9rem;color:#888;');
}

function animateCounter(id, from, to, duration, useK = false) {
    const el = document.getElementById(id);
    if (!el) return;
    const start = performance.now();

    function step(ts) {
        const progress = Math.min((ts - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const val = Math.round(from + (to - from) * ease);
        el.textContent = useK ? (val >= 1000 ? (val / 1000).toFixed(1) + 'K' : val) : val;
        if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}
init();