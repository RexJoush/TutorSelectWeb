/*
 * @Author: Rex Joush
 * @Date: 2021-09-03 15:12:31
 * @LastEditors: Rex Joush
 * @LastEditTime: 2021-09-03 15:14:13
 */
import { baseUrl } from '@/api/url'
import request from '@/utils/request'

/* 获取所有当前教师的所有申请 */
export function getApplyList(data) {
  return request({
    url: `${baseUrl}/tutor/getApplyList`,
    method: 'get'
  })
}
