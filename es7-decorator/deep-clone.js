/** 只适用于 JSON */
function deepClone(from, to) {
  // let _to = to || Object.prototype.toString.call(from) === '[object Array]' ? [] : {}
  let _to = to || {}

  for (var k in from) {
    if (typeof from[k] === 'object') {
      _to[k] = Object.prototype.toString.call(from[k]) === '[object Array]' ? [] : {}
      deepClone(from[k], _to[k])
    } else {
      _to[k] = from[k]
    }
  }

  return _to
}

const obj1 = { a: 123, b: [{ name: 'gogoda', age: 25 }], c: { count: 999 } }
const obj2 = deepClone(obj1)
const arr1 = [123, [{ name: 'gogoda', age: 25 }], { count: 999 }]
const arr2 = deepClone(arr1)

console.dir(obj2)
console.dir(arr2)
