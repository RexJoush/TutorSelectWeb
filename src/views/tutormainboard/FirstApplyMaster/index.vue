<!--
 * @Author: zjz
 * @Date: 2021-08-13 16:36:21
 * @LastEditors: Rex Joush
 * @LastEditTime: 2021-08-16 20:54:02
-->
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
    <!-- 第 1 页基本信息 -->
    <el-row>
      <el-col :span="18" :offset="4">
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
              <Col :span="16">
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

    <!-- 第 2 页研究信息 -->
    <el-row>
      <el-col :span="18" :offset="4">
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
                      class="addButton"
                      >添加</el-button
                    >
                    <el-table
                      :data="formSecond.groupsOrPartTimeJobs"
                      border
                      style="width: 100%"
                    >
                      <el-table-column
                        type="index"
                        width="40"
                      ></el-table-column>
                      <el-table-column
                        prop="time"
                        label="参加时间"
                        width="180"
                      ></el-table-column>
                      <el-table-column
                        prop="groups"
                        label="学术团体或兼职"
                        width="200"
                      ></el-table-column>
                      <el-table-column
                        prop="job"
                        label="所任职务"
                      ></el-table-column>
                    </el-table>
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
                      class="addButton"
                      >添加</el-button
                    >
                    <el-table
                      :data="formSecond.expertTitles"
                      border
                      style="width: 100%"
                    >
                      <el-table-column
                        type="index"
                        width="40"
                      ></el-table-column>
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
              <Row>
                <Col :offset="8">
              <el-form-item style="margin-top: 20px">
                <el-button @click="backToFirstPage">返回上一页</el-button>
                <el-button type="primary" @click="onSubmitSecondPage"
                  >保存此部分，填写下一项</el-button
                >
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
      <el-col :span="18" :offset="4">
        <transition name="el-fade-in-linear">
          <el-card class="box-card" v-if="formVisible.third">
            <div slot="header" class="clearfix">
              <h2>学术信息</h2>
            </div>
            <el-form
              ref="formThird"
              :model="formThird"
              label-width="150px"
              label-position="top"
              v-if="formVisible.third"
            >
              <!-- 学术论文(近五年) -->
              <el-card class="box-card" shadow="always">
                <div slot="header" class="clearfix">
                  <span style="font-size: 18px">科研项目（近五年）</span>
                </div>
                <el-row>
                  <el-col :span="4">
                    <el-button
                      class="addButton"
                      type="primary"
                      @click="dialogAcademicPaper = true"
                      >添加学术论文</el-button
                    >
                  </el-col>
                </el-row>
                <el-table :data="academicPapers" border style="width: 100%">
                  <el-table-column type="index" width="40"></el-table-column>
                  <el-table-column
                    prop="paperName"
                    label="论文名称"
                  ></el-table-column>
                  <el-table-column
                    prop="paperNumber"
                    label="论文编号"
                  ></el-table-column>
                  <el-table-column
                    prop="authorName"
                    label="作者姓名"
                  ></el-table-column>
                  <el-table-column
                    prop="firstAuthorName"
                    label="第一作者"
                  ></el-table-column>
                  <el-table-column
                    prop="communicationAuthorName"
                    label="通讯作者"
                  ></el-table-column>
                  <el-table-column
                    prop="paperPublicationTime"
                    label="发表时间"
                  ></el-table-column>
                  <el-table-column
                    prop="journalName"
                    label="期刊名称"
                  ></el-table-column>
                  <el-table-column
                    prop="journalCategory"
                    label="期刊类别"
                  ></el-table-column>
                  <el-table-column
                    prop="journalLevel"
                    label="期刊分区"
                  ></el-table-column>
                  <el-table-column
                    prop="impactFactors"
                    label="影响因子"
                  ></el-table-column>
                </el-table>
              </el-card>
              <br />
              <!-- 科研项目（近五年） -->
              <el-card class="box-card" shadow="always">
                <div slot="header" class="clearfix">
                  <span style="font-size: 18px">科研项目（近五年）</span>
                </div>
                <el-row>
                  <el-col :span="4"
                    ><el-button class="addButton" type="primary"
                      >添加科研项目</el-button
                    ></el-col
                  >
                </el-row>
                <el-table :data="researchProjects" border style="width: 100%">
                  <el-table-column type="index" width="40"></el-table-column>
                  <el-table-column
                    prop="projectName"
                    label="项目名称"
                  ></el-table-column>
                  <el-table-column
                    prop="projectNumber"
                    label="项目编号"
                  ></el-table-column>
                  <el-table-column
                    prop="approvalNumber"
                    label="批准号"
                  ></el-table-column>
                  <el-table-column
                    prop="projectChargeName"
                    label="负责人姓名"
                  ></el-table-column>
                  <el-table-column
                    prop="projectStartTime"
                    label="开始日期"
                  ></el-table-column>
                  <el-table-column
                    prop="projectEndTime"
                    label="结束日期"
                  ></el-table-column>
                  <el-table-column
                    prop="projectSourceUnit"
                    label="项目来源单位"
                    width="120px"
                  ></el-table-column>
                  <el-table-column
                    prop="projectTotalPrice"
                    label="总经费（万元）"
                    width="120px"
                  ></el-table-column>
                  <el-table-column
                    prop="projectLevel"
                    label="项目级别"
                  ></el-table-column>
                </el-table>
              </el-card>
              <br />
              <!-- 教材或学术著作（近五年） -->
              <el-card class="box-card" shadow="always">
                <div slot="header" class="clearfix">
                  <span style="font-size: 18px">教材或学术著作（近五年）</span>
                </div>
                <el-row>
                  <el-col :span="4"
                    ><el-button class="addButton" type="primary"
                      >添加教材或学术著作</el-button
                    ></el-col
                  >
                </el-row>
                <el-table :data="academicWorks" border style="width: 100%">
                  <el-table-column type="index" width="40px"></el-table-column>
                  <el-table-column
                    prop="worksName"
                    label="著作名称"
                  ></el-table-column>
                  <el-table-column
                    prop="worksNumber"
                    label="标准书号"
                  ></el-table-column>
                  <el-table-column
                    prop="worksPublicationTime"
                    label="出版日期"
                  ></el-table-column>
                  <el-table-column
                    prop="worksPublicationUnit"
                    label="出版单位"
                  ></el-table-column>
                  <el-table-column
                    prop="totalWords"
                    label="完成字数（万字）"
                  ></el-table-column>
                  <el-table-column
                    prop="authorName"
                    label="作者姓名"
                  ></el-table-column>
                </el-table>
              </el-card>
              <br />
              <!-- 科研教学奖励（近五年） -->
              <el-card class="box-card" shadow="always">
                <div slot="header" class="clearfix">
                  <span style="font-size: 18px">科研教学奖励（近五年）</span>
                </div>
                <el-row>
                  <el-col :span="4"
                    ><el-button class="addButton" type="primary"
                      >添加科研教学奖励</el-button
                    ></el-col
                  >
                </el-row>
                <el-table :data="teachingAwards" border style="width: 100%">
                  <el-table-column type="index" width="40px"></el-table-column>
                  <el-table-column prop="awardsName" label="奖励名称">
                  </el-table-column>
                  <el-table-column prop="awardsUnit" label="颁奖单位">
                  </el-table-column>
                  <el-table-column prop="awardsLevel" label="获奖级别">
                  </el-table-column>
                  <el-table-column prop="awardsTime" label="获奖日期">
                  </el-table-column>
                  <el-table-column prop="awardsAuthorName" label="获奖人姓名">
                  </el-table-column>
                </el-table>
              </el-card>
              <br />
              <!-- 发明专利（近五年） -->
              <el-card class="box-card" shadow="always">
                <div slot="header" class="clearfix">
                  <span style="font-size: 18px">发明专利（近五年）</span>
                </div>
                <el-row>
                  <el-col :span="4"
                    ><el-button class="addButton" type="primary"
                      >添加发明专利</el-button
                    ></el-col
                  >
                </el-row>
                <el-table :data="inventionPatents" border style="width: 100%">
                  <el-table-column type="index" width="40px"></el-table-column>
                  <el-table-column prop="patentName" label="专利名称">
                  </el-table-column>
                  <el-table-column prop="patentNumber" label="专利编号">
                  </el-table-column>
                  <el-table-column prop="patentGrantTime" label="专利授权日期">
                  </el-table-column>
                  <el-table-column prop="patentGrantNumber" label="专利授权号">
                  </el-table-column>
                  <el-table-column prop="patentType" label="专利类型">
                  </el-table-column>
                  <el-table-column prop="patentAuthorName" label="作者姓名">
                  </el-table-column>
                </el-table>
              </el-card>
              <br />
              
              <el-row>
                <el-col :offset="8"><el-form-item style="margin-top: 20px">
                <el-button @click="backToSecondPage">返回上一页</el-button>
                <el-button type="primary" @click="onSubmitThirdPage"
                  >保存此部分，填写下一项</el-button
                >
              </el-form-item></el-col>
              </el-row>
              
            </el-form>
          </el-card>
        </transition>
      </el-col>
    </el-row>

    <!-- 第 4 页教学信息 -->
    <el-row>
      <el-col :span="18" :offset="4">
        <transition name="el-fade-in-linear">
          <el-card class="box-card" v-if="formVisible.fourth">
            <div slot="header" class="clearfix">
              <h2>教学信息</h2>
            </div>
            <el-form
              ref="formFourth"
              :model="formFourth"
              label-width="150px"
              label-position="top"
              v-if="formVisible.fourth"
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
                      >添加学生</el-button
                    >
                  </el-col>
                </el-row>
                <el-table :data="guidingStudents" border style="width: 100%">
                  <el-table-column type="index" width="40px"></el-table-column>
                  <el-table-column
                    prop="studentName"
                    label="学生姓名"
                    width="100"
                  ></el-table-column>
                  <el-table-column
                    prop="studentType"
                    label="学生类型"
                    width="100"
                  ></el-table-column>
                  <el-table-column
                    prop="studentEntryTime"
                    label="学生入学时间"
                    width="180"
                  ></el-table-column>
                  <el-table-column
                    prop="degreePaperTitle"
                    label="学位论文题目"
                  ></el-table-column>
                  <el-table-column
                    prop="isGainDegree"
                    label="是否获得学位"
                  ></el-table-column>
                  <el-table-column
                    prop="graduateTime"
                    label="毕业时间"
                    width="180"
                  ></el-table-column>
                </el-table>
              </el-card>
              <br />
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
                      >添加学生</el-button
                    >
                  </el-col>
                </el-row>
                <el-table :data="guidingStudents" border style="width: 100%">
                  <el-table-column type="index" width="40px"></el-table-column>
                  <el-table-column
                    prop="studentName"
                    label="学生姓名"
                    width="100"
                  ></el-table-column>
                  <el-table-column
                    prop="studentType"
                    label="学生类型"
                    width="100"
                  ></el-table-column>
                  <el-table-column
                    prop="studentEntryTime"
                    label="学生入学时间"
                    width="180"
                  ></el-table-column>
                  <el-table-column
                    prop="degreePaperTitle"
                    label="学位论文题目"
                  ></el-table-column>
                  <el-table-column
                    prop="isGainDegree"
                    label="是否获得学位"
                  ></el-table-column>
                  <el-table-column
                    prop="graduateTime"
                    label="毕业时间"
                    width="180"
                  ></el-table-column>
                </el-table>
              </el-card>
              <br />
              <!-- 研究生课程教学情况 -->
              <el-card class="box-card" shadow="always">
                <div slot="header" class="clearfix">
                  <span style="font-size: 18px">研究生课程教学情况</span>
                </div>
                <el-row>
                  <el-col :span="4"
                    ><el-button class="addButton" type="primary"
                      >添加研究生课程教学信息</el-button
                    ></el-col
                  >
                </el-row>
                <el-table :data="courseTeachings" border style="width: 100%">
                  <el-table-column type="index" width="40px"></el-table-column>
                  <el-table-column
                    prop="courseName"
                    label="课程名称"
                  ></el-table-column>
                  <el-table-column
                    prop="courseTime"
                    label="课程时间"
                  ></el-table-column>
                  <el-table-column
                    prop="courseDuration"
                    label="授课总课时"
                  ></el-table-column>
                  <el-table-column
                    prop="courseObject"
                    label="授课对象"
                  ></el-table-column>
                </el-table>
              </el-card>
              <br />
              <el-row>
                <el-col :offset="8">
              <el-form-item style="margin-top: 20px">
                <el-button @click="backToThirdPage">返回上一页</el-button>
                <el-button type="primary" @click="onSubmitFourthPage"
                  >提交本次申请</el-button
                >
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
    <!-- 第三页 弹框部分 -->
    <!-- <el-dialog title="学术论文管理 > 新增" :visible.sync="dialogFormVisible">
      <el-form :model="form" :label-position="left">
        <el-form-item label="论文名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="第一作者">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="期刊名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="发表时间">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="期刊等级">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="顶级期刊（A类）" value="1"></el-option>
            <el-option label="权威期刊（B类）" value="2"></el-option>
            <el-option label="核心期刊（C类）" value="3"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog> -->
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
        first: false,
        second: false,
        third: false,
        fourth: true,
      },
      // 第 1 页表单
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

      // 第 2 页表单
      formSecond: {
        major: "", // 主要研究方向的内容及其意义
        groupsOrPartTimeJob: [], // 何时参加何种学术团体、任何种职务，有何社会兼职列表
        groupsOrPartTimeJob: {
          time: "",
          groups: "",
          job: "",
        },
        expertTitles: [], // 获何专家称号及时间列表
        expertTitle: {
          time: "",
          title: "",
        },
      },

      // 第 3 页表单
      dialogAcademicPaper: false, // 学术论文添加按钮
      academicPapers: [], // 学术论文列表
      academicPaper: {
        // 学术论文
        paperName: "", // 论文名称
        paperNumber: "", // 论文编号
        authorName: "", // 作者姓名
        firstAuthorName: "", // 第一作者
        communicationAuthorName: "", // 通讯作者
        paperPublicationTime: "", // 发表时间
        journalName: "", // 期刊名称
        journalCategory: "", // 期刊类别
        journalLevel: "", // 期刊分区
        impactFactors: "", // 影响因子
        // address : "",  // 地址
      },

      // 科研项目
      researchProjects: [], // 科研项目列表
      researchProject: {
        // 科研项目
        projectName: "", // 项目名称
        projectNumber: "", // 项目编号
        projectChargeName: "", // 负责人姓名
        approvalNumber: "", // 批准号
        projectStartTime: "", // 开始日期
        projectEndTime: "", // 结束日期
        projectSourceUnit: "", // 项目来源单位
        projectTotalPrice: "", // 总经费
        projectLevel: "", // 项目级别
        projectProveMaterials: "", // 证明材料，图片，pdf等
      },

      // 教材或学术著作
      academicWorks: [], // 教材或学术著作列表
      academicWork: {
        // 教材或学术著作
        worksName: "", // 著作名称
        worksNumber: "", // 标准书号
        worksPublicationTime: "", // 出版日期
        worksPublicationUnit: "", // 出版单位
        totalWords: "", // 完成字数
        authorName: "", // 作者姓名
        worksProveMaterials: "", // 证明材料，图片，pdf等
      },

      // 科研教学奖励
      teachingAwards: [], // 科研教学奖励列表
      teachingAward: {
        // 科研教学奖励
        awardsName: "", // 奖励名称
        awardsUnit: "", // 颁奖单位
        awardsLevel: "", // 获奖级别
        awardsTime: "", // 获奖日期
        awardsAuthorName: "", // 获奖人姓名
        awardsProveMaterials: "", // 证明材料，图片，pdf等
      },

      // 发明专利
      inventionPatents: [], // 发明专利列表
      inventionPatent: {
        // 发明专利
        patentName: "", // 专利名称
        patentNumber: "", // 专利编号
        patentGrantTime: "", // 专利授权日期
        patentGrantNumber: "", // 专利授权号
        patentType: "", // 专利类型
        patentAuthorName: "", // 作者姓名
        patentProveMaterials: "", // 证明材料，图片，pdf等
      },

      // 第 4 页表单
      // 指导学生情况
      dialogAddStudent: false, // 添加学生框
      guidingStudents: [], // 指导学生列表
      guidingStudent: {
        // 学生信息
        studentName: "", // 学生姓名
        studentType: "", // 学生类型，用于区分是本科生，硕士生和博士生
        studentEntryTime: "", // 学生入学时间
        degreePaperTitle: "", // 学位论文题目
        isGainDegree: "", // 是否获得学位
        directType: "", // 指导类型，协助指导，指导
        tutorName: "", // 导师姓名
        graduateTime: "", // 毕业时间
      },

      // 研究生课程教学情况
      courseTeachings: [], // 研究生课程列表
      courseTeaching: {
        courseName: "", // 课程名称
        courseTime: "", // 课程时间
        courseDuration: "", // 授课总课时
        courseObject: "", // 授课对象
      },
    };
  },
  methods: {
    /* 第 1 页 */

    // 完成第 1 页基本信息的填写
    onSubmitFirstPage: function () {
      this.$confirm("提交填写?")
        // 提交保存第 1 页
        .then(() => {
          this.formVisible.first = false; // 关闭第 1 页
          this.formVisible.second = true; // 打开第 2 页
          this.active = 1;
        })
        .catch(() => {
          console.log("cancel");
        });
    },

    /* 第 2 页 */
    // 完成第 2 页研究信息的填写
    onSubmitSecondPage: function () {
      this.$confirm("提交填写?")
        // 提交保存第 2 页
        .then(() => {
          this.formVisible.second = false; // 关闭第 2 页
          this.formVisible.third = true; // 打开第 3 页
          this.active = 2;
        })
        .catch(() => {
          console.log("cancel");
        });
    },
    // 返回第 1 页
    backToFirstPage: function () {
      this.formVisible.first = true; // 打开第 1 页
      this.formVisible.second = false; // 关闭第 2 页
    },
    // 第 2 页添加学术团体项
    addGroupsOrPartTimeJob: function () {
      // let obj = {
      //   time: "",
      //   groups: "",
      //   job: "",
      // };
      // this.formSecond.groupsOrPartTimeJobs.push(obj);
    },
    // 删除某项学术团体项
    delGroupsOrPartTimeJob: function (index) {
      // this.formSecond.groupsOrPartTimeJobs.splice(index, 1);
    },

    // 添加某项专家称号
    addExpertTitle: function () {
      // let obj = {
      //   time: "",
      //   title: "",
      // };
      // this.formSecond.expertTitles.push(obj);
    },
    // 删除某项专家称号
    delExpertTitle: function (index) {
      // this.formSecond.expertTitles.splice(index, 1);
    },

    /* 第 3 页 */
    // 完成第 3 页学术信息的填写
    onSubmitThirdPage: function () {
      this.$confirm("提交填写?")
        // 提交保存第 3 页
        .then(() => {
          this.formVisible.third = false; // 关闭第 3 页
          this.formVisible.fourth = true; // 打开第 4 页
          this.active = 3;
        })
        .catch(() => {
          console.log("cancel");
        });
    },
    // 返回第 2 页
    backToSecondPage: function () {
      this.formVisible.second = true; // 打开第 2 页
      this.formVisible.third = false; // 关闭第 3 页
    },

    /* 第 4 页 */
    // 完成第 4 页学术信息的填写
    onSubmitFourthPage: function () {
      this.$confirm("提交填写?")
        // 提交保存第 4 页
        .then(() => {
          this.formVisible.third = false; // 关闭第 4 页
          this.$router.push("/tutorapply"); // 回到首页
          this.active = 0;
        })
        .catch(() => {
          console.log("cancel");
        });
    },
    // 返回第 2 页
    backToThirdPage: function () {
      this.formVisible.third = true; // 打开第 2 页
      this.formVisible.fourth = false; // 关闭第 3 页
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
  width: 100%;
}
</style>