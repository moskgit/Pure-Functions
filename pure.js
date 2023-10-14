function pure(array){
  const arr = array.slice();

  //console.log(arr)
  if(arr.length == 0){
    return arr;
  }
}
//console.log(pure([]));
module.exports = pure;