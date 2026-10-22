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
      // Remove a classe ativa de todos e adiciona no clicado
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
});
