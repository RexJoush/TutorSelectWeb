import request from '@/utils/request'

// 初始化申请的所有类别（下拉框）
export function getApplyType() {
  return request({
    url: '/apply-type/getApplyType',
    method: 'get'
  })
}
// 查询数据
export function checkDate(data) {
  return request({
    url: '/tutor-inspect/admin/getAll',
    method: 'get',
    params: data,
    contentType:'application/json;charset=UTF-8'
  })
}
// 更新操作
export function updateStatus(data) {
  return request({
    url: '/update-status/update',
    method: 'post',
    data: data,
  })
}

