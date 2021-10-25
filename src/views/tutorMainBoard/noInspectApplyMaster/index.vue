<template>
  <div class="main">
    <el-row>
      <el-col :span="8" :offset="8">
        <el-steps :active="active" finish-status="success">
          <el-step title="基本信息" />
          <el-step title="研究信息" />
        </el-steps>
      </el-col>
    </el-row>
    <br>
    <!-- 第一页内容 -->
    <el-row v-if="formVisible.first">
      <el-col :span="18" :offset="3">
        <transition name="el-fade-in-linear">
          <First :apply-id="applyId" :apply-type="applyType" :apply-condition="applyCondition" @func="getFormSecond" @load="loading = true" />
        </transition>
      </el-col>
    </el-row>
    <!--    <el-row>-->
    <!--      <el-col :span="18" :offset="3">-->
    <!--        <el-card v-if="formVisible.first" class="box-card">-->
    <!--          <div slot="header" class="clearfix">-->
    <!--            <h2>基本信息</h2>-->
    <!--          </div>-->
    <!--          <el-form-->
    <!--            ref="formFirst"-->
    <!--            v-loading="firstLoading"-->
    <!--            :model="formFirst"-->
    <!--            label-width="100px"-->
    <!--            label-position="right"-->
    <!--          >-->
    <!--            <Row type="flex" justify="center" align="top" class="code-row-bg">-->
    <!--              <Col :span="16">-->
    <!--                <Row>-->
    <!--                  <Col :span="12">-->
    <!--                    <el-form-item label="姓名">-->
    <!--                      <el-input v-model="formFirst.name" disabled />-->
    <!--                    </el-form-item>-->
    <!--                  </Col>-->
    <!--                  <Col :span="12">-->
    <!--                    <el-form-item label="性别">-->
    <!--                      <span style="color: #606266">{{ formFirst.gender }}</span>-->
    <!--                    </el-form-item>-->
    <!--                  </Col>-->
    <!--                  <Col :span="12">-->
    <!--                    <el-form-item label="所在单位">-->
    <!--                      <el-input v-model="formFirst.organizationName" disabled />-->
    <!--                    </el-form-item>-->
    <!--                  </Col>-->
    <!--                  <Col :span="12">-->
    <!--                    <el-form-item label="出生年月">-->
    <!--                      <el-input v-model="formFirst.birthday" disabled />-->
    <!--                    </el-form-item>-->
    <!--                  </Col>-->
    <!--                  <Col :span="12">-->
    <!--                    <el-form-item label="工号">-->
    <!--                      <el-input v-model="formFirst.tutorId" :disabled="true" />-->
    <!--                    </el-form-item>-->
    <!--                  </Col>-->
    <!--                  <Col :span="12">-->
    <!--                    <el-form-item label="证件号码">-->
    <!--                      <el-input v-model="formFirst.identity" disabled />-->
    <!--                    </el-form-item>-->
    <!--                  </Col>-->
    <!--                  <Col :span="12">-->
    <!--                    <el-form-item label="联系电话">-->
    <!--                      <el-input v-model="formFirst.phone" />-->
    <!--                    </el-form-item>-->
    <!--                  </Col>-->
    <!--                  <Col :span="12">-->
    <!--                    <el-form-item label="电子邮箱">-->
    <!--                      <el-input v-model="formFirst.email" />-->
    <!--                    </el-form-item>-->
    <!--                  </Col>-->
    <!--                  <Col :span="12">-->
    <!--                    <el-form-item label="职称">-->
    <!--                      <el-input v-model="formFirst.title" disabled />-->
    <!--                    </el-form-item>-->
    <!--                  </Col>-->
    <!--                  <Col :span="12">-->
    <!--                    <el-form-item label="评定时间">-->
    <!--                      <el-date-picker-->
    <!--                        v-model="formFirst.evaluateTime"-->
    <!--                        type="month"-->
    <!--                        style="width: 100%"-->
    <!--                        placeholder="选择日期"-->
    <!--                        format="yyyy-MM"-->
    <!--                        value-format="yyyy-MM"-->
    <!--                      />-->
    <!--                    </el-form-item>-->
    <!--                  </Col>-->
    <!--                </Row>-->
    <!--              </Col>-->
    <!--              <Col :span="8">-->
    <!--                <br>-->
    <!--                <br>-->
    <!--                <br>-->
    <!--                <el-form-item>-->
    <!--                  <el-image-->
    <!--                    style="width: 150px; height: 210px"-->
    <!--                    :src="this.formFirst.image"-->
    <!--                    fit="fit"-->
    <!--                  >-->
    <!--                    <div slot="placeholder" class="image-slot">-->
    <!--                      <i class="el-icon-picture-outline" />-->
    <!--                    </div>-->
    <!--                  </el-image>-->
    <!--                </el-form-item>-->
    <!--              </Col>-->

    <!--              <Col :span="8">-->
    <!--                <el-form-item label="最后学位">-->
    <!--                  <el-input v-model="formFirst.finalDegree" disabled />-->
    <!--                </el-form-item>-->
    <!--              </Col>-->
    <!--              <Col :span="8">-->
    <!--                <el-form-item label="授予单位">-->
    <!--                  <el-input v-model="formFirst.awardDepartment" />-->
    <!--                </el-form-item>-->
    <!--              </Col>-->
    <!--              <Col :span="8">-->
    <!--                <el-form-item label="授予时间">-->
    <!--                  &lt;!&ndash;<el-input v-model="formFirst.col1" disabled />&ndash;&gt;-->
    <!--                  <el-date-picker-->
    <!--                    v-model="formFirst.awardTime"-->
    <!--                    type="month"-->
    <!--                    style="width: 100%"-->
    <!--                    placeholder="选择日期"-->
    <!--                    format="yyyy-MM"-->
    <!--                    value-format="yyyy-MM"-->
    <!--                  />-->
    <!--                </el-form-item>-->
    <!--              </Col>-->
    <!--            </Row>-->
    <!--            <Row>-->
    <!--              <Col :offset="8">-->
    <!--                <el-form-item style="margin-top: 20px">-->
    <!--                  <el-button-->
    <!--                    type="primary"-->
    <!--                    @click="onSubmitFirstPage"-->
    <!--                  >保存此部分，填写下一项</el-button>-->
    <!--                </el-form-item>-->
    <!--              </Col>-->
    <!--            </Row>-->
    <!--          </el-form>-->
    <!--        </el-card>-->
    <!--      </el-col>-->
    <!--    </el-row>-->
    <!-- 第二页研究信息 -->
    <Row>
      <Col :span="18" :offset="3">
        <transition name="el-fade-in-linear">
          <el-card v-if="formVisible.second" class="box-card">
            <div slot="header" class="clearfix">
              <h2>研究信息</h2>
            </div>
            <el-form
              v-if="formVisible.second"
              ref="formSecond"
              :model="formSecond"
              label-width="100px"
              label-position="top"
            >
              <Row>
                <Col :span="24">
                  <Row :gutter="20">
                    <Col :span="8">
                      <el-form-item label="申请学科类别">
                        <el-select
                          v-model="formSecond.applySubject"
                          style="width: 100%"
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
                          v-model="formSecond.appliedSubjectUnit"
                          style="width: 100%"
                          placeholder="请选择"
                          @change="setChildNode"
                        >
                          <el-option
                            v-for="item in doctorPrimaryDiscipline"
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
                        <el-select
                          v-model="formSecond.doctoralMasterSubjectCodeName"
                          style="width: 100%"
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
                          />
                        </el-select>
                      </el-form-item>
                    </Col>
                  </Row>
                </Col>
                <Col :span="24">
                  <el-form-item label="主要研究方向的内容及其意义">
                    <el-input
                      v-model="formSecond.researchDirections"
                      type="textarea"
                      :autosize="{ minRows: 6 }"
                    />
                  </el-form-item>
                </Col>
                <Col :span="24">
                  <el-form-item label="免审条件">
                    <el-upload
                      ref="upload"
                      class="upload-demo"
                      name="material"
                      :action="getUrl(7)"
                      :file-list="fileList"
                      :on-success="uploadSuccessFunc"
                      :on-error="uploadErrorFunc"
                      :before-upload="checkFileType"
                      :before-remove="beforeRemove"
                      :on-remove="removeFile"
                      :limit="1"
                      accept=".zip , .rar"
                    >
                      <el-button
                        slot="trigger"
                        size="small"
                        type="primary"
                      >上传免审资料</el-button>
                      &nbsp;&nbsp;&nbsp; 上传资料仅支持.rar/.zip文件
                    </el-upload>
                    <el-input
                      v-model="formSecond.exemptionConditions"
                      type="textarea"
                      placeholder="免审条件填写"
                      :autosize="{ minRows: 6 }"
                    />
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
                      @click="dialogSecond1 = true"
                    >添加</el-button>
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
                    <el-table-column prop="projectStartTime" label="开始日期" />
                    <el-table-column prop="projectEndTime" label="结束日期" />
                    <el-table-column prop="projectCategory" label="项目分类" />
                    <el-table-column
                      prop="projectTotalPrice"
                      label="总经费"
                      width="120"
                    />
                    <el-table-column prop="projectLevel" label="项目级别" />
                    <el-table-column label="操作" align="center" width="180">
                      <template slot-scope="scope">
                        <el-button
                          size="mini"
                          type="info"
                          plain
                          @click="editResearchProject(scope.$index,scope.row)"
                        >编 辑</el-button>
                        <el-button
                          size="mini"
                          type="danger"
                          plain
                          @click="delResearchProject(scope.$index)"
                        >删 除</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-card>
              </Col>
              <br>
              <!-- 科研教学情况（近五年） -->
              <Col :span="24">
                <el-card class="box-card" shadow="always">
                  <div slot="header" class="clearfix">
                    <span style="font-size: 18px">科研教学奖励（近五年）</span>
                    <el-button
                      style="float: right"
                      class="addButton"
                      type="primary"
                      @click="dialogSecond2 = true"
                    >添加</el-button>
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
                    <el-table-column label="操作" align="center" width="180">
                      <template slot-scope="scope">
                        <el-button
                          size="mini"
                          type="info"
                          plain
                          @click="editTeachingAward(scope.$index,scope.row)"
                        >编 辑</el-button>
                        <el-button
                          size="mini"
                          type="danger"
                          plain
                          @click="delTeachingAward(scope.$index)"
                        >删 除</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-card>
              </Col>

              <Row>
                <Col :offset="8">
                  <el-form-item style="margin-top: 20px">
                    <el-button
                      type="primary"
                      @click="onSubmitSecondPage"
                    >填写完成，提交申请</el-button>
                  </el-form-item>
                </Col>
              </Row>
            </el-form>
          </el-card>
        </transition>
      </Col>
    </Row>
    <!-- 第二页弹框内容 -->
    <!-- 添加科研项目 -->
    <el-dialog :title="isEdit ?'编辑科研项目' :'添加科研项目'" width="40%" :visible.sync="dialogSecond1">
      <el-form :model="researchProject">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="项目名称">
              <el-input v-model="researchProject.projectName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="批准号">
              <el-input v-model="researchProject.approvalNumber" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="负责人姓名">
              <el-input v-model="researchProject.projectChargeName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="开始日期">
              <el-date-picker
                v-model="researchProject.projectStartTime"
                type="month"
                format="yyyy-MM"
                value-format="yyyy-MM"
                style="width: 100%"
                placeholder="选择日期"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="结束日期">
              <el-date-picker
                v-model="researchProject.projectEndTime"
                type="month"
                format="yyyy-MM"
                value-format="yyyy-MM"
                style="width: 100%"
                placeholder="选择日期"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="项目分类">
              <el-input
                v-model="researchProject.projectCategory"
                placeholder="国家自然科学基金等"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="总经费">
              <el-input v-model="researchProject.projectTotalPrice" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="项目级别">
              <el-select
                v-model="researchProject.projectLevel"
                style="width: 100%"
                placeholder="请选择"
              >
                <el-option label="国家级" value="国家级" />
                <el-option label="省部级" value="省部级" />
                <el-option label="厅局级" value="厅局级" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogSecond1 = false">取 消</el-button>
        <el-button type="primary" @click="addResearchProject">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 添加科研教学奖励 -->
    <el-dialog :title="isEdit ?'编辑科研教学奖励' :'添加科研教学奖励'" width="40%" :visible.sync="dialogSecond2">
      <el-form :model="teachingAward">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="奖励名称">
              <el-input v-model="teachingAward.awardsName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="排名">
              <el-input v-model="teachingAward.awardsRank" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="颁奖单位">
              <el-input v-model="teachingAward.awardsUnit" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="获奖日期">
              <el-date-picker
                v-model="teachingAward.awardsTime"
                type="month"
                format="yyyy-MM"
                value-format="yyyy-MM"
                style="width: 100%"
                placeholder="选择日期"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="获奖人姓名">
              <el-input v-model="teachingAward.awardsAuthorName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="获奖级别">
              <el-select
                v-model="teachingAward.awardsLevel"
                style="width: 100%"
                placeholder="请选择"
              >
                <el-option label="国家级" value="国家级" />
                <el-option label="省部级" value="省部级" />
                <el-option label="厅局级" value="厅局级" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogSecond2 = false">取 消</el-button>
        <el-button type="primary" @click="addTeachingAward">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { doctorPrimaryDiscipline } from '@/utils/data'
