const avoidRoundOff = (num) => {
  num = Math.trunc(num * 100) / 100
  return num.toFixed(2).replace(/\.?0*$/, '');
}

export const formatNumber = (num) => {
  if (num === "--") return num
  if (num >= 1000000000) {
    num /= 1000000000;
    num = avoidRoundOff(num)
    return num + "B";
  } else if (num >= 1000000) {
    num /= 1000000;
    num = avoidRoundOff(num)
    return num + "M";
  } else if (num >= 1000) {
    num /= 1000;
    num = avoidRoundOff(num)
    return num + "k";
  }
  return avoidRoundOff(num);
};