const fs = require("fs");

const fileName = process.argv[2];

const bubbleSort = (data) => {
  let comparaison = 0;

  for (let loop = data.length - 1; loop >= 1; loop--) {
    let isSorted = true;
    for (let pos = 0; pos <= loop - 1; pos++) {
      if (data[pos + 1] < data[pos]) {
        let tmp = data[pos];
        data[pos] = data[pos + 1];
        data[pos + 1] = tmp;
        isSorted = false;
      }
      comparaison++;
    }
    if (isSorted) {
      console.log(data, comparaison);
      return;
    }
  }
  console.log(data, comparaison);
};

const insertSort = (data) => {
  let comparaison = 0;

  for (let i = 1; i <= data.length - 1; i++) {
    let current = data[i];
    let j;
    for (j = i; j >= 0 && data[j - 1] > current; j--) {
      data[j] = data[j - 1];
      comparaison++;
    }
    data[j] = current;
  }
  console.log(data, comparaison);
};

const selectionSort = (data) => {
  let comparaison = 0;

  for (let i = 0; i <= data.length - 2; i++) {
    let min = i;
    for (let j = i + 1; j <= data.length - 1; j++) {
      if (data[j] < data[min]) min = j;
      comparaison++;
    }
    if (min !== i) {
      let tmp = data[i];
      data[i] = data[min];
      data[min] = tmp;
    }
  }
  console.log(data, comparaison);
};

const quickSort = (data) => {
  let comparaison = 0;

  for (let i = 0; i <= data.length - 2; i++) {
    let min = i;
    for (let j = i + 1; j <= data.length - 1; j++) {
      if (data[j] < data[min]) min = j;
      comparaison++;
    }
    if (min !== i) {
      let tmp = data[i];
      data[i] = data[min];
      data[min] = tmp;
    }
  }
  console.log(data, comparaison);
};

const fusion = (a, b) => {
  comparaison++;
  if (!a.length) return b;
  if (!b.length) return a;
  if (a[0] < b[0]) return [a[0], ...fusion(a.slice(1, a.length), b)];
  return [b[0], ...fusion(a, b.slice(1, b.length))];
};
let comparaison = 0;

const fusionSort = (data) => {
  if (data.length <= 1) return data;
  return fusion(
    fusionSort(data.slice(0, data.length / 2)),
    fusionSort(data.slice(data.length / 2, data.length))
  );
  console.log(data, comparaison);
};

// Méthode asynchrone
fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }
  const unsorted = data.split(" ").map((n) => +n);
  console.log("data:", unsorted);
  bubbleSort([...unsorted]);
  // insertSort([...unsorted]);
  // selectionSort([...unsorted]);
  quickSort([...unsorted]);
  a = fusionSort([...unsorted]);
  console.log(a, comparaison);
});
