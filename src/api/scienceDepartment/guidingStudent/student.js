/*
 * @Description: your project
 * @version: 1.0
 * @Author: Anna
 * @Date: 2021-09-05 17:34:29
 * @LastEditors: Anna
 * @LastEditTime: 2021-09-06 09:30:09
 */
import request from '@/utils/request'
import { baseUrl } from '@/api/url'

 // 查询指导学生
export function searchStudents(tutorId,applyId) {
  return request({
    url: baseUrl + `/guiding_student/get/${tutorId}/${applyId}`,
    method: 'get',
  })
}