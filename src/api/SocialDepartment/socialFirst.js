/*
 * @Description: your project
 * @version: 1.0
 * @Author: Anna
 * @Date: 2021-08-21 17:43:07
 * @LastEditors: Anna
 * @LastEditTime: 2021-08-23 17:26:04
 */
import { param } from "@/utils";
import request from "@/utils/request";

//初始化负责院系（下拉框）
export function getOrganization() {
    return request({
        url: "/organization/getOrganization",
        method: "get"
    });
}