<template>
  <div class="main">
    <el-row>
      <el-col :span="8" :offset="8">
        <el-steps :active="active" finish-status="success">
          <el-step title="基本信息"></el-step>
          <el-step title="研究信息"></el-step>
          <el-step title="学术信息"></el-step>
          <el-step title="教学信息"></el-step>
        </el-steps>
      </el-col>
    </el-row>
    <br />
    <!-- 第一页内容 -->
    <el-row>
      <el-col :span="18" :offset="3">
        <el-card class="box-card" v-if="formVisible.first">
          <div slot="header" class="clearfix">
            <h2>基本信息</h2>
          </div>
          <el-form
            ref="formFirst"
            :model="formFirst"
            label-width="100px"
            label-position="right"
            v-loading="firstloading"
          >
            <Row type="flex" justify="center" align="top" class="code-row-bg">
              <Col :span="16">
                <Row>
                  <Col :span="12">
                    <el-form-item label="姓名">
                      <el-input v-model="formFirst.name" disabled />
                    </el-form-item>
                  </Col>
                  <Col :span="12">
                    <el-form-item label="性别">
                      <span style="color: #606266">{{ formFirst.gender }}</span>
                    </el-form-item>
                  </Col>
                  <Col :span="12">
                    <el-form-item label="所在单位">
                      <el-input v-model="formFirst.organizationName" disabled />
                    </el-form-item>
                  </Col>
                  <Col :span="12">
                    <el-form-item label="出生年月">
                      <el-input v-model="formFirst.birthday" disabled />
                    </el-form-item>
                  </Col>
                  <Col :span="12">
                    <el-form-item label="工号">
                      <el-input v-model="formFirst.tutorId" :disabled="true" />
                    </el-form-item>
                  </Col>
                  <Col :span="12">
                    <el-form-item label="证件号码">
                      <el-input v-model="formFirst.identity" disabled />
                    </el-form-item>
                  </Col>
                  <Col :span="12">
                    <el-form-item label="联系电话">
                      <el-input v-model="formFirst.phone" />
                    </el-form-item>
                  </Col>
                  <Col :span="12">
                    <el-form-item label="电子邮箱">
                      <el-input v-model="formFirst.email" />
                    </el-form-item>
                  </Col>
                  <Col :span="12">
                    <el-form-item label="职称">
                      <el-input v-model="formFirst.title" disabled />
                    </el-form-item>
                  </Col>
                  <Col :span="12">
                    <el-form-item label="评定时间">
                      <el-date-picker
                        v-model="formFirst.evaluateTime"
                        type="month"
                        style="width: 100%"
                        placeholder="选择日期"
                        format="yyyy-MM"
                        value-format="yyyy-MM"
                      />
                    </el-form-item>
                  </Col>
                </Row>
              </Col>
              <Col :span="8">
                <br />
                <br />
                <br />
                <el-form-item>
                  <el-image
                    style="width: 150px; height: 210px"
                    :src="this.formFirst.image"
                    fit="fit"
                  >
                    <div slot="placeholder" class="image-slot">
                      <i class="el-icon-picture-outline" />
                    </div>
                  </el-image>
                </el-form-item>
              </Col>

              <Col :span="8">
                <el-form-item label="最后学位">
                  <el-input v-model="formFirst.finalDegree" disabled />
                </el-form-item>
              </Col>
              <Col :span="8">
                <el-form-item label="授予单位">
                  <el-input v-model="formFirst.awardDepartment" />
                </el-form-item>
              </Col>
              <Col :span="8">
                <el-form-item label="授予时间">
                  <!--<el-input v-model="formFirst.col1" disabled />-->
                  <el-date-picker
                    v-model="formFirst.awardTime"
                    type="month"
                    style="width: 100%"
                    placeholder="选择日期"
                    format="yyyy-MM"
                    value-format="yyyy-MM"
                  />
                </el-form-item>
              </Col>
            </Row>
            <Row>
              <Col :offset="8">
                <el-form-item style="margin-top: 20px">
                  <el-button type="primary" @click="onSubmitFirstPage"
                    >保存此部分，填写下一项</el-button
                  >
                </el-form-item>
              </Col>
            </Row>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <!-- 第二页研究信息 -->
    <Row>
      <Col :span="18" :offset="3">
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
                  <Row :gutter="20">
                    <Col :span="8">
                      <el-form-item label="申请学科">
                        <el-select
                          style="width: 100%"
                          v-model="formSecond.applySubject"
                          placeholder="请选择"
                        >
                          <el-option
                            v-for="item in applySubjects"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </el-form-item>
                    </Col>
                    <Col :span="8">
                      <el-form-item label="申请学科负责单位：">
                        <el-select
                          style="width: 100%"
                          v-model="formSecond.appliedSubjectUnit"
                          placeholder="请选择"
                          @change="setChildNode"
                        >
                          <el-option
                            v-for="item in doctorPrimaryDiscipline"
                            :key="item.department"
                            :label="item.department"
                            :value="item"
                            style="color: #606266; font-weight: normal"
                          >
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </Col>
                    <Col :span="8">
                      <el-form-item label="一级学科代码及名称">
                        <el-select
                          style="width: 100%"
                          v-model="formSecond.doctoralMasterSubjectCodeName"
                          placeholder="请选择"
                        >
                          <el-option
                            v-for="item in childNodes"
                            :key="item.code"
                            :label="
                              item.code + ' ' + item.degreeAuthorizationPoint
                            "
                            :value="
                              item.code + ' ' + item.degreeAuthorizationPoint
                            "
                          >
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </Col>
                    <Col :span="8">
                      <el-form-item label="硕士招生学科">
                        <el-input v-model="formSecond.masterDirectorSubject" />
                      </el-form-item>
                    </Col>
                    <Col :span="8">
                      <el-form-item label="硕导上岗时间">
                        <el-date-picker
                          v-model="formSecond.masterDirectorTime"
                          format="yyyy-MM"
                          value-format="yyyy-MM"
                          type="month"
                          style="width: 100%"
                          placeholder="选择时间"
                        />
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
                  <el-form-item label="免审条件">
                    <el-button type="primary" class="addButton" size="small"
                      >上传证明材料</el-button
                    >
                    仅支持.rar/.zip文件
                    <el-input
                      type="textarea"
                      v-model="formSecond.exemptionConditions"
                      :autosize="{ minRows: 6 }"
                    ></el-input>
                  </el-form-item>
                </Col>
                </Row>
           
                <Col :span="24">
                  <!-- 科研项目（近五年） -->
                  <el-card class="box-card" shadow="always">
                    <div slot="header" class="clearfix">
                      <span style="font-size: 18px">科研项目（近五年）</span>
                      <el-button
                        class="addButton"
                        style="float: right"
                        type="primary"
                        @click="addFunc(3)"
                        >添加科研项目</el-button
                      >
                    </div>
                    <el-table
                      :data="formSecond.researchProjects"
                      border
                      style="width: 100%"
                    >
                      <el-table-column type="index" label="序号" width="50" />
                      <el-table-column prop="projectName" label="项目名称" />
                      <el-table-column prop="approvalNumber" label="批准号" />
                      <el-table-column
                        prop="projectChargeName"
                        label="负责人姓名"
                        width="100"
                      />
                      <el-table-column
                        prop="projectStartTime"
                        label="开始日期"
                      />
                      <el-table-column prop="projectEndTime" label="结束日期" />
                      <el-table-column
                        prop="projectCategory"
                        label="项目分类"
                      />
                      <el-table-column
                        prop="projectTotalPrice"
                        label="总经费"
                        width="120"
                      />
                      <el-table-column prop="projectLevel" label="项目级别" />
                      <el-table-column
                        label="证明资料"
                        width="90"
                        align="center"
                      >
                        <!-- <template slot-scope="scope">
                <a target="_blank" :href="scope.row.projectProveMaterials"
                  ><el-button size="mini" type="primary" plain
                    >查 看</el-button
                  ></a
                >
              </template> -->
                      </el-table-column>
                      <el-table-column label="操作" align="center" width="90">
                        <!-- <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  plain
                  @click="deleteFunc(scope.$index, scope.row, 2)"
                  >删 除</el-button
                >
              </template> -->
                      </el-table-column>
                    </el-table>
                  </el-card>                 
                </Col>
                <br />
                <!-- 科研教学奖励（近五年） -->
                <Col :span="24">
                  <el-card class="box-card" shadow="always">
                    <div slot="header" class="clearfix">
                      <span style="font-size: 18px"
                        >科研教学奖励（近五年）</span
                      >
                      <el-button
                      style="float:right"
                          class="addButton"
                          type="primary"
                          @click="addFunc(5)"
                          >添加科研教学奖励</el-button
                        >
                    </div>
                
                    <el-table
                      :data="formSecond.teachingAwards"
                      border
                      style="width: 100%"
                    >
                      <el-table-column type="index" label="序号" width="50px" />
                      <el-table-column prop="awardsName" label="奖励名称" />
                      <el-table-column prop="awardsRank" label="排名" />
                      <el-table-column prop="awardsUnit" label="颁奖单位" />
                      <el-table-column prop="awardsLevel" label="获奖级别" />
                      <el-table-column prop="awardsTime" label="获奖日期" />
                      <el-table-column
                        prop="awardsAuthorName"
                        label="获奖人姓名"
                      />
                      <el-table-column
                        label="证明资料"
                        width="90"
                        align="center"
                      >
                        <template slot-scope="scope">
                          <a
                            target="_blank"
                            :href="scope.row.awardsProveMaterials"
                            ><el-button size="mini" type="primary" plain
                              >查 看</el-button
                            ></a
                          >
                        </template>
                      </el-table-column>
                      <el-table-column label="操作" align="center" width="90">
                        <template slot-scope="scope">
                          <el-button
                            size="mini"
                            type="danger"
                            plain
                            @click="deleteFunc(scope.$index, scope.row, 4)"
                            >删 除</el-button
                          >
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-card>
                </Col>               

              <Row>
                <Col :offset="8">
                  <el-form-item style="margin-top: 20px">
                    <!-- <el-button @click="backFirstPage">返回上一页</el-button> -->
                    <el-button type="primary" @click="onSubmitSecondPage"
                      >保存此部分，填写下一项</el-button
                    >
                  </el-form-item>
                </Col>
              </Row>
            </el-form>
          </el-card>
        </transition>
      </Col>
    </Row>
    <!-- 第二页弹框内容 -->
    
  </div>
