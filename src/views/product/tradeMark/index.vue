<template>
    <div>
        <el-button type="primary" icon="el-icon-plus" style="margin: 10px 0px">添加</el-button>
        <el-table style="width: 100%; ">
            <el-table-column prop="prop" label="序号" width="80px"></el-table-column>
            <el-table-column prop="prop" label="品牌名称" width="80px"></el-table-column>
            <el-table-column prop="prop" label="品牌logo" width="80px"></el-table-column>
            <el-table-column prop="prop" label="操作" width="80px"></el-table-column>
        </el-table>

        <el-pagination ></el-pagination>
    </div>
</template>

<script>
export default {
    name: "tradeMark",

    //组件挂载完毕发请求
    mounted() {
        console.log(this.$API)
    }
}
</script>

<style lang="less" scoped >
    
</style>