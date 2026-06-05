const products = {
  shelf: {
    id: "shelf",
    name: "Shelf",
    description: "适合层架、展示架和开放式金属结构件。",
    basePrice: 198,
  },
  box: {
    id: "box",
    name: "Box",
    description: "适合金属盒体、设备外壳和封闭式零件。",
    basePrice: 176,
  },
};

const colors = [
  {
    id: "industrial-black",
    name: "Industrial Black",
    meta: "深黑 · 哑光",
    price: 0,
    base: "#131313",
    dark: "#060606",
    light: "#2b2b2b",
  },
  {
    id: "gunmetal-grey",
    name: "Gunmetal Grey",
    meta: "金属灰",
    price: 12,
    base: "#6b727b",
    dark: "#3c434a",
    light: "#93a0ab",
  },
  {
    id: "signal-white",
    name: "Signal White",
    meta: "工业白",
    price: 8,
    base: "#dfe5ea",
    dark: "#aab3bb",
    light: "#f6fafc",
  },
  {
    id: "safety-red",
    name: "Safety Red",
    meta: "高识别度",
    price: 18,
    base: "#be2e2d",
    dark: "#7c1515",
    light: "#e15a52",
  },
  {
    id: "ocean-blue",
    name: "Ocean Blue",
    meta: "科技感",
    price: 18,
    base: "#234d96",
    dark: "#132c5b",
    light: "#4d78c9",
  },
  {
    id: "rose-gold",
    name: "Rose Gold",
    meta: "高级金属感",
    price: 26,
    base: "#c67f67",
    dark: "#7f4d40",
    light: "#e7aa95",
  },
];

const state = {
  productId: null,
  finish: "color",
  colorId: colors[0].id,
  qty: 1,
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
  colorGrid.innerHTML = colors
    .map(
      (color) => `
        <button
          class="swatch${color.id === state.colorId ? " is-active" : ""}"
          type="button"
          data-color="${color.id}"
          style="--swatch-base: ${color.base}; --swatch-dark: ${color.dark}; --swatch-light: ${color.light}; --swatch-text: ${contrastText(color.base)};"
        >
          <span class="swatch-name">${color.name}</span>
          <span class="swatch-meta">${color.meta}</span>
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
    state.finish === "color" ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.08)",
  );
  document.documentElement.style.setProperty(
    "--finish-opacity",
    state.finish === "color" ? "0.28" : "0.1",
  );
  document.documentElement.style.setProperty(
    "--shelf-base",
    state.finish === "color" ? color.light : "#b7bcc3",
  );
  document.documentElement.style.setProperty(
    "--shelf-dark",
    state.finish === "color" ? color.dark : "#6a7280",
  );
  document.documentElement.style.setProperty(
    "--shelf-light",
    state.finish === "color" ? color.base : "#f2f5f8",
  );
}

function updateSelectionStyles() {
  document.querySelectorAll("[data-finish]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.finish === state.finish);
  });

  document.querySelectorAll("[data-color]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.color === state.colorId);
  });
}

function updatePreviewShape() {
  previewShell.dataset.product = state.productId;
}

function calcPrice() {
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
  if (!state.productId) return;

  const data = calcPrice();
  const isColorMode = state.finish === "color";

  qtyLabel.textContent = `${state.qty} pcs`;
  selectedProductLabel.textContent = data.product.name;
  selectedModeLabel.textContent = isColorMode ? "Metal + color" : "Metal only";
  previewTitle.textContent = `${data.product.name} / ${isColorMode ? "Metal + color" : "Metal only"}`;
  productLabel.textContent = data.product.name;
  layerLabel.textContent = isColorMode ? "Metal + color" : "Metal only";
  finishChip.textContent = isColorMode ? "Color finish" : "Metal finish";
  priceValue.textContent = money(data.total);

  if (isColorMode) {
    priceNote.textContent = "已启用颜色涂层，颜色和数量会影响最终报价。";
    colorGroup.hidden = false;
  } else {
    priceNote.textContent = "当前为纯金属方案，不叠加颜色费用。";
    colorGroup.hidden = true;
  }

  breakdown.innerHTML = `
    <div><span>Product base</span><strong>${money(data.product.basePrice)}</strong></div>
    <div><span>Finish</span><strong>${money(data.finishFee)}</strong></div>
    <div><span>Color</span><strong>${money(isColorMode ? data.color.price : 0)}</strong></div>
    <div><span>Setup fee</span><strong>${money(data.setupFee)}</strong></div>
    <div><span>Volume discount</span><strong>- ${money(data.discount)}</strong></div>
  `;

  setTheme(data.product, isColorMode ? data.color : colors[0]);
  updateSelectionStyles();
  updatePreviewShape();
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

const hash = window.location.hash.replace("#", "");
if (hash === "shelf" || hash === "box") {
  showConfigurator(hash);
} else {
  showLanding();
}

buildColorGrid();
updateSelectionStyles();
if (state.productId) {
  updateUI();
}
