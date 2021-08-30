/*
 * @Description: your project
 * @version: 1.0
 * @Author: Anna
 * @Date: 2021-08-27 10:03:22
 * @LastEditors: Anna
 * @LastEditTime: 2021-08-27 10:15:24
 */

import request from '@/utils/request'
import { baseUrl } from '@/api/url'

 // 查询科研奖励
export function searchAwards(tutorId) {
  return request({
    url: baseUrl + `/teaching_awards/get/${tutorId}`,
    method: 'get',
  })
}