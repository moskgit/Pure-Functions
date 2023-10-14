function removeLastNumber(array){
  const arr = [...array];
  if(arr.length === 0){
    return arr;
  }else{
    arr.pop();
    return arr;
  }
}

module.exports = removeLastNumber;