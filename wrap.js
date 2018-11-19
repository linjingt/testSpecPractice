const wrap = (line, maxLen) => {
  const strArr = line.split(' ');
  let ans = '';
  if (line === '') return ans;

  let count = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (count + strArr[i].length < maxLen) {
      count = count + strArr[i].length + 1;
      ans = ans + strArr[i] + ' ';
    } else {
      ans = ans.slice(0, -1) + '\n' + strArr[i] + ' ';
      count = strArr[i].length;
    }
  }

  return ans.slice(0, -1);
};

module.exports = wrap;
