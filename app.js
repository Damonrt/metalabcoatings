const products = {
  shelf: {
    id: "shelf",
    basePrice: 198,
    names: {
      en: "Shelf",
      "zh-Hans": "层架",
      "zh-Hant": "層架",
    },
    descriptions: {
      en: "Best for racks, display frames, and open metal structures.",
      "zh-Hans": "适合层架、展示架和开放式金属结构件。",
      "zh-Hant": "適合層架、展示架和開放式金屬結構件。",
    },
  },
  box: {
    id: "box",
    basePrice: 176,
    names: {
      en: "Box",
      "zh-Hans": "盒体",
      "zh-Hant": "盒體",
    },
    descriptions: {
      en: "Best for metal enclosures, housings, and closed parts.",
      "zh-Hans": "适合金属盒体、设备外壳和封闭式零件。",
      "zh-Hant": "適合金屬盒體、設備外殼和封閉式零件。",
    },
  },
};

const colors = [
  {
    id: "industrial-black",
    names: {
      en: "Industrial Black",
      "zh-Hans": "工业黑",
      "zh-Hant": "工業黑",
    },
    metas: {
      en: "Deep black · matte",
      "zh-Hans": "深黑 · 哑光",
      "zh-Hant": "深黑 · 消光",
    },
    price: 0,
    base: "#131313",
    dark: "#060606",
    light: "#2b2b2b",
  },
  {
    id: "gunmetal-grey",
    names: {
      en: "Gunmetal Grey",
      "zh-Hans": "枪灰",
      "zh-Hant": "槍灰",
    },
    metas: {
      en: "Metal grey",
      "zh-Hans": "金属灰",
      "zh-Hant": "金屬灰",
    },
    price: 12,
    base: "#6b727b",
    dark: "#3c434a",
    light: "#93a0ab",
  },
  {
    id: "signal-white",
    names: {
      en: "Signal White",
      "zh-Hans": "信号白",
      "zh-Hant": "訊號白",
    },
    metas: {
      en: "Industrial white",
      "zh-Hans": "工业白",
      "zh-Hant": "工業白",
    },
    price: 8,
    base: "#dfe5ea",
    dark: "#aab3bb",
    light: "#f6fafc",
  },
  {
    id: "safety-red",
    names: {
      en: "Safety Red",
      "zh-Hans": "安全红",
      "zh-Hant": "安全紅",
    },
    metas: {
      en: "High visibility",
      "zh-Hans": "高识别度",
      "zh-Hant": "高識別度",
    },
    price: 18,
    base: "#be2e2d",
    dark: "#7c1515",
    light: "#e15a52",
  },
  {
    id: "ocean-blue",
    names: {
      en: "Ocean Blue",
      "zh-Hans": "海洋蓝",
      "zh-Hant": "海洋藍",
    },
    metas: {
      en: "Tech-inspired",
      "zh-Hans": "科技感",
      "zh-Hant": "科技感",
    },
    price: 18,
    base: "#234d96",
    dark: "#132c5b",
    light: "#4d78c9",
  },
  {
    id: "rose-gold",
    names: {
      en: "Rose Gold",
      "zh-Hans": "玫瑰金",
      "zh-Hant": "玫瑰金",
    },
    metas: {
      en: "Premium metallic",
      "zh-Hans": "高级金属感",
      "zh-Hant": "高級金屬感",
    },
    price: 26,
    base: "#c67f67",
    dark: "#7f4d40",
    light: "#e7aa95",
  },
];

