(function () {
  const header = document.getElementById('header');
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');

  // 스크롤 시 헤더 배경
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 모바일 메뉴 토글
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      header.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );

  // 현재 보고 있는 섹션 메뉴 강조
  const links = [...nav.querySelectorAll('a')];
  const sections = links.map((a) => document.querySelector(a.getAttribute('href')));
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  sections.forEach((s) => s && spy.observe(s));

  // 매출 그래프: 화면에 들어오면 막대 올라오기
  const chart = document.getElementById('salesChart');
  const bars = [...chart.querySelectorAll('.bar')];
  const max = Math.max(...bars.map((b) => +b.dataset.value));
  const grow = () => {
    chart.classList.add('show');
    bars.forEach((b) => {
      // 값 라벨 공간을 남기고 최대 85% 높이
      b.querySelector('.bar-fill').style.height = (+b.dataset.value / max) * 85 + '%';
    });
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          grow();
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(chart);
  } else {
    grow();
  }

  // 실적 연도 필터
  const tabs = document.getElementById('yearTabs');
  const items = document.querySelectorAll('#timeline li');
  tabs.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    tabs.querySelectorAll('button').forEach((b) => b.classList.toggle('active', b === btn));
    const year = btn.dataset.year;
    items.forEach((li) => li.classList.toggle('hidden', year !== 'all' && li.dataset.year !== year));
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
