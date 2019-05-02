Array.prototype.sort2 = function (fn) {
  for (let i = 0, l = this.length - 1; i < l; i++) {
    for (let j = 0; j < l - i; j++) {
      if (fn(this[j], this[j + 1]) > 0) {
        let tmp

        tmp = this[j]
        this[j] = this[j + 1]
        this[j + 1] = tmp
      }
    }
  }

  return this
}


let arr2 = [1, 5, 6, 4, 5, 2, 3, 10, 0, 19, 8]

console.log(arr2.sort2((a, b) => a - b))
console.log(arr2.sort2((a, b) => b - a))
