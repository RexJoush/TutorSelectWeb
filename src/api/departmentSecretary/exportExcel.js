import request from '@/utils/request'

// 院系秘书  查看院系主管审核已审核 导出同意上分会的所有数据
export function exportSFH(data) {
  return request({
    url: '/export/sfh',
    method: 'get',
    params: data,
    responseType: 'blob'
  })
}

// 院系秘书  录入复审名单 导出学院分会同意的所有数据
export function exportSXYFH(data) {
  return request({
    url: '/export/sxyfh',
    method: 'get',
    params: data,
    responseType: 'blob'
  })
}
// 研究生院管理员   导出学同意上校分会的的所有名单
export function exportQualification(data) {
  return request({
    url: '/export/qualification',
    method: 'get',
    params: data,
    responseType: 'blob'
  })
}