const translations = {
  en: {
    htmlLang: "en",
    title: "Metalab Order Studio",
    metaDescription:
      "Select shelf or box, choose metal only or metal + color, and preview live pricing with multilingual support.",
    brandEyebrow: "Powder Coating Ordering",
    brandTitle: "Metalab Order Studio",
    navProducts: "Products",
    navConfig: "Configure",
    navContact: "Contact",
    landingStep: "Step 1",
    landingTitle: "Pick a product, then open its dedicated page",
    landingCopy:
      "Start with two product types for now: Shelf and Box. Pick a product, enter its dedicated page, choose metal only or metal plus color, then preview the finish and pricing live.",
    shelfName: "Shelf",
    shelfCopy: "Best for racks, display frames, and open metal structures.",
    boxName: "Box",
    boxCopy: "Best for metal enclosures, housings, and closed parts.",
    backToProducts: "← Back to products",
    previewEyebrow: "Dedicated page preview",
    previewProductLabel: "Product",
    previewChoiceLabel: "Current choice",
    finishHeading: "2. Choose finish direction",
    finishHint: "Finish",
    metalOnlyTitle: "Metal only",
    metalOnlyCopy: "Keep the raw metal look with no added color.",
    metalColorTitle: "Metal + color",
    metalColorCopy: "Choose a metal product first, then layer color coating on top.",
    colorHeading: "3. Choose color",
    colorHint: "Color",
    qtyHeading: "4. Quantity",
    qtyHint: "Qty",
    liveQuote: "Live quote",
    priceNoteLanding: "Pick a product first, then choose a finish direction.",
    priceNoteColor: "Color coating is enabled. The color and quantity affect the final quote.",
    priceNoteMetal: "This is a metal-only option, so there is no color coating fee.",
    quoteBtn: "Generate quote",
    orderBtn: "Add to order",
    footerTitle: "Metalab Coatings",
    footerCopy:
      "Start with a product, choose whether to add color, and finish with a live quote. We can extend this later with uploads, approvals, and payment.",
    quantityUnit: "pcs",
    productBase: "Product base",
    finishFee: "Finish",
    colorFee: "Color",
    setupFee: "Setup fee",
    volumeDiscount: "Volume discount",
    colorFinishChip: "Color finish",
    metalFinishChip: "Metal finish",
    metalOnlyLabel: "Metal only",
    metalColorLabel: "Metal + color",
    quoteLabel: "CAD",
    languageName: "English",
    htmlTitleSuffix: " - English",
  },
  "zh-Hans": {
    htmlLang: "zh-CN",
    title: "Metalab 下单工作台",
    metaDescription: "先选择 shelf 或 box，再选择只做金属或金属加颜色，并实时查看价格变化。",
    brandEyebrow: "粉末喷涂下单",
    brandTitle: "Metalab 下单工作台",
    navProducts: "产品",
    navConfig: "配置",
    navContact: "联系",
    landingStep: "步骤 1",
    landingTitle: "先选产品，再进入专属页面",
    landingCopy:
      "当前先做两类产品：Shelf 和 Box。先选产品，进入对应页面，再选择只做金属或金属加颜色，最后实时查看颜色和价格变化。",
    shelfName: "层架",
    shelfCopy: "适合层架、展示架和开放式金属结构件。",
    boxName: "盒体",
    boxCopy: "适合金属盒体、设备外壳和封闭式零件。",
    backToProducts: "← 返回产品选择",
    previewEyebrow: "专属页面预览",
    previewProductLabel: "产品",
    previewChoiceLabel: "当前选择",
    finishHeading: "2. 选择工艺方向",
    finishHint: "工艺",
    metalOnlyTitle: "只要金属制品",
    metalOnlyCopy: "保留金属质感，不加颜色。",
    metalColorTitle: "金属制品 + 颜色",
    metalColorCopy: "先选金属制品，再叠加颜色涂层。",
    colorHeading: "3. 选择颜色",
    colorHint: "颜色",
    qtyHeading: "4. 数量",
    qtyHint: "数量",
    liveQuote: "实时报价",
    priceNoteLanding: "先选产品，再选工艺方向。",
    priceNoteColor: "已启用颜色涂层，颜色和数量会影响最终报价。",
    priceNoteMetal: "当前为纯金属方案，不叠加颜色费用。",
    quoteBtn: "生成报价单",
    orderBtn: "添加到订单",
    footerTitle: "Metalab Coatings",
    footerCopy:
      "先选产品，再选是否加颜色，最后完成实时报价。后续可以继续接上传图纸、审批和支付流程。",
    quantityUnit: "件",
    productBase: "产品基础价",
    finishFee: "工艺费",
    colorFee: "颜色费",
    setupFee: "起订设置费",
    volumeDiscount: "批量折扣",
    colorFinishChip: "颜色工艺",
    metalFinishChip: "金属工艺",
    metalOnlyLabel: "只做金属",
    metalColorLabel: "金属加颜色",
    quoteLabel: "加币",
    languageName: "简体中文",
    htmlTitleSuffix: " - 简体中文",
  },
  "zh-Hant": {
    htmlLang: "zh-TW",
    title: "Metalab 下單工作台",
    metaDescription: "先選擇 shelf 或 box，再選擇只做金屬或金屬加顏色，並即時查看價格變化。",
    brandEyebrow: "粉末噴塗下單",
    brandTitle: "Metalab 下單工作台",
    navProducts: "產品",
    navConfig: "配置",
    navContact: "聯絡",
    landingStep: "步驟 1",
    landingTitle: "先選產品，再進入專屬頁面",
    landingCopy:
      "目前先做兩類產品：Shelf 和 Box。先選產品，進入對應頁面，再選擇只做金屬或金屬加顏色，最後即時查看顏色和價格變化。",
    shelfName: "層架",
    shelfCopy: "適合層架、展示架和開放式金屬結構件。",
    boxName: "盒體",
    boxCopy: "適合金屬盒體、設備外殼和封閉式零件。",
    backToProducts: "← 返回產品選擇",
    previewEyebrow: "專屬頁面預覽",
    previewProductLabel: "產品",
    previewChoiceLabel: "目前選擇",
    finishHeading: "2. 選擇工藝方向",
    finishHint: "工藝",
    metalOnlyTitle: "只要金屬製品",
    metalOnlyCopy: "保留金屬質感，不加顏色。",
    metalColorTitle: "金屬製品 + 顏色",
    metalColorCopy: "先選金屬製品，再疊加顏色塗層。",
    colorHeading: "3. 選擇顏色",
    colorHint: "顏色",
    qtyHeading: "4. 數量",
    qtyHint: "數量",
    liveQuote: "即時報價",
    priceNoteLanding: "先選產品，再選工藝方向。",
    priceNoteColor: "已啟用顏色塗層，顏色和數量會影響最終報價。",
    priceNoteMetal: "目前為純金屬方案，不另外加顏色費用。",
    quoteBtn: "產生報價單",
    orderBtn: "加入訂單",
    footerTitle: "Metalab Coatings",
    footerCopy:
      "先選產品，再選是否加顏色，最後完成即時報價。之後還可以接上傳圖紙、審批與付款流程。",
    quantityUnit: "件",
    productBase: "產品基礎價",
    finishFee: "工藝費",
    colorFee: "顏色費",
    setupFee: "起訂設定費",
    volumeDiscount: "批量折扣",
    colorFinishChip: "顏色工藝",
    metalFinishChip: "金屬工藝",
    metalOnlyLabel: "只做金屬",
    metalColorLabel: "金屬加顏色",
    quoteLabel: "加幣",
    languageName: "繁體中文",
    htmlTitleSuffix: " - 繁體中文",
  },
};

