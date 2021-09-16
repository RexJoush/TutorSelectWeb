/*
 * @Author: Rex Joush
 * @Date: 2021-08-18 21:01:01
 * @LastEditors: Rex Joush
 * @LastEditTime: 2021-09-11 20:47:55
 */
import { baseUrl } from '@/api/url'
import request from '@/utils/request'

// 所有首次申请，检查当前此类申请的状态
export function checkApply(applyTypeId) {
  return request({
    url: `${baseUrl}/tutor/checkApply/${applyTypeId}`,
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

// 获取导师基本信息 申请类别和申请状态 首次申请 免审
export function getTeacherInfo(applyTypeId, applyCondition) {
  return request({
    url: `${baseUrl}/tutor/getTeacherInfo/${applyTypeId}/${applyCondition}`,
    method: 'get'
  })
}

// 删除文件 公共方法
export function deleteFile(httpPath) {
  return request({
    url: `${baseUrl}/user/delFile`,
    method: 'post',
    data: httpPath
  })
}

export function getPdf(applyId,applyTypeId){
  return request({
    url:`${baseUrl}/tutor/getPdf/138/1`,
    method: 'get'
  })
}
