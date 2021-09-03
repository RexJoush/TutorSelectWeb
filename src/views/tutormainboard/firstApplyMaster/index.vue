<!--
 * @Author: zjz
 * @Date: 2021-08-13 16:36:21
 * @LastEditors: Rex Joush
 * @LastEditTime: 2021-08-19 20:16:38
-->
<template>
  <div class="main" v-loading="loading" element-loading-text="提交中...">
    <!-- 步骤条 -->
    <el-row>
      <el-col :span="8" :offset="8">
        <el-steps :active="active" finish-status="success">
          <el-step title="基本信息" />
          <el-step title="研究信息" />
          <el-step title="学术信息" />
          <el-step title="教学信息" />
        </el-steps>
      </el-col>
    </el-row>
    <br>
    <!-- 第 1 页基本信息 -->
    <el-row v-if="formVisible.first">
      <el-col :span="18" :offset="3">
        <el-card class="box-card">
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
              <Col :span="16">
                <Row>
                  <Col :span="12">
                    <el-form-item label="姓名">
                      <el-input v-model="formFirst.name" disabled />
                    </el-form-item>
                  </Col>
                  <Col :span="12">
                    <el-form-item label="性别">
                      <span style="color: #606266;">{{ formFirst.gender }}</span>
                      <!--                      <el-radio v-if="formFirst.gender === '男'" v-model="formFirst.gender" label="男">男</el-radio>-->
                      <!--                      <el-radio v-else v-model="formFirst.gender" disabled label="女">女</el-radio>-->
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
                      <!--                      <el-date-picker-->
                      <!--                        v-model="formFirst.birthday"-->
                      <!--                        type="date"-->
                      <!--                        style="width: 100%"-->
                      <!--                        placeholder="选择日期"-->
                      <!--                      />-->
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
                      <el-input v-model="formFirst.evaluateTime" disabled />
                      <!--                      <el-date-picker-->
                      <!--                        v-model="formFirst.evaluateTime"-->
                      <!--                        type="month"-->
                      <!--                        style="width: 100%"-->
                      <!--                        placeholder="选择日期"-->
                      <!--                      />-->
                    </el-form-item>
                  </Col>
                </Row>
              </Col>
              <Col span="8">
                <el-form-item>
                  <el-image
                    style="width: 150px; height: 210px"
                    src="https://www.rexjoush.com/img/1.jpg"
                    fit="fit"
                  >
                    <div slot="placeholder" class="image-slot"><i class="el-icon-picture-outline" /></div>
                  </el-image>
                  <!--                  <el-upload-->
                  <!--                    class="upload-demo"-->
                  <!--                    action="https://jsonplaceholder.typicode.com/posts/"-->
                  <!--                  >-->
                  <!--                    <el-button size="small" type="primary">点击上传</el-button>-->
                  <!--                    <div slot="tip" class="el-upload__tip">-->
                  <!--                      只能上传jpg/png文件, 500kb以下-->
                  <!--                    </div>-->
                  <!--                  </el-upload>-->
                </el-form-item>
              </Col>
              <Col :span="8">
                <el-form-item label="最后学位">
                  <el-input v-model="formFirst.finalDegree" disabled />
                  <!--                  <el-select-->
                  <!--                    v-model="formFirst.finalDegree"-->
                  <!--                    style="width: 100%"-->
                  <!--                    placeholder="请选择"-->
                  <!--                  >-->
                  <!--                    <el-option key="学士" lable="学士" value="学士" />-->
                  <!--                    <el-option key="硕士" lable="硕士" value="硕士" />-->
                  <!--                    <el-option key="博士" lable="博士" value="博士" />-->
                  <!--                  </el-select>-->
                </el-form-item>
              </Col>
              <Col :span="8">
                <el-form-item label="授予单位">
                  <el-input v-model="formFirst.awardDepartment" />
                </el-form-item>
              </Col>
              <Col :span="8">
                <el-form-item label="授予时间">
                  <!--                  <el-input v-model="formFirst.col1" disabled />-->
                  <el-date-picker
                    v-model="formFirst.awardTime"
                    type="month"
                    style="width: 100%"
                    placeholder="选择日期"
                  />
                </el-form-item>
              </Col>
            </Row>
            <Row>
              <Col :offset="7">
                <el-form-item style="margin-top: 20px">
                  <el-button type="primary" @click="onSubmitFirstPage">保存此部分，填写下一项</el-button>
                </el-form-item>
              </Col>
            </Row>
          </el-form>
        </el-card>
      </el-col>
    </el-row>

    <!-- 第 2 页研究信息 -->
    <el-row v-if="formVisible.second">
      <el-col :span="18" :offset="3">
        <transition name="el-fade-in-linear">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <h2>研究信息</h2>
            </div>
            <el-form
              ref="formSecond"
              :model="formSecond"
              label-width="100px"
              label-position="top"
            >
              <Row>
                <Col :span="24">
                  <Row>
                    <Col :span="8">
                      <el-form-item label="申请学科">
                        <el-select v-model="formSecond.applySubject" placeholder="请选择">
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
                        <el-select v-model="currentDepartment" placeholder="请选择" @change="setChildNode">
                          <el-option
                            v-for="item in academicMasterPrimaryDiscipline"
                            :key="item.department"
                            :label="item.department"
                            :value="item"
                            style="color: #606266; font-weight: normal"
                          />
                        </el-select>
                      </el-form-item>
                    </Col>
                    <Col :span="8">
                      <el-form-item label="一级学科代码及名称">
                        <el-select v-model="formSecond.doctoralMasterSubjectCodeName" placeholder="请选择">
                          <el-option
                            v-for="item in childNodes"
                            :key="item.code"
                            :label="item.code + ' ' + item.degreeAuthorizationPoint"
                            :value="item.code + ' ' + item.degreeAuthorizationPoint"
                          />
                        </el-select>
                      </el-form-item>
                    </Col>
                  </Row>
                </Col>
                <Col :span="24">
                  <el-form-item label="主要研究方向的内容及其意义">
                    <el-input v-model="formSecond.major" type="textarea" :autosize="{ minRows: 6 }" />
                  </el-form-item>
                </Col>
                <!-- 何时参加何种学术团体、任何种职务，有何社会兼职 -->
                <Col :span="24">
                  <el-form-item label="何时参加何种学术团体、任何种职务，有何社会兼职">
                    <el-button type="primary" class="addButton" @click="dialogSecond1 = true">添加</el-button>
                    <el-table :data="formSecond.groupsOrPartTimeJobs" border style="width: 100%">
                      <el-table-column type="index" width="50" label="序号" />
                      <el-table-column prop="time" label="参加时间" width="180" />
                      <el-table-column prop="groups" label="学术团体或兼职" width="200" />
                      <el-table-column prop="job" label="所任职务" />
                      <el-table-column label="操作">
                        <template slot-scope="scope">
                          <el-button size="mini" type="danger" plain @click="delGroupsOrPartTimeJob(scope.$index)">删 除</el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-form-item>
                </Col>
                <!-- 获何专家称号及时间 -->
                <Col :span="24">
                  <el-form-item v-model="formSecond.expertTitles" label="获何专家称号及时间">
                    <el-button type="primary" class="addButton" @click="dialogSecond2 = true">添加</el-button>
                    <el-table :data="formSecond.expertTitles" border style="width: 100%">
                      <el-table-column type="index" width="50" label="序号" />
                      <el-table-column label="获得时间" prop="time" width="180" />
                      <el-table-column label="称号名称" prop="title" />
                      <el-table-column width="100">
                        <template slot-scope="scope">
                          <el-button size="mini" type="danger" plain @click="delExpertTitle(scope.$index)">删 除</el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-form-item>
                </Col>
              </Row>
              <Row>
                <Col :offset="9">
                  <el-form-item style="margin-top: 20px">
                    <el-button type="primary" @click="onSubmitSecondPage">保存此部分，填写下一项</el-button>
                  </el-form-item>
                </Col>
              </Row>
            </el-form>
          </el-card>
        </transition>
      </el-col>
    </el-row>

    <!-- 第 3 页学术信息 -->
    <el-row v-if="formVisible.third">
      <el-col :span="18" :offset="3">
        <transition name="el-fade-in-linear">
          <Third :apply-id="applyId" :loading="loading" :apply-condition="applyCondition" :form-third="formThird" @func="getFormFourth" @load="loading = true"/>
        </transition>
      </el-col>
    </el-row>

    <!-- 第 4 页教学信息 -->
    <el-row v-if="formVisible.fourth">
      <el-col :span="18" :offset="3">
        <transition name="el-fade-in-linear">
          <Fourth :apply-id="applyId" :form-fourth="formFourth" :tutor-name="formFirst.name" />
        </transition>
      </el-col>
    </el-row>

    <!-- 第二页 弹框部分 -->
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
        <el-button type="primary" @click="addGroupsOrPartTimeJob">确 定</el-button>
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
import { academicMasterPrimaryDiscipline } from '@/utils/data'
import { submitFirstPage, submitSecondPage } from '@/api/tutor/applyMaster'
import { getTeacherInfo } from '@/api/tutor/mainboard'
import Third from '../Third'
import Fourth from '../Fourth'

