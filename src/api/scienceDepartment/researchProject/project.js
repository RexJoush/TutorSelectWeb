/*
 * @Description: your project
 * @version: 1.0
 * @Author: Anna
 * @Date: 2021-08-27 10:03:15
 * @LastEditors: Anna
 * @LastEditTime: 2021-08-27 10:13:11
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