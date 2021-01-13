const data = [3, 7, 8, 3, 6, 1];

const hasSunsetView = (data) => {
  let total = 1;
  for (let i = 0; i < data.length; i++) {
    let hasView = 0;
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] < data[j]) {
        break;
      } else if (j === data.length - 1) hasView++;
    }
    total += hasView;
  }
  return total;
};

const hasSunsetViewOpt = (data) => {
  let total = 1;
  let indexTaller = data.length - 1;
  for (let i = indexTaller - 1; i >= 0; i--) {
    let hasView = 0;
    if (data[i] > data[indexTaller]) {
      hasView = 1;
      indexTaller = i;
    }
    total += hasView;
  }
  return total;
};

console.log(hasSunsetView(data));
