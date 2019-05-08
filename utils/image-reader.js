/** 图片读取，转换base64 */
function imageReader(imgFiles) {
  console.log('files ->', imgFiles)
  return new Promise((resolve, reject) => {
    let idx = 0
      , res = {
        FileList: imgFiles, // input 原生读取的 FileList
        FileArr: []         // 读取结果
      }
      , reader = new FileReader()
      , readFile = file => {
        reader.onerror = err => console.warn(`--------文件读取出错\n`, err, `\n--------`)
        reader.onprogress = ev => console.log(`${~~(ev.loaded / ev.total * 100)} % `)
        reader.onload = ev => {
          res.FileArr.push({
            base64: ev.target.result,          // 图片base64编码
            file,                              // 图片本身
            index: idx,
            lastModified: file.lastModified,
            name: file.name,
            size: file.size,
            type: file.type
          })
          idx++
          if (imgFiles[idx]) {
            readFile(imgFiles[idx])
          } else {
            resolve(res)
          }
        }
        reader.readAsDataURL(file)
      }

    imgFiles.length
      ? readFile(imgFiles[idx]) // 单个
      : readFile(imgFiles)      // 多图
  })
}