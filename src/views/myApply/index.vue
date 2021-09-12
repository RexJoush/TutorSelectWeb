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
    <el-table v-loading="loading" :data="applyList" stripe style="width: 100%;" element-loading-text="获取中...">
      <el-table-column type="index" width="50" label="序号" />
      <el-table-column prop="applyName" label="申请类别" />
      <el-table-column prop="applyDepartment" label="申请负责单位" />
      <el-table-column prop="applySubject" label="申请学科" />
      <el-table-column prop="statusDisplay" label="当前状态">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status === 14 ? 'danger': scope.row.status === 0 ? 'warning': 'info'">
            {{ scope.row.statusDisplay }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="commit" label="备注信息" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            v-if="scope.row.status !== 14 && scope.row.status !== 0"
            size="mini"
            type="primary"
            plain
            @click="toApplyDetails(scope.row.applyId)"
          >查 看
          </el-button>
          <el-button v-if="scope.row.status === 14" size="mini" type="danger" plain @click="editApply(scope.row)">修 改
          </el-button>
          <el-button v-else-if="scope.row.status === 0" size="mini" type="warning" plain @click="editApply(scope.row)">
            填写
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { changeStatus, getApplyList } from '@/api/tutor/myApply'

export default {
  name: 'Index',
  data() {
    return {
      loading: false, // 申请的加载态
      applyList: [] // 我的申请列表
    }
  },
  created() {
    this.getApplyList()
    this.loading = true
  },
  methods: {
    // 获取我的申请
    getApplyList: function() {
      getApplyList().then(res => {
        console.log(res)
        this.applyList = res.data
        this.loading = false
      }).catch(error => {
        throw error
      })
    },

    // 修改信息
    editApply: async function(value) {
      let url = 'tutorApply/'
      switch (value.applyTypeId) {
        case 1:
          url += `firstApplyDoctor/1`
          await changeStatus(value.applyId)
          break
        case 2: url += `addApplyDoctor/2`; break
        case 3: url += `noInspectApplyDoctor/3`; break
        case 4:
          url += `firstApplyMaster/4`
          await changeStatus(value.applyId)
          break
        case 5: url += `addApplyMaster/5`; break
        case 6: url += `noInspectApplyMaster/6`; break
        case 7: url += `firstApplyProfessional/7`; break
        case 8: url += `addApplyProfessional/8`; break
      }
      // console.log(`${url}/101/${value.applyId}`)
      this.$router.push(`${url}/101/${value.applyId}`)
    },

    // 查看申请信息
    toApplyDetails: function(applyId) {
      this.$router.push(`/applyDetails/${applyId}`)
    }
  }

}
</script>

<style scoped>

</style>
