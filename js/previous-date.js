/**
 * 获取上个月同日期
 */
function getBothDate() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const today = date.getDate()
  const isJanunary = month === 0
  const preYear = isJanunary ? year - 1: year
  const preMonth = isJanunary ? 12 : month - 1
  const preToday = Math.min(today, new Date(preYear, preMonth, 0).getDate())
  const preDate = new Date(preYear, preMonth, preToday)

  return [date, preDate]
}
