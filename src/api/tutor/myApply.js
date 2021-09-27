/*
 * @Author: Rex Joush
 * @Date: 2021-09-03 15:12:31
 * @LastEditors: Rex Joush
 * @LastEditTime: 2021-09-03 15:14:13
 */
import { baseUrl } from '@/api/url'
import request from '@/utils/request'

/* 获取所有当前教师的所有申请 */
export function getApplyList(data) {
  return request({
    url: `${baseUrl}/tutor/getApplyList`,
    method: 'get'
  })
}

/* 将驳回的申请状态改为 0 */
export function changeStatus(data) {
  return request({
    url: `${baseUrl}/tutor/changeStatus/${data}`,
    method: 'get'
  })
}

/* 获取当前申请的详细信息 */
export function getApplyDetails(applyId, isInspect) {
  return request({
    url: `${baseUrl}/common/tutor/getApplyDetails/${applyId}/${isInspect}`,
    method: 'get'
  })
}

/* 导出pdf */
export function exportPdf(applyId,applyTypeId){
  return request({
    url:`${baseUrl}/tutor/getPdf/${applyId}/${applyTypeId}`,
    method: 'get'
  })
}
