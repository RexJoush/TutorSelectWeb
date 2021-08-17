import { param } from "@/utils";
import request from "@/utils/request";

//初始化申请的所有类别（下拉框）
export function getApplyType() {
  return request({
    url: "/apply-type/getApplyType",
    method: "get"
  });
}
//初始化待初审的数据
export function firstInit(current) {
  return request({
    url: "/department-secretary/findAll/7"+"/"+current,
    method: "get"
  });
}
//更新操作
export function updateStatus(data) {
  return request({
    url: "/department-secretary/update",
    method: "post",
    data: data
  });
}

//带参查询
export function searchQuery(data) {
  return request({
    url: "/department-secretary/searchQuery",
    method: "post",
    data: data
  });
}

