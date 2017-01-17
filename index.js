function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var a = [1,2]
  a.forEach((element, index, array) => {
    callback(element)
  })
  return a
}

function doToArray(a, callback) {
  a.forEach((element,index,array) => {
    callback(array)
  })
}
