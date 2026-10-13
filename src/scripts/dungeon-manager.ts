type InventarItem = {
  id: number;
  name: string;
  typ: "waffe" | "rüstung" | "trank" | "schmuck";
  wert: number;
  gewicht: number;
  seltenheit: "gewöhnlich" | "rar" | "episch" | "legendär";
};

let inventar: InventarItem[] = [
  {
    id: 1,
    name: "Eisenschwert",
    typ: "waffe",
    wert: 150,
    gewicht: 4,
    seltenheit: "gewöhnlich",
  },
  {
    id: 2,
    name: "Heiltrank",
    typ: "trank",
    wert: 50,
    gewicht: 1,
    seltenheit: "gewöhnlich",
  },
  {
    id: 3,
    name: "Drachenschild",
    typ: "rüstung",
    wert: 900,
    gewicht: 8,
    seltenheit: "episch",
  },
  {
    id: 4,
    name: "Magischer Ring",
    typ: "schmuck",
    wert: 1200,
    gewicht: 0.2,
    seltenheit: "legendär",
  },
  {
    id: 5,
    name: "Stahlschwert",
    typ: "waffe",
    wert: 250,
    gewicht: 6,
    seltenheit: "rar",
  },
  {
    id: 6,
    name: "Ausdauertrank",
    typ: "trank",
    wert: 50,
    gewicht: 1,
    seltenheit: "gewöhnlich",
  },
  {
    id: 7,
    name: "Holzschild",
    typ: "rüstung",
    wert: 200,
    gewicht: 3,
    seltenheit: "gewöhnlich",
  },
  {
    id: 8,
    name: "Lebensring",
    typ: "schmuck",
    wert: 600,
    gewicht: 0.2,
    seltenheit: "rar",
  },
  {
    id: 9,
    name: "Eisendolch",
    typ: "waffe",
    wert: 100,
    gewicht: 1,
    seltenheit: "gewöhnlich",
  },
  {
    id: 10,
    name: "Eisenhelm",
    typ: "rüstung",
    wert: 100,
    gewicht: 3,
    seltenheit: "gewöhnlich",
  },
  {
    id: 11,
    name: "Halskette Kupfer",
    typ: "schmuck",
    wert: 100,
    gewicht: 0.2,
    seltenheit: "gewöhnlich",
  },
  {
    id: 12,
    name: "Halskette Silber",
    typ: "schmuck",
    wert: 300,
    gewicht: 0.2,
    seltenheit: "rar",
  },
  {
    id: 13,
    name: "Stahlhelm",
    typ: "rüstung",
    wert: 200,
    gewicht: 4,
    seltenheit: "gewöhnlich",
  },
  {
    id: 14,
    name: "Unsichtbarkeitstrank",
    typ: "trank",
    wert: 800,
    gewicht: 1,
    seltenheit: "episch",
  },
];

const inventoryEL = document.getElementById("inventory") as HTMLElement;
const prevBtn = document.getElementById("prev") as HTMLButtonElement;
const nextBtn = document.getElementById("next") as HTMLButtonElement;
const filterButtons = document.querySelectorAll(".filter-btn");
const sortButtons = document.querySelectorAll(".sort-btn");
const totalValue = document.getElementById("total-value") as HTMLElement;
const totalWeight = document.getElementById("total-weight") as HTMLElement;
const playerGold = document.getElementById("total-gold") as HTMLElement;
const totalItems = document.getElementById("total-items") as HTMLElement;
const searchBar = document.getElementById("search-bar") as HTMLInputElement;

playerGold.textContent = "0 Gold";
let playerGoldAmount = 0;

