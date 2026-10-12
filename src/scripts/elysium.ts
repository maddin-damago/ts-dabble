const systems = [
  {
    name: "Sauerstoffversorgung",
    status: "kritisch",
    energieverbrauch: 80,
    reparaturkosten: 1200,
  },
  {
    name: "Kantine",
    status: "normal",
    energieverbrauch: 30,
    reparaturkosten: 100,
  },
  {
    name: "Antrieb",
    status: "kritisch",
    energieverbrauch: 95,
    reparaturkosten: 5000,
  },
  {
    name: "Kommunikation",
    status: "gestört",
    energieverbrauch: 40,
    reparaturkosten: 800,
  },
];

const allSystems = document.getElementById("all-systems") as HTMLElement;
const criticalSystems = document.getElementById(
  "critical-systems",
) as HTMLElement;
const totalBudget = document.getElementById("total-budget") as HTMLElement;
const energyUsage = document.getElementById("energy-usage") as HTMLElement;

document.addEventListener("DOMContentLoaded", () => {
  systems.forEach((sys) => {
    const li = document.createElement("li");
    const sysName = document.createElement("span");
    const sysStatus = document.createElement("span");
    const br = document.createElement("br");
    const br2 = document.createElement("br");
    const btn = document.createElement("button");

    sysName.textContent = "SystemName: " + sys.name;
    sysStatus.textContent = "SystemStatus: " + sys.status;
    btn.textContent = "Reparieren";

    btn.classList.add("repair-button");

    if (sys.status === "kritisch") {
      li.classList.add("red");
    }
    if (sys.status === "gestört") {
      li.classList.add("orange");
    }

    let availableRepairBudget = 5000;

    btn.addEventListener("click", () => {
      if ((availableRepairBudget -= sys.reparaturkosten)) {
        alert("Das können wir uns nicht mehr leisten");
        return;
      }
      availableRepairBudget -= sys.reparaturkosten;
      sys.status = "normal";
      li.classList.remove("red");
      li.classList.remove("orange");
      sysStatus.textContent = "SystemStatus: " + sys.status;
    });

    li.append(sysName);
    li.append(br);
    li.append(sysStatus);
    li.append(br2);
    li.append(btn);

    allSystems.append(li);
  });

  const critSys = systems.filter((s) => s.status === "kritisch");

  critSys.forEach((sys) => {
    const li = document.createElement("li");
    const sysName = document.createElement("span");
    const sysStatus = document.createElement("span");
    const br = document.createElement("br");

    sysName.textContent = "SystemName: " + sys.name;
    sysStatus.textContent = "SystemStatus: " + sys.status;

    if (sys.status === "kritisch") {
      li.classList.add("red");
    }
    if (sys.status === "gestört") {
      li.classList.add("orange");
    }

    li.append(sysName);
    li.append(br);
    li.append(sysStatus);

    criticalSystems.append(li);
  });

  const totalBudgetSum = systems.reduce(
    (acc, curr) => acc + curr.reparaturkosten,
    0,
  );

  totalBudget.textContent = totalBudgetSum.toString() + " Starfleet Dollar";

  systems.forEach((sys) => {
    const li = document.createElement("li");
    const sysName = document.createElement("span");
    const sysEnergy = document.createElement("span");
    const br = document.createElement("br");

    sysName.textContent = "SystemName: " + sys.name;
    sysEnergy.textContent =
      "SystemStatus: " + sys.energieverbrauch + " Energiedingens";

    li.append(sysName);
    li.append(br);
    li.append(sysEnergy);

    energyUsage.append(li);
  });

  const amount = document.getElementById("amount") as HTMLElement;

  const countedStatuses: Record<string, number> = {};

  for (let sys of systems) {
    countedStatuses[sys.status] = (countedStatuses[sys.status] || 0) + 1;
  }

  console.log(countedStatuses);

  for (let cs in countedStatuses) {
    console.log(cs);

    const li = document.createElement("li");
    li.textContent = cs + ": " + countedStatuses[cs];
    amount.append(li);
  }
});
