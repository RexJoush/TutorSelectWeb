<!--
 * @Author: Rex Joush
 * @Date: 2021-09-03 15:03:39
 * @LastEditors: Rex Joush
 * @LastEditTime: 2021-09-03 15:13:20
-->
<template>
  <div class="main">
    <el-row>
      <el-col :span="24">
        <el-divider content-position="left">
          <span class="divider-title">我的申请</span>
        </el-divider>
      </el-col>
    </el-row>
    <el-table :data="applyList" stripe style="width: 100%;">
      <el-table-column type="index" width="50" label="序号" />
      <el-table-column prop="applyTypeId" label="申请类别" />
      <el-table-column prop="status" label="当前状态" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" plain @click="pply(scope.$index)">查 看</el-button>
          <el-button size="mini" type="info" plain @click="editApply(scope)">修 改</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getApplyList } from '@/api/tutor/myApply'

export default {
  name: 'Index',
  data() {
    return {
      applyList: [] // 我的申请列表
    }
  },
  created() {
    this.getApplyList()
  },
  methods: {
    // 获取我的申请
    /*
    [
      {
          "applyId": 11,
          "tutorId": "20133220",
          "applyTypeId": 1,
          "status": 10,
          "subject": 0,
          "professional": 0,
          "commit": null
      },
      {
          "applyId": 106,
          "tutorId": "20133220",
          "applyTypeId": 4,
          "status": 10,
          "subject": 3,
          "professional": 0,
          "commit": null
      }
    ]
    */
    getApplyList: function() {
      getApplyList().then(res => {
        console.log(res)
        this.applyList = res.data
      }).catch(error => {
        throw error
      })
    }
  }

}
</script>

<style scoped>

</style>
