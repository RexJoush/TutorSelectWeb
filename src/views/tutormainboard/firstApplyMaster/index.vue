<!--
 * @Author: zjz
 * @Date: 2021-08-13 16:36:21
 * @LastEditors: Rex Joush
 * @LastEditTime: 2021-08-19 20:16:38
-->
<template>
  <div class="main">
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
    <el-row>
      <el-col :span="18" :offset="3">
        <el-card v-if="formVisible.first" class="box-card">
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
                      <el-input v-model="formFirst.number" :disabled="true" />
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
    <el-row>
      <el-col :span="18" :offset="3">
        <transition name="el-fade-in-linear">
          <el-card v-if="formVisible.second" class="box-card">
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
    <el-row>
      <el-col :span="18" :offset="3">
        <transition name="el-fade-in-linear">
          <el-card v-if="formVisible.third" class="box-card">
            <div slot="header" class="clearfix">
              <h2>学术信息</h2>
            </div>
            <el-form
              v-if="formVisible.third"
              ref="formThird"
              :model="formThird"
              label-width="150px"
              label-position="top"
            >
              <!-- 学术论文(近五年) -->
              <el-card class="box-card" shadow="always">
                <div slot="header" class="clearfix">
                  <span style="font-size: 18px">学术论文(近五年) </span>
                </div>
                <el-row :gutter="100">
                  <el-col :span="4">
                    <el-button class="addButton" type="primary" @click="dialogThird1 = true">添加社科类论文</el-button>
                  </el-col>
                  <el-col :span="4">
                    <el-button class="addButton" type="primary" @click="dialogThird2 = true">添加理工类论文</el-button>
                  </el-col>
                </el-row>
                <el-table :data="formThird.academicPapers" border style="width: 100%">
                  <el-table-column type="index" label="序号" width="50" />
                  <el-table-column prop="paperName" label="论文名称" />
                  <el-table-column prop="paperPublicationTime" label="发表时间" />
                  <el-table-column prop="firstAuthorName" label="第一作者" />
                  <el-table-column prop="communicationAuthorName" label="通讯作者" />
                  <el-table-column prop="journalName" label="期刊名称" />
                  <el-table-column prop="journalCategory" label="期刊类别" />
                  <el-table-column prop="sciPart" label="分区" />
                  <el-table-column prop="journalLevel" label="期刊等级" />
                  <el-table-column prop="impactFactors" label="影响因子" />
                  <el-table-column label="证明资料" width="90" align="center">
                    <template slot-scope="scope">
                      <a target="_blank" :href="scope.row.paperProveMaterials"><el-button size="mini" type="primary" plain>查 看</el-button></a>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作" align="center" width="90">
                    <template slot-scope="scope">
                      <el-button size="mini" plain type="danger" @click="deleteFunc(scope.$index, 1)">删 除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-card>
              <br>
              <!-- 科研项目（近五年） -->
              <el-card class="box-card" shadow="always">
                <div slot="header" class="clearfix">
                  <span style="font-size: 18px">科研项目（近五年）</span>
                </div>
                <el-row>
                  <el-col :span="4">
                    <el-button class="addButton" type="primary" @click="dialogThird3 = true">添加科研项目</el-button>
                  </el-col>
                </el-row>
                <el-table :data="formThird.researchProjects" border style="width: 100%">
                  <el-table-column type="index" label="序号" width="50" />
                  <el-table-column prop="projectName" label="项目名称" />
                  <el-table-column prop="approvalNumber" label="批准号" />
                  <el-table-column prop="projectChargeName" label="负责人姓名" width="100" />
                  <el-table-column prop="projectStartTime" label="开始日期" />
                  <el-table-column prop="projectEndTime" label="结束日期" />
                  <el-table-column prop="projectCategory" label="项目分类" />
                  <el-table-column prop="projectTotalPrice" label="总经费" width="120" />
                  <el-table-column prop="projectLevel" label="项目级别" />
                  <el-table-column label="证明资料" width="90" align="center">
                    <template slot-scope="scope">
                      <a target="_blank" :href="scope.row.projectProveMaterials"><el-button size="mini" type="primary" plain>查 看</el-button></a>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作" align="center" width="90">
                    <template slot-scope="scope">
                      <el-button size="mini" type="danger" plain @click="deleteFunc(scope.$index, 2)">删 除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-card>
              <br>
              <!-- 教材或学术著作（近五年） -->
              <el-card class="box-card" shadow="always">
                <div slot="header" class="clearfix">
                  <span style="font-size: 18px">教材或学术著作（近五年）</span>
                </div>
                <el-row>
                  <el-col :span="4">
                    <el-button class="addButton" type="primary" @click="dialogThird4 = true">添加教材或学术著作</el-button>
                  </el-col>
                </el-row>
                <el-table :data="formThird.academicWorks" border style="width: 100%">
                  <el-table-column type="index" label="序号" width="50px" />
                  <el-table-column prop="worksName" label="著作名称" />
                  <el-table-column prop="worksNumber" label="著作编号" />
                  <el-table-column prop="worksPublicationTime" label="出版日期" />
                  <el-table-column prop="worksPublicationUnit" label="出版单位" />
                  <el-table-column prop="totalWords" label="完成字数（万字）" />
                  <el-table-column prop="authorName" label="作者姓名" />
                  <el-table-column label="证明资料" width="90" align="center">
                    <template slot-scope="scope">
                      <a target="_blank" :href="scope.row.worksProveMaterials"><el-button size="mini" type="primary" plain>查 看</el-button></a>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作" align="center" width="90">
                    <template slot-scope="scope">
                      <el-button size="mini" type="danger" plain @click="deleteFunc(scope.$index, 3)">删 除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-card>
              <br>
              <!-- 科研教学奖励（近五年） -->
              <el-card class="box-card" shadow="always">
                <div slot="header" class="clearfix">
                  <span style="font-size: 18px">科研教学奖励（近五年）</span>
                </div>
                <el-row>
                  <el-col :span="4">
                    <el-button class="addButton" type="primary" @click="dialogThird5 = true">添加科研教学奖励</el-button>
                  </el-col>
                </el-row>
                <el-table :data="formThird.teachingAwards" border style="width: 100%">
                  <el-table-column type="index" label="序号" width="50px" />
                  <el-table-column prop="awardsName" label="奖励名称" />
                  <el-table-column prop="awardsRank" label="排名" />
                  <el-table-column prop="awardsUnit" label="颁奖单位" />
                  <el-table-column prop="awardsLevel" label="获奖级别" />
                  <el-table-column prop="awardsTime" label="获奖日期" />
                  <el-table-column prop="awardsAuthorName" label="获奖人姓名" />
                  <el-table-column label="证明资料" width="90" align="center">
                    <template slot-scope="scope">
                      <a target="_blank" :href="scope.row.awardsProveMaterials"><el-button size="mini" type="primary" plain>查 看</el-button></a>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作" align="center" width="90">
                    <template slot-scope="scope">
                      <el-button size="mini" type="danger" plain @click="deleteFunc(scope.$index, 4)">删 除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-card>
              <br>
              <!-- 发明专利（近五年） -->
              <el-card class="box-card" shadow="always">
                <div slot="header" class="clearfix">
                  <span style="font-size: 18px">发明专利（近五年）</span>
                </div>
                <el-row>
                  <el-col :span="4">
                    <el-button class="addButton" type="primary" @click="dialogThird6 = true">添加发明专利</el-button>
                  </el-col>
                </el-row>
                <el-table :data="formThird.inventionPatents" border style="width: 100%">
                  <el-table-column type="index" label="序号" width="50px" />
                  <el-table-column prop="patentName" label="专利名称" />
                  <el-table-column prop="patentAuthorName" label="第一作者" />
                  <el-table-column prop="patentGrantTime" label="专利授权日期" />
                  <el-table-column prop="patentGrantNumber" label="专利授权号" />
                  <el-table-column prop="patentType" label="专利类型" />
                  <el-table-column label="证明资料" width="90" align="center">
                    <template slot-scope="scope">
                      <a target="_blank" :href="scope.row.patentProveMaterials"><el-button size="mini" type="primary" plain>查 看</el-button></a>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作" align="center" width="90">
                    <template slot-scope="scope">
                      <el-button size="mini" type="danger" plain @click="deleteFunc(scope.$index, 5)">删 除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-card>
              <br>
              <!-- 科研汇总 -->
              <el-card class="box-card" shadow="always">
                <div slot="header" class="clearfix">
                  <span style="font-size: 18px">科研成果汇总</span>
                  <el-button style="float: right" type="primary" @click="getSummary">汇总生成</el-button>
                </div>
                <div>
                  <p>
                    1.以第一作者或通讯作者在核心及以上期刊发表与本学科相关的学术论文共 <span class="summary">{{ formThird.summary.firstAuthorPaper }}</span> 篇，
                    其中权威 <span class="summary">{{ formThird.summary.authorityAmount }}</span> 篇，
                    EI <span class="summary">{{ formThird.summary.eiAmount }}</span> 篇，
                    CSSCI <span class="summary">{{ formThird.summary.cssciAmount }}</span> 篇，
                    SSCI <span class="summary">{{ formThird.summary.ssciAmount }}</span> 篇
                    <!--，核心共 <span class="summary">{{ formThird.summary.directProject }}</span> 篇。 -->
                  </p>
                  <br>
                  <p>
                    2.主持在研科研项目共 <span class="summary">{{ formThird.summary.directProject }}</span> 项，
                    其中国家级 <span class="summary">{{ formThird.summary.projectNationalLevel }}</span> 项，
                    省部级 <span class="summary">{{ formThird.summary.projectProvinceLevel }}</span> 项；
                    在研项目中累计到款科研经费 <span class="summary">{{ formThird.summary.accumulatedFunds }}</span> 万元，
                    其中横向项目到款经费 <span class="summary">{{ formThird.summary.horizontalProject }}</span> 万元。
                  </p>
                  <br>
                  <p>
                    3.出版本专业领域内研究生教材或学术著作（译著） <span class="summary">{{ formThird.summary.publishWorks }}</span> 部，
                    每部本人完成 <span class="summary">{{ formThird.summary.publishWorksWords }}</span> 万字。
                  </p>
                  <br>
                  <p>
                    4.科研教学获奖共 <span class="summary">{{ formThird.summary.scientificAwards }}</span> 项，
                    其中国家级 <span class="summary">{{ formThird.summary.awardsNationalLevel }}</span> 项，
                    省部级 <span class="summary">{{ formThird.summary.awardsProvinceLevel }}</span> 项。
                  </p>
                  <br>
                  <p>
                    5.以第一发明人授权职务发明专利 <span class="summary">{{ formThird.summary.inventionPatentAmount }}</span> 项，
                    实用新型专利 <span class="summary">{{ formThird.summary.newUtilityPatent }}</span> 项。
                  </p>
                  <br>
                </div>
              </el-card>
              <el-row>
                <el-col :offset="9">
                  <el-form-item style="margin-top: 20px">
                    <el-button type="primary" @click="onSubmitThirdPage">保存此部分，填写下一项</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </el-card>
        </transition>
      </el-col>
    </el-row>

    <!-- 第 4 页教学信息 -->
    <el-row>
      <el-col :span="18" :offset="3">
        <transition name="el-fade-in-linear">
          <el-card v-if="formVisible.fourth" class="box-card">
            <div slot="header" class="clearfix">
              <h2>教学信息</h2>
            </div>
            <el-form
              v-if="formVisible.fourth"
              ref="formFourth"
              :model="formFourth"
              label-width="150px"
              label-position="top"
            >
              <!-- 协助指导硕士生情况 -->
              <el-card class="box-card" shadow="always">
                <div slot="header" class="clearfix">
                  <span style="font-size: 18px">协助指导硕士生情况</span>
                </div>
                <el-row>
                  <el-col :span="4">
                    <el-button
                      class="addButton"
                      type="primary"
                      @click="dialogAddStudent = true"
                    >添加学生
                    </el-button>
                  </el-col>
                </el-row>
                <el-table :data="formFourth.guidingStudents" border style="width: 100%">
                  <el-table-column type="index" label="序号" width="50px" />
                  <el-table-column prop="studentName" label="学生姓名" width="100" />
                  <el-table-column prop="studentType" label="学生类型" width="100" />
                  <el-table-column prop="studentEntryTime" label="学生入学时间" width="180" />
                  <el-table-column prop="degreePaperTitle" label="学位论文题目" />
                  <el-table-column prop="isGainDegree" label="是否获得学位" />
                  <el-table-column prop="graduateTime" label="毕业时间" width="180" />
                </el-table>
              </el-card>
              <br>
              <!-- 指导本科生毕业情况 -->
              <el-card class="box-card" shadow="always">
                <div slot="header" class="clearfix">
                  <span style="font-size: 18px">指导本科生毕业情况</span>
                </div>
                <el-row>
                  <el-col :span="4">
                    <el-button
                      type="primary"
                      class="addButton"
                      @click="dialogAddStudent = true"
                    >添加学生
                    </el-button>
                  </el-col>
                </el-row>
                <el-table :data="formFourth.guidingStudents" border style="width: 100%">
                  <el-table-column type="index" label="序号" width="50px" />
                  <el-table-column prop="studentName" label="学生姓名" width="100" />
                  <el-table-column prop="studentType" label="学生类型" width="100" />
                  <el-table-column prop="studentEntryTime" label="学生入学时间" width="180" />
                  <el-table-column prop="degreePaperTitle" label="学位论文题目" />
                  <el-table-column prop="isGainDegree" label="是否获得学位" />
                  <el-table-column prop="graduateTime" label="毕业时间" width="180" />
                </el-table>
              </el-card>
              <br>
              <!-- 研究生课程教学情况 -->
              <el-card class="box-card" shadow="always">
                <div slot="header" class="clearfix">
                  <span style="font-size: 18px">研究生课程教学情况</span>
                </div>
                <el-row>
                  <el-col :span="4">
                    <el-button
                      class="addButton"
                      type="primary"
                    >添加研究生课程教学信息
                    </el-button>
                  </el-col>
                </el-row>
                <el-table :data="formFourth.courseTeachings" border style="width: 100%">
                  <el-table-column type="index" label="序号" width="50px" />
                  <el-table-column prop="courseName" label="课程名称" />
                  <el-table-column prop="courseTime" label="课程时间" />
                  <el-table-column prop="courseDuration" label="授课总课时" />
                  <el-table-column prop="courseObject" label="授课对象" />
                </el-table>
              </el-card>
              <br>
              <el-row>
                <el-col :offset="9">
                  <el-form-item style="margin-top: 20px">
                    <!--                    <el-button @click="backToThirdPage">返回上一页</el-button>-->
                    <el-button type="primary" @click="onSubmitFourthPage">提交本次申请</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </el-card>
        </transition>
      </el-col>
    </el-row>

    <!-- 第一页 弹框部分 -->
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

    <!-- 第三页 弹框部分 -->
    <!-- 添加社科类论文 -->
    <el-dialog title="添加社科类论文" width="40%" :visible.sync="dialogThird1">
      <el-form :model="academicPaper">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="论文名称">
              <el-input v-model="academicPaper.paperName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="第一作者">
              <el-input v-model="academicPaper.firstAuthorName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="期刊名称">
              <el-input v-model="academicPaper.journalName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="发表时间">
              <el-date-picker
                v-model="academicPaper.paperPublicationTime"
                style="width: 100%"
                type="month"
                format="yyyy-MM"
                value-format="yyyy-MM"
                placeholder="选择日期"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="期刊等级">
              <el-select v-model="academicPaper.c" style="width: 100%" placeholder="请选择">
                <el-option label="顶级期刊（A类）" value="顶级期刊（A类）" />
                <el-option label="权威期刊（B类）" value="权威期刊（B类）" />
                <el-option label="核心期刊（C类）" value="核心期刊（C类）" />
                <el-option label="其他" value="其他" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="证明材料">
              <el-upload
                ref="upload"
                class="upload-demo"
                name="material"
                action="http://localhost:8081/tutor/upload/1"
                :on-success="uploadSuccessFunc"
                :on-error="uploadErrorFunc"
                :before-upload="checkFileType"
                :auto-upload="false"
                accept=".zip, .rar"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">证明材料包括论文封面、目录和正文。若上传多个文件，请上传 zip/rar文件，且不超过 50MB</div>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogThird1 = false">取 消</el-button>
        <el-button type="primary" @click="addFile">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 添加理工类论文 -->
    <el-dialog title="添加理工类论文" width="40%" :visible.sync="dialogThird2">
      <el-form :model="academicPaper">
        <el-row gutter="20">
          <el-col span="24">
            <el-form-item label="论文名称">
              <el-input v-model="academicPaper.paperName" />
            </el-form-item>
          </el-col>
          <el-col span="8">
            <el-form-item label="发表时间">
              <el-date-picker
                v-model="academicPaper.paperPublicationTime"
                type="month"
                format="yyyy-MM"
                value-format="yyyy-MM"
                style="width: 100%"
                placeholder="选择日期"
              />
            </el-form-item>
          </el-col>
          <el-col span="8">
            <el-form-item label="第一作者">
              <el-input v-model="academicPaper.firstAuthorName" />
            </el-form-item>
          </el-col>
          <el-col span="8">
            <el-form-item label="通讯作者">
              <el-input v-model="academicPaper.communicationAuthorName" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row gutter="20">
          <el-col span="12">
            <el-form-item label="期刊类别">
              <el-select v-model="academicPaper.journalCategory" style="width: 100%" placeholder="请选择">
                <el-option label="SCIE" value="SCIE" />
                <el-option label="EI" value="EI" />
                <el-option label="SSCI" value="SSCI" />
                <el-option label="CPCI-S" value="CPCI-S" />
                <el-option label="CSCD" value="CSCD" />
                <el-option label="other" value="other" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col span="12">
            <el-form-item v-if="academicPaper.journalCategory === 'SCIE' || academicPaper.journalCategory === 'SSCI'" label="分区">
              <el-select v-model="academicPaper.sciPart" style="width: 100%;" placeholder="请选择">
                <el-option label="一区" value="一区" />
                <el-option label="二区" value="二区" />
                <el-option label="三区" value="三区" />
                <el-option label="四区" value="四区" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row gutter="20">
          <el-col span="12">
            <el-form-item label="期刊名称">
              <el-input v-model="academicPaper.journalName" />
            </el-form-item>
          </el-col>
          <el-col span="12">
            <el-form-item label="影响因子">
              <el-input v-model="academicPaper.impactFactors" />
            </el-form-item>
          </el-col>
          <el-col span="24">
            <el-form-item label="证明材料">
              <el-upload
                ref="upload"
                class="upload-demo"
                name="material"
                action="http://localhost:8081/tutor/upload/2"
                :on-success="uploadSuccessFunc"
                :on-error="uploadErrorFunc"
                :before-upload="checkFileType"
                :auto-upload="false"
                accept=".zip, .rar"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">证明材料包括论文封面、目录和正文。若上传多个文件，请上传 zip/rar文件，且不超过 50MB</div>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogThird2 = false">取 消</el-button>
        <el-button type="primary" @click="addFile">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 添加科研项目 -->
    <el-dialog title="添加科研项目" width="40%" :visible.sync="dialogThird3">
      <el-form :model="researchProject">
        <el-row gutter="20">
          <el-col span="12">
            <el-form-item label="项目名称">
              <el-input v-model="researchProject.projectName" />
            </el-form-item>
          </el-col>
          <el-col span="12">
            <el-form-item label="批准号">
              <el-input v-model="researchProject.approvalNumber" />
            </el-form-item>
          </el-col>
          <el-col span="12">
            <el-form-item label="负责人姓名">
              <el-input v-model="researchProject.projectChargeName" />
            </el-form-item>
          </el-col>
          <el-col span="12">
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
          <el-col span="12">
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
          <el-col span="12">
            <el-form-item label="项目分类">
              <el-input v-model="researchProject.projectCategory" placeholder="国家自然科学基金等" />
            </el-form-item>
          </el-col>
          <el-col span="12">
            <el-form-item label="总经费">
              <el-input v-model="researchProject.projectTotalPrice" />
            </el-form-item>
          </el-col>
          <el-col span="12">
            <el-form-item label="项目级别">
              <el-select v-model="researchProject.projectLevel" style="width: 100%;" placeholder="请选择">
                <el-option label="国家级" value="国家级" />
                <el-option label="省部级" value="省部级" />
                <el-option label="厅局级" value="厅局级" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col span="24">
            <el-form-item label="证明材料">
              <el-upload
                ref="upload"
                class="upload-demo"
                name="material"
                action="http://localhost:8081/tutor/upload/3"
                :on-success="uploadSuccessFunc"
                :on-error="uploadErrorFunc"
                :before-upload="checkFileType"
                :auto-upload="false"
                accept=".zip, .rar"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">证明材料包括项目立项书。若上传多个文件，请上传 zip/rar文件，且不超过 50MB</div>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogThird3 = false">取 消</el-button>
        <el-button type="primary" @click="addFile">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 添加教材或学术著作 -->
    <el-dialog title="添加教材或学术著作" width="40%" :visible.sync="dialogThird4">
      <el-form :model="academicWork">
        <el-row gutter="20">
          <el-col span="12">
            <el-form-item label="著作名称">
              <el-input v-model="academicWork.worksName" />
            </el-form-item>
          </el-col>
          <el-col span="12">
            <el-form-item label="著作编号">
              <el-input v-model="academicWork.worksNumber" />
            </el-form-item>
          </el-col>
          <el-col span="12">
            <el-form-item label="出版日期">
              <el-date-picker
                v-model="academicWork.worksPublicationTime"
                type="month"
                format="yyyy-MM"
                value-format="yyyy-MM"
                style="width: 100%"
                placeholder="选择日期"
              />
            </el-form-item>
          </el-col>
          <el-col span="12">
            <el-form-item label="出版单位">
              <el-input v-model="academicWork.worksPublicationUnit" />
            </el-form-item>
          </el-col>
          <el-col span="12">
            <el-form-item label="完成字数（万字）">
              <el-input v-model="academicWork.totalWords" />
            </el-form-item>
          </el-col>
          <el-col span="12">
            <el-form-item label="作者姓名">
              <el-input v-model="academicWork.authorName" />
            </el-form-item>
          </el-col>
          <el-col span="24">
            <el-form-item label="证明材料">
              <el-upload
                ref="upload"
                class="upload-demo"
                name="material"
                action="http://localhost:8081/tutor/upload/4"
                :on-success="uploadSuccessFunc"
                :on-error="uploadErrorFunc"
                :before-upload="checkFileType"
                :auto-upload="false"
                accept=".zip, .rar"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">证明材料包括著作封面、前言、目录和版权页。若上传多个文件，请上传 zip/rar文件，且不超过 50MB</div>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogThird4 = false">取 消</el-button>
        <el-button type="primary" @click="addFile">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 添加科研教学奖励 -->
    <el-dialog title="科研教学奖励" width="40%" :visible.sync="dialogThird5">
      <el-form :model="teachingAward">
        <el-row gutter="20">
          <el-col span="12">
            <el-form-item label="奖励名称">
              <el-input v-model="teachingAward.awardsName" />
            </el-form-item>
          </el-col>
          <el-col span="12">
            <el-form-item label="排名">
              <el-input v-model="teachingAward.awardsRank" />
            </el-form-item>
          </el-col>
          <el-col span="12">
            <el-form-item label="颁奖单位">
              <el-input v-model="teachingAward.awardsUnit" />
            </el-form-item>
          </el-col>
          <el-col span="12">
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
          <el-col span="12">
            <el-form-item label="获奖人姓名">
              <el-input v-model="teachingAward.awardsAuthorName" />
            </el-form-item>
          </el-col>
          <el-col span="12">
            <el-form-item label="获奖级别">
              <el-select v-model="teachingAward.awardsLevel" style="width: 100%;" placeholder="请选择">
                <el-option label="国家级" value="国家级" />
                <el-option label="省部级" value="省部级" />
                <el-option label="厅局级" value="厅局级" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col span="24">
            <el-form-item label="证明材料">
              <el-upload
                ref="upload"
                class="upload-demo"
                name="material"
                action="http://localhost:8081/tutor/upload/5"
                :on-success="uploadSuccessFunc"
                :on-error="uploadErrorFunc"
                :before-upload="checkFileType"
                :auto-upload="false"
                accept=".zip, .rar"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">证明材料包括获奖证书扫描件。若上传多个文件，请上传 zip/rar文件，且不超过 50MB</div>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogThird5 = false">取 消</el-button>
        <el-button type="primary" @click="addFile">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 添加发明专利 -->
    <el-dialog title="添加教材或学术著作" width="40%" :visible.sync="dialogThird6">
      <el-form :model="inventionPatent">
        <el-row gutter="20">
          <el-col span="12">
            <el-form-item label="专利名称">
              <el-input v-model="inventionPatent.patentName" />
            </el-form-item>
          </el-col>
          <el-col span="12">
            <el-form-item label="第一作者">
              <el-input v-model="inventionPatent.patentAuthorName" />
            </el-form-item>
          </el-col>
          <el-col span="12">
            <el-form-item label="专利授权日期">
              <el-date-picker
                v-model="inventionPatent.patentGrantTime"
                type="month"
                format="yyyy-MM"
                value-format="yyyy-MM"
                style="width: 100%"
                placeholder="选择日期"
              />
            </el-form-item>
          </el-col>
          <el-col span="12">
            <el-form-item label="专利授权号">
              <el-input v-model="inventionPatent.patentGrantNumber" />
            </el-form-item>
          </el-col>
          <el-col span="12">
            <el-form-item label="专利类型">
              <el-select v-model="inventionPatent.patentType" style="width: 100%;" placeholder="请选择">
                <el-option label="实用新型专利" value="实用新型专利" />
                <el-option label="发明专利" value="发明专利" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col span="24">
            <el-form-item label="证明材料">
              <el-upload
                ref="upload"
                class="upload-demo"
                name="material"
                action="http://localhost:8081/tutor/upload/6"
                :on-success="uploadSuccessFunc"
                :on-error="uploadErrorFunc"
                :before-upload="checkFileType"
                :auto-upload="false"
                accept=".zip, .rar"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">请上传相关证明材料。若上传多个文件，请上传 zip/rar文件，且不超过 50MB</div>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogThird6 = false">取 消</el-button>
        <el-button type="primary" @click="addFile">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { academicMasterPrimaryDiscipline } from '@/utils/data'
