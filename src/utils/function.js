/**
 * 前往申请的详情页
 * @param that 当前页面的 this 对象，需要用到 vue router，所以需要传 this
 * @param applyId 申请的 id 值
 * @param applyTypeId 申请的类型 id 值
 */
export function toDetails(that, applyId, applyTypeId) {
  that.$router.push(`/applyDetails/${applyId}/${applyTypeId}`)
}

/**
 * 获取日期的 0 点时间
 * @param 2021-10-14
 * @returns 2021-10-14 00:00:00 GMT+8
 */
export function getStartTime(data) {
  return new Date(
    new Date(data).getTime() +
      parseInt(new Date(data).getTimezoneOffset() / 60) * 3600 * 1000
  );
}

/**
 * 获取日期的 24 点时间
 * @param 2021-10-14
 * @returns 2021-10-14 23:59:59 GMT+8
 */
export function getEndTime(data) {
  return new Date(
    new Date(data).getTime() +
      parseInt(new Date(data).getTimezoneOffset() / 60 + 24) * 3600 * 1000
  );
}