<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="一级分类">
        <el-select placeholder="请选择" v-model="cForm.category1Id" @change="handler1" :disabled="show">
          <el-option
            :label="c1.name"
            :value="c1.id"
            v-for="(c1, index) in list1"
            :key="c1.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类">
        <el-select placeholder="请选择" v-model="cForm.category2Id" @change="handler2" :disabled="show">
          <el-option
            :label="c2.name"
            :value="c2.id"
            v-for="(c2, index) in list2"
            :key="c2.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="三级分类">
        <el-select placeholder="请选择" v-model="cForm.category3Id" @change="handler3" :disabled="show">
          <el-option
            :label="c3.name"
            :value="c3.id"
            v-for="(c3, index) in list3"
            :key="c3.id"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CategorySelect",
  props: ["show"],
  data() {
    return {
      list1: [],
      list2: [],
      list3: [],
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
      let result = await this.$API.attr.reqCategory1List();
      if(result.code === 200) {
        this.list1 = result.data;
      }
    },
    //一级分类的select事件回调（当一级分类的option发生变化时获取的二级分类的数据）
    async hander1() {
      this.list2 = [];
      this.list3 = [];
      this.cForm.category2Id = "";
      this.cForm.category3Id = "";
      //解构出一级分类的id
      const {category1Id} = this.cForm;
      let result = await this.$API.attr.reqCategory2List(category1Id);
      if(result.code === 200) {
        this.list2 = result.data;
      }
    },
    async hander2() {
      //清除数据
      this.list3 = [];
      this.cForm.category3Id = "";
      //解构出二级分类的id
      const {category2Id} = this.cForm;
      let result = await this.$API.attr.reqCategory3List(category2Id);
      if(result.code === 200) {
        this.list3 = result.data;
      }
    },
     //三级分类的事件回调
     handler3() {
      //获取三级分类的id
      const { category3Id } = this.cForm;
      this.$emit("getCategoryId", { categoryId: category3Id, level: 3 });
    },
  },
};
</script>
