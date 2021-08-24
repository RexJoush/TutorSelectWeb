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
                      <el-radio v-model="formFirst.gender" label="男"
                        >男</el-radio
                      >
                      <el-radio v-model="formFirst.gender" label="女"
                        >女</el-radio
                      >
                    </el-form-item>
                  </Col>
                  <Col :span="12">
                    <el-form-item label="所在单位">
                      <el-input v-model="formFirst.organizationId"></el-input>
                    </el-form-item>
                  </Col>
                  <Col :span="12">
                    <el-form-item label="出生年月">
                      <el-date-picker
                        v-model="formFirst.birthday"
                        type="date"
                        style="width: 100%"
                        placeholder="选择日期"
                        format="yyyy-MM-dd"
                      >
                      </el-date-picker>
                    </el-form-item>
                  </Col>
                  <Col :span="24">
                    <el-form-item label="证件号码">
                      <el-input v-model="formFirst.identity"></el-input>
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
                        v-model="formFirst.evaluateTime"
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
                    :src="formFirst.image"
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
                    v-model="formFirst.finalDegree"
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
                  <el-input v-model="this.awardDepartment"></el-input>
                </el-form-item>
              </Col>
              <Col :span="8">
                <el-form-item label="授予时间">
                  <el-date-picker
                    v-model="this.awardTime"
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
    <!-- 第二页研究信息 -->
    <Row>
      <Col :span="18" :offset="3">
        <transition name="el-fade-in-linear">
          <el-card class="box-card" v-if="formVisible.second">
            <!-- <el-card class="box-card" v-if=true> -->
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
                    <Col :span="8">
                      <el-form-item label="申请学科">
                        <el-select
                          v-model="formFirst.applySubject"
                          placeholder="请选择"
                        >
                          <el-option
                            key="文史"
                            lable="文史"
                            value="文史"
                          ></el-option>
                          <el-option
                            key="理工"
                            lable="理工"
                            value="理工"
                          ></el-option>
                          <el-option
                            key="交叉学科"
                            lable="交叉学科"
                            value="交叉学科"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                    </Col>
                    <Col :span="8">
                      <el-form-item label="申请学科负责单位：">
                        <el-select
                          v-model="currentDepartment"
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
    <!-- 第三页内容 -->
    <div v-if="formVisible.third">
      <el-row>
        <el-col :span="18" :offset="3">
          <div>
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
                  <span style="font-size: 18px">学术论文(近五年)</span>
                </div>
                <el-row>
                  <el-col :span="4"
                    ><el-button
                      type="primary"
                      @click="SocialSciencesPaperAdd = true"
                      >社科成果增加</el-button
                    ></el-col
                  >
                  <el-col :span="4"
                    ><el-button
                      type="primary"
                      @click="ScienceEngineeringPaperAdd = true"
                      >理工成果增加</el-button
                    ></el-col
                  >
                </el-row>
                <br />
                <el-table
                  :data="tableData"
                  height="250"
                  border
                  style="width: 100%"
                >
                  <!-- <el-table-column fixed type="selection" width="55">
                </el-table-column> -->
                  <el-table-column
                    prop="name"
                    label="序号"
                    width="50"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="名称"
                    width="180"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="第一作者"
                    width="180"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="通信作者"
                    width="180"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="发表时间"
                    width="180"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="期刊名称"
                    width="180"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="期刊类别"
                    width="180"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="期刊分区"
                    width="180"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="影响因子"
                    width="180"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
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
                    ><el-button type="primary">社科成果增加</el-button></el-col
                  >
                  <el-col :span="4"
                    ><el-button type="primary">理工成果增加</el-button></el-col
                  >
                </el-row>
                <br />
                <el-table
                  :data="tableData"
                  height="250"
                  border
                  style="width: 100%"
                >
                  <el-table-column
                    prop="name"
                    label="序号"
                    width="50"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="名称"
                    width="200"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="批准号"
                    width="200"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="负责人"
                    width="200"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="开始时间"
                    width="200"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="结束时间"
                    width="200"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="项目级别"
                    width="200"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="总经费（万元）"
                    width="200"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
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
                    ><el-button type="primary">社科成果增加</el-button></el-col
                  >
                  <el-col :span="4"
                    ><el-button type="primary">理工成果增加</el-button></el-col
                  >
                </el-row>
                <br />
                <el-table
                  :data="tableData"
                  height="250"
                  border
                  style="width: 100%"
                >
                  <el-table-column
                    prop="name"
                    label="序号"
                    width="50"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="名称"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="排名"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="出版时间"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="出版单位"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="完成字数（万字）"
                    show-overflow-tooltip="true"
                  >
                  </el-table-column>
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
                    ><el-button type="primary">社科成果增加</el-button></el-col
                  >
                  <el-col :span="4"
                    ><el-button type="primary">理工成果增加</el-button></el-col
                  >
                </el-row>
                <br />
                <el-table
                  :data="tableData"
                  height="250"
                  border
                  style="width: 100%"
                >
                  <el-table-column prop="name" label="序号" width="50">
                  </el-table-column>
                  <el-table-column prop="name" label="名称"> </el-table-column>
                  <el-table-column prop="name" label="排名"> </el-table-column>
                  <el-table-column prop="name" label="颁奖单位">
                  </el-table-column>
                  <el-table-column prop="name" label="级别"> </el-table-column>
                  <el-table-column prop="name" label="等级"> </el-table-column>
                  <el-table-column prop="name" label="获奖时间">
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
                    ><el-button type="primary">社科成果增加</el-button></el-col
                  >
                  <el-col :span="4"
                    ><el-button type="primary">理工成果增加</el-button></el-col
                  >
                </el-row>
                <br />
                <el-table
                  :data="tableData"
                  height="250"
                  border
                  style="width: 100%"
                >
                  <el-table-column prop="name" label="序号" width="50">
                  </el-table-column>
                  <el-table-column prop="name" label="名称"> </el-table-column>
                  <el-table-column prop="name" label="第一作者">
                  </el-table-column>
                  <el-table-column prop="name" label="授权（颁奖）时间">
                  </el-table-column>
                  <el-table-column prop="name" label="专利授权号">
                  </el-table-column>
                </el-table>
              </el-card>
              <br />
              <!-- 科研汇总 -->
              <el-card class="box-card" shadow="always">
                <div slot="header" class="clearfix">
                  <span style="font-size: 18px">科研成果汇总</span>
                  <el-button style="float: right" type="primary"
                    >汇总生成</el-button
                  >
                </div>
                <div>
                  <p>
                    1.以第一作者或通讯作者在核心及以上期刊发表与本学科相关的学术论文共
                    <span class="summary">{{
                      formThird.summary.firstAuthorPaper
                    }}</span>
                    篇，其中权威
                    <span class="summary">{{
                      formThird.summary.authorityAmount
                    }}</span>
                    篇，EI
                    <span class="summary">{{
                      formThird.summary.eiAmount
                    }}</span>
                    篇，CSSCI
                    <span class="summary">{{
                      formThird.summary.cssciAmount
                    }}</span>
                    篇，SSCI
                    <span class="summary">{{
                      formThird.summary.ssciAmount
                    }}</span>
                    篇
                    <!--，核心共 <span class="summary">{{ formThird.summary.directProject }}</span> 篇。 -->
                  </p>
                  <br />
                  <p>
                    2.主持在研科研项目共
                    <span class="summary">{{
                      formThird.summary.directProject
                    }}</span>
                    项，其中国家级
                    <span class="summary">{{
                      formThird.summary.projectNationalLevel
                    }}</span>
                    项，省部级
                    <span class="summary">{{
                      formThird.summary.projectProvinceLevel
                    }}</span>
                    项；在研项目中累计到款科研经费
                    <span class="summary">{{
                      formThird.summary.accumulatedFunds
                    }}</span>
                    万元，其中横向项目到款经费
                    <span class="summary">{{
                      formThird.summary.horizontalProject
                    }}</span>
                    万元。
                  </p>
                  <br />
                  <p>
                    3.出版本专业领域内研究生教材或学术著作（译著）
                    <span class="summary">{{
                      formThird.summary.publishWorks
                    }}</span>
                    部，每部本人完成
                    <span class="summary">{{
                      formThird.summary.publishWorksWords
                    }}</span>
                    万字。
                  </p>
                  <br />
                  <p>
                    4.科研教学获奖共
                    <span class="summary">{{
                      formThird.summary.scientificAwards
                    }}</span>
                    项，其中国家级
                    <span class="summary">{{
                      formThird.summary.awardsNationalLevel
                    }}</span>
                    项，省部级
                    <span class="summary">{{
                      formThird.summary.awardsProvinceLevel
                    }}</span>
                    项。
                  </p>
                  <br />
                  <p>
                    5.以第一发明人授权职务发明专利
                    <span class="summary">{{
                      formThird.summary.inventionPatentAmount
                    }}</span>
                    项或实用新型专利
                    <span class="summary">{{
                      formThird.summary.newUtilityPatent
                    }}</span>
                    项。
                  </p>
                  <br />
                  <br />
                  <el-row>
                    <el-col :offset="8"
                      ><el-form-item style="margin-top: 20px">
                        <!-- <el-button @click="backToSecondPage"
                          >返回上一页</el-button
                        > -->
                        <el-button type="primary" @click="onSubmitThirdPage"
                          >保存此部分，填写下一项</el-button
                        >
                      </el-form-item></el-col
                    >
                  </el-row>
                </div>
              </el-card>
            </el-form>
          </div>
        </el-col>
      </el-row>
      <!-- <el-row>
        <el-col :span="18" :offset="3">

        </el-col>
      </el-row> -->
    </div>
    <!-- 第三页内容结束 -->
    <!-- 第四页内容 -->
    <div v-if="formVisible.fourth">
      <el-row>
        <el-col :span="18" :offset="3">
          <div>
            <!-- 协助指导硕士生情况 -->
            <el-card class="box-card" shadow="always">
              <div slot="header" class="clearfix">
                <span style="font-size: 18px">协助指导硕士生情况</span>
              </div>
              <el-row>
                <el-col :span="4"
                  ><el-button type="primary">增加</el-button></el-col
                >
              </el-row>
              <br />
              <el-table
                :data="tableData"
                height="250"
                border
                style="width: 100%"
              >
                <el-table-column prop="name" label="研究生姓名">
                </el-table-column>
                <el-table-column prop="name" label="入学时间">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="硕士学位论文题目"
                  show-overflow-tooltip="true"
                >
                </el-table-column>
                <el-table-column prop="name" label="是否获得学位">
                </el-table-column>
              </el-table>
            </el-card>
            <br />
            <!-- 指导本科生毕业设计情况 -->
            <el-card class="box-card" shadow="always">
              <div slot="header" class="clearfix">
                <span style="font-size: 18px">指导本科生毕业设计情况</span>
              </div>
              <el-row>
                <el-col :span="4"
                  ><el-button type="primary">增加</el-button></el-col
                >
              </el-row>
              <br />
              <el-table
                :data="tableData"
                height="250"
                border
                style="width: 100%"
              >
                <el-table-column prop="name" label="本科生姓名">
                </el-table-column>
                <el-table-column prop="name" label="毕业时间">
                </el-table-column>
                <el-table-column prop="name" label="毕业设计题目">
                </el-table-column>
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
                  ><el-button type="primary">增加</el-button></el-col
                >
              </el-row>
              <br />
              <el-table
                :data="tableData"
                height="250"
                border
                style="width: 100%"
              >
                <el-table-column prop="name" label="授课时间">
                </el-table-column>
                <el-table-column prop="name" label="课程名称">
                </el-table-column>
                <el-table-column prop="name" label="授课总课时">
                </el-table-column>
                <el-table-column prop="name" label="授课对象">
                </el-table-column>
              </el-table>
            </el-card>
            <br />
            <br />

            <el-row>
              <!-- <el-col  :span="3"
                ><el-button type="primary" @click="backThirdPage"
                  >返回上一页</el-button
                ></el-col
              > -->
              <el-col offset="10" :span="3"
                ><el-button type="primary" @click="onSubmitFourthPage"
                  >提交</el-button
                ></el-col
              >
            </el-row>
          </div>
        </el-col>
      </el-row>
      <br />
      <br />
      <br />
    </div>
    <!-- 第四页内容 结束-->

    <!-- 第三页操作内容 -->
    <!-- 学术论文 社科成果增加-->
    <el-dialog
      title="学术论文管理>社科成果增加"
      :visible.sync="SocialSciencesPaperAdd"
    >
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
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">上传证明材料</el-button>
        <div slot="tip" class="el-upload__tip">
          证明材料包括论文封面、目录和正文若上传多个文件，请压缩为.rar/.zip文件上传
        </div>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <!-- 学术论文 理工科成果增加-->
    <el-dialog
      title="学术论文管理>理工科成果增加"
      :visible.sync="ScienceEngineeringPaperAdd"
    >
      <el-form :model="form" label-position="left">
        <el-form-item label="论文名称" >
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="第一作者" >
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="通信作者" >
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="发表时间" >
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="期刊类别" >
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="SCIE" value="1"></el-option>
            <el-option label="EI" value="2"></el-option>
            <el-option label="SSCI" value="3"></el-option>
            <el-option label="CPCI-S" value="4"></el-option>
            <el-option label="CSCD" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="期刊分区" >
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="期刊名称" >
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="影响因子" >
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <!-- 学术论文 编辑 -->
  </div>
