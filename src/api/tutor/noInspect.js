import request from '@/utils/request'
import { baseUrl } from '@/api/url'

// 博士免审第一页提交
export function submitFirstPage(data, applyCondition, applyId) {
  return request({
    url: `${baseUrl}/tutor/noInspect/saveFirstPage/${applyCondition}/${applyId}`,
    method: 'post',
    data: data
  })
}

// 第二页提交
export function sumbitSecondPage(data, applyId) {
  return request({
    url: `${baseUrl}/tutor/noInspect/saveSecondPage/${applyId}`,
    method: 'post',
    data: data
  })
}
