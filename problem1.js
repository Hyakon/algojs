const data = [10, 15, 3, 7];
const k = 17;

// const data = [1, 8, 10, 21];
// const k = 19;

const containsSum = (data, k) => {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] + data[j] === k) return true;
    }
  }
  return false;
};

console.log(containsSum(data, k));
