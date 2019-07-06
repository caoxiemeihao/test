/** 只适用于 JSON */
function deepClone(from, to) {
  // let _to = to || Object.prototype.toString.call(from) === '[object Array]' ? [] : {}
  let _to = to || {}

  for (var k in from) {
    if (typeof from[k] === 'object') {
      _to[k] = Object.prototype.toString.call(from[k]) === '[object Array]' ? [] : {}
      let tmp = deepClone(from[k], _to[k])
      /**
       * tmp 会被不断的被 return 出栈给 _to，即不断栈内在层层组装，直到把 _to 装满，整个拷贝完成。
       * 这种不断 return 的拷贝不太好理解， 因为惯性思维认为 return 会打断程序，其实这个 return 的功能是出栈。
       */
      console.log(JSON.stringify(tmp))
    } else {
      _to[k] = from[k]
    }
  }

  return _to
}

const obj1 = { a: 123, b: [{ name: 'gogoda', age: 25 }], c: { count: 999 } }
const obj2 = deepClone(obj1)
debugger
const arr1 = [123, [{ name: 'gogoda', age: 25 }], { count: 999 }]
const arr2 = deepClone(arr1)

console.dir(obj2)
console.dir(arr2)
