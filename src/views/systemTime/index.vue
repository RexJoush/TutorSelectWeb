<template>
  <div class="app-container">
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple">
        <span class="demonstration">
        </span>
      </div>
      </el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light">
        <div class="block">
              <span class="demonstration">申请时间范围
              </span>
              <el-date-picker
                v-model="time"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
        </div>
      </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-button @click="save()" type="primary" plain>保存设置</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  data() {
    return {
      time: ''
    }
  },
  methods: {
    async save() {
      const { data: res } = await this.$http.get(
        '/system-time/save/' + this.time
      )
      if(res == '200') this.$message.success("时间修改成功")
      else{
        this.$message.error("时间修改失败")
      }
    }
  }
}
</script>
<style>
.bg-purple {
  background: #ffffff;
}
.bg-purple-light {
  background: #ffffff;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
