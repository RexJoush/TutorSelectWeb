<!--
 * @Description: your project
 * @version: 1.0
 * @Author: Anna
 * @Date: 2021-08-19 18:31:23
 * @LastEditors: Anna
 * @LastEditTime: 2021-08-19 22:23:13
-->
<template>
  <div class="app-container">
      <el-row :gutter="20">
        <el-col :span="20" :xs="24">
          <el-form
            ref="queryForm"
            :inline="true"
            v-show="showSearch"
            label-width="68px"
          >
            <el-form-item label="工号">
              <el-input
                v-model="queryParams.userId"
                placeholder="请输入工号"
                clearable
                size="small"
                style="width: 240px"
                @keyup.enter.native="handleQuery"
              />
            </el-form-item>
            <el-form-item label="姓名">
              <el-input
                v-model="queryParams.username"
                placeholder="请输入姓名"
                clearable
                size="small"
                style="width: 240px"
                @keyup.enter.native="handleQuery"
              />
            </el-form-item>
            <el-form-item label="申请类别">
              <el-select
                v-model="queryParams.applyType"
                placeholder="请选择"
                clearable
                size="small"
                style="width: 240px"
              >
                <el-option
                  v-for="item in applyTypeList"
                  :key="item.applyId"
                  :label="item.applyName"
                  :value="item.applyId"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="审核状态">
              <el-select
                v-model="queryParams.applyStatus"
                placeholder="请选择"
                clearable
                size="small"
                style="width: 240px"
              >
                <el-option
                  v-for="item in statuOptions"
                  :key="item.value"
                  :label="item.lable"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-from-item>
              <el-button type="primary" icon="el-icon-search" size="small" @click="searchQuery()"
              >搜索</el-button>
              <el-button
                icon="el-icon-refresh"
                size="small"
                @click="resetQuery(queryParams)"
                >重置</el-button>
            </el-from-item>
          </el-form>

          <el-row :gutter="10" class="mb8">
            <el-col :span="1.5">
              <el-button
                type="success"
                plain
                icon="el-icon-success"
                size="small"
                :disabled="single"
                @click="passFun()"
              >通过</el-button>
            </el-col>
            <el-col :span="1.5">
              <el-button
                type="danger"
                plain
                icon="el-icon-error"
                size="small"
                :disabled="multiple"
                @click="unPassFun()"
              >不通过</el-button>
            </el-col>           
          </el-row>

          <el-table
            v-loading="loading"
            :data="tutorList"
            
          >
            <el-table-column type="selection" width="50" align="center"/>
            <el-table-column label="工号" align="center" prop="number"></el-table-column>
          </el-table>



        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>