</template>

<script>
import index from "@/components/Breadcrumb/index.vue";
import { doctorPrimaryDiscipline } from "@/utils/data";
import { saveFirstform ,showTeacherInfo } from "@/api/ApplyDoctor/FirstApplyDoctor";

export default {
  components: { index },
  data() {
    return {
      // 硕士学科代码
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
      
      /**第一页 */
      // 第 1 页表单
      awardDepartment: "", // 授予单位
      awardTime: "", // 授予时间

      formFirst: {
        name: "", // 姓名
        gender: "", // 性别
        image: "https://www.rexjoush.com/img/1.jpg",
        organizationId: 0, // 所在单位
        birthday: "", // 出生年月
        identity: "", // 证件号码
        phone: "", // 联系电话
        email: "", // 电子邮箱
        title: "", // 职称
        evaluateTime: "", // 评定时间
        finalDegree: "", // 最后学位
        awardingUnitTime: "", //授予单位及时间
      },

      // 第 2 页表单
      childNodes: [], // 院系的子专业信息
      currentDepartment: "", // 院系信息
      formSecond: {
        applySubject: "", // 申请学科
        doctoralMasterApplicationSubjectUnit: "", // 申请学科负责单位
        doctoralMasterSubjectCodeName: "", // 一级学科代码 + " " + 名称
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
      /**第三页表单 */
      dialogAcademicPaper: false, // 学术论文添加按钮
      formThird: {
        academicPapers: [], // 学术论文列表
        researchProjects: [], // 科研项目列表
        academicWorks: [], // 教材或学术著作列表
        teachingAwards: [], // 科研教学奖励列表
        inventionPatents: [], // 发明专利列表
        summary: {
          // 科研汇总信息
          firstAuthorPaper: 0, // 以第一作者或通讯在 核心及以上期刊发表与本学科发表的论文篇数
          authorityAmount: 0, // 权威篇数
          eiAmount: 0, // EI 篇数
          cssciAmount: 0, // CSSCI 篇数
          ssciAmount: 0, // SSCI 篇数
          directProject: 0, // 主持科研项目
          projectNationalLevel: 0, // 国家级项目
          projectProvinceLevel: 0, // 省部级项目
          accumulatedFunds: 0, // 累计科研经费，万元
          horizontalProject: 0, // 横向项目到款经费，万元
          publishWorks: 0, // 出版专业领域专著数
          publishWorksWords: 0, // 本人完成字数
          scientificAwards: 0, // 科研教学获奖项数
          awardsNationalLevel: 0, // 国家级奖项
          awardsProvinceLevel: 0, // 省部级奖项
          inventionPatentAmount: 0, // 发明专利
          newUtilityPatent: 0, // 新型实用专利
        },
      },
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

      // 第二页
      tableData: [],
      //第二页操作内容
      //学术论文 社科成果增加
      SocialSciencesPaperAdd: false,
      //学术论文 上传文件按钮
      fileList: [
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
      //学术论文 理工科成果增加
      ScienceEngineeringPaperAdd: false,
    };
  },
  created() {
    this.GetTutorInfoByClient()
  },
  methods: {
    /*============================================= 第一页 =====================================*/

    //提交第一页表单 完成第一页基本信息的填写
    GetTutorInfoByClient: function (){
      showTeacherInfo().then((res)=>{
         let obj= JSON.parse(res.data);
         console.log(obj.data.Rows[0])
          this.formFirst.name = obj.data.Rows[0].XM,
          this.formFirst.gender =obj.data.Rows[0].XB
          this.formFirst.image =obj.data.Rows[0].SHZ
          // this.organizationId=obj.data.Rows[0].XM
          this.formFirst.birthday = obj.data.Rows[0].CSRQ         
          this.formFirst.identity =obj.data.Rows[0].SFZJH
          this.formFirst.phone = obj.data.Rows[0].SJH
          // this.email = obj.data.Rows[0].XM
          this.formFirst.title = obj.data.Rows[0].ZCMC
          // this.evaluateTime = obj.data.Rows[0].XM
          this.formFirst.finalDegree = obj.data.Rows[0].ZGXW
          // this.awardingUnitTime = obj.data.Rows[0].XM
         
        
      })
    },
    onSubmitFirstPage: function () {
      this.$confirm("提交填写?")
        // 提交保存第一页
        .then(() => {
          //授予单位及时间
          this.formFirst.awardingUnitTime = this.awardDepartment + "-" + this.awardTime;

          let applyCondition= this.$route.params.applyCondition; 
          // if (applyCondition === 101 || appplyCondition === 102) {
            //首次申请博士提交到后台
            saveFirstform(this.formFirst, 1,applyCondition)
              .then((res) => {
                if (res.code == 20000) {
                  this.$message.success("保存成功！");
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
    /*第二页 */

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
    // 完成第二页基本信息的填写
    onSubmitSecondPage: function () {
      this.$confirm("提交填写?")
        // 提交保存第二页
        .then(() => {
          this.formVisible.second = false; // 关闭第二项
          this.formVisible.third = true; // 打开第三项
          this.active = 2;
        })
        .catch(() => {
          console.log("cancel");
        });
    },
    //返回第一页
    // backFirstPage: function () {
    //   this.formVisible.second = false;
    //   this.formVisible.first = true;
    // },
    //第二页对话框
    //社科类上传文件按钮
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },

    /* 第三页 */

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
    //返回第二页
    // backToSecondPage: function () {
    //   this.formVisible.third = false;
    //   this.formVisible.second = true;
    // },

    /* 第 4 页 */
    // 完成第 4 页学术信息的填写
    onSubmitFourthPage: function () {
      this.$confirm("提交填写?")
        // 提交保存第 4 页
        .then(() => {
          this.formVisible.third = false; // 关闭第 4 页
          this.$router.push("/tutorApply"); // 回到首页
          this.active = 0;
        })
        .catch(() => {
          console.log("cancel");
        });
    },
    //返回第三页
    // backThirdPage: function () {
    //   this.formVisible.fourth = false;
    //   this.formVisible.third = true;
    // },
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