const state = {
  productId: null,
  finish: "color",
  colorId: colors[0].id,
  qty: 1,
  lang: localStorage.getItem("metalab-lang") || "en",
};

const landingView = document.getElementById("landingView");
const configView = document.getElementById("configurator");
const backToProducts = document.getElementById("backToProducts");
const colorGroup = document.getElementById("colorGroup");
const colorGrid = document.getElementById("colorGrid");
const qtyInput = document.getElementById("qtyInput");
const qtyLabel = document.getElementById("qtyLabel");
const priceValue = document.getElementById("priceValue");
const priceNote = document.getElementById("priceNote");
const breakdown = document.getElementById("breakdown");
const previewTitle = document.getElementById("previewTitle");
const productLabel = document.getElementById("productLabel");
const layerLabel = document.getElementById("layerLabel");
const finishChip = document.getElementById("finishChip");
const selectedProductLabel = document.getElementById("selectedProductLabel");
const selectedModeLabel = document.getElementById("selectedModeLabel");
const previewShell = document.getElementById("previewShell");

const staticBindings = {
  brandEyebrow: document.getElementById("brandEyebrow"),
  brandTitle: document.getElementById("brandTitle"),
  navProducts: document.getElementById("navProducts"),
  navConfig: document.getElementById("navConfig"),
  navContact: document.getElementById("navContact"),
  landingStep: document.getElementById("landingStep"),
  landingTitle: document.getElementById("landingTitle"),
  landingCopy: document.getElementById("landingCopy"),
  shelfName: document.getElementById("shelfName"),
  shelfCopy: document.getElementById("shelfCopy"),
  boxName: document.getElementById("boxName"),
  boxCopy: document.getElementById("boxCopy"),
  backToProducts,
  previewEyebrow: document.getElementById("previewEyebrow"),
  previewProductLabel: document.getElementById("previewProductLabel"),
  previewChoiceLabel: document.getElementById("previewChoiceLabel"),
  finishHeading: document.getElementById("finishHeading"),
  finishHint: document.getElementById("finishHint"),
  metalOnlyTitle: document.getElementById("metalOnlyTitle"),
  metalOnlyCopy: document.getElementById("metalOnlyCopy"),
  metalColorTitle: document.getElementById("metalColorTitle"),
  metalColorCopy: document.getElementById("metalColorCopy"),
  colorHeading: document.getElementById("colorHeading"),
  colorHint: document.getElementById("colorHint"),
  qtyHeading: document.getElementById("qtyHeading"),
  qtyHint: document.getElementById("qtyHint"),
  priceHint: document.getElementById("priceHint"),
  quoteBtn: document.getElementById("quoteBtn"),
  orderBtn: document.getElementById("orderBtn"),
  footerTitle: document.getElementById("footerTitle"),
  footerCopy: document.getElementById("footerCopy"),
};

