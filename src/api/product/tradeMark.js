/**
 * @Author       : zuohy
 * @Date         : 2024-06-18 22:32:07
 * @LastEditTime : 2024-06-22 20:19:38
 * @LastEditors  : zuohy
 * @Description  : 获取品牌管理数据模块
*/
import request from "@/utils/request"

//获取品牌列表接口
export const reqTradeMarkList = (page, limit)=> request({url: `/admin/product/baseTrademark/${page}/${limit}`, method: 'get'});

//处理添加品牌/编辑
export const reqAddOrUpdateTradeMark = (tradeMark) => {
    if(tradeMark.id) {
        return request({url: "/admin/product/baseTrademark/update", method: "put", data: tradeMark})
    } else {
        return request({url: "/admin/product/baseTrademark/save", method: "post", data: tradeMark})
    }
}


//删除品牌
///admin/product/baseTrademark/remove/{id}  delete

export const reqDeleteTradeMark = (id)=>request({url:`/admin/product/baseTrademark/remove/${id}`,method:'delete'});



