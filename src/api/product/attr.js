/**
 * @Author       : zuohy
 * @Date         : 2024-06-18 22:40:31
 * @LastEditTime : 2024-06-18 22:40:55
 * @LastEditors  : zuohy
 * @Description  : 
*/
/**
 * @Author       : zuohy
 * @Date         : 2024-06-18 22:32:07
 * @LastEditTime : 2024-06-18 22:32:14
 * @LastEditors  : zuohy
 * @Description  : 获取品牌管理数据模块
*/
import request from "@/utils/request"

//获取品牌列表接口
export const reqTradeMarkList = (page, limit)=> request({url: `/admin/product/baseTrademark/${page}/${limit}`})