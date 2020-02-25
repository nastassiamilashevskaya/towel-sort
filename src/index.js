
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix.length == 0){
    return [];
  }
  for (let i = 1; i < matrix.length; i += 2){
    let even = matrix[i];
    even = even.reverse();
    matrix[i] = even;
  }


  let result = matrix.flat();
  return result;
}