import { baseUrl } from '@/api/url'
import { deleteFile } from '@/api/tutor/mainboard'

import { submitSecondPage } from '@/api/tutor/noInspect'
import First from '@/views/tutorMainBoard/First'

export default {
  components: { First },
  data() {
    return {
      fileList: [],
      // 第一页loading
      firstLoading: true,
      // 提交的加载状态
      loading: false,
      // 博士学科代码
      doctorPrimaryDiscipline: doctorPrimaryDiscipline,
      // 步骤条
      active: 0,
      // 页数的隐藏和展示
      formVisible: {
        first: true,
        second: false
      },
      // 编辑或添加
      isEdit: false,
      editIndex: -1,
      // 第二页弹框
      dialogSecond1: false, // 科研项目
      dialogSecond2: false,
      applyCondition: 0, // 申请的状态  修改还是未申请

      /** 第一页 */
      // 第 1 页表单
      applyId: 0, // 回传apply中id主键值
      applyType: 0,
      formFirst: {},
      // ===========================================================第 2 页表单===================================
      childNodes: [], // 院系的子专业信息
      currentDepartment: '', // 院系信息

      // 申请类型
      applySubjects: [
        { label: '文史', value: 1 },
        { label: '理工', value: 2 },
        { label: '交叉学科', value: 3 }
      ],

      formSecond: {
        applySubject: '', // 申请学科
        researchProjects: [],
        teachingAwards: []
      },

      // 科研项目
      researchProject: {
        projectName: '',
        approvalNumber: '',
        projectStartTime: '',
        projectEndTime: '',
        projectTotalPrice: '',
        projectLevel: '',
        projectCategory: '',
        projectChargeName: ''
      },
      // 教学情况
      teachingAward: {
        awardsName: '',
        awardsRank: '',
        awardsUnit: '',
        awardsTime: '',
        awardsAuthorName: '',
        awardsLevel: ''
      }
    }
  },
  created() {
    this.applyId = this.$route.params.applyId * 1
    this.applyCondition = this.$route.params.applyCondition * 1
    this.applyType = this.$route.params.applyType * 1
    // this.GetTutorInfoByClient()
  },
  methods: {
    getUrl(type) {
      return `${baseUrl}/user/upload/${type}`
    },
    /* ============================================= 第一页 =====================================*/
    // 获取导师基本信息
    // GetTutorInfoByClient: function() {
    //   getFirstPage(this.applyId).then((res) => {
    //     this.formFirst = res.data
    //     console.log(this.formFirst)
    //     // 未申请过
    //     if (this.applyCondition === 102) {
    //       this.formFirst.image =
    //         'data:image/png;base64,' + this.formFirst.blobImage
    //     }
    //     this.firstLoading = false
    //   })
    // },
    //* *****************************************************第一页 *****************************************
    // onSubmitFirstPage: function() {
    //   this.$confirm('提交填写?')
    //     // 提交保存第一页
    //     .then(() => {
    //       // 学硕免审提交到后台
    //       this.formFirst.image = ''
    //       submitFirstPage(
    //         this.formFirst,
    //         this.applyId,
    //         this.applyType,
    //         this.applyCondition
    //       ).then((res) => {
    //         if (res.code === 20000) {
    //           this.$message.success('保存成功！')
    //           this.formVisible.first = false // 关闭第一项
    //           // 回显第二页信息
    //           console.log(res.data)
    //           this.formSecond = res.data
    //           this.applyId = res.data.applyId
    //           if (res.data.applySubject !== null) {
    //             // console.log(appl)
    //             this.formSecond.applySubject = res.data.applySubject * 1
    //           } else {
    //             this.formSecond.applySubject = ''
    //           }
    //           this.fileList.name = '111'
    //           this.fileList.url = this.formSecond.exemptionConditionsMaterials
    //           this.formVisible.second = true // 打开第二项
    //           this.active = 1
    //         }
    //       })
    //     })
    //     .catch(() => {
    //       console.log('cancel')
    //     })
    // },
    /* ====================================第二页============================ */
    getFormSecond: function(data, tutorName) {
      console.log('second', data)
      this.applyId = data.applyId
      this.formSecond = data
      console.log('formSecond', this.formSecond)
      console.log('data', data)
      console.log('data.applySubject', data.applySubject)
      if (data.applySubject !== null) {
        this.formSecond.applySubject = data.applySubject * 1
        // this.formSecond.applySubject = ''
        console.log('true')
      } else {
        this.formSecond.applySubject = null
        console.log('false')
      }
      this.tutorName = tutorName // 设置导师姓名，第四页用到
      if (data.applySubject !== null) {
        this.formSecond.applySubject = data.applySubject * 1
      } else {
        this.formSecond.applySubject = ''
      }
      this.fileList.name = '111'
      this.fileList.url = this.formSecond.exemptionConditionsMaterials

      this.formVisible.first = false // 关闭第 1 页
      this.formVisible.second = true // 打开第 2 页
      this.loading = false
      this.active = 1
    },
    // 上传成功
    uploadSuccessFunc: function(response, file, fileList) {
      console.log('上传成功', file)
      this.fileList.name = file.name
      this.fileList.url = response.data.path
      this.formSecond.exemptionConditionsMaterials = response.data.path
    },
    // 上传镜像失败
    uploadErrorFunc: function(err, file, fileList) {
      console.log(err)
      console.log(file)
      console.log(fileList)
    },
    // 检查上传的文件类型 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
    checkFileType: function(file) {
      if (file.name.endsWith('.zip') || file.name.endsWith('.rar')) {
        return true
      } else {
        this.$message.error('请上传 zip/rar 文件')
        return false
      }
    },
    // 文件移除之前
    beforeRemove: function() {
      return this.$confirm('确定要移除选取的文件吗?').then(() => {
        deleteFile(this.formSecond.exemptionConditionsMaterials).then(
          (res) => {}
        )
      })
    },
    // 移除文件的钩子
    removeFile: function() {
      this.formSecond.exemptionConditionsMaterials = ''
      return this.$message.success('删除成功！')
    },
    // 第 2 页 添科研项目情况 弹框
    addResearchProject: function() {
      if (this.isEdit) {
        // 修改
        this.formSecond.researchProjects[this.editIndex] = this.researchProject
        this.editIndex = -1
        this.isEdit = false
      } else {
        // 添加
        console.log('添加')
        this.formSecond.researchProjects.push(this.researchProject)
      }
      this.dialogSecond1 = false
      // 科研项目
      this.researchProject = {
        projectName: '',
        approvalNumber: '',
        projectStartTime: '',
        projectEndTime: '',
        projectTotalPrice: '',
        projectLevel: '',
        projectCategory: '',
        projectChargeName: ''
      }
    },
    // 编辑科研项目
    editResearchProject: function(index, row) {
      this.isEdit = true
      this.editIndex = index
      // 打开
      this.dialogSecond1 = true
      // 将数据回显
      this.researchProject = this.formSecond.researchProjects[index]
    },
    // 删除某项科研项目情况
    delResearchProject: function(index) {
      this.formSecond.researchProjects.splice(index, 1)
    },
    // 第 2 页添加科研教学奖励
    addTeachingAward: function() {
      if (this.isEdit) {
        // 编辑
        this.formSecond.teachingAwards[this.editIndex] = this.teachingAward
        this.editIndex = -1
        this.isEdit = false
      } else {
        this.formSecond.teachingAwards.push(this.teachingAward)
      }

      this.teachingAward = {
        awardsName: '',
        awardsRank: '',
        awardsUnit: '',
        awardsTime: '',
        awardsAuthorName: '',
        awardsLevel: ''
      }
      this.dialogSecond2 = false
    },
    // 编辑科研教学奖励
    editTeachingAward: function(index, row) {
      this.isEdit = true
      this.editIndex = index
      this.teachingAward = this.formSecond.teachingAwards[index]
      this.dialogSecond2 = true
    },
    // 删除某项科研教学奖励
    delTeachingAward: function(index) {
      this.formSecond.teachingAwards.splice(index, 1)
    },
    // 设置选择院系的子专业
    setChildNode: function(value) {
      // 将子列表的选择置空
      this.formSecond.doctoralMasterSubjectCodeName = ''
      // 将当前选择加入 form 提交中
      this.formSecond.appliedSubjectUnit = value.department
      // 设置子项目为当前院系的专业
      this.childNodes = value.professional
    },
    //* *********************************************** 完成第二页基本信息的填写 表单提交按钮********************************************
    onSubmitSecondPage: function() {
      console.log(this.formSecond)
      if (this.formSecond.applySubject === '' || this.formSecond.applySubject === null) {
        this.$message.warning('请填写申请学科信息')
        return
      }
      this.$confirm('提交填写?')
        // 提交保存第二页
        .then(() => {
          console.log(this.formSecond)
          submitSecondPage(this.formSecond, this.applyId).then((res) => {
            // if (res.data != null) {
            if (res.data.code === 1201) {
              this.$message.error(res.data.message)
              console.log(res.data.errorMessage)
            }
            this.$alert('填写成功，请前往我的申请页面查看填写信息，并提交至院系审核', {
              showClose: false
            }).then(() => {
              this.$message.success('填写成功')
              this.$router.push('/myApply')
            })
          })
        })
        .catch(() => {
          console.log('cancel')
        })
    }
  }
}
</script>

<style>
p {
  font-size: 20px;
}
</style>
