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
        url: baseUrl+`/tutor/firstApplyDoctor/ifApply`,
        method: 'get',
        params:{ tutorId: tId, applyId : aId}
    })
}

//第一页基本信息提交
export function saveFirstform(data,applyId,applyCondition){
    return request({
        url: `${baseUrl}/tutor/firstApplyDoctor/saveBaseInfo/${applyId}/${applyCondition}`,
        method : "post",
        data : data
    })
}

