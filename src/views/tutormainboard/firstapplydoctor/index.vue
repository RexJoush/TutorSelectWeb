<template>
  <div>
    <el-row>
      <el-col :span="18" :offset="3">
        <div class="bg-purple">
          <el-card class="box-card" shadow="always">
            <div slot="header" class="clearfix">
              <span>首次申请博士导师</span>
            </div>
            <div>
              <el-form ref="form" :model="form" label-width="80px">
                <el-descriptions
                  class="margin-top"
                  :column="2"
                  :size="size"
                  border
                >
                  <el-descriptions-item>
                    <template slot="label">教师工号</template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>

                  <el-descriptions-item>
                    <template slot="label"> 备注 </template>
                    <el-image
                      style="width: 100px; height: 100px"
                      :src="url"
                      :fit="fit"
                    ></el-image>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label">
                      <i class="el-icon-office-building"></i>
                      联系地址
                    </template>
                    江苏省苏州市吴中区吴中大道 1188 号
                  </el-descriptions-item>
                </el-descriptions>
              </el-form>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    };
  },
};
</script>

<style>
/**导航栏 */
.navigation_bar {
  background: #99a9bf;
  font-size: 30px;
  line-height: 50px;
  height: 50px;
  margin-bottom: 30px;
}
.bg-purple {
  background: #99a9bf;
}
</style>
