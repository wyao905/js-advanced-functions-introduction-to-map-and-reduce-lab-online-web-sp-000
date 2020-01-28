// Your code here
function mapToNegativize(sourceArray) {
  let ret = []
  for(let element of sourceArray) {
    ret.push(element * (-1))
  }
  return ret
}