/*
 * @Description: your project
 * @version: 1.0
 * @Author: Anna
 * @Date: 2021-08-26 15:43:09
 * @LastEditors: Anna
 * @LastEditTime: 2021-08-26 15:45:29
 */

import request from '@/utils/request'
import { baseUrl } from '@/api/url'

 // 查询学术论文
export function searchPaper(tutorId) {
  return request({
    url: baseUrl + `/academic_paper/get/${tutorId}`,
    method: 'get',
    // data: data  post请求时传参
  })
}
