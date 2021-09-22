/**
 * 前往申请的详情页
 * @param that 当前页面的 this 对象，需要用到 vue router，所以需要传 this
 * @param applyId 申请的 id 值
 * @param applyTypeId 申请的类型 id 值
 */
export function toDetails(that, applyId, applyTypeId) {
  that.$router.push(`/applyDetails/${applyId}/${applyTypeId}`)
}
