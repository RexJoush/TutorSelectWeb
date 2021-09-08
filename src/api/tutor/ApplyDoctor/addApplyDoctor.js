import request from '@/utils/request'
import { baseUrl } from '@/api/url'

//判断导师增列
// export function addApplyDoctor(applyTypeId){
//     return request({
//         url:`${baseUrl}/addApply/${applyTypeId}`,
//         method: 'get',
//     })
// }

//博士增岗第一页提交
export function submitFirstPage(data,applyCondition,applyId){
    return request({
        url:`${baseUrl}/tutor/addApplyDoctor/saveFirstPage/${applyCondition}/${applyId}`,
        method: 'post',
        data : data
    })
}

//更新第二页信息
export function submitSecondPage(data,applyCondition,applyId){
    return request({
        url:`${baseUrl}/tutor/addApplyDoctor/updateSecondPage/${applyCondition}/${applyId}`,
        method: 'post',
        data : data
    })
}

//博士增岗提交第三页
export function submitThirdPage2(data,applyCondition,applyId){
    return request({
        url:`${baseUrl}/tutor/addApplyDoctor/updateThirdPage/${applyCondition}/${applyId}`,
        method : 'post',
        data : data
    })
}

//博士增岗提交第四页
export function submitFourthPage2(data,applyId){
    return request({
        url: `${baseUrl}/tutor/addApplyDoctor/updateFourthPage/${applyId}`,
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

