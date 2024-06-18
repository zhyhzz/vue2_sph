/**
 * @Author       : zuohy
 * @Date         : 2024-06-18 22:32:07
 * @LastEditTime : 2024-06-18 22:56:07
 * @LastEditors  : zuohy
 * @Description  : 获取品牌管理数据模块
*/
import request from "@/utils/request"

//获取品牌列表接口
export const reqTradeMarkList = (page, limit)=> request({url: `/admin/product/baseTrademark/${page}/${limit}`, method: 'get'})