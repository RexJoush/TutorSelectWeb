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
                      <el-form-item label="申请学科" >
                        <el-select 
                          style="width: 100%;"
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
                        style="width: 100%;"
                          v-model="
                            formSecond.doctoralMasterApplicationSubjectUnit
                          "
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
                        style="width: 100%;"
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
                      <el-form-item label="博导在岗学科">
                        <el-input v-model="formSecond.doctoralTutorOnDuty" />
                      </el-form-item>
                    </Col>
                    <Col :span="8">
                      <el-form-item label="上岗时间">
                    
                        <el-date-picker
                          v-model="formSecond.doctoralStartTime"
                          format="yyyy-MM"
                          value-format="yyyy-MM"
                          type="month"
                          style="width: 100%"
                          placeholder="选择时间"
                        />
                      </el-form-item>
                    </Col>
                  </Row>
                  <el-divider content-position="left"><b><span style="color: red;">*</span> 仅外单位调入填写</b></el-divider>      
                  <Row :gutter="20">                      
                    <Col :span="8">
                      <el-form-item label="原单位名称">
                        <el-input v-model="formSecond.sourceUnitName" />
                      </el-form-item>
                    </Col>
                    <Col :span="8">
                      <el-form-item label="调入时间">
                        <el-date-picker
                          v-model="formSecond.transferInTime"
                          format="yyyy-MM"
                          value-format="yyyy-MM"
                          type="month"
                          style="width: 100%"
                          placeholder="选择时间"
                        />
                      </el-form-item>
                    </Col>        
                  </Row>
 
                  <el-divider />
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
                    label="何时参加何种学术团体、任何种职务，有何社会兼职"
                  >
                    <el-button
                      type="primary"
                      class="addButton"
                      @click="dialogSecond1 = true"
                      >添加</el-button
                    >
                    <el-table
                      :data="formSecond.groupsOrPartTimeJobs"
                      border
                      style="width: 100%"
                    >
                      <el-table-column type="index" width="50" label="序号" />
                      <el-table-column
                        prop="time"
                        label="参加时间"
                        width="180"
                      />
                      <el-table-column
                        prop="groups"
                        label="学术团体或兼职"
                        width="200"
                      />
                      <el-table-column prop="job" label="所任职务" />
                      <el-table-column label="操作" width="100">
                        <template slot-scope="scope">
                          <el-button
                            type="danger"
                            @click="delGroupsOrPartTimeJob(scope.$index)"
                            >删除</el-button
                          >
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-form-item>
                </Col>

                <Col :span="24">
                  <el-form-item
                    v-model="formSecond.expertTitles"
                    label="获何专家称号及时间"
                  >
                    <el-button
                      type="primary"
                      class="addButton"
                      @click="dialogSecond2 = true"
                      >添加</el-button
                    >
                    <el-table
                      :data="formSecond.expertTitles"
                      border
                      style="width: 100%"
                    >
                      <el-table-column type="index" width="50" label="序号" />
                      <el-table-column
                        label="获得时间"
                        prop="time"
                        width="180"
                      />
                      <el-table-column label="称号名称" prop="title" />
                      <el-table-column width="100" label="操作">
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
    <!-- 第3页内容 -->
    <el-row v-if="formVisible.third">
      <el-col :span="18" :offset="3">
        <transition name="el-fade-in-linear">
          <Third
            :apply-id="id"
            :loading="loading"
            :apply-condition="applyCondition"
            :form-third="formThird"
            @func="getFormFourth"
            @load=" loading = true"
          />
        </transition>
      </el-col>
    </el-row>
    <!-- 第3页内容结束 -->
    <!-- 第 4 页教学信息 -->
    <el-row v-if="formVisible.fourth">
      <el-col :span="18" :offset="3">
        <transition name="el-fade-in-linear">
          <Fourth
            :apply-id="id"
            :form-fourth="formFourth"
            :tutor-name="formFirst.name"
          />
        </transition>
      </el-col>
    </el-row>

    <!-- 第4页内容 结束-->

    <!-- 第二页弹框内容 -->
    <!-- 学术团体框 -->
    <el-dialog title="添加学术团体或职务" :visible.sync="dialogSecond1">
      <el-form ref="groupsOrPartTimeJobForm" :model="groupsOrPartTimeJob">
        <el-form-item label="参加学术团体、或职务或社会兼职的时间">
          <el-date-picker
            v-model="groupsOrPartTimeJob.time"
            type="month"
            format="yyyy-MM"
            value-format="yyyy-MM"
            style="width: 100%"
            placeholder="选择日期"
          />
        </el-form-item>
        <el-form-item label="学术团体、或职务，或兼职名称">
          <el-input v-model="groupsOrPartTimeJob.groups" />
        </el-form-item>
        <el-form-item label="所任职务">
          <el-input v-model="groupsOrPartTimeJob.job" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogSecond1 = false">取 消</el-button>
        <el-button type="primary" @click="addGroupsOrPartTimeJob"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <!-- 专家称号框 -->
    <el-dialog title="添加学术团体或职务" :visible.sync="dialogSecond2">
      <el-form :model="expertTitle">
        <el-form-item label="获得专家称号时间">
          <el-date-picker
            v-model="expertTitle.time"
            type="month"
            format="yyyy-MM"
            value-format="yyyy-MM"
            style="width: 100%"
            placeholder="选择日期"
          />
        </el-form-item>
        <el-form-item label="称号名称">
          <el-input v-model="expertTitle.title" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogSecond2 = false">取 消</el-button>
        <el-button type="primary" @click="addExpertTitle">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { doctorPrimaryDiscipline } from "@/utils/data";
