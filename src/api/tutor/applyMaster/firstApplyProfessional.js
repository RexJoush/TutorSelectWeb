/*
 * @Author: Rex Joush
 * @Date: 2021-09-09 19:34:15
 * @LastEditors: Rex Joush
 * @LastEditTime: 2021-09-09 19:35:07
 */

import request from '@/utils/request'
import { baseUrl } from '@/api/url'

// 提交第一页
export function submitFirstPage(data, applyTypeId, applyCondition) {
  return request({
    url: `${baseUrl}/tutor/firstApplyProfessional/first/${applyTypeId}/${applyCondition}`,
    method: 'post',
    data: data
  })
}

// 提交第二页
export function submitSecondPage(data, applyTypeId, applyId, applyCondition) {
  return request({
    url: `${baseUrl}/tutor/firstApplyProfessional/second/${applyTypeId}/${applyId}/${applyCondition}`,
    method: 'post',
    data: data
  })
}
