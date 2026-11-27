/* ==========================================================================
   LEYLÜNEHAR — Atelier Archive, Bottle Inspector & Concierge Reservation Flow
   ========================================================================== */

const CATALOG = [
  // ---- ATELIER DE PARFUM (Esans Arşivi) ----
  {
    id: 'buy-u-suz',
    category: 'essence',
    realm: 'leyl',
    realmLabel: 'Leyl',
    name: 'BÛY Ü SÛZ',
    edition: 'N° 03 / 100',
    meaning: '“Koku ve yanış; eski divan şiirinde ateşin bıraktığı iz.”',
    shortNotes: 'İsli Ud, Siyah Kehribar, Kakule, Yanık Sedir',
    description:
      'Leyl-ü Nehar’ın kurucu imzası. Koyu kehribar sıvının içinde dinlenen ham ud odunu ve kurutulmuş baharat çiçekleri, zamanla şişenin karakterini derinleştirir.',
    topNotes: 'Siyah Kakule, Tütsülenmiş Karabiber, Acı Bergamot',
    heartNotes: 'İsli Ud Odunu, Yanık Sedir, Kuru Karanfil',
    baseNotes: 'Siyah Kehribar, Ladin Reçinesi, Eski Deri',
    suspension: 'Ham Ud Parçası & Kuru Baharat Çiçeği',
    liquidTone: 'Koyu Kehribar · Ud Odunu',
    liquidColor: '#6d3511',
    volume: '100 ml Saf Esans · El Dökümü',
    price: '16.500 ₺',
    status: 'available',
    statusText: 'Sınırlı Edisyon · Kalan 7',
    image: 'assets/buy-u-suz.jpg'
  },
  {
    id: 'seb-i-yelda',
    category: 'essence',
    realm: 'leyl',
    realmLabel: 'Leyl',
    name: 'ŞEB-İ YELDÂ',
    edition: 'N° 01 / 50',
    meaning: '“Yılın en uzun gecesi; karanlığın içinde açan koyu gül.”',
    shortNotes: 'Şam Gülü Kurusu, Mür Reçinesi, Safran, Siyah Misk',
    description:
      'Yalnızca elli şişe dökülen ilk gece serisi. Koyu yakut tonundaki esansın içinde dinlenen Şam gülü yaprağı ve tarçın kabuğuyla ağırbaşlı, kalıcı bir iz bırakır.',
    topNotes: 'Kırmızı Safran, Ezilmiş Tarçın Kabuğu',
    heartNotes: 'Kurutulmuş Şam Gülü, Mür Reçinesi',
    baseNotes: 'Siyah Misk, Tütsülenmiş Sandal, Paçuli',
    suspension: 'Şam Gülü Yaprağı & Tarçın Kabuğu',
    liquidTone: 'Koyu Yakut · Şam Gülü',
    liquidColor: '#6b141c',
    volume: '100 ml Saf Esans · Tek Üretim',
    price: '22.000 ₺',
    status: 'archived',
    statusText: 'Arşivde · Tükendi',
    image: 'assets/seb-i-yelda.jpg'
  },
  {
    id: 'nefha-i-seher',
    category: 'essence',
    realm: 'nehar',
    realmLabel: 'Nehar',
    name: 'NEFHA-İ SEHER',
    edition: 'N° 12 / 100',
    meaning: '“Seher vaktinin ilk serin esintisi.”',
    shortNotes: 'Acı Defne, Bergamot Kabuğu, Servi, Islak Mermer',
    description:
      'Nehar serisinin berrak yüzü. Neftî zümrüt tonundaki esans, içindeki kuru defne yaprağı ve servi dallarıyla sabahın serin avlusunu taşır.',
    topNotes: 'Yeşil Bergamot Kabuğu, Acı Portakal Yaprağı',
    heartNotes: 'Kuru Defne, Boğaziçi Servisi, Beyaz Çay',
    baseNotes: 'Islak Mermer Akoru, Sedir, Beyaz Misk',
    suspension: 'Kuru Defne Yaprağı & Servi Dalı',
    liquidTone: 'Neftî Zümrüt · Defne Özü',
    liquidColor: '#25422c',
    volume: '100 ml Saf Esans · El Dökümü',
    price: '14.800 ₺',
    status: 'available',
    statusText: 'Sınırlı Edisyon · Kalan 11',
    image: 'assets/nefha-i-seher.jpg'
  },
  {
    id: 'hak-u-nur',
    category: 'essence',
    realm: 'leyl',
    realmLabel: 'Leyl',
    name: 'HÂK Ü NÛR',
    edition: 'N° 00 / 25',
    meaning: '“Toprak ve ışık; yalnızca 25 şişelik mühürlü koleksiyoner arşivi.”',
    shortNotes: 'Omani Günlük, Ham Bal Mumu, Vetiver, Ambergris',
    description:
      'Atölyenin en nadir terkibi. Işıltılı altın bal rengindeki sıvının içinde yüzen günlük reçinesi gözyaşları, eski parşömen ve ambergris ile birleşir.',
    topNotes: 'Omani Frankincense (Günlük), Elemi',
    heartNotes: 'Ham Bal Mumu, Eski Parşömen, İris Kökü',
    baseNotes: 'Vetiver Kökü, Doğal Ambergris, Labdanum',
    suspension: 'Altın Günlük Reçinesi & İnce Sedir Dalı',
    liquidTone: 'Altın Bal · Günlük Reçinesi',
    liquidColor: '#b5842a',
    volume: '100 ml Saf Esans · Mühürlü Arşiv',
    price: '28.500 ₺',
    status: 'archived',
    statusText: 'Arşivde · Tükendi',
    image: 'assets/hak-u-nur.jpg'
  },

  // ---- ATELIER DE CIRE — Heykelsi Formlar (Formes Sculpturales) ----
  {
    id: 'burgu-i-leyl',
    category: 'sculptural',
    realm: 'leyl',
    realmLabel: 'Leyl',
    name: 'BURGU-İ LEYL',
    edition: 'N° 09 / 120',
    meaning: '“Karanlığın sarmal biçimi; etiketsiz, yalın heykelsi mum.”',
    shortNotes: 'İsli Bal Mumu, Yanık Sedir, Siyah Çay · Heykelsi Burgu',
    description:
      'Koyu füme-kömür tonunda elde dökülen organik burgu sütun mum. Gövdesinde hiçbir yazı bulunmaz; yanında yırtık pamuk kâğıt atölye kartı ve edisyon numarası ile teslim edilir.',
    topNotes: 'Kuru Siyah Çay, Hafif Tütsü',
    heartNotes: 'Doğal Ham Bal Mumu, Yanık Sedir',
    baseNotes: 'Sıcak Reçine, Odunsu Misk',
    suspension: 'Etiketsiz Heykelsi Gövde · 240 g · Yırtık Pamuk Kart',
    liquidTone: 'Mat Kömür-Espresso Balmumu',
    liquidColor: '#25211e',
    volume: '240 g Heykelsi Mum · Kokusuz / Hafif Bal Mumu',
    price: '1.650 ₺',
    status: 'available',
    statusText: 'Edisyon Açık',
    image: 'assets/burgu-i-leyl.jpg'
  },
  {
    id: 'ukde-i-kure',
    category: 'sculptural',
    realm: 'leyl',
    realmLabel: 'Leyl',
    name: 'UKDE-İ KÜRE',
    edition: 'N° 18 / 120',
    meaning: '“İç içe örülü düğüm formu; masada sessiz bir heykel.”',
    shortNotes: 'Koyu Ceviz-Obsidyen Balmumu · Örgü Küre Form',
    description:
      'Mat koyu obsidyen-ceviz tonunda, kalıptan elle çıkarılan örgülü düğüm küre mum. Üzerinde baskı veya etiket yer almaz; atölyenin yırtık pamuk kartıyla sunulur.',
    topNotes: 'Ham Soya & Bal Mumu Doğal Dokusu',
    heartNotes: 'Hafif Mür ve Kuru Odun İzi',
    baseNotes: 'Koyu Kehribar Sıcaklığı',
    suspension: 'Etiketsiz Heykelsi Gövde · 260 g · Yırtık Pamuk Kart',
    liquidTone: 'Mat Obsidyen-Ceviz Balmumu',
    liquidColor: '#2b2022',
    volume: '260 g Heykelsi Mum · El Dökümü',
    price: '1.850 ₺',
    status: 'available',
    statusText: 'Edisyon Açık',
    image: 'assets/ukde-i-kure.jpg'
  },
  {
    id: 'sutun-i-pera',
    category: 'sculptural',
    realm: 'nehar',
    realmLabel: 'Nehar',
    name: 'SÜTÛN-I PERA',
    edition: 'N° 04 / 90',
    meaning: '“Eski Pera sofralarından ilham alan ikili yivli sütun şamdan mum.”',
    shortNotes: 'Füme Bronz-Zeytin Balmumu · İkili Mimari Set',
    description:
      'Kendi yivli kaidesi üzerinde yükselen iki farklı boyda uzun mimari sütun mum. Etiketsiz yalın gövdesi ve koyu füme tonuyla şamdan gerektirmeden doğrudan taş veya ahşap üzerinde durur.',
    topNotes: 'Doğal Balmumu, Serin Servi İzi',
    heartNotes: 'Kuru Defne, Eski Ahşap',
    baseNotes: 'Hafif Mineral & Misk',
    suspension: '2’li Mimari Set · Etiketsiz Gövde · Yırtık Pamuk Kart',
    liquidTone: 'Füme Zeytin-Bronz Balmumu',
    liquidColor: '#3f3a31',
    volume: '2’li Mimari Sütun Seti · El Dökümü',
    price: '2.100 ₺',
    status: 'available',
    statusText: 'Sınırlı Edisyon',
    image: 'assets/sutun-i-pera.jpg'
  },
  {
    id: 'mihrab-i-nur',
    category: 'sculptural',
    realm: 'nehar',
    realmLabel: 'Nehar',
    name: 'MİHRÂB-I NÛR',
    edition: 'N° 11 / 100',
    meaning: '“Dikey yivli mimari kule; ışığı gölgede tutan geometrik form.”',
    shortNotes: 'Eskitme Koyu Bronz Balmumu · Yivli Totem Form',
    description:
      'Dikey oluklu mimari katmanlardan oluşan heykelsi totem mum. Koyu eskitme bronz-toprak tonunda elde dökülür; mumun üzerinde hiçbir yazı bulunmaz, yanında pamuk kart ile gelir.',
    topNotes: 'Ham Balmumu, Kuru Sedir',
    heartNotes: 'Günlük Reçinesi, Eski Parşömen',
    baseNotes: 'Topraksı Vetiver & Amber',
    suspension: 'Etiketsiz Heykelsi Gövde · 290 g · Yırtık Pamuk Kart',
    liquidTone: 'Koyu Eskitme Bronz Balmumu',
    liquidColor: '#4c3b2a',
    volume: '290 g Heykelsi Totem · El Dökümü',
    price: '1.950 ₺',
    status: 'available',
    statusText: 'Edisyon Açık',
    image: 'assets/mihrab-i-nur.jpg'
  },

  // ---- ATELIER DE CIRE — Kaplı Mumlar (Cires en Vase) ----
  {
    id: 'kandil-i-leyl',
    category: 'candle',
    realm: 'leyl',
    realmLabel: 'Leyl',
    name: 'KANDİL-İ LEYL',
    edition: 'N° 14 / 150',
    meaning: '“Geceye eşlik eden dingin kandil ışığı.”',
    shortNotes: 'Yanık İncir Odunu, Siyah Çay, Günlük Reçinesi, Sedir',
    description:
      'Mat siyah el dökümü bazalt kapta, doğal soya ve ham bal mumu karışımı. Yandıkça odayı boğmadan saran derin, kütüphane sıcaklığında bir akşam kokusu.',
    topNotes: 'Siyah Çay Yaprağı, Kuru İncir',
    heartNotes: 'Yanık İncir Odunu, Günlük Reçinesi',
    baseNotes: 'Atlas Sediri, Tütsülenmiş Vanilya Kabuğu',
    suspension: '280 g · ~60 Saat Yanma · Pamuk Fitil',
    liquidTone: 'Mat Siyah Bazalt Kap',
    liquidColor: '#2a241f',
    volume: '280 g El Dökümü Mum · ~60 Saat',
    price: '2.450 ₺',
    status: 'available',
    statusText: 'Edisyon Açık',
    image: 'assets/kandil-i-leyl.jpg'
  },
  {
    id: 'divan-i-seher',
    category: 'candle',
    realm: 'nehar',
    realmLabel: 'Nehar',
    name: 'DÎVÂN-I SEHER',
    edition: 'N° 08 / 150',
    meaning: '“Sabah serinliğinde açılan ferah divan.”',
    shortNotes: 'Beyaz Defne, Neroli, Eski Keten, Taze Sedir',
    description:
      'Füme kehribar cam kapta el dökümü gündüz mumu. Temiz keten, acı portakal çiçeği ve beyaz defneyle mekâna dingin bir aydınlık taşır.',
    topNotes: 'Neroli, Bergamot Kabuğu',
    heartNotes: 'Beyaz Defne, Eski Keten, Beyaz Çay',
    baseNotes: 'Taze Sedir, Yumuşak Misk',
    suspension: '280 g · ~60 Saat Yanma · Pamuk Fitil',
    liquidTone: 'Füme Kehribar Cam',
    liquidColor: '#7a5c38',
    volume: '280 g El Dökümü Mum · ~60 Saat',
    price: '2.250 ₺',
    status: 'available',
    statusText: 'Edisyon Açık',
    image: 'assets/divan-i-seher.jpg'
  },
  {
    id: 'buy-u-suz-cire',
    category: 'candle',
    realm: 'leyl',
    realmLabel: 'Leyl',
    name: 'BÛY Ü SÛZ — CIRE',
    edition: 'N° 05 / 80',
    meaning: '“İmza esansımızın taş kapta mum yorumu.”',
    shortNotes: 'İsli Ud, Siyah Kehribar, Kakule, Ham Bal Mumu',
    description:
      'Bûy ü Sûz esansının yüksek konsantrasyonlu mum edisyonu. Ağır koyu taş kabı ve eskitme pirinç detayıyla yalnızca 80 adet dökülmüştür.',
    topNotes: 'Siyah Kakule, Tütsülenmiş Baharat',
    heartNotes: 'İsli Ud, Yanık Sedir',
    baseNotes: 'Siyah Kehribar, Ham Bal Mumu, Reçine',
    suspension: '340 g · ~70 Saat Yanma · Ağır Taş Kap',
    liquidTone: 'Koyu Obsidyen Taş Kap',
    liquidColor: '#1b1815',
    volume: '340 g İmza Mum · ~70 Saat',
    price: '3.200 ₺',
    status: 'available',
    statusText: 'Sınırlı Edisyon',
    image: 'assets/buy-u-suz-cire.jpg'
  }
];