document.addEventListener("DOMContentLoaded", () => {
  let pageStart = 0;
  let pageEnd = 4;

  render(inventar, pageStart, pageEnd);

  totalItems.innerText = inventar.length.toString() + " Items";

  prevBtn.addEventListener("click", () => {
    if (pageStart <= 0) {
      return;
    }
    pageStart -= 4;
    pageEnd -= 4;
    render(inventar, pageStart, pageEnd);
  });

  nextBtn.addEventListener("click", () => {
    if (pageEnd >= inventar.length) {
      return;
    }
    pageStart += 4;
    pageEnd += 4;
    render(inventar, pageStart, pageEnd);
  });

  filterButtons.forEach((b) => {
    b.addEventListener("click", () => {
      const filtered =
        b.textContent === "Alle"
          ? inventar
          : inventar.filter((i) => i.typ === b.textContent.toLowerCase());
      render(filtered);
    });
  });

  sortButtons.forEach((sb) => {
    sb.addEventListener("click", () => {
      if (sb.textContent === "Wert ⬇")
        render(inventar.sort((a, b) => b.wert - a.wert));
      if (sb.textContent === "Wert ⬆")
        render(inventar.sort((a, b) => a.wert - b.wert));
      if (sb.textContent === "Gewicht ⬇")
        render(inventar.sort((a, b) => b.gewicht - a.gewicht));
      if (sb.textContent === "Gewicht ⬆")
        render(inventar.sort((a, b) => a.gewicht - b.gewicht));
    });
  });

  searchBar.addEventListener("keyup", () => {
    const searchTerm = searchBar.value.toLowerCase();

    const updated = inventar.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm) ||
        item.typ.toLowerCase().includes(searchTerm) ||
        item.seltenheit.toLowerCase().includes(searchTerm)
      );
    });
    render(updated);
    totalItems.textContent = updated.length + " Items";
  });
});

function render(
  arrToRender: InventarItem[],
  pageStart?: number,
  pageEnd?: number,
) {
  inventoryEL.innerHTML = "";
  totalValue.innerHTML = "";
  totalWeight.innerHTML = "";

  if (pageStart! <= 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }

  if (pageEnd! > inventar.length - 1) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }

  arrToRender.slice(pageStart, pageEnd).forEach((item) => {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const spanType = document.createElement("span");
    const spanValue = document.createElement("span");
    const spanWeight = document.createElement("span");
    const spanRarity = document.createElement("span");
    const sellButton = document.createElement("button");
    const usePotionButton = document.createElement("button");

    const br1 = document.createElement("br");
    const br2 = document.createElement("br");
    const br3 = document.createElement("br");
    const br4 = document.createElement("br");

    h3.textContent = item.name;
    spanType.textContent = "Typ: " + item.typ;
    spanType.style.fontStyle = "italic";
    spanValue.textContent = "Wert: " + item.wert.toString() + " Gold";
    spanWeight.textContent = "Gewicht: " + item.gewicht.toString() + " kg";
    spanRarity.textContent = "Seltenheit: " + item.seltenheit.toString();
    sellButton.textContent = "Sell This Item";
    usePotionButton.textContent = "Use Potion";

    div.classList.add("item-card");
    sellButton.classList.add("sell-btn");
    usePotionButton.classList.add("potion-btn");

    sellButton.addEventListener("click", () => {
      playerGoldAmount += item.wert;
      playerGold.textContent = playerGoldAmount.toString() + " Gold";
      updateUI(arrToRender, item);
    });

    usePotionButton.addEventListener("click", () => {
      updateUI(arrToRender, item);
    });

    div.append(h3);
    div.append(spanType);
    div.append(br1);
    div.append(spanValue);
    div.append(br2);
    div.append(spanWeight);
    div.append(br3);
    div.append(spanRarity);
    div.append(br4);
    div.append(sellButton);

    if (item.typ === "trank") {
      div.append(usePotionButton);
    }

    inventoryEL.append(div);
  });

  const spanTotalValue = document.createElement("span");
  const spanTotalWeight = document.createElement("span");

  spanTotalValue.textContent =
    "Gesamtwert: " +
    arrToRender.reduce((acc, curr) => acc + curr.wert, 0).toString();
  totalValue.append(spanTotalValue);

  const tw = arrToRender.reduce((acc, curr) => acc + curr.gewicht, 0);

  spanTotalWeight.textContent = "Gesamtgewicht: " + tw.toString();
  totalWeight.append(spanTotalWeight);

  if (tw > 20) {
    spanTotalWeight.classList.add("red");
  }
}

function updateUI(arrToRender: InventarItem[], item: InventarItem) {
  const updated = arrToRender.filter((i) => i.id !== item.id);
  inventar = updated;
  totalItems.textContent = updated.length.toString() + "  Items";
  render(updated);
}
