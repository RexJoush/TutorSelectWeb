import request from '@/utils/request'
import { baseUrl } from '@/api/url'

//博士免审第一页提交
export function submitFirstPage(data,applyCondition,applyId){
    return request({
        url:`${baseUrl}/tutor/noInspect/saveFirstPage/${applyCondition}/${applyId}`,
        method: 'post',
        data : data
    })
}

//


