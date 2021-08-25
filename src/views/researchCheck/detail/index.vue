<!--
 * @Description: your project
 * @version: 1.0
 * @Author: Anna
 * @Date: 2021-08-24 10:00:38
 * @LastEditors: Anna
 * @LastEditTime: 2021-08-25 11:06:40
-->
<template>
  <div id="app-container">
     <el-table
          v-loading="loading"
          :data="tutorList"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="50" align="center" />
          <el-table-column label="序号" type="index" width="50" />
          <el-table-column label="名称" align="center" prop="number" />
          <el-table-column label="第一作者" align="center" prop="name" />
          <el-table-column
            label="发表时间"
            align="center"
            prop="organizationName"
          />
          <el-table-column
            label="期刊名称"
            align="center"
            prop="professionalApplicationSubjectCode"
          />
          <el-table-column
            label="期刊等级"
            align="center"
            prop="professionalApplicationSubjectName"
          />
          <el-table-column 
            label="证明材料"
            align="center" 
            prop="applyName">
            <template slot-scope="scope">
              <el-button @click="handleDetail(scope.row)" type="text" size="small">
                下载文件
              </el-button>
            </template>
          </el-table-column>
          <el-table-column label="成果认定" align="center" prop="mr" />
          <el-table-column label="备注" align="center" prop="mr" />
        </el-table> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 遮罩层
      loading: true
    }
  },
  created() {

  },
  methods: {

  },
}
</script>

<style>

</style>