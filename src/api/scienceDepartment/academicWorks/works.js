/*
 * @Description: your project
 * @version: 1.0
 * @Author: Anna
 * @Date: 2021-08-27 10:02:58
 * @LastEditors: Anna
 * @LastEditTime: 2021-09-02 17:11:01
 */

import request from '@/utils/request'
import { baseUrl } from '@/api/url'

//查询教材或学术著作
export function searchWorks(tutorId, applyId) {
    return request({
        url: baseUrl + `/academic_works/get/${tutorId}/${applyId}`,
        method: 'get'
    })
}

//更新审核状态和备注
export function updateWorks(data) {
    return request({
      url: baseUrl + '/academic_works/update',
      method: 'post',
      data: data
    })
  }