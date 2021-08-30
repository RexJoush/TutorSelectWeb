/*
 * @Description: your project
 * @version: 1.0
 * @Author: Anna
 * @Date: 2021-08-27 10:03:15
 * @LastEditors: Anna
 * @LastEditTime: 2021-08-30 21:55:13
 */

import request from '@/utils/request'
import { baseUrl } from '@/api/url'

//查询科研项目表
export function searchProject(tutorId){
    return request({
        url: baseUrl + `/research_project/get/${tutorId}`,
        method: 'get'
    })
}

//更新审核状态和备注
export function updateProject(data) {
    return request({
      url: baseUrl + '/research_project/update',
      method: 'post',
      data: data
    })
  }