// DOM Elements
const siteHeader = document.getElementById('siteHeader');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const essenceGrid = document.getElementById('essenceGrid');
const sculpturalGrid = document.getElementById('sculpturalGrid');
const candleGrid = document.getElementById('candleGrid');
const themeToggles = document.querySelectorAll('[data-theme-toggle]');
const filterBtns = document.querySelectorAll('.filter-btn');
const realmCards = document.querySelectorAll('[data-realm-select]');

const swatchSelector = document.getElementById('swatchSelector');
const craftSpecs = document.getElementById('craftSpecs');
const craftBottleImg = document.getElementById('craftBottleImg');
const paperName = document.getElementById('paperName');
const paperEdition = document.getElementById('paperEdition');
const liquidDot = document.getElementById('liquidDot');
const liquidToneText = document.getElementById('liquidToneText');

const detailModal = document.getElementById('detailModal');
const detailContent = document.getElementById('detailContent');
const requestModal = document.getElementById('requestModal');
const reservationForm = document.getElementById('reservationForm');
const reqEdition = document.getElementById('reqEdition');
const reqType = document.getElementById('reqType');
const formError = document.getElementById('formError');
const requestFormView = document.getElementById('requestFormView');
const requestSuccessView = document.getElementById('requestSuccessView');
const receiptCode = document.getElementById('receiptCode');
const receiptEdition = document.getElementById('receiptEdition');
const receiptName = document.getElementById('receiptName');
const whatsappLink = document.getElementById('whatsappLink');
const resetRequestBtn = document.getElementById('resetRequestBtn');

