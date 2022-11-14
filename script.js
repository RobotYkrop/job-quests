const quest1 = (dis, speed, reverse) => {
  let day = 0;
  let res = 0;
  while (res < dis) {
    if (res < dis) {
      res += speed;
      day += 0.5;
      if (res < dis) {
        res -= reverse;
        day += 0.5;
      }
    }
  }
  return day;
};

console.log(quest1(100, 50, 30)); // 3,5 дня

const hands = (n) => {
  let res = 0;
  for (let men = 1; men < n; men++) {
    res = res + men;
  }
  return res;
};

console.log(hands(10)) // 45 рукопожатий

const uniqueStrings = (str) => {
    let newArr = str.split(',')
    return [...new Set(newArr)].join()
}

console.log(uniqueStrings("кошка,собака,лошадь,корова,кошка"))