/*
 * @Description: your project
 * @version: 1.0
 * @Author: Anna
 * @Date: 2021-08-26 15:43:09
 * @LastEditors: Anna
 * @LastEditTime: 2021-09-08 10:07:27
 */

import request from '@/utils/request'
import { baseUrl } from '@/api/url'

// 查询学术论文
export function searchPaper(tutorId, applyId) {
  return request({
    url: baseUrl + `/admin/academic_paper/get/${tutorId}/${applyId}`,
    method: 'get',
    // data: data  post请求时传参
  })
}

//更新审核状态和备注
export function updatePaper(data) {
  return request({
    url: baseUrl + '/admin/academic_paper/update',
    method: 'post',
    data: data
  })
}