// Theme Switcher: LEYL (Dark) / NEHAR (Light)
function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  try {
    localStorage.setItem('leylunehar-theme', theme);
  } catch (_) {}
}

const savedTheme = (() => {
  try {
    return localStorage.getItem('leylunehar-theme') || 'dark';
  } catch (_) {
    return 'dark';
  }
})();
applyTheme(savedTheme);

themeToggles.forEach((btn) => {
  btn.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    applyTheme(isLight ? 'dark' : 'light');
  });
});

// Header scroll effect
window.addEventListener('scroll', () => {
  siteHeader.classList.toggle('scrolled', window.scrollY > 36);
});

// Mobile drawer
mobileMenuBtn.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
  mobileNav.setAttribute('aria-hidden', String(!isOpen));
});

mobileNav.querySelectorAll('a, button').forEach((el) => {
  el.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
  });
});

// Render product card HTML
function createProductCard(item) {
  const isArchived = item.status === 'archived';
  const card = document.createElement('article');
  card.className = `product-card${isArchived ? ' is-archived' : ''}`;
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `${item.name} — ${item.edition} detaylarını incele`);

  card.innerHTML = `
    <div class="product-media">
      <img src="${item.image}?v=2" alt="Leyl-ü Nehar ${item.name} — ${item.edition}" loading="lazy" />
      <div class="media-badges">
        <span class="status-badge ${isArchived ? 'status-archived' : 'status-available'}">${item.statusText}</span>
        <span class="realm-pill">${item.realmLabel}</span>
      </div>
    </div>
    <div class="product-body">
      <span class="product-edition">${item.edition}</span>
      <h3 class="product-name">${item.name}</h3>
      <p class="product-notes">${item.shortNotes}</p>
      <div class="product-footer">
        <span class="product-price">${item.price}</span>
        <span class="product-inspect">İncele &rarr;</span>
      </div>
    </div>
  `;

  card.addEventListener('click', () => openDetailModal(item.id));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openDetailModal(item.id);
    }
  });

  return card;
}

