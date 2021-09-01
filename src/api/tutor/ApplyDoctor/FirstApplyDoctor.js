import request from '@/utils/request'
import { baseUrl } from '@/api/url'

/**
 * 查询是否首次申请博士导师岗位
 * @param {*工号}} tId
 * @param {*申请类别} aId
 * @returns
 */

export function IfApply(tId, aId) {
  return request({
    url: baseUrl + `/tutor/firstApplyDoctor/ifApply`,
    method: 'get',
    params: { tutorId: tId, applyId: aId }
  })
}

// 第一页基本信息提交
export function submitFirstPage(data, applyTypeId, applyCondition) {
  return request({
    url: baseUrl +`/tutor/firstApplyDoctor/saveBaseInfo/${applyTypeId}/${applyCondition}`,
    method: 'post',
    data: data
  })
}
//第二页信息提交 参数：表单/申请类别id/主键id

export function submitSecondPage(data,applyTypeId,applyId){
  return request({
    url:`${baseUrl}/tutor/firstApplyDoctor/updateSecondPage/${applyTypeId}/${applyId}`,
    method: 'post',
    data: data
  })
}

//第三页信息提交 参数：表单/申请类别id/主键id
export function submitThirdPage(data,applyTypeId,applyId){
  return request({
    url:`${baseUrl}/tutor/firstApplyDoctor/updateThirdPage/${applyTypeId}/${applyId}`,
    method : 'post',
    data : data
  })
}

//第四页信息提交 
export function submitFourthPage(data,applyTypeId,applyId){
  return request({
    url:`${baseUrl}/tutor/firstApplyDoctor/updateThirdPage/${applyTypeId}/${applyId}`,
    method : 'post',
    data : data
  })
}
//删除文件 公共方法
export function deleteFile(httpPath){
  return request({
    url:`${baseUrl}/tutor/delFile`,
    method: 'post',
    data: httpPath
  })
}


