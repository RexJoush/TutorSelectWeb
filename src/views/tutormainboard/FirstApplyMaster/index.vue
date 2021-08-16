<!--
 * @Author: zjz
 * @Date: 2021-08-13 16:36:21
 * @LastEditors: Rex Joush
 * @LastEditTime: 2021-08-16 10:14:29
-->
<template>
  <div class="main">
    <el-row>
      <el-col :span="8" :offset="8">
        <el-steps :active="active" finish-status="success">
          <el-step title="基本信息"></el-step>
          <el-step title="研究信息"></el-step>
          <el-step title="学术信息"></el-step>
        </el-steps>
      </el-col>
    </el-row>
    <br />
    <!-- 第一页基本信息表格 -->
    <el-card class="box-card" v-if="formVisible.first">
      <div slot="header" class="clearfix">
        <h2>基本信息</h2>
      </div>
      <el-form
        ref="formFirst"
        :model="formFirst"
        label-width="100px"
        label-position="right"
      >
        <Row type="flex" justify="center" align="top" class="code-row-bg">
          <Col span="16">
            <Row>
              <Col :span="12">
                <el-form-item label="姓名">
                  <el-input v-model="formFirst.name"></el-input>
                </el-form-item>
              </Col>
              <Col :span="12">
                <el-form-item label="性别">
                  <el-radio v-model="formFirst.sex" label="男">男</el-radio>
                  <el-radio v-model="formFirst.sex" label="女">女</el-radio>
                </el-form-item>
              </Col>
              <Col :span="12">
                <el-form-item label="所在单位">
                  <el-input v-model="formFirst.department"></el-input>
                </el-form-item>
              </Col>
              <Col :span="12">
                <el-form-item label="出生年月">
                  <el-date-picker
                    v-model="formFirst.birthday"
                    type="date"
                    style="width: 100%"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </el-form-item>
              </Col>
              <Col :span="24">
                <el-form-item label="证件号码">
                  <el-input v-model="formFirst.idNumber"></el-input>
                </el-form-item>
              </Col>
              <Col :span="12">
                <el-form-item label="联系电话">
                  <el-input v-model="formFirst.phone"></el-input>
                </el-form-item>
              </Col>
              <Col :span="12">
                <el-form-item label="电子邮箱">
                  <el-input v-model="formFirst.email"></el-input>
                </el-form-item>
              </Col>
              <Col :span="12">
                <el-form-item label="职称">
                  <el-input v-model="formFirst.title"></el-input>
                </el-form-item>
              </Col>
              <Col :span="12">
                <el-form-item label="评定时间">
                  <el-date-picker
                    v-model="formFirst.titleAwardTime"
                    type="month"
                    style="width: 100%"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </el-form-item>
              </Col>
            </Row>
          </Col>
          <Col span="8">
            <el-form-item>
              <el-image
                style="width: 100px; height: 140px"
                src="https://www.rexjoush.com/img/1.jpg"
                fit="fit"
                ><div slot="placeholder" class="image-slot">
                  <i class="el-icon-picture-outline"></i></div
              ></el-image>
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件, 500kb以下
                </div>
              </el-upload>
            </el-form-item>
          </Col>
          <Col :span="8">
            <el-form-item label="最后学位">
              <el-select
                v-model="formFirst.lastDegree"
                style="width: 100%"
                placeholder="请选择"
              >
                <el-option key="学士" lable="学士" value="学士"></el-option>
                <el-option key="硕士" lable="硕士" value="硕士"></el-option>
                <el-option key="博士" lable="博士" value="博士"></el-option>
              </el-select>
            </el-form-item>
          </Col>
          <Col :span="8">
            <el-form-item label="授予单位">
              <el-input v-model="formFirst.awardDepartment"></el-input>
            </el-form-item>
          </Col>
          <Col :span="8">
            <el-form-item label="授予时间">
              <el-date-picker
                v-model="formFirst.awardTime"
                type="month"
                style="width: 100%"
                placeholder="选择日期"
              >
              </el-date-picker>
            </el-form-item>
          </Col>
        </Row>

        <el-form-item>
          <el-button type="primary" @click="onSubmitFirstPage"
            >保存此部分，填写下一项</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 第二页研究信息 -->
    <transition name="el-fade-in-linear">
      <el-card class="box-card" v-if="formVisible.second">
        <div slot="header" class="clearfix">
          <h2>研究信息</h2>
        </div>
        <el-form
          ref="formSecond"
          :model="formSecond"
          label-width="100px"
          label-position="top"
          v-if="formVisible.second"
        >
          <Row>
            <Col :span="24">
              <Row>
                <Col :span="6">
                  <el-form-item label="申请学科负责单位：">
                    <el-input></el-input>
                  </el-form-item>
                </Col>
                <Col :span="6" :offset="1">
                  <el-form-item label="一级学科代码">
                    <el-input></el-input>
                  </el-form-item>
                </Col>
                <Col :span="6" :offset="1">
                  <el-form-item label="一级学科名称">
                    <el-input></el-input>
                  </el-form-item>
                </Col>
              </Row>
            </Col>
            <Col :span="24">
              <el-form-item label="主要研究方向的内容及其意义">
                <el-input
                  type="textarea"
                  v-model="formSecond.major"
                  :autosize="{ minRows: 6 }"
                ></el-input>
              </el-form-item>
            </Col>
            <Col :span="24">
              <el-form-item
                v-model="formSecond.groupsOrPartTimeJobs"
                label="何时参加何种学术团体、任何种职务，有何社会兼职"
              >
                <el-button
                  @click="addGroupsOrPartTimeJob"
                  type="primary"
                  style="margin: 0 0 10px 10px"
                  >添加</el-button
                >
                <el-table
                  :data="formSecond.groupsOrPartTimeJobs"
                  style="width: 100%"
                >
                  <el-table-column label="参加时间" width="180">
                    <template slot-scope="scope">
                      <el-date-picker
                        v-model="scope.row.time"
                        type="month"
                        style="width: 100%"
                        placeholder="选择日期"
                      >
                      </el-date-picker>
                    </template>
                  </el-table-column>
                  <el-table-column label="学术团体或兼职" width="200">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.groups"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column label="所任职务">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.job"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column width="100">
                    <template slot-scope="scope">
                      <el-button
                        type="danger"
                        @click="delGroupsOrPartTimeJob(scope.$index)"
                        >删除</el-button
                      >
                    </template>
                  </el-table-column>
                </el-table>
                <!-- <el-descriptions
                class="margin-top"
                :column="2"
                :size="size"
                border
              >
                <el-descriptions-item>
                  <template slot="label"> 参加时间 </template>
                  <el-date-picker
                    v-model="formSecond.birthday"
                    type="date"
                    style="width: 100%"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label"> 学术团体或兼职 </template>
                  <el-input v-model="formSecond.major"></el-input>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label"> 所任职务 </template>
                  <el-input v-model="formSecond.major"></el-input>
                </el-descriptions-item>
              </el-descriptions>
              <div>
                <Row :gutter="16">
                  <Col :span="2">参加时间</Col>
                  <Col :span="6">
                    <el-date-picker
                      v-model="formSecond.birthday"
                      type="date"
                      style="width: 100%"
                      placeholder="选择日期"
                    >
                    </el-date-picker>
                  </Col>
                  <Col :span="3">学术团体或兼职</Col>
                  <Col :span="5">
                    <el-input v-model="formSecond.major"></el-input>
                  </Col>
                  <Col :span="2">所任职务</Col>
                  <Col :span="6">
                    <el-input v-model="formSecond.major"></el-input>
                  </Col>
                </Row>
              </div> -->
              </el-form-item>
            </Col>

            <Col :span="24">
              <el-form-item
                v-model="formSecond.expertTitles"
                label="获何专家称号及时间"
              >
                <el-button
                  @click="addExpertTitle"
                  type="primary"
                  style="margin: 0 0 10px 10px"
                  >添加</el-button
                >
                <el-table :data="formSecond.expertTitles" style="width: 100%">
                  <el-table-column label="获得时间" width="180">
                    <template slot-scope="scope">
                      <el-date-picker
                        v-model="scope.row.time"
                        type="month"
                        style="width: 100%"
                        placeholder="选择日期"
                      >
                      </el-date-picker>
                    </template>
                  </el-table-column>
                  <el-table-column label="称号名称">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.title"></el-input>
                    </template>
                  </el-table-column>
                  <!-- <el-table-column label="所任职务">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.job"></el-input>
                    </template>
                  </el-table-column> -->
                  <el-table-column width="100">
                    <template slot-scope="scope">
                      <el-button
                        type="danger"
                        @click="delExpertTitle(scope.$index)"
                        >删除</el-button
                      >
                    </template>
                  </el-table-column>
                </el-table>
              </el-form-item>
            </Col>
          </Row>
        </el-form>
      </el-card>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 步骤条
      active: 0,
      // 表格的隐藏和展示
      formVisible: {
        first: true,
        second: false,
        third: false,
      },
      // 第一页表单
      formFirst: {
        name: "", // 姓名
        sex: "", // 性别
        department: "", // 所在单位
        birthday: "", // 出生年月
        idNumber: "", // 证件号码
        phone: "", // 联系电话
        email: "", // 电子邮箱
        title: "", // 职称
        titleAwardTime: "", // 评定时间
        lastDegree: "", // 最后学位
        awardDepartment: "", // 授予单位
        awardTime: "", // 授予时间
      },

      // 第二页表单
      formSecond: {
        major: "", // 主要研究方向的内容及其意义
        groupsOrPartTimeJobs: [
          // 何时参加何种学术团体、任何种职务，有何社会兼职
          {
            time: "",
            groups: "",
            job: "",
          },
        ],
        expertTitles: [
          // 获何专家称号及时间
          {
            time: "",
            title: "",
          },
        ],
      },
    };
  },
  methods: {
    /* 第一页 */

    // 完成第一页基本信息的填写
    onSubmitFirstPage: function () {
      this.$confirm("提交填写?")
        // 提交保存第一页
        .then(() => {
          this.formVisible.first = false; // 关闭第一项
          this.formVisible.second = true; // 打开第二项
          this.active++;
        })
        .catch(() => {
          console.log("cancel");
        });
    },

    /* 第二页 */

    // 第二页添加学术团体项
    addGroupsOrPartTimeJob: function () {
      let obj = {
        time: "",
        groups: "",
        job: "",
      };
      this.formSecond.groupsOrPartTimeJobs.push(obj);
    },
    // 删除某项学术团体项
    delGroupsOrPartTimeJob: function (index) {
      this.formSecond.groupsOrPartTimeJobs.splice(index, 1);
    },

    // 添加某项专家称号
    addExpertTitle: function () {
      let obj = {
        time: "",
        title: "",
      };
      this.formSecond.expertTitles.push(obj);
    },
    // 删除某项专家称号
    delExpertTitle: function (index) {
      this.formSecond.expertTitles.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.margin-top {
  border-radius: 20px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 90%;
}
</style>