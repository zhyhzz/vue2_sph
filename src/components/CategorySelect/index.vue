<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="一级分类">
        <el-select placeholder="请选择">
          <el-option
            label="区域1"
            value="shanghai"
            v-for="(c1, index) in list1"
            :key="c1.id"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CategorySelect",
  data() {
    return {
      list1: [],
      cForm: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
      },
    };
  },
  mounted() {
    this.getCategoryList();
  },
  methods: {
    async getCategoryList() {
      let result = await this.$API.attr.reqCategoryList();
    },
  },
};
</script>