</template>

<script>
import { doctorPrimaryDiscipline } from "@/utils/data";

import { getFirstPage } from "@/api/tutor/mainboard";

export default {
  data() {
    return {
      //第一页loading
      firstloading: true,
      // 提交的加载状态
      loading: false,
      // 博士学科代码
      doctorPrimaryDiscipline: doctorPrimaryDiscipline,
      // 步骤条
      active: 0,
      // 页数的隐藏和展示
      formVisible: {
        first: true,
        second: false,
        third: false,
        fourth: false,
      },
      applyCondition: 0, //申请的状态  修改还是未申请
      /**第一页 */
      // 第 1 页表单
      id: 0, //回传apply中id主键值
      formFirst: {},
      // ===========================================================第 2 页表单===================================
      childNodes: [], // 院系的子专业信息
      currentDepartment: "", // 院系信息
      dialogSecond1: false, // 学术团体或职务的显示框
      dialogSecond2: false, // 专家称号的显示框
      //申请类型
      applySubjects: [
        { label: "文史", value: 1 },
        { label: "理工", value: 2 },
        { label: "交叉学科", value: 3 },
      ],

      formSecond: {
        //=========博士增岗 非免审============
        doctoralTutorOnDuty: "",
        doctoralStartTime: "",
        //外单位调入填写
        sourceUnitName: "",
        transferInTime: "",

        applySubject: "", // 申请学科
        doctoralMasterApplicationSubjectUnit: "", // 申请学科负责单位
        doctoralMasterSubjectCodeName: "", // 一级学科代码 + " " + 名称
        major: "", // 主要研究方向的内容及其意义
        groupsOrPartTimeJobs: [], // 何时参加何种学术团体、任何种职务，有何社会兼职列表
        expertTitles: [], // 获何专家称号及时间列表
      },
      groupsOrPartTimeJob: {
        time: "",
        groups: "",
        job: "",
      },
      expertTitle: {
        time: "",
        title: "",
      },
    };
  },
  created() {
    this.GetTutorInfoByClient();
  },
  methods: {
    /*============================================= 第一页 =====================================*/
    //获取导师基本信息
    GetTutorInfoByClient: function () {
      this.id = this.$route.params.applyId;
      this.applyCondition = this.$route.params.applyCondition;
      getFirstPage(this.applyCondition, this.id).then((res) => {
        this.formFirst = res.data;
        //未申请过
        if (this.applyCondition * 1 === 102) {
          this.formFirst.image =
            "data:image/png;base64," + this.formFirst.blobImage;
        }
        this.firstloading = false;
      });
    },
    //******************************************************第一页 *****************************************
    onSubmitFirstPage: function () {
      this.$confirm("提交填写?")
        // 提交保存第一页
        .then(() => {
          //博士免审提交到后台
          this.formFirst.image = "";
          //   submitFirstPage(this.formFirst, this.applyCondition, this.id)
          //     .then((res) => {
          //       if (res.code == 20000) {
          this.$message.success("保存成功！");
          this.formVisible.first = false; // 关闭第一项
          this.formVisible.second = true; // 打开第二项
          this.active = 1;
          //   } else {
          //     this.$message.error;
          //     ("保存失败！");
          //   }
          // })
          // .catch(() => {
          //   console.log("cancel");
          // });
        })
        .catch(() => {
          console.log("cancel");
        });
    },
    /*====================================第二页============================ */
    // 第 2 页添加学术团体项 弹框
    addGroupsOrPartTimeJob: function () {
      this.formSecond.groupsOrPartTimeJobs.push(this.groupsOrPartTimeJob);
      this.groupsOrPartTimeJob = {
        time: "",
        groups: "",
        job: "",
      };
      this.dialogSecond1 = false;
    },
    // 删除某项学术团体项
    delGroupsOrPartTimeJob: function (index) {
      this.formSecond.groupsOrPartTimeJobs.splice(index, 1);
    },
    // 添加某项专家称号 弹框
    addExpertTitle: function () {
      this.formSecond.expertTitles.push(this.expertTitle);
      this.expertTitle = {
        time: "",
        title: "",
      };
      this.dialogSecond2 = false;
    },
    // 删除某项专家称号
    delExpertTitle: function (index) {
      this.formSecond.expertTitles.splice(index, 1);
    },
    // 设置选择院系的子专业
    setChildNode: function (value) {
      // 将子列表的选择置空
      this.formSecond.doctoralMasterSubjectCodeName = "";
      // 将当前选择加入 form 提交中
      this.formSecond.doctoralMasterApplicationSubjectUnit = value.department;
      // 修改当前页面的显示院系
      this.currentDepartment = value.department;
      // 设置子项目为当前院系的专业
      this.childNodes = value.professional;
    },
    //************************************************ 完成第二页基本信息的填写 表单提交按钮********************************************
    onSubmitSecondPage: function () {
      console.log(this.formSecond);
      this.$confirm("提交填写?")
        // 提交保存第二页
        .then(() => {
          this.$message.success("保存成功!");
          this.formVisible.second = false; // 关闭第二项
          this.$router.push("/");

          this.active = 2;
        })
        .catch(() => {
          console.log("cancel");
        });
    },
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
/**申请学科的label宽度 */
.my-applysubject {
  width: 230px;
}
p {
  font-size: 20px;
}
.summary {
  font-weight: bold;
  color: #f56c6c;
}
</style>
