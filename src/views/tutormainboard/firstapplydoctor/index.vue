<template>
  <div>
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
                    <el-table
                      :data="formSecond.expertTitles"
                      style="width: 100%"
                    >
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
                <el-button @click="backFirstPage">返回上一页</el-button>
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
            <!-- 学术论文(近五年) -->
            <el-card class="box-card" shadow="always">
              <div slot="header" class="clearfix">
                <span style="font-size: 18px">学术论文(近五年)</span>
              </div>
              <el-row>
                <el-col :span="4"
                  ><el-button
                    type="success"
                    @click="SocialSciencesPaperAdd = true"
                    >社科成果增加</el-button
                  ></el-col
                >
                <el-col :span="4"
                  ><el-button
                    type="success"
                    @click="ScienceEngineeringPaperAdd = true"
                    >理工成果增加</el-button
                  ></el-col
                >
                <el-col :span="4"
                  ><el-button type="success">编辑</el-button></el-col
                >
                <el-col :span="4"
                  ><el-button type="success">删除</el-button></el-col
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
                  ><el-button type="success">社科成果增加</el-button></el-col
                >
                <el-col :span="4"
                  ><el-button type="success">理工成果增加</el-button></el-col
                >
                <el-col :span="4"
                  ><el-button type="success">编辑</el-button></el-col
                >
                <el-col :span="4"
                  ><el-button type="success">删除</el-button></el-col
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
                  ><el-button type="success">社科成果增加</el-button></el-col
                >
                <el-col :span="4"
                  ><el-button type="success">理工成果增加</el-button></el-col
                >
                <el-col :span="4"
                  ><el-button type="success">编辑</el-button></el-col
                >
                <el-col :span="4"
                  ><el-button type="success">删除</el-button></el-col
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
                  ><el-button type="success">社科成果增加</el-button></el-col
                >
                <el-col :span="4"
                  ><el-button type="success">理工成果增加</el-button></el-col
                >
                <el-col :span="4"
                  ><el-button type="success">编辑</el-button></el-col
                >
                <el-col :span="4"
                  ><el-button type="success">删除</el-button></el-col
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
                  ><el-button type="success">社科成果增加</el-button></el-col
                >
                <el-col :span="4"
                  ><el-button type="success">理工成果增加</el-button></el-col
                >
                <el-col :span="4"
                  ><el-button type="success">编辑</el-button></el-col
                >
                <el-col :span="4"
                  ><el-button type="success">删除</el-button></el-col
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
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="18" :offset="3">
          <!-- 科研汇总 -->
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span style="font-size: 18px">科研成果汇总</span>
              <el-button style="float: right" type="primary"
                >汇总生成</el-button
              >
            </div>
            <div>
              <h2>
                1.以第一作者或通讯作者在核心及以上期刊发表与本学科相关的学术论文共___
                篇，其中权威___篇，EI___篇，CSSCI___篇，SSCI___篇，核心共___篇。
              </h2>
              <br />
              <h2>
                2.主持在研科研项目共___项，其中国家级___项，省部级___
                项；在研项目中累计到款科研经费___万元，其中横向项目到款经费___万元。
              </h2>
              <br />
              <h2>
                3.出版本专业领域内研究生教材或学术著作（译著）___部，每部本人完成
                ___ 万字。
              </h2>
              <br />
              <h2>4.科研教学获奖共___项，其中国家级___项，省部级___项。</h2>
              <br />
              <h2>5.以第一发明人授权职务发明专利___项或实用新型专利___项。</h2>
              <br />
              <br />
            </div>
            <el-row>
              <el-col offset="8" :span="3"
                ><el-button type="primary" @click="backSecondPage"
                  >返回上一页</el-button
                ></el-col
              >
              <el-col :span="3"
                ><el-button type="primary" @click="onSubmitThirdPage"
                  >保存并进入下一页</el-button
                ></el-col
              >
            </el-row>
          </el-card>
        </el-col>
      </el-row>
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
                  ><el-button type="success">增加</el-button></el-col
                >
                <el-col :span="4"
                  ><el-button type="success">编辑</el-button></el-col
                >
                <el-col :span="4"
                  ><el-button type="success">删除</el-button></el-col
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
                  ><el-button type="success">增加</el-button></el-col
                >
                <el-col :span="4"
                  ><el-button type="success">编辑</el-button></el-col
                >
                <el-col :span="4"
                  ><el-button type="success">删除</el-button></el-col
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
                  ><el-button type="success">增加</el-button></el-col
                >
                <el-col :span="4"
                  ><el-button type="success">编辑</el-button></el-col
                >
                <el-col :span="4"
                  ><el-button type="success">删除</el-button></el-col
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
              <el-col offset="10" :span="3"
                ><el-button type="primary" @click="backThirdPage"
                  >返回上一页</el-button
                ></el-col
              >
              <el-col :span="3"
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
        <el-form-item label="论文名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="第一作者" :label-width="formLabelWidth">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="通信作者" :label-width="formLabelWidth">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="发表时间" :label-width="formLabelWidth">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="期刊类别" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="SCIE" value="1"></el-option>
            <el-option label="EI" value="2"></el-option>
            <el-option label="SSCI" value="3"></el-option>
            <el-option label="CPCI-S" value="4"></el-option>
            <el-option label="CSCD" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="期刊分区" :label-width="formLabelWidth">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="期刊名称" :label-width="formLabelWidth">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="影响因子" :label-width="formLabelWidth">
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
export default {
  components: { index },
  data() {
    return {
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
      // 第二页
      tableData: [
        {
          date: "2016-05-03",
          name: "1",
        },
        {
          date: "2016-05-03",
          name: "1",
        },
      ],
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
  methods: {
    /* 第一页 */

    // 完成第一页基本信息的填写
    onSubmitFirstPage: function () {
      this.$confirm("提交填写?")
        // 提交保存第一页
        .then(() => {
          this.formVisible.first = false; // 关闭第一项
          this.formVisible.second = true; // 打开第二项
          this.active = 1;
        })
        .catch(() => {
          console.log("cancel");
        });
    },
    /*第二页 */

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
    backFirstPage: function () {
      this.formVisible.second = false;
      this.formVisible.first = true;
    },
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
    backSecondPage: function () {
      this.formVisible.third = false;
      this.formVisible.second = true;
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
    //返回第三页
    backThirdPage: function () {
      this.formVisible.fourth = false;
      this.formVisible.third = true;
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
h2 {
  font-weight: 400;
}
</style>
