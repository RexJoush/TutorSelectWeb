<template>
  <div>
    <!-- 第一页内容 -->
    <div v-if="formVisible.first">
      <el-row>
        <el-col :span="18" :offset="3">
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
                    <template slot="label">
                      <span class="svg-container">
                        <svg-icon icon-class="bitian" />
                      </span>
                      所在单位</template
                    >
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>

                  <el-descriptions-item>
                    <template slot="label"> 照片 </template>
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
                    <template slot="label">
                      <span class="svg-container">
                        <svg-icon icon-class="bitian" />
                      </span>
                      工号
                    </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label">
                      <span class="svg-container">
                        <svg-icon icon-class="bitian" />
                      </span>
                      姓名
                    </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label">
                      <span class="svg-container">
                        <svg-icon icon-class="bitian" />
                      </span>
                      性别
                    </template>
                    <el-radio v-model="form.name" label="男">男</el-radio>
                    <el-radio v-model="form.name" label="女">女</el-radio>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label">
                      <span class="svg-container">
                        <svg-icon icon-class="bitian" />
                      </span>
                      证件号码
                    </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label">
                      <span class="svg-container">
                        <svg-icon icon-class="bitian" />
                      </span>
                      出生年月
                    </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label">
                      <span class="svg-container">
                        <svg-icon icon-class="bitian" />
                      </span>
                      电子邮箱
                    </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label">
                      <span class="svg-container">
                        <svg-icon icon-class="bitian" />
                      </span>
                      联系电话
                    </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label">
                      <span class="svg-container">
                        <svg-icon icon-class="bitian" />
                      </span>
                      学科属性(文理科)
                    </template>
                    <el-select
                      v-model="form.name"
                      style="width: 100%"
                      placeholder="请选择"
                    >
                      <el-option
                        key="交叉学科"
                        lable="交叉学科"
                        value="交叉学科"
                      ></el-option>
                      <el-option
                        key="理工类"
                        lable="理工类"
                        value="理工类"
                      ></el-option>
                      <el-option
                        key="文史类"
                        lable="文史类"
                        value="文史类"
                      ></el-option>
                    </el-select>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label">
                      <span class="svg-container">
                        <svg-icon icon-class="bitian" />
                      </span>
                      最后学位
                    </template>
                    <el-select
                      v-model="form.name"
                      style="width: 100%"
                      placeholder="请选择"
                    >
                      <el-option
                        key="学士"
                        lable="学士"
                        value="学士"
                      ></el-option>
                      <el-option
                        key="硕士"
                        lable="硕士"
                        value="硕士"
                      ></el-option>
                      <el-option
                        key="博士"
                        lable="博士"
                        value="博士"
                      ></el-option>
                    </el-select>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label">
                      <span class="svg-container">
                        <svg-icon icon-class="bitian" />
                      </span>
                      授予单位及时间
                    </template>
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
                <el-divider></el-divider>
                <el-descriptions
                  class="margin-top"
                  title="申请学科"
                  :column="1"
                  :size="size"
                  border
                >
                  <el-descriptions-item label-class-name="my-applysubject">
                    <template slot="label">
                      <span class="svg-container">
                        <svg-icon icon-class="bitian" />
                      </span>
                      负责单位名称
                    </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item label-class-name="my-applysubject">
                    <template slot="label">
                      <span class="svg-container">
                        <svg-icon icon-class="bitian" />
                      </span>
                      名称
                    </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                  <el-descriptions-item label-class-name="my-applysubject">
                    <template slot="label">
                      <span class="svg-container">
                        <svg-icon icon-class="bitian" />
                      </span>
                      代码
                    </template>
                    <el-input v-model="form.name"></el-input>
                  </el-descriptions-item>
                </el-descriptions>
                <br />
                <br />
                <el-row>
                  <el-col offset="10"
                    ><el-button type="primary" @click="onSubmitFirstPage"
                      >保存并进入下一页</el-button
                    ></el-col
                  >
                </el-row>
              </el-form>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- 第二页内容 -->
    <div v-if="formVisible.second">
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
                <el-table-column fixed type="selection" width="55">
                </el-table-column>
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
                <el-table-column fixed type="selection" width="55">
                </el-table-column>
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
                <el-table-column fixed type="selection" width="55">
                </el-table-column>
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
                <el-table-column fixed type="selection" width="55">
                </el-table-column>
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
                <el-table-column fixed type="selection" width="55">
                </el-table-column>
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
                ><el-button type="primary" @click="backFirstPage"
                  >返回上一页</el-button
                ></el-col
              >
              <el-col :span="3"
                ><el-button type="primary" @click="onSubmitSecondPage"
                  >保存并进入下一页</el-button
                ></el-col
              >
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- 第二页内容结束 -->
    <!-- 第三页内容 -->
    <div v-if="formVisible.third">
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
                <el-table-column fixed type="selection" width="55">
                </el-table-column>
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
                <el-table-column fixed type="selection" width="55">
                </el-table-column>
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
                <el-table-column fixed type="selection" width="55">
                </el-table-column>
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
                ><el-button type="primary" @click="backSecondPage"
                  >返回上一页</el-button
                ></el-col
              >
              <el-col :span="3"
                ><el-button type="primary" @click="onSubmitFirstPage"
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
    <!-- 第三页内容 结束-->

    <!-- 第二页操作内容 -->
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
      // 页数的隐藏和展示
      formVisible: {
        first: true,
        second: false,
        third: false,
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
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
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
        })
        .catch(() => {
          console.log("cancel");
        });
    },
    /*第二页 */


    // 完成第二页基本信息的填写
    onSubmitSecondPage: function () {
      this.$confirm("提交填写?")
        // 提交保存第一页
        .then(() => {
          this.formVisible.second = false; // 关闭第二项
          this.formVisible.third = true; // 打开第三项
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
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
    
    /* 第三页 */
    //返回第二页
    backSecondPage: function () {
      this.formVisible.third = false;
      this.formVisible.second = true;
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
