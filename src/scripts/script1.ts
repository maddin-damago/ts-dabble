document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("click-me") as HTMLElement;
  btn.addEventListener("click", () => {
    let kontostand = 1250;

    if (kontostand > 1000) {
      console.log("Läuft bei Dir");
    } else if (kontostand === 0) {
      console.log("Musst diesen Monat wohl haushalten");
    } else if (kontostand < 0) {
      console.log("uiuiui");
    }

    const tempConverter = (temp: number, conversionTo: "C" | "F"): number => {
      if (conversionTo.toUpperCase() === "F") {
        return temp * 1.8 + 32;
      } else {
        return ((temp - 32) * 5) / 9;
      }
    };

    console.log(tempConverter(25, "F"));
    console.log(tempConverter(89, "C"));

    const obj = {
      fn: "Martin",
      ln: "G",
      adr: {
        str: "dsfsf",
        no: 4,
        aps: [1, 2, 2],
      },
    };

    console.table(obj);

    const sumTo100 = () => {
      let sum = 0;
      for (let i = 1; i <= 100; i++) {
        sum += i;
      }
      return sum;
    };

    const addVAT = (net: number) => {
      return net * 1.19;
    };

    const doArrayThings = () => {
      const arr = [12, 5, 8, 21, 3, 17, 10];
      arr.sort((a, b) => a - b);

      const sum = arr.reduce((acc, curr) => acc + curr, 0);
      console.log(sum);
      console.log(arr[arr.length - 1]);
      console.log(arr[0]);
      console.log((sum / arr.length).toFixed(2));
    };

    console.log(sumTo100());
    console.log(addVAT(100));
    doArrayThings();

    const betrag = 19.994; // 19.995 runden auf 20.00 €

    const formatiert = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(betrag);

    console.log(formatiert);

    let sauerstoff = 18.7;
    const optimum = 20.9;

    console.log(
      "Die Differenz zum Optimum von 20.9% sind: " +
        (optimum - sauerstoff).toFixed(2) +
        "%",
    );

    if (sauerstoff > 20) {
      console.log("Sauerstoff optimal");
    } else if (sauerstoff <= 20 && sauerstoff >= 19) {
      console.log("Sauerstoffversorgung beobachten");
    } else if (sauerstoff < 19 && sauerstoff >= 17) {
      console.log("WARNUNG: Sauerstoff niedrig");
    } else {
      console.log("NOTFALL!! Sauerstoffversorgunug kritisch!");
    }

    let tag = 3;

    switch (tag) {
      case 1:
        console.log("Montag");
        break;
      case 2:
        console.log("Dienstag");
        break;
      case 3:
        console.log("Mittwoch");
        break;
      default:
        console.log("Komisch, diesen Tag kenne ich nicht");
    }
  });
});
