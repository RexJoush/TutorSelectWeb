/*
 * @Description: your project
 * @version: 1.0
 * @Author: Anna
 * @Date: 2021-08-27 10:02:58
 * @LastEditors: Anna
 * @LastEditTime: 2021-08-27 10:06:23
 */

import request from '@/utils/request'
import { baseUrl } from '@/api/url'

//查询教材或学术著作
export function searchWorks(tutorId) {
    return request({
        url: baseUrl + `/academic_works/get/${tutorId}`,
        method: 'get'
    })
}