// Render Essences & Candles
function renderEssences(filter = 'all') {
  essenceGrid.innerHTML = '';
  const essences = CATALOG.filter(
    (item) => item.category === 'essence' && (filter === 'all' || item.realm === filter)
  );
  essences.forEach((item) => essenceGrid.appendChild(createProductCard(item)));
}

function renderCandles() {
  if (sculpturalGrid) {
    sculpturalGrid.innerHTML = '';
    const sculpturals = CATALOG.filter((item) => item.category === 'sculptural');
    sculpturals.forEach((item) => sculpturalGrid.appendChild(createProductCard(item)));
  }
  candleGrid.innerHTML = '';
  const candles = CATALOG.filter((item) => item.category === 'candle');
  candles.forEach((item) => candleGrid.appendChild(createProductCard(item)));
}

// Filter interactions
filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    renderEssences(btn.dataset.filter);
  });
});

realmCards.forEach((card) => {
  card.addEventListener('click', () => {
    const realm = card.dataset.realmSelect;
    filterBtns.forEach((b) => {
      const match = b.dataset.filter === realm;
      b.classList.toggle('active', match);
      b.setAttribute('aria-selected', String(match));
    });
    renderEssences(realm);
    document.getElementById('esans').scrollIntoView({ behavior: 'smooth' });
  });
});

