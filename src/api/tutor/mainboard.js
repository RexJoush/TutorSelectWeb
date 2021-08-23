/*
 * @Author: Rex Joush
 * @Date: 2021-08-18 21:01:01
 * @LastEditors: Rex Joush
 * @LastEditTime: 2021-08-18 21:18:09
 */
import { baseUrl } from '@/api/url'
import request from '@/utils/request'
/* 所有首次申请 */
export function firstApply(data) {
  return request({
    // url: baseUrl + '/user/login',
    url: `${baseUrl}/tutor/firstApply/${data}`,
    method: 'get'
  })
}
/* 所有增列申请 */
export function addApply(data) {
  return request({
    // url: baseUrl + '/user/login',
    url: `${baseUrl}/tutor/addApply/${data}`,
    method: 'get'
  })
}

// 获取导师基本信息
export function getTeacherInfo() {
  return request({
    url: `${baseUrl}/tutor/getTeacherInfo`,
    method: 'get'
  })
}