import {
  submitFirstPage,
  submitSecondPage,
} from "@/api/tutor/ApplyDoctor/addApplyDoctor";
import { getFirstPage } from "@/api/tutor/mainboard";
import Third from "../Third";
import Fourth from "../Fourth";

export default {
  components: { Third , Fourth },
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
      formFirst: {
        // tutorId: "", // 教师工号
        // name: "", // 姓名
        // gender: "", // 性别
        // image: "",
        // organizationName: "", // 所在单位
        // birthday: "", // 出生年月
        // identity: "", // 证件号码
        // phone: "", // 联系电话
        // email: "", // 电子邮箱
        // title: "", // 职称
        // evaluateTime: "", // 评定时间
        // finalDegree: "", // 最后学位
        // awardDepartment: "", // 授予单位
        // awardTime: "", // 授予时间
        
      },
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
        doctoralTutorOnDuty: '',
        doctoralStartTime: '',
        //外单位调入填写
        sourceUnitName: '',
        transferInTime: '',

        applySubject: '', // 申请学科
        doctoralMasterApplicationSubjectUnit: '', // 申请学科负责单位
        doctoralMasterSubjectCodeName: '', // 一级学科代码 + " " + 名称
        major: '', // 主要研究方向的内容及其意义
        groupsOrPartTimeJobs: [], // 何时参加何种学术团体、任何种职务，有何社会兼职列表
        expertTitles: [], // 获何专家称号及时间列表
      },
      groupsOrPartTimeJob: {
        time: '',
        groups: '',
        job: '',
      },
      expertTitle: {
        time: '',
        title: '',
      },
      /**第三页表单 */
      formThird: {},
   
      /* =========================  第 4 页  ================================= */
      // 第四页提交信息
      formFourth: {},

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
          //博士增岗提交到后台
          this.formFirst.image = "";
          submitFirstPage(this.formFirst, this.applyCondition, this.id)
            .then((res) => {
              if (res.code == 20000) {
                this.$message.success("保存成功！");
                this.formSecond = res.data;
                console.log(res.data);
                this.id = res.data.applyId; //主键applyId
                //信息填写到第二页
                if (res.data.applySubject == null) {
                  this.formSecond.applySubject = "";
                } else {
                  this.formSecond.applySubject = res.data.applySubject * 1;
                }
                this.formVisible.first = false; // 关闭第一项
                this.formVisible.second = true; // 打开第二项
                this.active = 1;
              } else {
                this.$message.error;
                ("保存失败！");
              }
            })
            .catch(() => {
              console.log("cancel");
            });
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
        console.log(this.formSecond)
      this.$confirm("提交填写?")
        // 提交保存第二页
        .then(() => {
          submitSecondPage(this.formSecond, this.applyCondition, this.id).then(
            (res) => {
              if (res.data.code === 1201) {
                this.$message.error(res.data.message);
                console.log(res.data.errorMessage);
                return;
              }
              this.formThird = res.data;
              //更新成功
              this.$message.success("保存成功!");
              this.formVisible.second = false; // 关闭第二项
              //将第三页信息传入到
              this.formVisible.third = true; // 打开第三项
              this.active = 2;
            }
          );
        })
        .catch(() => {
          console.log("cancel");
        });
    },

    /* =========================  第 4 页  ================================= */
    // 获取第三页传来的初始化信息 this.$emit
    getFormFourth: function(data) {
      console.log('data', data)
      this.formFourth = data
      this.formVisible.third = false // 关闭第 3 页
      this.loading = false
      this.formVisible.fourth = true // 打开第 4 页
      this.active = 3
    }
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
