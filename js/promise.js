class Promise2 {
  constructor(cb) {
    this.success = []
    this.field = []
    this.status = 'pedding'
    this.successData
    this.fieldData

    cb(data => this.resolve(data), err => this.reject(err))
  }

  resolve(successData) {
    this.status = 'success'
    this.successData = successData
    this.handleSucc()
  }

  reject(fieldData) {
    this.status = 'field'
    this.fieldData = fieldData
    this.handleField()
  }

  then(succFu, errorFn) {
    if (this.status === 'pedding') {
      this.success.push(succFu)
      this.field.push(errorFn)
    } else if (this.status === 'success') {
      this.handleSucc()
    } else if (this.status === 'field') {
      this.handleField()
    }

    return this
  }

  handleSucc() {
    function succCb() {
      if (this.success.length) {
        this.successData = this.success.shift()(this.successData)
        succCb.call(this)
      }
    }
    succCb.call(this)
  }

  handleField() {
    function fieldCb() {
      if (this.field.length) {
        this.fieldData = this.field.shift()(this.fieldData)
        fieldCb.call(this)
      }
    }
    fieldCb.call(this)
  }
}

const p = new Promise2((res, rej) => {
  setTimeout(() => {
    res('11111111111111')
  }, 2000)
})

p.then((res) => {
  console.log(res)

  return '222222222222222'
}).then(res => {
  console.log(res)

  return '333333333333333'
}).then(res => {
  console.log(res)
})
