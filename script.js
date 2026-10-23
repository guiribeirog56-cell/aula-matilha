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

  // Base de Conhecimento Oficial Expandida (turismo.tupa.sp.gov.br, IBGE, UNESP e Acervos Históricos)
  const tourismKnowledgeBase = [
    {
      keywords: ['fundador', 'fundacao', 'fundou', 'luiz de souza leao', 'souza leao', 'historia', 'solar', '1929', 'joao do val', 'euripedes rocha'],
      response: `⚡ <strong>Fundação & Luiz de Souza Leão:</strong><br>
      Tupã foi fundada em <strong>12 de outubro de 1929</strong> pelo pioneiro pernambucano <strong>Luiz de Souza Leão</strong>, juntamente com João do Val e Eurípedes Soares da Rocha.<br><br>
      <ul>
        <li><strong>Origem do Nome:</strong> Homenagem à divindade suprema tupi-guarani ("Espírito Bom" e senhor dos trovões).</li>
        <li><strong>Urbanismo Planejado:</strong> Cidade desenhada em traçado ortogonal em tabuleiro no espigão entre os rios do Peixe e Aguapeí.</li>
        <li><strong>Solar Luiz de Souza Leão:</strong> Construído nos anos 1930 em madeira e peroba nobre. Tombado pelo <strong>CONDEPHAAT em 1972</strong> como patrimônio histórico do Estado. O fundador faleceu em 1980 e, atendendo ao seu pedido, foi sepultado em um mausoléu no próprio jardim do Solar.</li>
      </ul>`
    },
    {
      keywords: ['museu', 'india vanuire', 'vanuire', 'indigena', 'indios', 'kaingang', 'krenak', 'terena', 'etnografia', 'etnico'],
      response: `🏛️ <strong>Museu Histórico e Pedagógico Índia Vanuíre:</strong><br>
      Uma das mais importantes instituições etnográficas da América Latina, gerida pela <strong>ACAM Portinari</strong> em convênio com o Governo do Estado de SP.<br><br>
      <ul>
        <li><strong>Acervo:</strong> Mais de 38.000 peças que salvaguardam a cultura e as tradições dos povos originários paulistas (Kaingang, Krenak e Terena), além de peças de etnias de todo o Brasil.</li>
        <li><strong>Quem foi Vanuíre:</strong> Pacífica e corajosa mulher Kaingang que mediou contatos no início do século XX durante a abertura da ferrovia e do sertão paulista.</li>
        <li><strong>Endereço:</strong> Rua Coroados, 521 - Centro de Tupã.</li>
        <li><strong>Visitação:</strong> Terça a domingo, das 9h às 18h. Entrada <strong>100% gratuita</strong> e totalmente acessível!</li>
      </ul>`
    },
    {
      keywords: ['varpa', 'distrito de varpa', 'letonia', 'letoes', 'baltico', 'janis erdbergs', 'colonia letona', 'pioneiros', 'rudzu maize', 'pao preto'],
      response: `🌲 <strong>Distrito Histórico de Varpa (A Letônia no Brasil):</strong><br>
      Fundado em <strong>novembro de 1922</strong> (mais antigo que a sede de Tupã!), Varpa é a <strong>maior colônia de imigrantes letões da América do Sul</strong>. Famílias de fé batista vieram do Mar Báltico buscando paz e liberdade após a Primeira Guerra Mundial.<br><br>
      <ul>
        <li><strong>Significado:</strong> <em>Vārpa</em> significa "espiga" no idioma letão.</li>
        <li><strong>Museu dos Pioneiros Janis Erdbergs:</strong> Guarda Bíblias antigas, vestimentas folclóricas, fotos centenárias e ferramentas da colonização.</li>
        <li><strong>Gastronomia Típica:</strong> Famoso pão preto artesanal de centeio (<em>rudzu maize</em>), tortas de maçã, doces e mel puro do Apiário Puro Mel.</li>
        <li><strong>Acesso:</strong> Apenas 20 km do centro de Tupã por via asfaltada rápida.</li>
      </ul>`
    },
    {
      keywords: ['parnaso', 'distrito de parnaso'],
      response: `🚂 <strong>Distrito de Parnaso:</strong><br>
      Localizado na zona rural de Tupã, Parnaso teve sua história impulsionada pela era de ouro do café e pelo ramal da <strong>Companhia Paulista de Estradas de Ferro</strong>.<br><br>
      Mantém o charme das pequenas vilas bucólicas do interior paulista, com festas comunitárias tradicionais, fazendas produtoras de grãos e gado, e um ambiente de muita paz.`
    },
    {
      keywords: ['universo', 'distrito de universo'],
      response: `🌾 <strong>Distrito de Universo:</strong><br>
      Surgiu a partir da chegada dos trilhos ferroviários em <strong>abril de 1949</strong>, sendo oficializado como distrito em 1959.<br><br>
      Caracteriza-se pela agricultura familiar acolhedora, atmosfera sossegada e paisagens campestres procuradas por praticantes de cicloturismo da região.`
    },
    {
      keywords: ['distritos', 'quantos distritos', 'quais os distritos'],
      response: `🗺️ <strong>Os Distritos do Município de Tupã:</strong><br>
      O município conta com a sede urbana e <strong>três distritos oficiais</strong>:<br>
      <ol>
        <li><strong>Distrito de Varpa:</strong> A célebre colônia de imigrantes da Letônia fundada em 1922, polo de turismo cultural, ecoturismo e gastronomia.</li>
        <li><strong>Distrito de Parnaso:</strong> Vila histórica com raízes cafeeiras e ferroviárias.</li>
        <li><strong>Distrito de Universo:</strong> Núcleo ferroviário de 1949 voltado à vida rural tranquila e ao agronegócio.</li>
      </ol>`
    },
    {
      keywords: ['rio do peixe', 'rafting', 'caiaque', 'expedicao varpa', 'cachoeira', 'cachoeiras', 'aventura', 'trilha', 'ecoturismo', 'corredeiras'],
      response: `🚣 <strong>Ecoturismo & Aventura no Rio do Peixe (Expedição Varpa):</strong><br>
      Tupã e a região do Distrito de Varpa oferecem emocionantes rotas de ecoturismo e aventura:<br><br>
      <ul>
        <li><strong>Rafting e Canoagem:</strong> Descidas em botes infláveis e caiaques pelas corredeiras do Rio do Peixe, passando por cânions naturais.</li>
        <li><strong>Trilhas & Fendas Geológicas:</strong> Trekking guiado por paredões de arenito, cavernas e fendas secretas.</li>
        <li><strong>Cachoeiras:</strong> Paradas para banho revigorante em cascatas naturais de águas limpas.</li>
        <li><strong>Operadora Local:</strong> Conheça mais com a <em>Expedição Varpa</em> (agendamento de passeios guiados aos finais de semana).</li>
      </ul>`
    },
    {
      keywords: ['fazenda palma', 'palma', 'corporacao palma'],
      response: `🏡 <strong>Fazenda Palma Ecoturismo (Centenária 1922):</strong><br>
      Marco zero da chegada dos pioneiros letões em Varpa!<br><br>
      <ul>
        <li>Possui cachoeira privativa para banho, lago com patos e áreas verdes preservadas.</li>
        <li>Trilhas ecológicas na mata nativa e pontes de madeira rústica.</li>
        <li>Estrutura de chalés, quiosques com churrasqueira, piscinas e restaurante com almoço caipira.</li>
        <li>Muito procurada para encontros familiares, retiros espirituais e turismo pedagógico.</li>
      </ul>`
    },
    {
      keywords: ['ponto', 'pontos', 'turistico', 'turisticos', 'atracao', 'atracoes', 'visitar', 'conhecer', 'passear', 'roteiro'],
      response: `🏛️ <strong>Roteiro Completo de Pontos Turísticos de Tupã:</strong><br>
      <ul>
        <li><strong>Museu Índia Vanuíre:</strong> Acervo indígena de renome internacional (Rua Coroados, 521).</li>
        <li><strong>Solar Luiz de Souza Leão:</strong> Patrimônio tombado pelo Condephaat e mausoléu do fundador.</li>
        <li><strong>Praça da Bandeira:</strong> Fonte luminosa, letreiro oficial "Eu Amo Tupã" e feiras culturais.</li>
        <li><strong>Igreja Matriz São Pedro:</strong> Arquitetura clássica e vitrais históricos.</li>
        <li><strong>Distrito de Varpa & Museu dos Pioneiros:</strong> Tradição báltica e arquitetura europeia.</li>
        <li><strong>Bosque Municipal & Parque Linear:</strong> Pistas de cooper, ar puro e sombra.</li>
        <li><strong>Expedição Varpa & Fazenda Palma:</strong> Rafting, trilhas e cachoeiras no Rio do Peixe.</li>
        <li><strong>Eco Thermas Park & Pesqueiros:</strong> Lazer aquático e pesca esportiva.</li>
      </ul>
      <small>Fonte: <a href="https://www.turismo.tupa.sp.gov.br/pagina/74/pontos-turisticos" target="_blank">turismo.tupa.sp.gov.br</a></small>`
    },
    {
      keywords: ['evento', 'eventos', 'festa', 'festas', 'calendario', 'programacao'],
      response: `🎉 <strong>Calendário Oficial de Eventos de Tupã:</strong><br>
      <ul>
        <li>🎭 <strong>Fev/Mar:</strong> Tupã Folia (Carnaval de rua com circuito e shows)</li>
        <li>🎸 <strong>Maio:</strong> Tupã Moto Rock (Encontro nacional de motociclistas)</li>
        <li>🎨 <strong>Toda Quinta:</strong> Quinta com Arte na Praça da Bandeira</li>
        <li>🌽 <strong>Junho:</strong> Tupã Junina (Grande festa de São João)</li>
        <li>🤠 <strong>Ago/Set:</strong> Exapit (Exposição Agropecuária, rodeio e grandes shows)</li>
        <li>🏮 <strong>Set/Out:</strong> Nippon Fest (Festival da colônia japonesa)</li>
        <li>🎖️ <strong>12 de Outubro:</strong> Desfile Cívico do Aniversário de Tupã</li>
        <li>✊ <strong>Novembro:</strong> Festival AFROFEST (Cultura afro-brasileira)</li>
        <li>✨ <strong>Dezembro:</strong> Natal de Luz na Praça da Bandeira</li>
      </ul>`
    },
    {
      keywords: ['tupa folia', 'carnaval', 'bloco', 'trio eletrico'],
      response: `🎭 <strong>Tupã Folia (O Carnaval da Alta Paulista):</strong><br>
      Considerado um dos maiores e mais organizados carnavais de rua do Estado de São Paulo!<br><br>
      <ul>
        <li>Circuito estruturado com segurança reforçada, camarotes e praça de alimentação.</li>
        <li>Shows gratuitos com artistas e bandas de projeção nacional.</li>
        <li>Matinês para famílias e crianças nas tardes de domingo e terça-feira.</li>
        <li>Desfile vibrante de blocos carnavalescos tradicionais da cidade.</li>
      </ul>`
    },
    {
      keywords: ['exapit', 'rodeio', 'agropecuaria', 'montaria', 'recinto'],
      response: `🤠 <strong>EXAPIT (Exposição Agropecuária e Industrial de Tupã):</strong><br>
      O maior evento do agronegócio e entretenimento da região, realizado no amplo Recinto da Exapit:<br><br>
      <ul>
        <li>Rodeio profissional em touros e cavalos (etapas oficiais de circuitos nacionais).</li>
        <li>Grandes shows de música sertaneja com entrada franca em diversos dias.</li>
        <li>Exposições de animais de elite, leilões de gado e feira de máquinas agrícolas.</li>
        <li>Parque de diversões itinerante e praça gastronômica completa.</li>
      </ul>`
    },
    {
      keywords: ['quinta com arte', 'feirart', 'artesanato', 'artesaos', 'feira de rua'],
      response: `🎨 <strong>Quinta com Arte & Feirart:</strong><br>
      Acontece <strong>toda quinta-feira à noite</strong> no Espaço Cultural da <strong>Praça da Bandeira</strong>:<br><br>
      <ul>
        <li>Exposição e venda de trabalhos dos artesãos credenciados de Tupã (Feirart): peças em madeira, cerâmica, bordados, crochê e biojoias.</li>
        <li>Shows ao vivo com músicos locais e peças teatrais.</li>
        <li>Praça de alimentação diversificada (pastel, espetinhos, comida oriental, doces caseiros).</li>
        <li>Ponto de encontro preferido das famílias nas noites de quinta!</li>
      </ul>`
    },
    {
      keywords: ['tupa junina', 'festa junina', 'arraia', 'sao pedro'],
      response: `🌽 <strong>Tupã Junina & Festa de São Pedro:</strong><br>
      Em junho, Tupã celebra São Pedro (o padroeiro da cidade) e o ciclo junino com muita alegria:<br><br>
      <ul>
        <li>Dança de quadrilhas das escolas e grupos da terceira idade.</li>
        <li>Barraquinhas típicas de quentão, vinho quente, bolo de milho, curau e pamonha.</li>
        <li>Shows sertanejos e muito forró pé-de-serra em ambiente seguro e acolhedor.</li>
      </ul>`
    },
    {
      keywords: ['nippon fest', 'japones', 'japao', 'colonia japonesa', 'taiko'],
      response: `🏮 <strong>Nippon Fest (Cultura Japonesa):</strong><br>
      Tupã abriga uma das colônias japonesas mais tradicionais do Oeste Paulista, com forte representação pela ACERT (Associação Cultural, Esportiva e Recreativa de Tupã).<br><br>
      <ul>
        <li>O <strong>Nippon Fest</strong> celebra essa união com o som marcante do <em>Taiko</em> (tambores japoneses).</li>
        <li>Danças folclóricas <em>Bon Odori</em> e artes marciais (judô, karatê).</li>
        <li>Praça de alimentação japonesa com yakisoba, sushi, sashimi, tempurá e pastéis.</li>
      </ul>`
    },
    {
      keywords: ['moto rock', 'motociclista', 'rock', 'motoqueiro'],
      response: `🎸 <strong>Tupã Moto Rock:</strong><br>
      Realizado anualmente em maio com <strong>entrada gratuita</strong>!<br><br>
      Reúne mais de 10 mil pessoas e motoclubes de todo o Brasil. Conta com estrutura completa de camping coberto com chuveiro quente, café da manhã para motociclistas escudados, praça de alimentação e maratona de shows ininterruptos com bandas cover de rock clássico.`
    },
    {
      keywords: ['afrofest', 'natal de luz', 'aniversario da cidade', 'desfile'],
      response: `✨ <strong>Outros Grandes Festivais:</strong><br>
      <ul>
        <li>🎖️ <strong>Desfile de 12 de Outubro:</strong> Aniversário da cidade com cortejo cívico na Avenida Tamoios.</li>
        <li>✊ <strong>Festival AFROFEST:</strong> Em novembro, mês da Consciência Negra, unindo música, capoeira, moda afro e gastronomia.</li>
        <li>🎄 <strong>Natal de Luz:</strong> Em dezembro, iluminação cenográfica na Praça da Bandeira e cantatas de Natal da Orquestra Sinfônica Municipal Júlio de Castro.</li>
      </ul>`
    },
    {
      keywords: ['hotel', 'hoteis', 'pousada', 'pousadas', 'hospedagem', 'hospedagens', 'dormir', 'onde ficar'],
      response: `🏨 <strong>Onde se Hospedar em Tupã (Guia da Secretaria de Turismo):</strong><br>
      <ul>
        <li><strong>Central Plaza Hotel:</strong> Hotel executivo no centro da cidade.</li>
        <li><strong>Cazuza Palace Hotel:</strong> Estrutura tradicional e apartamentos confortáveis.</li>
        <li><strong>Avenida Hotel e Restaurante:</strong> Praticidade com gastronomia no próprio local.</li>
        <li><strong>Hotel Nobre & Hotel Fema:</strong> Opções de ótimo custo-benefício.</li>
        <li><strong>Fazenda Palma Ecoturismo:</strong> Hospedagem em clima de fazenda com piscina e cachoeira.</li>
        <li><strong>Pousada Kluss Laiks:</strong> Hospedagem charmosa e intimista em pleno Distrito de Varpa.</li>
      </ul>
      <small>Consulte mais detalhes em: <a href="https://www.turismo.tupa.sp.gov.br/pagina/60/hospedagens" target="_blank">turismo.tupa.sp.gov.br</a></small>`
    },
    {
      keywords: ['comer', 'restaurante', 'restaurantes', 'comida', 'almoco', 'jantar', 'pizza', 'pizzaria', 'churrasco', 'churrascaria', 'bar', 'bares', 'gastronomia', 'lanche'],
      response: `🍽️ <strong>Gastronomia em Tupã - Onde Comer:</strong><br>
      <ul>
        <li><strong>Brasileira & Cachaçaria:</strong> Água Doce Cachaçaria (porções nobres e drinks).</li>
        <li><strong>Comida Caseira & Self-Service:</strong> Restaurante Aimorés e Restaurante Brigola.</li>
        <li><strong>Carnes & Churrasco:</strong> Costela no Bafo Restaurante e Costelão do Baiano.</li>
        <li><strong>Pizzarias & Chopp:</strong> Vero Pizza-Bar, Dallas Restaurante e Pizzaria, Pizza Du Cheff.</li>
        <li><strong>Culinária Japonesa:</strong> Dragon Sushi Delivery e Tio Panda Comida Japonesa.</li>
        <li><strong>Distrito de Varpa:</strong> Tapera Nordestina e cafés artesanais com doces típicos letões.</li>
        <li><strong>Praça da Bandeira:</strong> Pastel de feira e quiosques na Quinta com Arte!</li>
      </ul>`
    },
    {
      keywords: ['amendoim', 'capital do amendoim', 'industria', 'economia', 'pib', 'trabalho'],
      response: `🌾 <strong>Tupã: A Capital Nacional do Amendoim:</strong><br>
      <ul>
        <li>A região de Tupã é o <strong>maior polo de processamento, confeitos e exportação de amendoim do Brasil</strong>, exportando para dezenas de países da Europa e América do Norte.</li>
        <li>Empresas consagradas de doces e derivados de amendoim estão sediadas aqui.</li>
        <li><strong>Economia Diversificada:</strong> Cana-de-açúcar (usinas de etanol/açúcar), grãos, forte avicultura de postura na microrregião (com a vizinha Bastos) e comércio regional vibrante.</li>
        <li><strong>PIB per Capita Oficial (IBGE):</strong> R$ 48.934,77.</li>
      </ul>`
    },
    {
      keywords: ['unesp', 'universidade', 'faculdade', 'faccat', 'etec', 'estudar', 'ensino superior', 'cursos', 'graduacao'],
      response: `🎓 <strong>Polo de Ensino Superior & Pesquisa:</strong><br>
      Tupã é um centro acadêmico e universitário de destaque no Estado:<br><br>
      <ul>
        <li><strong>UNESP - Faculdade de Ciências e Engenharia (FCE):</strong> Câmpus público estadual de excelência. Oferece graduação em <em>Engenharia de Biossistemas</em> e <em>Administração</em>, além do Programa de Pós-Graduação (Mestrado Acadêmico) em <em>Agronegócio e Desenvolvimento</em>.</li>
        <li><strong>FACCAT (Faculdade da Alta Paulista):</strong> Cursos tradicionais de Direito, Pedagogia, Psicologia, Gestão e Ciências Contábeis.</li>
        <li><strong>ETEC Prof. Massuyuki Kawano:</strong> Cursos técnicos profissionalizantes de alto nível (TI, Enfermagem, Administração, etc.).</li>
      </ul>`
    },
    {
      keywords: ['ibge', 'populacao', 'habitantes', 'censo', 'idhm', 'area', 'altitude', 'clima', 'gentilico', 'dados'],
      response: `📊 <strong>Dados Estatísticos Oficiais de Tupã (IBGE / PNUD):</strong><br>
      <ul>
        <li>👥 <strong>População (Censo IBGE):</strong> 63.928 habitantes (estimativa atual: ~65.400).</li>
        <li>📏 <strong>Área Territorial:</strong> 627,986 km².</li>
        <li>📈 <strong>IDHM (PNUD):</strong> 0,771 (Considerado Desenvolvimento Humano Alto).</li>
        <li>💰 <strong>PIB per Capita:</strong> R$ 48.934,77.</li>
        <li>⛰️ <strong>Altitude:</strong> 520 metros acima do nível do mar.</li>
        <li>☀️ <strong>Clima:</strong> Tropical com inverno seco (temperaturas médias entre 18°C e 30°C).</li>
        <li>🌊 <strong>Hidrografia:</strong> Espigão divisor entre as bacias do Rio do Peixe e do Rio Aguapeí (Feio).</li>
        <li>🏷️ <strong>Gentílico:</strong> Tupãense.</li>
      </ul>`
    },
    {
      keywords: ['secretaria', 'turismo', 'contato', 'telefone', 'email', 'horario', 'endereco', 'duvida', 'atendimento'],
      response: `📞 <strong>Secretaria Municipal de Turismo de Tupã:</strong><br>
      <ul>
        <li>📍 <strong>Endereço:</strong> Rua Guaianazes, nº 70 - Centro, Tupã/SP (CEP: 17600-110).</li>
        <li>🕒 <strong>Horário de Funcionamento:</strong> Segunda a Sexta das 7h30 às 17h | Sábado e Domingo das 8h às 14h.</li>
        <li>📧 <strong>E-mail:</strong> <a href="mailto:turismo@tupa.sp.gov.br">turismo@tupa.sp.gov.br</a></li>
        <li>🌐 <strong>Portal Oficial:</strong> <a href="https://www.turismo.tupa.sp.gov.br/" target="_blank">turismo.tupa.sp.gov.br</a></li>
        <li>📸 <strong>Instagram:</strong> @turismotupa</li>
      </ul>`
    },
    {
      keywords: ['emergencia', 'urgencia', 'hospital', 'hospitais', 'upa', 'santa casa', 'policia', 'bombeiro', 'samu', 'delegacia', 'rodoviaria', 'aeroporto'],
      response: `🚨 <strong>Telefones de Emergência & Saúde em Tupã:</strong><br>
      <ul>
        <li>👮 <strong>Polícia Militar:</strong> 190</li>
        <li>🚒 <strong>Corpo de Bombeiros:</strong> 193</li>
        <li>🚑 <strong>SAMU (Urgência Médica):</strong> 192</li>
        <li>🏥 <strong>Pronto Atendimento UPA:</strong> Atendimento médico de emergência 24h.</li>
        <li>🏥 <strong>Santa Casa de Misericórdia de Tupã:</strong> (14) 3404-5555.</li>
        <li>🛡️ <strong>Delegacia de Defesa da Mulher (DDM) & Polícia Civil.</strong></li>
        <li>🚌 <strong>Terminal Rodoviário:</strong> Linhas estaduais e interestaduais diárias.</li>
        <li>✈️ <strong>Aeroporto Estadual José Vicente de Faria Lima:</strong> Aviação regional e executiva.</li>
      </ul>`
    },
    {
      keywords: ['lazer', 'pesqueiro', 'pesca', 'clube', 'thermas', 'piscina', 'bosque', 'parque linear'],
      response: `🌳 <strong>Opções de Lazer & Entretenimento em Tupã:</strong><br>
      <ul>
        <li><strong>Parques & Ar Livre:</strong> Bosque Municipal e Parque Linear (caminhadas, cooper e natureza).</li>
        <li><strong>Balneários & Água:</strong> Eco Thermas Park, Paineira Beach Club e Arena Dida Beach (piscinas e esportes de areia).</li>
        <li><strong>Pesqueiros:</strong> Pesqueiro Hamada, Pesqueiro do Flávio e Pesqueiro Sol Nascente.</li>
        <li><strong>Cultura:</strong> Teatro Municipal, Espaço Cultural Zé Pretinho e Orquestra Municipal Júlio de Castro.</li>
      </ul>`
    },
    {
      keywords: ['como chegar', 'rodovia', 'sp 294', 'distancia', 'onibus', 'viagem'],
      response: `🚗 <strong>Como Chegar a Tupã:</strong><br>
      <ul>
        <li><strong>Principal Rodovia:</strong> SP-294 (Rodovia Comandante João Ribeiro de Barros), moderna, duplicada e com postos de apoio.</li>
        <li><strong>Saindo de São Paulo (510 km):</strong> Rodovia Castelo Branco (SP-280) até a SP-294 (cerca de 6h de viagem).</li>
        <li><strong>Cidades Vizinhas:</strong> Marília (75 km), Bauru (180 km), Presidente Prudente (115 km).</li>
        <li><strong>De Ônibus:</strong> O Terminal Rodoviário de Tupã recebe linhas diretas da Viação Guerino Seiscento, Expresso de Prata, Reunidas Paulista, entre outras.</li>
      </ul>`
    },
    {
      keywords: ['ola', 'oi', 'opa', 'alo', 'bom dia', 'boa tarde', 'boa noite', 'ajuda', 'socorro', 'inicio', 'quem e voce'],
      response: `Olá! Bem-vindo ao Guia Virtual de Turismo de Tupã! 👋<br><br>
      Estou abastecido com a mais completa base de dados oficiais de Tupã (Secretaria de Turismo, IBGE, UNESP e acervos históricos).<br><br>
      Pergunte-me sobre:
      <ul>
        <li>🏛️ Pontos turísticos e Museu Índia Vanuíre</li>
        <li>🌲 Distrito de Varpa, Fazenda Palma e colônia letã</li>
        <li>🚣 Rafting e ecoturismo no Rio do Peixe</li>
        <li>🎉 Eventos oficiais (Tupã Folia, Exapit, Quinta com Arte, Moto Rock)</li>
        <li>🌾 A Capital do Amendoim e a história do fundador Luiz de Souza Leão</li>
        <li>🎓 Cursos da UNESP e polo universitário</li>
        <li>🏨 Onde se hospedar e onde comer</li>
        <li>🚨 Telefones úteis e serviços de emergência</li>
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
