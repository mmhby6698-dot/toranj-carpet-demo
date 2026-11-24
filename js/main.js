(() => {
  const fd = s => String(s).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
  const fa = n => Number(n).toLocaleString('fa-IR');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const NS = 'http://www.w3.org/2000/svg';
  const star = (r1, r2, n, rot=0) => { let p=[]; for(let i=0;i<n*2;i++){const r=i%2?r2:r1, a=Math.PI*i/n+rot; p.push((r*Math.sin(a)).toFixed(1)+','+(-r*Math.cos(a)).toFixed(1));} return p.join(' '); };
  const petals = (n, r, rx, ry, extra='') => Array.from({length:n},(_,i)=>`<ellipse cx="0" cy="${-r}" rx="${rx}" ry="${ry}" transform="rotate(${360/n*i})" ${extra}/>`).join('');
  // hero medallion
  const med = document.getElementById('heroMed');
  med.innerHTML = `<g class="rot" fill="none" stroke="#c9a45c" stroke-width="1.2">
    <circle class="draw" pathLength="1" r="190"/><circle class="draw" pathLength="1" r="182" stroke-dasharray="2 6"/>
    <polygon class="draw" pathLength="1" points="${star(176,130,16)}"/>
    <polygon class="draw" pathLength="1" points="${star(150,96,8,Math.PI/8)}" stroke="#e8cf96"/>
    <g opacity=".8">${petals(16,118,10,26,'class="draw" pathLength="1"')}</g>
    <circle class="draw" pathLength="1" r="84" stroke="#8c2a22" stroke-width="3"/>
    <polygon class="draw" pathLength="1" points="${star(80,52,12)}"/>
    <g>${petals(8,40,8,22,'class="draw" pathLength="1" stroke="#e8cf96"')}</g>
    <circle r="14" fill="#8c2a22"/><circle r="6" fill="#c9a45c"/></g>`;
  // carpet generator
  const carpet = (id, c, extraClip='') => {
    const W=300,H=420; const f = `<pattern id="${id}f" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M15 3 L27 15 L15 27 L3 15Z" fill="none" stroke="${c.motif}" stroke-width="1.2" opacity=".55"/><circle cx="15" cy="15" r="2.4" fill="${c.motif}" opacity=".8"/><circle cx="0" cy="0" r="3" fill="${c.accent}" opacity=".6"/></pattern>
      <pattern id="${id}b" width="22" height="22" patternUnits="userSpaceOnUse"><rect width="22" height="22" fill="${c.border}"/><path d="M11 2 L20 11 L11 20 L2 11Z" fill="${c.accent}"/><circle cx="11" cy="11" r="3" fill="${c.motif}"/></pattern>`;
    const fr = Array.from({length:30},(_,i)=>`<line x1="${8+i*9.7}" y1="0" x2="${8+i*9.7}" y2="12"/><line x1="${8+i*9.7}" y1="${H-12}" x2="${8+i*9.7}" y2="${H}"/>`).join('');
    const corner = (x,y,r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c.border}" stroke="${c.motif}" stroke-width="2"/><circle cx="${x}" cy="${y}" r="${r*.55}" fill="${c.accent}"/>`;
    return `<defs>${f}<clipPath id="${id}c"><rect x="54" y="64" width="192" height="292"/></clipPath></defs>
      <g stroke="${c.motif}" stroke-width="1.4" opacity=".7">${fr}</g>
      <g ${extraClip}>
      <rect x="6" y="12" width="${W-12}" height="${H-24}" fill="${c.border}"/>
      <rect x="18" y="24" width="${W-36}" height="${H-48}" fill="url(#${id}b)"/>
      <rect x="40" y="46" width="${W-80}" height="${H-92}" fill="${c.border}" />
      <rect x="46" y="52" width="${W-92}" height="${H-104}" fill="${c.field}"/>
      <rect x="46" y="52" width="${W-92}" height="${H-104}" fill="url(#${id}f)"/>
      <g clip-path="url(#${id}c)">${corner(54,64,46)}${corner(246,64,46)}${corner(54,356,46)}${corner(246,356,46)}</g>
      <g transform="translate(150 210)">
        <path d="M0 -118 C26 -80 60 -48 80 0 C60 48 26 80 0 118 C-26 80 -60 48 -80 0 C-60 -48 -26 -80 0 -118Z" fill="${c.border}" stroke="${c.motif}" stroke-width="2.5"/>
        <polygon points="${star(70,46,12)}" fill="${c.accent}" stroke="${c.motif}" stroke-width="1.5"/>
        <g fill="${c.field}" stroke="${c.motif}">${petals(8,30,6,15)}</g>
        <circle r="12" fill="${c.motif}"/><circle r="5" fill="${c.border}"/>
        <path d="M0 -118 v-22 M0 118 v22" stroke="${c.motif}" stroke-width="4"/><circle cy="-144" r="6" fill="${c.accent}"/><circle cy="144" r="6" fill="${c.accent}"/>
      </g></g>`;
  };
  const rugs = [
    {n:'تبریز ماهی‌درهم',o:'تبریز',s:'۳٫۰۰ × ۲٫۰۰ متر',r:'۵۰ رج',y:'۱۴۰۱',m:'کرک و ابریشم',t:'نقش ماهی‌درهم با ترنج لچک‌دار؛ رنگ‌بندی لاکی و سرمه‌ای با رنگ‌رزی روناس و نیل.',c:{border:'#5b1a16',field:'#8c2a22',accent:'#1f2a4d',motif:'#e8cf96'}},
    {n:'اصفهان شاه‌عباسی',o:'اصفهان',s:'۲٫۵۰ × ۱٫۵۰ متر',r:'۶۵ رج',y:'۱۳۹۸',m:'پشم بهاره روی چله ابریشم',t:'گل‌های شاه‌عباسی دور ترنج مرکزی؛ زمینه‌ی سرمه‌ای و حاشیه‌ی شیری از کارگاه‌های اطراف نقش جهان.',c:{border:'#1b2340',field:'#22305e',accent:'#9a2b25',motif:'#efe1c0'}},
    {n:'نائین شیری',o:'نائین',s:'۲٫۰۰ × ۱٫۴۰ متر',r:'۸۰ رج (نه‌لا)',y:'۱۴۰۰',m:'پشم کرک و ابریشم',t:'ریزبافت نه‌لا با رنگ‌های شیری، آبی فیروزه‌ای و نخودی؛ از ظریف‌ترین بافت‌های ایران.',c:{border:'#d9cdb1',field:'#efe6d1',accent:'#3f6f86',motif:'#6b5232'}},
    {n:'کاشان محتشم',o:'کاشان',s:'۳٫۵۰ × ۲٫۵۰ متر',r:'۴۵ رج',y:'۱۳۹۶',m:'پشم مرینوس',t:'طرح محتشم با لچک‌های طلایی؛ لاکی پررنگ که با گذر زمان پخته‌تر و گرم‌تر می‌شود.',c:{border:'#3a2410',field:'#a3332a',accent:'#c9a45c',motif:'#f3e3bd'}}
  ];
  const grid = document.getElementById('colGrid'), sel = document.getElementById('vRug');
  grid.innerHTML = rugs.map((r,i)=>`<article class="rug reveal"><div class="art"><svg viewBox="0 0 300 420" role="img" aria-label="طرح گرافیکی فرش ${r.n}">${carpet('r'+i,r.c)}</svg></div>
    <h3>${r.n}</h3><p class="meta">${r.o} · ${r.s} · ${r.r}</p><button type="button" data-i="${i}">جزئیات و شناسنامه ←</button></article>`).join('');
  rugs.forEach(r => sel.insertAdjacentHTML('beforeend', `<option>${r.n}</option>`));
  // dialog
  const dlg = document.getElementById('rugDialog');
  grid.addEventListener('click', e => { const b = e.target.closest('button[data-i]'); if(!b) return; const r = rugs[b.dataset.i];
    document.getElementById('dArt').innerHTML = `<svg viewBox="0 0 300 420" role="img" aria-label="طرح فرش ${r.n}">${carpet('d',r.c)}</svg>`;
    document.getElementById('dTitle').textContent = r.n;
    document.getElementById('dList').innerHTML = [['منطقه',r.o],['ابعاد',r.s],['رج‌شمار',r.r],['جنس',r.m],['سال بافت',r.y]].map(([k,v])=>`<dt>${k}</dt><dd>${v}</dd>`).join('');
    document.getElementById('dText').textContent = r.t; sel.value = r.n; dlg.showModal(); });
  dlg.querySelector('.close').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  document.getElementById('dBook').addEventListener('click', () => dlg.close());
  // loom (weaving progress)
  const loom = document.getElementById('loomSvg');
  loom.innerHTML = `<g opacity=".18">${carpet('lg',rugs[0].c)}</g><defs><clipPath id="weaveClip"><rect id="weaveRect" x="0" y="0" width="300" height="0"/></clipPath></defs><g clip-path="url(#weaveClip)">${carpet('lw',rugs[0].c)}</g>
    <line id="weaveLine" x1="0" x2="300" y1="0" y2="0" stroke="#e8cf96" stroke-width="2"/>`;
  const wr = document.getElementById('weaveRect'), wl = document.getElementById('weaveLine'), knots = document.getElementById('knots');
  const levels = [0, .12, .38, .72, 1]; let shown = 0, cur = 0;
  const setStep = s => { const h = 420*levels[s]; cur = Math.round(levels[s]*1240000);
    if (reduce) { wr.setAttribute('height', h); wl.setAttribute('y1',h); wl.setAttribute('y2',h); knots.textContent = fa(cur); return; }
    const from = +wr.getAttribute('height'), t0 = performance.now(), k0 = shown;
    const step = t => { const p = Math.min(1,(t-t0)/1200), e = 1-Math.pow(1-p,3), y = from+(h-from)*e;
      wr.setAttribute('height', y); wl.setAttribute('y1',y); wl.setAttribute('y2',y); shown = Math.round(k0+(cur-k0)*e); knots.textContent = fa(shown);
      if (p<1) requestAnimationFrame(step); }; requestAnimationFrame(step); };
  const chio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) {
      document.querySelectorAll('.chapter').forEach(c => c.classList.toggle('active', c === e.target)); setStep(+e.target.dataset.step); } }), {rootMargin:'-45% 0px -45% 0px'});
  document.querySelectorAll('.chapter').forEach(c => chio.observe(c));
  // reveal + counters
  const io = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return; e.target.classList.add('in'); io.unobserve(e.target);
      const b = e.target.querySelector('[data-count]'); if (b) { const to = +b.dataset.count; if (reduce) { b.textContent = fa(to); return; }
        const t0 = performance.now(); const run = t => { const p = Math.min(1,(t-t0)/1600); b.textContent = fa(Math.round(to*(1-Math.pow(1-p,3)))) + (p===1&&to>100?'+':''); if(p<1) requestAnimationFrame(run); }; requestAnimationFrame(run); } }), {threshold:.2});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  // parallax + header
  const par = [...document.querySelectorAll('[data-speed]')], top = document.getElementById('top');
  const onScroll = () => { const y = scrollY; top.classList.toggle('solid', y > 40);
    if (!reduce && y < innerHeight * 1.2) par.forEach(el => el.style.transform = `translate3d(0,${y*el.dataset.speed}px,0)`); };
  addEventListener('scroll', onScroll, {passive:true}); onScroll();
  // form (front-end only)
  const f = document.getElementById('visitForm'), err = document.getElementById('vErr'), ok = document.getElementById('vOk');
  f.addEventListener('submit', e => { e.preventDefault(); const n = f.vName, p = f.vPhone;
    const d = p.value.replace(/[۰-۹]/g, x => '۰۱۲۳۴۵۶۷۸۹'.indexOf(x));
    [n,p].forEach(x => x.removeAttribute('aria-invalid'));
    if (n.value.trim().length < 3) { err.textContent = 'لطفاً نام و نام خانوادگی را وارد کنید.'; n.setAttribute('aria-invalid','true'); n.focus(); return; }
    if (!/^0\d{10}$/.test(d)) { err.textContent = 'شماره تماس باید ۱۱ رقم باشد.'; p.setAttribute('aria-invalid','true'); p.focus(); return; }
    err.textContent = ''; ok.textContent = `${n.value.trim()} عزیز، درخواست بازدید روز ${f.vDay.value} ثبت شد. (نمایشی؛ اطلاعاتی ارسال نشد)`; f.reset(); });
})();