import { submitFirstPage, submitSecondPage, submitThirdPage } from '@/api/tutor/firstApplyMaster'
import { getTeacherInfo } from '@/api/tutor/mainboard'

export default {
  data() {
    return {
      // 硕士学科代码
      academicMasterPrimaryDiscipline: academicMasterPrimaryDiscipline,

      // 步骤条
      active: 0,
      // 表格的隐藏和展示
      formVisible: {
        first: false,
        second: false,
        third: true,
        fourth: false
      },
      id: '66', // 此次申请的id，在第一页提交时传回

      /* =========================  第 1 页  ================================= */
      formFirst: {
        number: '202032978', // 教师工号
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
      dialogThird1: false, // 社科学术论文添加按钮
      dialogThird2: false, // 理工学术论文添加按钮
      dialogThird3: false, // 科研项目添加按钮
      dialogThird4: false, // 教材或学术著作添加按钮
      dialogThird5: false, // 科研教学奖励添加按钮
      dialogThird6: false, // 发明专利添加按钮
      formThird: {
        'academicPapers': [
          {
            'paperId': '',
            'paperName': '21',
            'paperPublicationTime': '2021-02',
            'journalName': '1212',
            'journalLevel': '顶级期刊（A类）',
            'journalCategory': '',
            'sciPart': '',
            'impactFactors': '',
            'firstAuthorName': '2122',
            'communicationAuthorName': '',
            'paperSubject': '',
            'paperProveMaterials': 'https://www.rexjoush.com/file/111.zip'
          },
          {
            'paperId': '',
            'paperName': '21',
            'paperPublicationTime': '2021-02',
            'journalName': '1212',
            'journalLevel': '权威期刊（B类）',
            'journalCategory': '',
            'sciPart': '',
            'impactFactors': '',
            'firstAuthorName': '2122',
            'communicationAuthorName': '',
            'paperSubject': '',
            'paperProveMaterials': 'https://www.rexjoush.com/file/111.zip'
          },
          {
            'paperName': '2121',
            'paperPublicationTime': '2021-02',
            'journalName': '21',
            'journalLevel': '',
            'journalCategory': 'SCIE',
            'sciPart': '二区',
            'impactFactors': '21',
            'firstAuthorName': '21',
            'communicationAuthorName': '21',
            'paperSubject': '',
            'paperProveMaterials': 'https://www.rexjoush.com/file/111.zip'
          },
          {
            'paperName': '2121',
            'paperPublicationTime': '2021-02',
            'journalName': '21',
            'journalLevel': '',
            'journalCategory': 'other',
            'sciPart': '',
            'impactFactors': '21',
            'firstAuthorName': '21',
            'communicationAuthorName': '21',
            'paperSubject': '',
            'paperProveMaterials': 'https://www.rexjoush.com/file/111.zip'
          },
          {
            'paperName': '2121',
            'paperPublicationTime': '2021-02',
            'journalName': '21',
            'journalLevel': '',
            'journalCategory': 'CPCI-S',
            'sciPart': '',
            'impactFactors': '21',
            'firstAuthorName': '21',
            'communicationAuthorName': '21',
            'paperSubject': '',
            'paperProveMaterials': 'https://www.rexjoush.com/file/111.zip'
          }
        ],
        'researchProjects': [
          {
            'projectId': '',
            'projectName': '21',
            'projectNumber': '',
            'approvalNumber': '21',
            'projectChargeName': '21',
            'projectStartTime': '2021-01',
            'projectEndTime': '2021-02',
            'projectCategory': '2121',
            'projectTotalPrice': '2121',
            'projectLevel': '省部级',
            'projectProveMaterials': 'https://www.rexjoush.com/file/111.zip'
          }
        ],
        'academicWorks': [
          {
            'worksId': '',
            'worksName': '21',
            'worksNumber': '21',
            'worksPublicationTime': '2021-02',
            'worksPublicationUnit': '21',
            'totalWords': '2',
            'authorName': '21',
            'worksProveMaterials': 'https://www.rexjoush.com/file/111.zip'
          }
        ],
        'teachingAwards': [
          {
            'awardsId': '',
            'awardsName': '21',
            'awardsRank': '2',
            'awardsUnit': '2121',
            'awardsLevel': '省部级',
            'awardsTime': '2021-01',
            'awardsAuthorName': '21',
            'awardsProveMaterials': 'https://www.rexjoush.com/file/111.zip'
          },
          {
            'awardsId': '',
            'awardsName': '21',
            'awardsRank': '1',
            'awardsUnit': '2121',
            'awardsLevel': '国家级',
            'awardsTime': '2021-01',
            'awardsAuthorName': '21',
            'awardsProveMaterials': 'https://www.rexjoush.com/file/111.zip'
          },
          {
            'awardsId': '',
            'awardsName': '21',
            'awardsRank': '1',
            'awardsUnit': '2121',
            'awardsLevel': '省部级',
            'awardsTime': '2021-01',
            'awardsAuthorName': '21',
            'awardsProveMaterials': 'https://www.rexjoush.com/file/111.zip'
          }
        ],
        'inventionPatents': [
          {
            'patentId': '',
            'patentName': '121',
            'patentAuthorName': 'Joush',
            'patentGrantTime': '2021-01',
            'patentGrantNumber': '121212212',
            'patentType': '实用新型专利',
            'patentProveMaterials': 'https://www.rexjoush.com/file/111.zip'
          },
          {
            'patentId': '',
            'patentName': 'Joush',
            'patentAuthorName': '12',
            'patentGrantTime': '2021-01',
            'patentGrantNumber': '1221346',
            'patentType': '发明专利',
            'patentProveMaterials': 'https://www.rexjoush.com/file/111.zip'
          },
          {
            'patentId': '',
            'patentName': '1212134',
            'patentAuthorName': 'Joush',
            'patentGrantTime': '2021-01',
            'patentGrantNumber': '121212212',
            'patentType': '实用新型专利',
            'patentProveMaterials': 'https://www.rexjoush.com/file/111.zip'
          }
        ],
        'summary': {
          'firstAuthorPaper': 0,
          'authorityAmount': 0,
          'eiAmount': 0,
          'cssciAmount': 0,
          'ssciAmount': 0,
          'directProject': 0,
          'projectNationalLevel': 0,
          'projectProvinceLevel': 0,
          'accumulatedFunds': 0,
          'horizontalProject': 0,
          'publishWorks': 0,
          'publishWorksWords': 0,
          'scientificAwards': 0,
          'awardsNationalLevel': 0,
          'awardsProvinceLevel': 0,
          'inventionPatentAmount': 0,
          'newUtilityPatent': 0
        }
      },
      // formThird: {
      //   academicPapers: [], // 学术论文列表
      //   researchProjects: [], // 科研项目列表
      //   academicWorks: [], // 教材或学术著作列表
      //   teachingAwards: [], // 科研教学奖励列表
      //   inventionPatents: [], // 发明专利列表
      //   summary: { // 科研汇总信息
      //     firstAuthorPaper: 0, // 以第一作者或通讯在 核心及以上期刊发表与本学科发表的论文篇数
      //     authorityAmount: 0, // 权威篇数
      //     eiAmount: 0, // EI 篇数
      //     cssciAmount: 0, // CSSCI 篇数
      //     ssciAmount: 0, // SSCI 篇数
      //     directProject: 0, // 主持科研项目
      //     projectNationalLevel: 0, // 国家级项目
      //     projectProvinceLevel: 0, // 省部级项目
      //     accumulatedFunds: 0, // 累计科研经费，万元
      //     horizontalProject: 0, // 横向项目到款经费，万元
      //     publishWorks: 0, // 出版专业领域专著数
      //     publishWorksWords: 0, // 本人完成字数
      //     scientificAwards: 0, // 科研教学获奖项数
      //     awardsNationalLevel: 0, // 国家级奖项
      //     awardsProvinceLevel: 0, // 省部级奖项
      //     inventionPatentAmount: 0, // 发明专利
      //     newUtilityPatent: 0 // 新型实用专利
      //   }
      // },
      academicPaper: { // 学术论文
        paperId: '', // 论文 id
        paperName: '', // 论文名称
        paperPublicationTime: '', // 发表时间
        journalName: '', // 期刊名称
        journalLevel: '', // 期刊等级
        journalCategory: '', // 期刊类别
        sciPart: '', // sci 分区
        impactFactors: '', // 影响因子
        firstAuthorName: '', // 第一作者
        communicationAuthorName: '', // 通讯作者
        paperSubject: '', // 论文分科，文，理，交叉学科按文科算
        paperProveMaterials: '' // 论文证明材料
      },

      // 科研项目
      researchProject: {
        projectId: '', // 项目 id
        projectName: '', // 项目名称
        projectNumber: '', // 项目编号
        approvalNumber: '', // 批准号
        projectChargeName: '', // 负责人姓名
        projectStartTime: '', // 开始日期
        projectEndTime: '', // 结束日期
        projectCategory: '', // 项目分类
        projectTotalPrice: '', // 总经费
        projectLevel: '', // 项目级别，国家级，省部级，厅局级
        projectProveMaterials: '' // 证明材料，图片，pdf等
      },

      // 教材或学术著作
      academicWork: {
        worksId: '', // 著作 id
        worksName: '', // 著作名称
        worksNumber: '', // 著作编号
        worksPublicationTime: '', // 出版日期
        worksPublicationUnit: '', // 出版单位
        totalWords: '', // 完成字数
        authorName: '', // 作者姓名
        worksProveMaterials: '' // 证明材料，图片，pdf等
      },

      // 科研教学奖励
      teachingAward: {
        awardsId: '', // 奖励 id
        awardsName: '', // 奖励名称
        awardsRank: '', // 排名
        awardsUnit: '', // 颁奖单位
        awardsLevel: '', // 获奖级别
        awardsTime: '', // 获奖日期
        awardsAuthorName: '', // 获奖人姓名
        awardsProveMaterials: '' // 证明材料，图片，pdf等
      },

      // 发明专利
      inventionPatent: {
        patentId: '', // 专利 id
        patentName: '', // 专利名称
        patentAuthorName: '', // 第一作者
        patentGrantTime: '', // 专利授权日期
        patentGrantNumber: '', // 专利授权号
        patentType: '', // 专利类型
        patentProveMaterials: '' // 证明材料，图片，pdf等
      },

      /* =========================  第 4 页  ================================= */
      // 指导学生情况
      formFourth: {
        guidingStudents: [], // 指导学生列表
        courseTeachings: [] // 研究生课程列表
      },
      dialogAddStudent: false, // 添加学生框
      guidingStudent: {
        // 学生信息
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
    this.getTeacherInfo()
  },
  methods: {
    /* =========================  第 1 页  ================================= */

    // 拉取基本信息
    getTeacherInfo: function() {
      getTeacherInfo().then((res) => {
        console.log(res)
        this.formFirst.number = res.data.zgh
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
          submitFirstPage(this.formFirst, 4, this.$route.params.applyCondition)
            .then(res => {
              this.id = res.data.id
              this.formSecond.applySubject = res.data.applySubject * 1
              this.formSecond.doctoralMasterApplicationSubjectUnit = res.data.doctoralMasterApplicationSubjectUnit
              this.currentDepartment = res.data.doctoralMasterApplicationSubjectUnit
              this.formSecond.doctoralMasterSubjectCodeName = res.data.doctoralMasterSubjectCodeName
              this.formSecond.major = res.data.major
              this.formSecond.groupsOrPartTimeJobs = res.data.groupsOrPartTimeJobs
              this.formSecond.expertTitles = res.data.expertTitles
              // console.log(res)
              this.formVisible.first = false // 关闭第 1 页
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
          console.log(this.formSecond)
          submitSecondPage(this.formSecond, 4, this.id)
          this.formVisible.second = false // 关闭第 2 页
          this.formVisible.third = true // 打开第 3 页
          this.active = 2
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

    // 第 2 页添加学术团体项
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
    // 删除某项学术团体项
    delGroupsOrPartTimeJob: function(index) {
      this.formSecond.groupsOrPartTimeJobs.splice(index, 1)
    },

    // 第 2 页添加某项专家称号
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

    /* =========================  第 3 页  ================================= */
    // 完成第 3 页学术信息的填写
    onSubmitThirdPage: function() {
      this.$confirm('提交填写?')
        // 提交保存第 3 页
        .then(() => {
          submitThirdPage(this.formThird, this.id)
          // this.formVisible.third = false // 关闭第 3 页
          // this.formVisible.fourth = true // 打开第 4 页
          // this.active = 3
        })
        .catch(() => {
          console.log('cancel')
        })
    },
    // 检查上传的文件类型
    checkFileType: function(file) {
      console.log('check')
      if (file.name.endsWith('.zip') || file.name.endsWith('.rar')) {
        return true
      } else {
        this.$message.error('请上传 zip/rar 文件')
        return false
      }
    },
    // 各项内容的提交文件上传
    addFile: function() {
      this.$refs.upload.submit()
    },
    // 各项内容的删除函数
    /**
     * @param index 删 除的索引
     * @param type 删 除的类型
     *        1, 论文
     *        2, 科研项目
     *        3, 教材或学术著作
     *        4, 科研或教学奖励
     *        5, 发明专利
     * */
    deleteFunc: function(index, type) {
      console.log(index, type)
      switch (type) {
        case 1: this.formThird.academicPapers.splice(index, 1); break
        case 2: this.formThird.researchProjects.splice(index, 1); break
        case 3: this.formThird.academicWorks.splice(index, 1); break
        case 4: this.formThird.teachingAwards.splice(index, 1); break
        case 5: this.formThird.inventionPatents.splice(index, 1); break
      }
    },

    // 上传文件
    // 上传成功
    uploadSuccessFunc: function(response, file, fileList) {
      console.log('success')
      console.log('response', response.data.fileType)
      switch (response.data.fileType) {
        // 论文
        case 1:
        case 2:
          this.academicPaper.paperProveMaterials = response.data.url // 论文的存储地址
          this.formThird.academicPapers.push(this.academicPaper) // 加入列表
          // 置空论文
          this.academicPaper = {
            paperName: '',
            paperPublicationTime: '',
            journalName: '',
            journalLevel: '',
            journalCategory: '',
            sciPart: '',
            impactFactors: '',
            firstAuthorName: '',
            communicationAuthorName: '',
            paperSubject: '',
            paperProveMaterials: ''
          }
          if (response.data.fileType === 1) {
            this.dialogThird1 = false
          } else {
            this.dialogThird2 = false
          }
          break
        // 科研项目
        case 3:
          this.researchProject.projectProveMaterials = response.data.url // 论文的存储地址
          this.formThird.researchProjects.push(this.researchProject) // 加入列表
          // 置空科研项目
          this.researchProject = {
            projectId: '',
            projectName: '',
            projectNumber: '',
            approvalNumber: '',
            projectChargeName: '',
            projectStartTime: '',
            projectEndTime: '',
            projectCategory: '',
            projectTotalPrice: '',
            projectLevel: '',
            projectProveMaterials: ''
          }
          this.dialogThird3 = false
          break
        // 教材或学术著作
        case 4:
          this.academicWork.worksProveMaterials = response.data.url // 论文的存储地址
          this.formThird.academicWorks.push(this.academicWork) // 加入列表
          // 置空科研项目
          this.academicWork = {
            worksId: '',
            worksName: '',
            worksNumber: '',
            worksPublicationTime: '',
            worksPublicationUnit: '',
            totalWords: '',
            authorName: '',
            worksProveMaterials: ''
          }
          this.dialogThird4 = false
          break
        // 科研或教学奖励
        case 5:
          this.teachingAward.awardsProveMaterials = response.data.url // 论文的存储地址
          this.formThird.teachingAwards.push(this.teachingAward) // 加入列表
          // 置空科研项目
          this.teachingAward = {
            awardsId: '',
            awardsName: '',
            awardsRank: '',
            awardsUnit: '',
            awardsLevel: '',
            awardsTime: '',
            awardsAuthorName: '',
            awardsProveMaterials: ''
          }
          this.dialogThird5 = false
          break
        // 发明专利
        case 6:
          this.inventionPatent.patentProveMaterials = response.data.url // 论文的存储地址
          this.formThird.inventionPatents.push(this.inventionPatent) // 加入列表
          // 置空科研项目
          this.inventionPatent = {
            patentId: '',
            patentName: '',
            patentAuthorName: '',
            patentGrantTime: '',
            patentGrantNumber: '',
            patentType: '',
            patentProveMaterials: ''
          }
          this.dialogThird6 = false
          break
      }
    },

    // 上传镜像失败
    uploadErrorFunc: function(err, file, fileList) {
      console.log('error')
      console.log('err', err)
      console.log('file', file)
      console.log('fileList', fileList)
    },

    // 汇总生成
    getSummary: function() {
      console.log(this.formThird)
      // 论文部分
      this.formThird.summary.firstAuthorPaper = this.formThird.academicPapers.length
      this.formThird.summary.authorityAmount = this.formThird.academicPapers.filter(item => item.journalLevel === '顶级期刊（A类）' || item.journalLevel === '权威期刊（B类）' || item.journalLevel === '核心期刊（C类）').length
      this.formThird.summary.eiAmount = this.formThird.academicPapers.filter(item => item.journalCategory === 'EI').length
      this.formThird.summary.cssciAmount = this.formThird.academicPapers.filter(item => item.journalCategory === 'SSCI').length

      // 科研项目部分
      this.formThird.summary.directProject = this.formThird.researchProjects.length
      this.formThird.summary.projectNationalLevel = this.formThird.researchProjects.filter(item => item.projectLevel === '国家级').length
      this.formThird.summary.projectProvinceLevel = this.formThird.researchProjects.filter(item => item.projectLevel === '省部级').length
      this.formThird.summary.accumulatedFunds = this.formThird.researchProjects.reduce((total, item) => total + item.projectTotalPrice * 1, 0)
      this.formThird.summary.horizontalProject = this.formThird.researchProjects.filter(item => item.projectCategory === '横向').reduce((total, item) => total + item.projectTotalPrice * 1, 0)

      // 著作
      this.formThird.summary.publishWorks = this.formThird.academicWorks.length
      this.formThird.summary.publishWorksWords = this.formThird.academicWorks.reduce((total, item) => total + item.totalWords * 1, 0)

      // 获奖
      this.formThird.summary.scientificAwards = this.formThird.teachingAwards.length
      this.formThird.summary.awardsNationalLevel = this.formThird.teachingAwards.filter(item => item.awardsLevel === '国家级').length
      this.formThird.summary.awardsProvinceLevel = this.formThird.teachingAwards.filter(item => item.awardsLevel === '省部级').length

      // 专利
      this.formThird.summary.inventionPatentAmount = this.formThird.inventionPatents.length
      this.formThird.summary.newUtilityPatent = this.formThird.inventionPatents.filter(item => item.patentType === '实用新型专利').length
    },

    /* =========================  第 4 页  ================================= */
    // 完成第 4 页学术信息的填写
    onSubmitFourthPage: function() {
      this.$confirm('提交填写?')
        // 提交保存第 4 页
        .then(() => {
          this.formVisible.third = false // 关闭第 4 页
          this.$router.push('/tutorApply') // 回到首页
          this.active = 0
        })
        .catch(() => {
          console.log('cancel')
        })
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
