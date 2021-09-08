import request from '@/utils/request'

// 初始化申请的所有类别（下拉框）
export function getApplyType() {
  return request({
    url: '/admin/apply-type/getApplyType',
    method: 'get'
  })
}
// 查询数据
export function checkDate(data) {
  return request({
    url: '/admin/tutor-inspect/admin/getAll',
    method: 'get',
    params: data,
    contentType: 'application/json;charset=UTF-8'
  })
}
// 更新操作
export function updateStatus(data) {
  return request({
    url: '/admin/update-status/update',
    method: 'post',
    data: data
  })
}

// 更新操作（提交分会页面）
export function updateStatusSfh(data) {
  return request({
    url: '/update-status/updateSfh',
    method: 'post',
    data: data,
  })
}

// 更新操作（录入分会意见页面）
export function updateStatusXy(data) {
  return request({
    url: '/update-status/updateXy',
    method: 'post',
    data: data,
  })
}