// Craft / Bottle Cut-out Inspector
function initCraftInspector() {
  const essences = CATALOG.filter((item) => item.category === 'essence');
  swatchSelector.innerHTML = '';

  essences.forEach((item, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `swatch-btn${idx === 0 ? ' active' : ''}`;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', String(idx === 0));
    btn.innerHTML = `
      <span class="swatch-color" style="background:${item.liquidColor}"></span>
      <span class="swatch-meta">
        <span class="swatch-title">${item.name}</span>
        <span class="swatch-sub">${item.edition}</span>
      </span>
    `;
    btn.addEventListener('click', () => {
      swatchSelector.querySelectorAll('.swatch-btn').forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      updateCraftStage(item);
    });
    swatchSelector.appendChild(btn);
  });

  updateCraftStage(essences[0]);
}

function updateCraftStage(item) {
  craftBottleImg.style.opacity = '0.35';
  setTimeout(() => {
    craftBottleImg.src = `${item.image}?v=2`;
    craftBottleImg.alt = `Leyl-ü Nehar ${item.name} — ${item.edition}`;
    craftBottleImg.style.opacity = '1';
  }, 150);

  paperName.textContent = item.name;
  paperEdition.textContent = item.edition;
  liquidDot.style.background = item.liquidColor;
  liquidToneText.textContent = item.liquidTone;

  craftSpecs.innerHTML = `
    <div class="spec-box">
      <span>Şişe İçi Öz</span>
      <strong>${item.suspension}</strong>
    </div>
    <div class="spec-box">
      <span>Edisyon Durumu</span>
      <strong>${item.statusText}</strong>
    </div>
    <div class="spec-box">
      <span>Mühür &amp; Tıpa</span>
      <strong>Siyah Mantar &middot; Siyah Sicim</strong>
    </div>
    <div class="spec-box">
      <span>Etiket</span>
      <strong>Yırtık Ham Pamuk Kâğıt</strong>
    </div>
  `;
}

