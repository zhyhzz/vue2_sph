<!--
 * @Author       : zuohy
 * @Date         : 2024-07-13 15:31:35
 * @LastEditTime : 2024-07-13 15:34:57
 * @LastEditors  : zuohy
 * @Description  : 
-->
 <template>
    <a :title="title" style="margin: 10px">
        <el-button v-bind="$attrs" v-on="$listeners"></el-button>
    </a>
 </template>

<script>
export default {
    name: "HindButton",
    props: ["title"]
}
</script>

<style scoped>
</style>