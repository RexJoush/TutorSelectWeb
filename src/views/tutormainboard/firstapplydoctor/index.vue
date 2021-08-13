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
                <!-- 基本信息 -->
                <el-descriptions
                  class="margin-top"
                  :column="2"
                  :size="size"
                  border
                >
                  <el-descriptions-item>
                    <template slot="label">所在单位</template>
                    <el-input
                      type="textarea"
                      :rows="6"
                      v-model="form.name"
                    ></el-input>
                  </el-descriptions-item>

                  <el-descriptions-item>
                    <template slot="label"> 图片 </template>
                    <el-button style="margin-bottom: 5px" type="success"
                      >上传照片</el-button
                    ><br />
                    <el-image
                      style="width: 150px; height: 150px"
                      :src="url"
                      :fit="fit"
                    ></el-image>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> 工号 </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> 姓名 </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> 性别 </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"><span class="iconfont icon-bitian"></span> 证件号码 </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> 出生年月 </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> 电子邮箱 </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> 联系电话 </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> 学科属性(文理科) </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> 最后学位 </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> 授予单位及时间 </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> 职称 </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> 评定时间 </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> 任硕导时间 </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> 任硕导一级学科 </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                </el-descriptions>
                <el-descriptions :column="1" :size="size" border>
                  <el-descriptions-item label-class-name="my-label">
                    <template slot="label">
                      主要研究方向的内容及其意义
                    </template>
                    <el-input
                      type="textarea"
                      :rows="6"
                      v-model="form.name"
                    ></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item label-class-name="my-label">
                    <template slot="label">
                      何时参加何种学术 团体、任何种职务有何社会兼职
                    </template>
                    <el-input
                      type="textarea"
                      :rows="6"
                      v-model="form.name"
                    ></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item label-class-name="my-label">
                    <template slot="label"> 获何专家称号及时间 </template>
                    <el-input
                      type="textarea"
                      :rows="6"
                      v-model="form.name"
                    ></el-input>
                  </el-descriptions-item>
                </el-descriptions>
                <!-- 申请学科 -->
              </el-form>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import index from '@/components/Breadcrumb/index.vue';
export default {
  components: { index },
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
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
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
/**控制内容及意义一下的label宽度 */
.my-label {
  width: 230px;
}
</style>
