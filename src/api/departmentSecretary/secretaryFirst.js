import request from '@/utils/request'
import { baseUrl } from '@/api/url'

// 获取所有初始信息
export function getInit(organizationId, applyStatuss) {
  return request({
    url: `${baseUrl}/admin/tutor-inspect/getInit/${organizationId}/${applyStatuss}`,
    method: 'get',
  })
}
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
    url: '/admin/update-status/updateSfh',
    method: 'post',
    data: data,
  })
}

// 更新操作（录入分会意见页面）
export function updateStatusXy(data) {
  return request({
    url: '/admin/update-status/updateXy',
    method: 'post',
    data: data,
  })
}