function money(value) {
  return `CAD ${value.toFixed(2)}`;
}

function pickById(list, id) {
  return list.find((item) => item.id === id);
}

function contrastText(hex) {
  const normalized = hex.replace("#", "");
  const value =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => char + char)
          .join("")
      : normalized;

  const r = Number.parseInt(value.slice(0, 2), 16);
  const g = Number.parseInt(value.slice(2, 4), 16);
  const b = Number.parseInt(value.slice(4, 6), 16);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.62 ? "#0b1018" : "#f4f7fb";
}

function getCopy(item, key, lang) {
  const value = item?.[key]?.[lang] ?? item?.[key]?.en ?? "";
  return value;
}

function currentLocale() {
  return translations[state.lang] ?? translations.en;
}

function applyStaticText() {
  const locale = currentLocale();
  document.documentElement.lang = locale.htmlLang;
  document.title = `${locale.title}${locale.htmlTitleSuffix}`;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", locale.metaDescription);

  Object.entries(staticBindings).forEach(([key, element]) => {
    if (!element) return;
    const value = locale[key];
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.lang);
    button.setAttribute("aria-pressed", String(button.dataset.lang === state.lang));
  });

  buildColorGrid();
}

function showConfigurator(productId) {
  state.productId = productId;
  landingView.hidden = true;
  configView.hidden = false;
  updateUI();
  window.location.hash = `#${productId}`;
}

function showLanding() {
  state.productId = null;
  landingView.hidden = false;
  configView.hidden = true;
  window.location.hash = "#products";
}

function buildColorGrid() {
  const lang = state.lang;
  colorGrid.innerHTML = colors
    .map(
      (color) => `
        <button
          class="swatch${color.id === state.colorId ? " is-active" : ""}"
          type="button"
          data-color="${color.id}"
          style="--swatch-base: ${color.base}; --swatch-dark: ${color.dark}; --swatch-light: ${color.light}; --swatch-text: ${contrastText(color.base)};"
        >
          <span class="swatch-name">${getCopy(color, "names", lang)}</span>
          <span class="swatch-meta">${getCopy(color, "metas", lang)}</span>
        </button>
      `,
    )
    .join("");
}

function setTheme(product, color) {
  const base = product.id === "shelf" ? color.light : color.base;
  const dark = product.id === "shelf" ? color.base : color.dark;
  const light = product.id === "shelf" ? "#f7fafc" : color.light;

  document.documentElement.style.setProperty("--box-base", base);
  document.documentElement.style.setProperty("--box-dark", dark);
  document.documentElement.style.setProperty("--box-light", light);
  document.documentElement.style.setProperty(
    "--clear",
    state.finish === "color" ? "rgba(255,255,255,0.32)" : "rgba(255,255,255,0.16)",
  );
  document.documentElement.style.setProperty(
    "--finish-opacity",
    state.finish === "color" ? "0.28" : "0.1",
  );
  document.documentElement.style.setProperty(
    "--shelf-base",
    state.finish === "color" ? color.light : "#d5dae0",
  );
  document.documentElement.style.setProperty(
    "--shelf-dark",
    state.finish === "color" ? color.dark : "#8d97a6",
  );
  document.documentElement.style.setProperty(
    "--shelf-light",
    state.finish === "color" ? color.base : "#fbfcfd",
  );
}

