/*
 * @Description: your project
 * @version: 1.0
 * @Author: Anna
 * @Date: 2021-08-27 10:03:15
 * @LastEditors: Anna
 * @LastEditTime: 2021-09-02 17:10:42
 */

import request from '@/utils/request'
import { baseUrl } from '@/api/url'

//查询科研项目表
export function searchProject(tutorId, applyId){
    return request({
        url: baseUrl + `/research_project/get/${tutorId}/${applyId}`,
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