export default {
  components: {
    Third,
    Fourth
  },
  data() {
    return {
      // 硕士学科代码
      academicMasterPrimaryDiscipline: academicMasterPrimaryDiscipline,
      // 提交的加载状态
      loading: false,
      // 当前的申请状态
      applyCondition: '',
      // 步骤条
      active: 0,
      // 表格的隐藏和展示
      formVisible: {
        first: true,
        second: false,
        third: false,
        fourth: false
      },
      applyId: '66', // 此次申请的id，在第一页提交时传回

      /* =========================  第 1 页  ================================= */
      formFirst: {
        tutorId: '202032978', // 教师工号
        name: '李一航', // 姓名
        gender: '男', // 性别
        image: 'https://www.rexjoush.com/img/1.jpg',
        organizationName: '24', // 所在单位
        birthday: '1997-10-01', // 出生年月
        identity: '411422199712195117', // 证件号码
        phone: '13598892696', // 联系电话
        email: '7772854362@qq.com', // 电子邮箱
        title: '教授', // 职称
        evaluateTime: '2021-07', // 评定时间
        finalDegree: '博士', // 最后学位
        awardDepartment: '西北大学', // 授予单位
        awardTime: '2021-02' // 授予时间
      },

      /* =========================  第 2 页  ================================= */
      childNodes: [], // 院系的子专业信息
      currentDepartment: '', // 院系信息
      dialogSecond1: false, // 学术团体或职务的显示框
      dialogSecond2: false, // 专家称号的显示框
      applySubjects: [
        { label: '文史', value: 1 },
        { label: '理工', value: 2 },
        { label: '交叉学科', value: 3 }
      ], // 申请类型
      formSecond: {
        applySubject: '', // 申请学科
        doctoralMasterApplicationSubjectUnit: '', // 申请学科负责单位
        doctoralMasterSubjectCodeName: '', // 一级学科代码 + " " + 名称
        major: '', // 主要研究方向的内容及其意义
        groupsOrPartTimeJobs: [], // 何时参加何种学术团体、任何种职务，有何社会兼职列表
        expertTitles: [] // 获何专家称号及时间列表
      },
      groupsOrPartTimeJob: {
        time: '',
        groups: '',
        job: ''
      },
      expertTitle: {
        time: '',
        title: ''
      },
      /* =========================  第 3 页  ================================= */
      formThird: {},

      /* =========================  第 4 页  ================================= */
      // 第四页提交信息
      formFourth: {},
      dialogFourth1: false, // 社科学术论文添加按钮
      dialogFourth2: false, // 理工学术论文添加按钮
      dialogFourth3: false, // 科研项目添加按钮

      // 学生信息
      guidingStudent: {
        studentName: '', // 学生姓名
        studentType: '', // 学生类型，用于区分是本科生，硕士生和博士生
        studentEntryTime: '', // 学生入学时间
        degreePaperTitle: '', // 学位论文题目
        isGainDegree: '', // 是否获得学位
        directType: '', // 指导类型，协助指导，指导
        tutorName: '', // 导师姓名
        graduateTime: '' // 毕业时间
      },

      // 研究生课程教学情况
      courseTeaching: {
        courseName: '', // 课程名称
        courseTime: '', // 课程时间
        courseDuration: '', // 授课总课时
        courseObject: '' // 授课对象
      }

    }
  },
  created() {
    // 拉取首页基本信息
    this.applyCondition = this.$route.params.applyCondition
    this.getTeacherInfo()
  },
  methods: {
    /* =========================  第 1 页  ================================= */

    // 拉取基本信息
    getTeacherInfo: function() {
      getTeacherInfo().then((res) => {
        if (res.data.code === 1201) {
          this.$message.error(res.data.message)
          this.$router.push('/tutorApply/tutorMainBoard')
          return
        }
        console.log(res)
        this.formFirst.tutorId = res.data.zgh
        this.formFirst.name = res.data.xm
        this.formFirst.gender = res.data.xb
        this.formFirst.image = res.data.shz
        this.formFirst.birthday = res.data.csrq.split(' ')[0]
        this.formFirst.organizationName = res.data.mc
        this.formFirst.identity = res.data.sfzjh
        this.formFirst.phone = res.data.sjh
        this.formFirst.title = res.data.zcmc
        this.formFirst.finalDegree = res.data.zgxw
      })
    },

    // 完成第 1 页基本信息的填写
    onSubmitFirstPage: function() {
      this.$confirm('提交填写?')
        // 提交保存第 1 页
        .then(() => {
          this.loading = true
          submitFirstPage(this.formFirst, 4, this.applyCondition)
            .then(res => {
              if (res.data.code === 1201) {
                this.$message.error(res.data.message)
                console.log(res.data.errorMessage)
                return
              }
              console.log(res.data)
              this.applyId = res.data.applyId
              if (res.data.applySubject !== null) {
                this.formSecond.applySubject = res.data.applySubject * 1
              } else {
                this.formSecond.applySubject = ''
              }
              this.formSecond.doctoralMasterApplicationSubjectUnit = res.data.doctoralMasterApplicationSubjectUnit
              this.currentDepartment = res.data.doctoralMasterApplicationSubjectUnit
              if (res.data.doctoralMasterSubjectCode !== null) {
                this.formSecond.doctoralMasterSubjectCodeName = res.data.doctoralMasterSubjectCode + ' ' + res.data.doctoralMasterSubjectName
              } else {
                this.formSecond.doctoralMasterSubjectCodeName = ''
              }
              this.formSecond.major = res.data.major
              this.formSecond.groupsOrPartTimeJobs = res.data.groupsOrPartTimeJobs
              this.formSecond.expertTitles = res.data.expertTitles

              console.log(res)
              this.formVisible.first = false // 关闭第 1 页
              this.loading = false
              this.formVisible.second = true // 打开第 2 页
              this.active = 1
            })
        })
        .catch(() => {
          console.log('cancel')
        })
    },

    /* =========================  第 2 页  ================================= */

    // 完成第 2 页研究信息的填写
    onSubmitSecondPage: function() {
      this.$confirm('提交填写?')
        // 提交保存第 2 页
        .then(() => {
          this.loading = true
          console.log(this.formSecond)
          submitSecondPage(this.formSecond, 4, this.applyId, this.applyCondition).then(res => {
            if (res.data.code === 1201) {
              this.$message.error(res.data.message)
              console.log(res.data.errorMessage)
              return
            }
            console.log(res.data)
            this.formThird = res.data
            this.formVisible.second = false // 关闭第 2 页
            this.loading = false
            this.formVisible.third = true // 打开第 3 页
            this.active = 2
          })
        })
        .catch(() => {
          console.log('cancel')
        })
    },
    // 设置选择院系的子专业
    setChildNode: function(value) {
      // 将子列表的选择置空
      this.formSecond.doctoralMasterSubjectCodeName = ''
      // 将当前选择加入 form 提交中
      this.formSecond.doctoralMasterApplicationSubjectUnit = value.department
      // 修改当前页面的显示院系
      this.currentDepartment = value.department
      // 设置子项目为当前院系的专业
      this.childNodes = value.professional
    },

    // 添加学术团体项
    addGroupsOrPartTimeJob: function() {
      console.log(this.groupsOrPartTimeJob)
      this.formSecond.groupsOrPartTimeJobs.push(this.groupsOrPartTimeJob)
      this.groupsOrPartTimeJob = {
        time: '',
        groups: '',
        job: ''
      }
      this.dialogSecond1 = false
    },

    // 删除学术团体项
    delGroupsOrPartTimeJob: function(index) {
      this.formSecond.groupsOrPartTimeJobs.splice(index, 1)
    },

    // 添加某项专家称号
    addExpertTitle: function() {
      this.formSecond.expertTitles.push(this.expertTitle)
      this.expertTitle = {
        time: '',
        title: ''
      }
      this.dialogSecond2 = false
    },
    // 删除某项专家称号
    delExpertTitle: function(index) {
      this.formSecond.expertTitles.splice(index, 1)
    },

    /* =========================  第 4 页  ================================= */
    // 获取第三页传来的初始化信息
    getFormFourth: function(data) {
      console.log('data', data)
      this.formFourth = data
      this.formVisible.third = false // 关闭第 3 页
      this.loading = false
      this.formVisible.fourth = true // 打开第 4 页
      this.active = 3
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}

.summary {
  font-weight: bold;
  color: #F56C6C;
}

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
  width: 100%;
}
</style>
