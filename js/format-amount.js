/**
 * Regular implemented
 */
formatNumber = n => {
  const b = parseInt(n).toString();
  const len = b.length;

  if (len <= 3) {
    return b;
  }

  const r = len % 3;

  return r > 0
    ? b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(",")
    : b.slice(r, len).match(/\d{3}/g).join(",");
}

/**
 * while implemented
 * @param {*} str 
 * @param {*} step 
 */
const split3len = (str = '', step = 3) => {
  let str1 = str.toString()
  let isMinus = false // 负数
  if (str.startsWith('-')) {
    str1 = str.replace('-', '')
    isMinus = true
  }
  if (str1.length <= step) {
    return str
  }

  const reslut = []
  let num = 0
  let end = str1.length
  let start = end - step

  while (start > -step && reslut.unshift(str1.substring(start, end))) {
    num += 1
    end = str1.length - num * step
    start = end - step
  }

  return (isMinus ? '-' : '') + reslut.join(',')
}