// Populate Request Select Dropdown
function populateEditionSelect() {
  reqEdition.innerHTML = '';
  const groups = [
    { label: 'Atelier de Parfum — Esans Arşivi', items: CATALOG.filter((i) => i.category === 'essence') },
    { label: 'Atelier de Cire — Heykelsi Formlar', items: CATALOG.filter((i) => i.category === 'sculptural') },
    { label: 'Atelier de Cire — Kaplı Mumlar', items: CATALOG.filter((i) => i.category === 'candle') }
  ];

  groups.forEach((group) => {
    const optgroup = document.createElement('optgroup');
    optgroup.label = group.label;
    group.items.forEach((item) => {
      const opt = document.createElement('option');
      opt.value = item.id;
      const suffix = item.status === 'archived' ? ' [Arşiv / Bekleme Listesi]' : '';
      opt.textContent = `${item.name} (${item.edition}) — ${item.price}${suffix}`;
      optgroup.appendChild(opt);
    });
    reqEdition.appendChild(optgroup);
  });
}

// Detail Modal
function openDetailModal(id) {
  const item = CATALOG.find((x) => x.id === id);
  if (!item) return;

  const isArchived = item.status === 'archived';
  const ctaLabel = isArchived ? 'Arşiv Bekleme Listesine Yazıl' : 'Bu Edisyonu Ayırt';

  detailContent.innerHTML = `
    <div class="detail-image-col">
      <img src="${item.image}?v=2" alt="Leyl-ü Nehar ${item.name}" />
    </div>
    <div class="detail-info-col">
      <p class="eyebrow">${item.category === 'essence' ? 'ATELIER DE PARFUM' : 'ATELIER DE CIRE'} &middot; ${item.realmLabel.toUpperCase()} SERİSİ</p>
      <h2 class="detail-title" id="modalTitle">${item.name}</h2>
      <p class="detail-edition">${item.edition} &mdash; ${item.volume}</p>
      <p class="detail-meaning">${item.meaning}</p>
      <p class="detail-desc">${item.description}</p>

      <div class="pyramid-box">
        <div class="pyramid-row">
          <span>Üst Nota</span>
          <div>${item.topNotes}</div>
        </div>
        <div class="pyramid-row">
          <span>Kalp Nota</span>
          <div>${item.heartNotes}</div>
        </div>
        <div class="pyramid-row">
          <span>Dip Nota</span>
          <div>${item.baseNotes}</div>
        </div>
        <div class="pyramid-row">
          <span>${item.category === 'essence' ? 'Şişe İçi Öz' : 'Kap &amp; Fitil'}</span>
          <div>${item.suspension}</div>
        </div>
      </div>

      <div class="detail-price-row">
        <span class="detail-price">${item.price}</span>
        <span class="detail-stock">${item.statusText}</span>
      </div>

      <button type="button" class="btn-primary btn-full" id="detailReserveBtn">${ctaLabel}</button>
    </div>
  `;

  document.getElementById('detailReserveBtn').addEventListener('click', () => {
    closeModals();
    openRequestModal(item.id);
  });

  detailModal.classList.add('open');
  detailModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

// Request Modal
function openRequestModal(preselectId = '') {
  requestFormView.hidden = false;
  requestSuccessView.hidden = true;
  formError.textContent = '';

  if (preselectId) {
    const item = CATALOG.find((x) => x.id === preselectId);
    if (item) {
      reqEdition.value = item.id;
      reqType.value = item.status === 'archived' ? 'Arşiv Bekleme Listesi' : 'Edisyon Ayırtma';
    }
  }

  requestModal.classList.add('open');
  requestModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModals() {
  [detailModal, requestModal].forEach((modal) => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  });
  document.body.style.overflow = '';
}

// Wire modal triggers
document.querySelectorAll('[data-open-request]').forEach((btn) => {
  btn.addEventListener('click', () => openRequestModal(btn.dataset.openRequest || ''));
});

document.querySelectorAll('[data-close-modal]').forEach((btn) => {
  btn.addEventListener('click', closeModals);
});

[detailModal, requestModal].forEach((backdrop) => {
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModals();
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModals();
});

// Reservation Form Submit
reservationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('reqName').value.trim();
  const contact = document.getElementById('reqContact').value.trim();
  const city = document.getElementById('reqCity').value.trim() || 'İstanbul';
  const note = document.getElementById('reqNote').value.trim();
  const quantity = document.getElementById('reqQuantity').value;
  const type = reqType.value;
  const selectedItem = CATALOG.find((x) => x.id === reqEdition.value);

  if (!name || !contact) {
    formError.textContent = 'Lütfen ad soyad ve iletişim bilgilerinizi eksiksiz giriniz.';
    return;
  }

  formError.textContent = '';
  const code = `LN-2026-${String(Math.floor(1000 + Math.random() * 9000))}`;

  receiptCode.textContent = code;
  receiptEdition.textContent = selectedItem
    ? `${selectedItem.name} (${selectedItem.edition}) × ${quantity}`
    : 'Özel Talep';
  receiptName.textContent = `${name} · ${city}`;

  const waText = encodeURIComponent(
    `Merhaba Leyl-ü Nehar Atölyesi,\n\n` +
      `Referans: ${code}\n` +
      `Talep Türü: ${type}\n` +
      `Edisyon: ${selectedItem ? `${selectedItem.name} (${selectedItem.edition})` : ''}\n` +
      `Adet: ${quantity}\n` +
      `Ad Soyad: ${name}\n` +
      `Şehir: ${city}\n` +
      (note ? `Not: ${note}\n` : '') +
      `\nEdisyon teyidi için dönüşünüzü rica ederim.`
  );
  whatsappLink.href = `https://wa.me/?text=${waText}`;

  requestFormView.hidden = true;
  requestSuccessView.hidden = false;
});

resetRequestBtn.addEventListener('click', () => {
  reservationForm.reset();
  requestFormView.hidden = false;
  requestSuccessView.hidden = true;
});

// Init
renderEssences('all');
renderCandles();
initCraftInspector();
populateEditionSelect();
