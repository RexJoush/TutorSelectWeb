/*
 * @Author: Rex Joush
 * @Date: 2021-08-18 21:42:06
 * @LastEditors: Rex Joush
 * @LastEditTime: 2021-08-18 22:09:27
 */
import { baseUrl } from '@/api/url'
import request from '@/utils/request'

// 提交第一页
export function submitFirstPage(data, applyTypeId, applyCondition) {
  return request({
    url: `${baseUrl}/tutor/firstApplyMaster/first/${applyTypeId}/${applyCondition}`,
    method: 'post',
    data: data
  })
}

// 提交第二页
export function submitSecondPage(data, applyTypeId, id, applyCondition) {
  return request({
    url: `${baseUrl}/tutor/firstApplyMaster/second/${applyTypeId}/${id}/${applyCondition}`,
    method: 'post',
    data: data
  })
}

// 提交第三页
export function submitThirdPage(data, id, applyCondition) {
  return request({
    url: `${baseUrl}/tutor/firstApplyMaster/third/${id}/${applyCondition}`,
    method: 'post',
    data: data
  })
}

// 提交第四页
export function submitFourthPage(data, id) {
  return request({
    url: `${baseUrl}/tutor/firstApplyMaster/fourth/${id}`,
    method: 'post',
    data: data
  })
}
