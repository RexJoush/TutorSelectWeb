/*
 * @Author: Rex Joush
 * @Date: 2021-08-18 21:01:01
 * @LastEditors: Rex Joush
 * @LastEditTime: 2021-08-18 21:18:09
 */
import { baseUrl } from '@/api/url'
import request from '@/utils/request'
/* 所有首次申请 */
export function firstApply(data) {
  return request({
    // url: baseUrl + '/user/login',
    url: `${baseUrl}/tutor/firstApply/${data}`,
    method: 'get'
  })
}
/* 增列博士，增列学硕，增列专硕，免审 */
export function addNoInspectApply(applyTypeId) {
  return request({
    // url: baseUrl + '/user/login',
    url: `${baseUrl}/tutor/addNoInspectApply/${applyTypeId}`,
    method: 'get'
  })
}

// 获取导师基本信息 申请类别和申请状态 首次申请
export function getTeacherInfo(applyTypeId, applyCondition) {
  return request({
    url: `${baseUrl}/tutor/getTeacherInfo/${applyTypeId}/${applyCondition}`,
    method: 'get'
  })
}

// 获取导师基本信息 增列申请 申请状态 导师信息主键 
export function getFirstPage(applyCondition,applyId) {
  return request({
    url: `${baseUrl}/tutor/getFirstPage/${applyCondition}/${applyId}`,
    method: 'get'
  })
}