function updateSelectionStyles() {
  document.querySelectorAll("[data-finish]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.finish === state.finish);
  });

  document.querySelectorAll("[data-color]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.color === state.colorId);
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.lang);
    button.setAttribute("aria-pressed", String(button.dataset.lang === state.lang));
  });
}

function updatePreviewShape() {
  previewShell.dataset.product = state.productId;
}

function calcPrice() {
  const locale = currentLocale();
  const product = pickById(Object.values(products), state.productId);
  const color = pickById(colors, state.colorId);
  const finishFee = state.finish === "color" ? 38 : 0;
  const colorFee = state.finish === "color" ? color.price : 0;
  const setupFee = state.qty < 5 ? 24 : 0;
  const volumeDiscount = state.qty >= 20 ? 0.08 : state.qty >= 10 ? 0.05 : 0;
  const unit = product.basePrice + finishFee + colorFee;
  const subtotal = unit * state.qty + setupFee;
  const discount = subtotal * volumeDiscount;
  const total = subtotal - discount;

  return {
    locale,
    product,
    color,
    finishFee,
    unit,
    setupFee,
    subtotal,
    discount,
    total,
  };
}

function updateUI() {
  const locale = currentLocale();
  if (state.productId) {
    const data = calcPrice();
    const isColorMode = state.finish === "color";

    qtyLabel.textContent = `${state.qty} ${locale.quantityUnit}`;
    selectedProductLabel.textContent = getCopy(data.product, "names", state.lang);
    selectedModeLabel.textContent = isColorMode ? locale.metalColorLabel : locale.metalOnlyLabel;
    previewTitle.textContent = `${getCopy(data.product, "names", state.lang)} / ${
      isColorMode ? locale.metalColorLabel : locale.metalOnlyLabel
    }`;
    productLabel.textContent = getCopy(data.product, "names", state.lang);
    layerLabel.textContent = isColorMode ? locale.metalColorLabel : locale.metalOnlyLabel;
    finishChip.textContent = isColorMode ? locale.colorFinishChip : locale.metalFinishChip;
    priceValue.textContent = money(data.total);

    if (isColorMode) {
      priceNote.textContent = locale.priceNoteColor;
      colorGroup.hidden = false;
    } else {
      priceNote.textContent = locale.priceNoteMetal;
      colorGroup.hidden = true;
    }

    breakdown.innerHTML = `
      <div><span>${locale.productBase}</span><strong>${money(data.product.basePrice)}</strong></div>
      <div><span>${locale.finishFee}</span><strong>${money(data.finishFee)}</strong></div>
      <div><span>${locale.colorFee}</span><strong>${money(isColorMode ? data.color.price : 0)}</strong></div>
      <div><span>${locale.setupFee}</span><strong>${money(data.setupFee)}</strong></div>
      <div><span>${locale.volumeDiscount}</span><strong>- ${money(data.discount)}</strong></div>
    `;

    setTheme(data.product, isColorMode ? data.color : colors[0]);
    updateSelectionStyles();
    updatePreviewShape();
    return;
  }

  priceNote.textContent = locale.priceNoteLanding;
  buildColorGrid();
  updateSelectionStyles();
}

document.querySelectorAll("[data-product]").forEach((button) => {
  button.addEventListener("click", () => {
    showConfigurator(button.dataset.product);
  });
});

backToProducts.addEventListener("click", showLanding);

document.querySelectorAll("[data-finish]").forEach((button) => {
  button.addEventListener("click", () => {
    state.finish = button.dataset.finish;
    updateUI();
  });
});

colorGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-color]");
  if (!button) return;
  state.colorId = button.dataset.color;
  updateUI();
});

qtyInput.addEventListener("input", (event) => {
  state.qty = Number(event.target.value);
  updateUI();
});

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    localStorage.setItem("metalab-lang", state.lang);
    applyStaticText();
    updateUI();
  });
});

const hash = window.location.hash.replace("#", "");
if (hash === "shelf" || hash === "box") {
  showConfigurator(hash);
} else {
  showLanding();
}

applyStaticText();
updateSelectionStyles();
if (state.productId) {
  updateUI();
} else {
  priceNote.textContent = currentLocale().priceNoteLanding;
}
