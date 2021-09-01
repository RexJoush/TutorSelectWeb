import request from '@/utils/request'

// 院系秘书  查看院系主管审核已审核 导出同意上分会的所有数据
export function exportSFH(data) {
  return request({
    url: '/export/sfh',
    method: 'get',
    params:data,
    responseType: "blob", 
  })
}

// 院系秘书  查看院系主管审核已审核 导出同意上分会的所有数据
export function exportSXYFH(data) {
  return request({
    url: '/export/sxyfh',
    method: 'get',
    params:data,
    responseType: "blob", 
  })
}

