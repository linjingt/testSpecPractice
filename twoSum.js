const twoSum = (arr, target) => {
  let head = 0;
  let tail = arr.length - 1;

  if (arr[head] + arr[tail] < target){
    head++
    arr = arr.slice(1)
  } else if (arr[head] + arr[tail] > target){
    tail++
    arr = arr.slice(0, -1)
  } else {
    return [head, tail]
  }

  return [];

}

module.exports = twoSum
