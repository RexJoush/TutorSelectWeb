import request from '@/utils/request'
import {baseUrl} from '@/api/url';

/**
 * 查询是否首次申请博士导师岗位
 * @param {*工号}} tId 
 * @param {*申请类别} aId 
 * @returns 
 */
export function IfApply(tId,aId){
    return request({
        url: baseUrl+`/tutor/firstapplydoctor/ifapply`,
        method: 'get',
        params:{ tutorId: tId, applyId : aId}
    })
}

//第一页基本信息提交
export function saveFirstform(data){
    return request({
        url: baseUrl+ "/tutor/firstapplydoctor/savebaseinfo",
        method : "post",
        data
    })
}

