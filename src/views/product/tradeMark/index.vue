<template>
  <div>
    <el-button type="primary" icon="el-icon-plus" style="margin: 10px 0px"
      >添加</el-button
    >
    <el-table :data="lists" style="width: 100%">
      <el-table-column
        type="index"
        label="序号"
        min-width="80px"
      ></el-table-column>
      <el-table-column
        prop="tmName"
        label="品牌名称"
        min-width="80px"
      ></el-table-column>
      <el-table-column prop="logoUrl" label="品牌logo" min-width="120px">
        <template slot-scope="{ row, $index }">
          <img :src="row.logoUrl" alt="" style="width: 50px; height: 50px" />
        </template>
      </el-table-column>
      <el-table-column prop="prop" label="操作" min-width="120px">
        <template slot-scope="{ row, $index }">
          <el-button type="warning" icon="el-icon-edit" size="mini"
            >修改</el-button
          >
          <el-button type="danger" icon="el-icon-delete" size="mini"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      style="margin-top: 20px; text-align: center"
      :current-page="page"
      :total="total"
      :page-size="limit"
      :pager-count="7"
      :page-sizes="[3, 5, 10]"
      @current-change="getPageList"
      @size-change="handleSizeChange"
      layout="prev, pager, next, jumper,->,sizes,total"
    >
    </el-pagination>

    <el-dialog title="添加品牌" :visible.sync="dialogFormVisible">

    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "tradeMark",
  data() {
    return {
      page: 1,
      limit: 10,
      total: 0,
      lists: [],

      dialogFormVisible: false
    };
  },
  //组件挂载完毕发请求
  mounted() {
    this.getPageList();
  },
  methods: {
    async getPageList(pager = 1) {
      this.page = pager;
      const { page, limit } = this;
      let result = await this.$API.trademark.reqTradeMarkList(page, limit);
      console.log(result);
      if (200 === result.code) {
        this.total = result.data.total;
        this.lists = result.data.records;
        console.log(this.lists);
      }
    },
    //当分页器某一页需要展示数据条数发生变化的时候会触发
    handleSizeChange(limit) {
      //整理参数
      this.limit = limit;
      this.getPageList();
    },
  },
};
</script>

<style lang="less" scoped></style>
