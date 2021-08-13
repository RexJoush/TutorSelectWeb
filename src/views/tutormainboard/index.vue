<!--
 * @Author: Rex Joush
 * @Date: 2021-08-13 15:16:36
 * @LastEditors: Rex Joush
 * @LastEditTime: 2021-08-13 17:09:39
-->
<template>
  <div>    
    <el-row>
      <el-col :span="24">
        <el-divider content-position="left"><span class="divider-title">申请类别选择</span></el-divider>
      </el-col>
    </el-row>
  
    <el-card class="box-card" shadow="always">
      <div slot="header" class="clearfix">
        <span style="font-size:18px">申请博士生导师</span>
      </div>
      <el-row :gutter="20" >
        <el-col :span="7" offset="3"><div><el-button class="grid-content" type="primary" @click="firstApplyDoctor">首次申请博士导师岗位</el-button></div></el-col>
        <el-col :span="7"><div><el-button class="grid-content" type="primary">博士导师增列学科岗位</el-button></div></el-col>
        <el-col :span="7"><div><el-button class="grid-content" type="primary">博士研究生导师免审上岗</el-button></div></el-col>
      </el-row>
    </el-card>

    <el-card class="box-card" shadow="always">
      <div slot="header" class="clearfix">
        <span style="font-size:18px">申请硕士生导师（学术学位）</span>
      </div>
      <el-row :gutter="20" >
        <el-col :span="7" offset="3"><div><el-button class="grid-content" type="primary" @click="firstApplyMaster">首次申请学硕导师岗位</el-button></div></el-col>
        <el-col :span="7"><div><el-button class="grid-content" type="primary">学硕导师增列学科岗位</el-button></div></el-col>
        <el-col :span="7"><div><el-button class="grid-content" type="primary">硕士研究生导师免审上岗</el-button></div></el-col>
      </el-row>
    </el-card>
    <el-card class="box-card" shadow="always">
      <div slot="header" class="clearfix">
        <span style="font-size:18px">申请硕士生导师（专业学位）</span>
      </div>
      <el-row :gutter="20" >
        <el-col :span="7" offset="3"><div><el-button class="grid-content" type="primary">首次申请专硕导师岗位</el-button></div></el-col>
        <el-col :span="7"><div><el-button class="grid-content" type="primary">专硕导师增列学科岗位</el-button></div></el-col>
        <el-col :span="7"><div></div></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
    methods:{
        //首次申请博士导师岗位
        firstApplyDoctor(){
          this.$router.push('firstApplyDoctor/1');
        },

        // 首次申请硕士导师岗位（学术硕士）
        firstApplyMaster: function () {
          this.$router.push('firstApplyMaster/1');
        }
    }
};
</script>


<style lang="scss" scoped>
.el-card {
  margin: 20px;
}
.el-row {
  //   margin-bottom: 10px;
  //   height: 100px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
/*
申请类别选择 
*/
.bg-purple-dark {
  background: #99a9bf;
  font-size: 30px;
  line-height: 50px;
  height: 50px;
  margin-bottom: 30px;
}

/**button按钮 */
.grid-content {
  border-radius: 4px;
  min-height: 80px;
  height: 60px;
//   background-color: #304156;
}
/**
el-card 卡片
 */
.box-card {
  margin-bottom: 20px;
}
</style>
