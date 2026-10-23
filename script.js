// Script interativo do Portal Turístico de Tupã

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Mobile Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // 2. Filtro de Atrações
  const filterButtons = document.querySelectorAll('.filter-btn');
  const attractionCards = document.querySelectorAll('.attraction-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      attractionCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  // 3. Calculadora de Distância / Como Chegar
  const citySelect = document.getElementById('citySelect');
  const distanceVal = document.getElementById('distanceVal');
  const timeVal = document.getElementById('timeVal');
  const routeVal = document.getElementById('routeVal');

  const cityData = {
    sp: {
      distance: '510 km',
      time: 'Tempo estimado de carro: ~6h 15min',
      route: 'Principal trajeto: Rodovia Castelo Branco (SP-280) e SP-294'
    },
    marilia: {
      distance: '75 km',
      time: 'Tempo estimado de carro: ~55 min',
      route: 'Principal trajeto: Rodovia Comandante João Ribeiro de Barros (SP-294)'
    },
    bauru: {
      distance: '180 km',
      time: 'Tempo estimado de carro: ~2h 10min',
      route: 'Principal trajeto: Rodovia Comandante João Ribeiro de Barros (SP-294)'
    },
    prudente: {
      distance: '115 km',
      time: 'Tempo estimado de carro: ~1h 30min',
      route: 'Principal trajeto: Rodovia SP-425 e SP-294'
    },
    campinas: {
      distance: '440 km',
      time: 'Tempo estimado de carro: ~5h 20min',
      route: 'Principal trajeto: Rodovia Anhanguera (SP-330) e SP-294'
    },
    riopreto: {
      distance: '190 km',
      time: 'Tempo estimado de carro: ~2h 25min',
      route: 'Principal trajeto: Rodovia Assis Chateaubriand (SP-425)'
    },
    londrina: {
      distance: '210 km',
      time: 'Tempo estimado de carro: ~2h 45min',
      route: 'Principal trajeto: PR-445, BR-369 e SP-294 via Assis/Marília'
    }
  };

  if (citySelect) {
    citySelect.addEventListener('change', (e) => {
      const selected = e.target.value;
      const info = cityData[selected];
      if (info) {
        distanceVal.textContent = info.distance;
        timeVal.textContent = info.time;
        routeVal.textContent = info.route;
      }
    });
  }

  // 4. Efeito de scroll na navbar
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  // =========================================================================
  // 5. CHATBOT INTELIGENTE - DADOS DO PORTAL TURISMO.TUPA.SP.GOV.BR
  // =========================================================================
  const chatbotToggle = document.getElementById('chatbotToggle');
  const chatbotWindow = document.getElementById('chatbotWindow');
  const chatbotClose = document.getElementById('chatbotClose');
  const chatbotForm = document.getElementById('chatbotForm');
  const chatbotInput = document.getElementById('chatbotInput');
  const chatbotMessages = document.getElementById('chatbotMessages');
  const suggestionChips = document.querySelectorAll('.suggestion-chip');

  // Alternar janela do chatbot
  if (chatbotToggle && chatbotWindow) {
    chatbotToggle.addEventListener('click', () => {
      chatbotWindow.classList.toggle('open');
      if (chatbotWindow.classList.contains('open')) {
        chatbotInput.focus();
      }
    });
  }

  if (chatbotClose && chatbotWindow) {
    chatbotClose.addEventListener('click', () => {
      chatbotWindow.classList.remove('open');
    });
  }

  // Base de Conhecimento Oficial extraída do portal turismo.tupa.sp.gov.br
  const tourismKnowledgeBase = [
    {
      keywords: ['ponto', 'pontos', 'turistico', 'turisticos', 'atracao', 'atracoes', 'visitar', 'conhecer', 'passear', 'roteiro'],
      response: `🏛️ <strong>Principais Pontos Turísticos de Tupã:</strong><br>
      <ul>
        <li><strong>Museu Histórico e Pedagógico Índia Vanuíre:</strong> Referência nacional em cultura indígena e história dos pioneiros. (Rua Coroados, 521).</li>
        <li><strong>Praça da Bandeira & Matriz São Pedro:</strong> Cartão postal com fonte luminosa e igreja histórica.</li>
        <li><strong>Distrito de Varpa:</strong> A colônia letã com o Museu dos Pioneiros e culinária típica.</li>
        <li><strong>Solar Luiz de Góes:</strong> Residência do fundador de Tupã.</li>
        <li><strong>Bosque Municipal & Parque Linear:</strong> Lazer verde e pistas de caminhada.</li>
        <li><strong>Ecoturismo e Fazenda Palma:</strong> Passeios rurais e pesqueiros da região.</li>
      </ul>
      <small>Mais detalhes em: <a href="https://www.turismo.tupa.sp.gov.br/pagina/74/pontos-turisticos" target="_blank">turismo.tupa.sp.gov.br</a></small>`
    },
    {
      keywords: ['evento', 'eventos', 'festa', 'festas', 'calendario', 'carnaval', 'folia', 'exapit', 'rock', 'moto', 'junina', 'quinta com arte', 'nippon'],
      response: `🎉 <strong>Eventos Oficiais de Tupã (Secretaria de Turismo):</strong><br>
      <ul>
        <li><strong>Tupã Folia:</strong> Um dos carnavais de rua mais animados do interior paulista com blocos e shows gratuitos.</li>
        <li><strong>Exapit (Exposição Agropecuária e Industrial):</strong> Rodeio, leilões, parque de diversões e grandes shows.</li>
        <li><strong>Quinta com Arte:</strong> Feira semanal toda quinta-feira na Praça da Bandeira com artesanato (Feirart), música e gastronomia.</li>
        <li><strong>Tupã Junina:</strong> Festa junina oficial com comidas típicas e quadrilhas.</li>
        <li><strong>Nippon Fest:</strong> Celebração das tradições, danças e culinária japonesa.</li>
        <li><strong>Tupã Moto Rock:</strong> Encontro nacional de motociclistas com bandas de rock.</li>
        <li><strong>Festival AFROFEST & Natal de Luz:</strong> Festivais culturais e celebrações temáticas.</li>
      </ul>
      <small>Consulte a programação em: <a href="https://www.turismo.tupa.sp.gov.br/pagina/53/eventos-oficiais" target="_blank">Eventos Oficiais</a></small>`
    },
    {
      keywords: ['varpa', 'distrito', 'letonia', 'letoes', 'pioneiros', 'erdbergs', 'imigracao'],
      response: `🌲 <strong>Distrito Histórico de Varpa:</strong><br>
      Fundado em 1922 por imigrantes da Letônia, é a maior colônia de letões do Brasil! Fica a cerca de 20 km do centro de Tupã.<br><br>
      <strong>O que fazer em Varpa:</strong>
      <ul>
        <li><strong>Museu dos Pioneiros de Varpa:</strong> Acervo histórico preservado com objetos dos primeiros colonos europeus.</li>
        <li><strong>Gastronomia Típica:</strong> Tortas, pães artesanais de centeio, queijos e mel local.</li>
        <li><strong>Pousada Kluss Laiks:</strong> Hospedagem aconchegante cercada pela natureza bucólica.</li>
        <li><strong>Tapera Nordestina:</strong> Restaurante típico regional no distrito.</li>
      </ul>`
    },
    {
      keywords: ['hotel', 'hoteis', 'pousada', 'pousadas', 'hospedagem', 'hospedagens', 'dormir', 'onde ficar'],
      response: `🏨 <strong>Onde se Hospedar em Tupã:</strong><br>
      A rede hoteleira cadastrada no portal oficial inclui:
      <ul>
        <li><strong>Central Plaza Hotel:</strong> Próximo ao centro comercial.</li>
        <li><strong>Cazuza Palace Hotel:</strong> Estrutura tradicional e confortável.</li>
        <li><strong>Avenida Hotel e Restaurante:</strong> Ótima localização urbana.</li>
        <li><strong>Hotel Nobre & Hotel Fema:</strong> Opções práticas e bem avaliadas.</li>
        <li><strong>Fazenda Palma Ecoturismo:</strong> Hospedagem rural em contato com a natureza.</li>
        <li><strong>Pousada Kluss Laiks:</strong> Charmosa pousada no Distrito de Varpa.</li>
      </ul>
      <small>Veja mais contatos em: <a href="https://www.turismo.tupa.sp.gov.br/pagina/60/hospedagens" target="_blank">Guia de Hospedagens</a></small>`
    },
    {
      keywords: ['comer', 'restaurante', 'restaurantes', 'comida', 'almoco', 'jantar', 'pizza', 'pizzaria', 'churrasco', 'churrascaria', 'bar', 'bares', 'gastronomia', 'lanche'],
      response: `🍽️ <strong>Gastronomia e Onde Comer em Tupã:</strong><br>
      Tupã conta com variada gastronomia credenciada:
      <ul>
        <li><strong>Água Doce Cachaçaria:</strong> Pratos brasileiros, porções e drinks.</li>
        <li><strong>Restaurante Aimorés & Restaurante Brigola:</strong> Comida caseira, self-service e carnes nobres.</li>
        <li><strong>Costela no Bafo & Costelão do Baiano:</strong> Especialistas em churrasco e carnes assadas.</li>
        <li><strong>Pizzarias:</strong> Vero Pizza-Bar, Dallas Restaurante e Pizzaria, Pizza Du Cheff.</li>
        <li><strong>Comida Japonesa:</strong> Dragon Sushi e Tio Panda.</li>
        <li><strong>Distrito de Varpa:</strong> Tapera Nordestina e cafés artesanais letões.</li>
        <li><strong>Quinta com Arte:</strong> Feira gastronômica de rua toda quinta à noite na Praça da Bandeira!</li>
      </ul>`
    },
    {
      keywords: ['secretaria', 'turismo', 'contato', 'telefone', 'email', 'e-mail', 'horario', 'endereco', 'comtur', 'duvida', 'atendimento'],
      response: `📞 <strong>Secretaria Municipal de Turismo de Tupã:</strong><br>
      <ul>
        <li>📍 <strong>Endereço:</strong> Rua Guaianazes, nº 70 - Centro, Tupã/SP</li>
        <li>🕒 <strong>Horário de Atendimento:</strong> Segunda a Sexta das 7h30 às 17h | Sábados e Domingos das 8h às 14h</li>
        <li>📧 <strong>E-mail:</strong> <a href="mailto:turismo@tupa.sp.gov.br">turismo@tupa.sp.gov.br</a></li>
        <li>🌐 <strong>Site Oficial:</strong> <a href="https://www.turismo.tupa.sp.gov.br/" target="_blank">turismo.tupa.sp.gov.br</a></li>
        <li>📸 <strong>Instagram Oficial:</strong> @turismotupa</li>
      </ul>`
    },
    {
      keywords: ['emergencia', 'urgencia', 'hospital', 'hospitais', 'upa', 'santa casa', 'policia', 'bombeiro', 'bombeiros', 'delegacia', 'util', 'uteis', 'aeroporto', 'rodoviaria'],
      response: `🚨 <strong>Locais Úteis e Telefones de Emergência em Tupã:</strong><br>
      <ul>
        <li>👮 <strong>Polícia Militar:</strong> 190</li>
        <li>🚒 <strong>Corpo de Bombeiros:</strong> 193</li>
        <li>🚑 <strong>SAMU (Emergência Médica):</strong> 192</li>
        <li>🏥 <strong>UPA (Pronto Atendimento 24h):</strong> Atendimento médico imediato</li>
        <li>🏥 <strong>Santa Casa de Misericórdia de Tupã:</strong> Hospital regional de referência</li>
        <li>🛡️ <strong>Delegacia de Defesa da Mulher (DDM) & Conselho Tutelar</strong></li>
        <li>🚌 <strong>Terminal Rodoviário de Tupã:</strong> Linhas estaduais e regionais</li>
        <li>✈️ <strong>Aeroporto Estadual:</strong> José Vicente de Faria Lima</li>
      </ul>
      <small>Informações completas: <a href="https://www.turismo.tupa.sp.gov.br/pagina/54/locais-uteis" target="_blank">Locais Úteis Tupã</a></small>`
    },
    {
      keywords: ['lazer', 'parque', 'bosque', 'pesqueiro', 'pesca', 'clube', 'thermas', 'piscina', 'teatro', 'cinema', 'cultura'],
      response: `🌳 <strong>Opções de Lazer & Entretenimento em Tupã:</strong><br>
      <ul>
        <li><strong>Parques & Ar Livre:</strong> Bosque Municipal, Parque Linear, Parque do Atleta e Praça da Bandeira.</li>
        <li><strong>Água & Balneários:</strong> Eco Thermas, Paineira Beach Club e Arena Dida Beach.</li>
        <li><strong>Pesqueiros:</strong> Pesqueiro do Flávio, Pesqueiro Hamada e Pesqueiro Sol Nascente.</li>
        <li><strong>Cultura & Artes:</strong> Teatro Municipal de Tupã, Espaço Cultural Zé Pretinho e apresentações da Orquestra Sinfônica Municipal Júlio de Castro.</li>
        <li><strong>Cinema:</strong> Meqe Cine.</li>
      </ul>`
    },
    {
      keywords: ['historia', 'fundador', 'fundacao', 'fundou', 'luiz de goes', 'origem', 'significado', 'indigena', 'trovao', 'tupi'],
      response: `📖 <strong>História de Tupã:</strong><br>
      <ul>
        <li><strong>Fundação:</strong> 12 de outubro de 1929, pelo pioneiro Luiz de Góes em plena expansão da ferrovia e da cultura cafeeira.</li>
        <li><strong>Nome Tupã:</strong> Homenagem à divindade suprema tupi-guarani que personifica a manifestação de Deus através do trovão e dos céus.</li>
        <li><strong>Povos Originários:</strong> Presença e salvaguarda das tradições dos povos Kaingang, Krenak e Terena na região.</li>
        <li><strong>Estatuto:</strong> Município classificado oficialmente pelo Estado como <em>Estância Turística</em>.</li>
      </ul>`
    },
    {
      keywords: ['ola', 'oi', 'opa', 'alo', 'bom dia', 'boa tarde', 'boa noite', 'ajuda', 'socorro', 'inicio', 'quem e voce'],
      response: `Olá! Que bom falar com você! 👋<br><br>
      Eu sou o <strong>Guia Virtual de Turismo de Tupã</strong>. Minha missão é ajudar você a explorar todas as belezas e serviços da nossa Estância Turística com dados do portal oficial da Prefeitura (<code>turismo.tupa.sp.gov.br</code>).<br><br>
      Você pode me perguntar sobre:
      <ul>
        <li>🏛️ Pontos turísticos e museus</li>
        <li>🎉 Festas e eventos oficiais (Tupã Folia, Exapit, etc.)</li>
        <li>🌲 O que fazer no Distrito de Varpa</li>
        <li>🏨 Hotéis e onde se hospedar</li>
        <li>🍽️ Onde comer e gastronomia</li>
        <li>🚨 Telefones úteis e emergências</li>
      </ul>`
    }
  ];

  // Função para normalizar texto (remover acentos e pontuações)
  function normalizeText(text) {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .trim();
  }

  // Encontrar melhor resposta
  function findBestAnswer(userQuery) {
    const cleanQuery = normalizeText(userQuery);
    const queryWords = cleanQuery.split(/\s+/).filter(w => w.length > 2);

    let bestMatch = null;
    let highestScore = 0;

    tourismKnowledgeBase.forEach(item => {
      let score = 0;
      item.keywords.forEach(keyword => {
        const cleanKeyword = normalizeText(keyword);
        // Correspondência exata da palavra ou da frase
        if (cleanQuery.includes(cleanKeyword)) {
          score += 3;
        }
        queryWords.forEach(word => {
          if (cleanKeyword === word) {
            score += 2;
          } else if (cleanKeyword.includes(word) || word.includes(cleanKeyword)) {
            score += 1;
          }
        });
      });

      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    });

    if (highestScore >= 2 && bestMatch) {
      return bestMatch.response;
    }

    // Resposta padrão inteligente caso não encontre correspondência direta
    return `Não encontrei essa informação específica de imediato, mas você pode:<br><br>
    <ul>
      <li>Consultar diretamente o portal oficial: <a href="https://www.turismo.tupa.sp.gov.br/" target="_blank" rel="noopener">turismo.tupa.sp.gov.br</a></li>
      <li>Falar com a <strong>Secretaria Municipal de Turismo</strong> pelo e-mail <a href="mailto:turismo@tupa.sp.gov.br">turismo@tupa.sp.gov.br</a> ou na 📍 <em>Rua Guaianazes, 70 - Centro</em></li>
      <li>Tentar perguntas como: <strong>"Quais os pontos turísticos?"</strong>, <strong>"Eventos oficiais"</strong>, <strong>"Hotéis"</strong> ou <strong>"Distrito de Varpa"</strong>.</li>
    </ul>`;
  }

  // Adicionar mensagem no chat
  function appendMessage(sender, textHtml) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${sender}-msg`;

    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    bubble.innerHTML = textHtml;

    msgDiv.appendChild(bubble);
    chatbotMessages.appendChild(msgDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  // Indicador de "Digitando..."
  function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'chat-msg bot-msg';
    indicator.id = 'typingIndicator';
    indicator.innerHTML = `
      <div class="typing-indicator">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    `;
    chatbotMessages.appendChild(indicator);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
      indicator.remove();
    }
  }

  // Processar envio de pergunta
  function handleUserMessage(messageText) {
    if (!messageText || messageText.trim() === '') return;

    // Adiciona mensagem do usuário
    appendMessage('user', messageText);

    // Mostra indicador de digitação
    showTypingIndicator();

    // Simula resposta com delay natural
    setTimeout(() => {
      removeTypingIndicator();
      const answer = findBestAnswer(messageText);
      appendMessage('bot', answer);
    }, 450);
  }

  // Event listener para envio do formulário
  if (chatbotForm) {
    chatbotForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = chatbotInput.value;
      chatbotInput.value = '';
      handleUserMessage(text);
    });
  }

  // Event listener para as tags de sugestão rápida
  suggestionChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const question = chip.getAttribute('data-question');
      if (!chatbotWindow.classList.contains('open')) {
        chatbotWindow.classList.add('open');
      }
      handleUserMessage(question);
    });
  });
});
