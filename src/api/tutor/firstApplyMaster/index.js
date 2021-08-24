/*
 * @Author: Rex Joush
 * @Date: 2021-08-18 21:42:06
 * @LastEditors: Rex Joush
 * @LastEditTime: 2021-08-18 22:09:27
 */
import { baseUrl } from '@/api/url'
import request from '@/utils/request'

// 提交第一页
export function submitFirstPage(data, applyId, applyCondition) {
  return request({
    url: `${baseUrl}/tutor/firstApplyMaster/first/${applyId}/${applyCondition}`,
    method: 'post',
    data: data
  })
}

// 提交第二页
export function submitSecondPage(data, applyId, id) {
  return request({
    url: `${baseUrl}/tutor/firstApplyMaster/second/${applyId}/${id}`,
    method: 'post',
    data: data
  })
}
