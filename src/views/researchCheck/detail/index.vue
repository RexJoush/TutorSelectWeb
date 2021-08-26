<!--
 * @Description: your project
 * @version: 1.0
 * @Author: Anna
 * @Date: 2021-08-24 10:00:38
 * @LastEditors: Anna
 * @LastEditTime: 2021-08-25 20:52:50
-->
<template>
  <div id="app-container">
      <div class="btnClass"> 
          <span class="paper_title">学术论文</span>
          <el-button
            type="success"
            plain
            icon="el-icon-success"
            size="small"
            :disabled="single"
            @click="passFun()"
            >通过</el-button
          >
          <el-button
            type="danger"
            plain
            icon="el-icon-error"
            size="small"
            :disabled="multiple"
            @click="unPassFun()"
          >不通过</el-button
        >         
      </div>
      <el-table
        v-loading="loading"
        :data="paperList"
        style="width: 100%; margin: 20px 0"
        border
        :span-method="arraySpanMethod"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50" align="center" />
        <el-table-column label="序号" type="index" width="50" />
        <el-table-column label="名称" align="center" prop="number" />
        <el-table-column label="第一作者" align="center" prop="name" />
        <el-table-column
          label="发表时间"
          align="center"
          prop="organizationName"
        />
        <el-table-column
          label="期刊名称"
          align="center"
          prop="professionalApplicationSubjectCode"
        />
        <el-table-column
          label="期刊等级"
          align="center"
          prop="professionalApplicationSubjectName"
        />
        <el-table-column 
          label="证明材料"
          align="center" 
          prop="applyName">
          <template slot-scope="scope">
            <el-button @click="handleDetail(scope.row)" type="text" size="small">
              下载文件
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="成果认定" align="center" prop="mr" />
        <!-- <el-table-column label="审批结果" align="center" prop="mr" /> -->
        <el-table-column label="备注" align="center" prop="mr" />
      </el-table> 

      <div class="btnClass"> 
      <span class="paper_title">科研项目</span>
      <el-button
        type="success"
        plain
        icon="el-icon-success"
        size="small"
        :disabled="single"
        @click="passFun()"
        >通过</el-button
      >
      <el-button
        type="danger"
        plain
        icon="el-icon-error"
        size="small"
        :disabled="multiple"
        @click="unPassFun()"
      >不通过</el-button
      >         
      </div>

      <el-table
        v-loading="loading"
        :data="projectList"
        style="width: 100%; margin: 20px 0"
        border
        :span-method="arraySpanMethod"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50" align="center" />
        <el-table-column label="序号" type="index" width="50" />
        <el-table-column label="名称" align="center" prop="number" />
        <el-table-column label="批准号" align="center" prop="name" />
        <el-table-column
          label="负责人"
          align="center"
          prop="organizationName"
        />
        <el-table-column
          label="开始时间"
          align="center"
          prop="professionalApplicationSubjectCode"
        />
        <el-table-column
          label="结束时间"
          align="center"
          prop="professionalApplicationSubjectName"
        />
        <el-table-column
          label="项目级别"
          align="center"
          prop="professionalApplicationSubjectName"
        />
        <el-table-column
          label="总经费"
          align="center"
          prop="professionalApplicationSubjectName"
        />
        <el-table-column 
          label="证明材料"
          align="center" 
          prop="applyName">
          <template slot-scope="scope">
            <el-button @click="handleDetail(scope.row)" type="text" size="small">
              下载文件
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="成果认定" align="center" prop="mr" />
        <!-- <el-table-column label="审批结果" align="center" prop="mr" /> -->
        <el-table-column label="备注" align="center" prop="mr" />
      </el-table> 


      <div class="btnClass"> 
      <span class="paper_title">教材或学术著作</span>
      <el-button
        type="success"
        plain
        icon="el-icon-success"
        size="small"
        :disabled="single"
        @click="passFun()"
        >通过</el-button
      >
      <el-button
        type="danger"
        plain
        icon="el-icon-error"
        size="small"
        :disabled="multiple"
        @click="unPassFun()"
      >不通过</el-button
      >         
      </div>
      <!-- 学术著作表 -->
      <el-table
        v-loading="loading"
        :data="workList"
        style="width: 100%; margin: 20px 0"
        border
        :span-method="arraySpanMethod"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50" align="center" />
        <el-table-column label="序号" type="index" width="50" />
        <el-table-column label="名称" align="center" prop="number" />
        <el-table-column label="排名" align="center" prop="name" />
        <el-table-column
          label="出版时间"
          align="center"
          prop="organizationName"
        />
        <el-table-column
          label="出版单位"
          align="center"
          prop="professionalApplicationSubjectCode"
        />
        <el-table-column
          label="完成字数(万字)"
          align="center"
          prop="professionalApplicationSubjectName"
        />
        <el-table-column 
          label="证明材料"
          align="center" 
          prop="applyName">
          <template slot-scope="scope">
            <el-button @click="handleDetail(scope.row)" type="text" size="small">
              下载文件
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="成果认定" align="center" prop="mr" />
        <!-- <el-table-column label="审批结果" align="center" prop="mr" /> -->
        <el-table-column label="备注" align="center" prop="mr" />
      </el-table>


      <div class="btnClass"> 
      <span class="paper_title">科研教学奖励</span>
      <el-button
        type="success"
        plain
        icon="el-icon-success"
        size="small"
        :disabled="single"
        @click="passFun()"
        >通过</el-button
      >
      <el-button
        type="danger"
        plain
        icon="el-icon-error"
        size="small"
        :disabled="multiple"
        @click="unPassFun()"
      >不通过</el-button
      >         
      </div>

      <el-table
        v-loading="loading"
        :data="awardList"
        style="width: 100%; margin: 20px 0"
        border
        :span-method="arraySpanMethod"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50" align="center" />
        <el-table-column label="序号" type="index" width="50" />
        <el-table-column label="名称" align="center" prop="number" />
        <el-table-column label="排名" align="center" prop="name" />
        <el-table-column
          label="颁奖单位"
          align="center"
          prop="organizationName"
        />
        <el-table-column
          label="获奖级别"
          align="center"
          prop="professionalApplicationSubjectCode"
        />
        <el-table-column
          label="获奖等级"
          align="center"
          prop="professionalApplicationSubjectName"
        />
        <el-table-column
          label="获奖时间"
          align="center"
          prop="professionalApplicationSubjectName"
        />
        <el-table-column 
          label="证明材料"
          align="center" 
          prop="applyName">
          <template slot-scope="scope">
            <el-button @click="handleDetail(scope.row)" type="text" size="small">
              下载文件
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="成果认定" align="center" prop="mr" />
        <!-- <el-table-column label="审批结果" align="center" prop="mr" /> -->
        <el-table-column label="备注" align="center" prop="mr">
          <el-button @click="note(scope.row)" type="text" size="small">
              备注
          </el-button>
        </el-table-column>
      </el-table>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // 遮罩层
      loading: false,
      paperList: [], //学术论文
      projectList: [],//科研项目
      workList: [],//教材或学术著作
      awardList: [],//科研教学奖励

      //学术论文表单查询参数
      paperQueryParams:{
        paperName: undefined,//论文名称
        firstAuthorName: undefined,//第一作者
        paperPublicationTime: undefined,//发表时间
        journalName: undefined,//期刊名称
        journalLevel: undefined,//期刊等级
        paperProveMaterials: undefined,//证明材料
        col1: undefined,//成果认定（通过、驳回）
        col2: undefined,//备注
      },
      //科研项目表单查询参数
      projectQueryParams:{
        projectName: undefined,//项目名称
        approvalNumber: undefined,//批准号
        projectChargeName: undefined,//负责人姓名
        projectStartTime: undefined,//开始日期
        projectEndTime: undefined,//结束日期
        projectLevel: undefined,//项目级别
        projectTotalPrice: undefined,//总经费
        projectProveMaterials: undefined,//证明材料
        col1: undefined,//成果认定（通过、驳回）
        col2: undefined,//备注
      },
      //教材或学术著作表单查询参数
      workQueryParams:{
        worksName: undefined,//著作名称
        worksRank: undefined,//排名
        worksPublicationTime: undefined,//出版日期
        worksPublicationUnit: undefined,//出版单位
        totalWords: undefined,//完成字数
        worksProveMaterials: undefined,//证明材料
        col1: undefined,//成果认定（通过、驳回）
        col2: undefined,//备注
      },
      //科研教学奖励表单查询参数
      awardQueryParams:{
        awardsName: undefined,//奖励名称
        awardsRank: undefined,//排名
        awardsUnit: undefined,//颁奖单位
        awardsLevel: undefined,//获奖级别
        awardsClass: undefined,//获奖等级
        awardsTime: undefined,//获奖日期
        awardsProveMaterials: undefined,//证明材料
        col1: undefined,//成果认定（通过、驳回）
        col2: undefined,//备注
      },



    }
  },
  created() {

  },
  methods: {
    // 查询学术论文
    async getPaperList() {
      this.loading = true
      const {data: res} = await this.$http.get(
        '/   '
      )




    },
    // 查询科研项目
    async getProjectList() {

    },
    // 查询教材或学术著作
    async getWorkList() {

    },
    // 查询科研教学奖励
    async getAwardList() {

    },

      

  },
}
</script>

<style>
  .btnClass{
    margin: 20px auto;
    
  }

  .paper_title{
    font-size: 15px;
    font-weight: bold;
    margin: 20px 0;
    margin-left: 10px;
    margin-right: 35px;
  }
  
</style>