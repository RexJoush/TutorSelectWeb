<!--
 * @Description: your project
 * @version: 1.0
 * @Author: Anna
 * @Date: 2021-08-25 12:01:41
 * @LastEditors: Anna
 * @LastEditTime: 2021-08-27 16:10:41
-->
<template>
  <div id="app-container"> 
      <!-- 学术论文 -->
      <p class="paper_title">学术论文</p>               
      <el-table
        :data="paperList"
        style="width: 90%; margin: 20px auto"
        border
      >
        <el-table-column label="序号" type="index" width="50" />
        <el-table-column label="名称" align="center" prop="paperName" />
        <el-table-column label="第一作者" align="center" prop="firstAuthorName" />
        <el-table-column
          label="发表时间"
          align="center"
          prop="paperPublicationTime"
        />
        <el-table-column
          label="期刊名称"
          align="center"
          prop="journalName"
        />
        <el-table-column
          label="期刊等级"
          align="center"
          prop="journalLevel"
        />
        <el-table-column 
          label="证明材料"
          align="center" 
          prop="paperProveMaterials">
          <template slot-scope="scope">
            <el-button @click="handleDetail(scope.row)" type="text" size="small">
              下载文件
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="成果认定" align="center" prop="col1" />
        <!-- <el-table-column label="审批结果" align="center" prop="mr" /> -->
        <el-table-column label="备注" align="center" prop="col2">
          <el-button @click="note(scope.row)" type="text" size="small">
              备注
          </el-button>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="160"
          class-name="small-padding fixed-width"
        >
          <template slot-scope="scope" v-if="scope.row.tutorId !== 1">
            <el-button
              type="success"             
              icon="el-icon-success"
              size="mini"
              @click="passPaperFun()"
            >通过</el-button>
            <el-button
              type="danger"
              plain
              icon="el-icon-error"
              size="small"
              @click="unPassPaperFun()"
              >驳回</el-button>
          </template>

        </el-table-column>
      </el-table> 
      
      <!-- 科研项目表 -->
      <p class="paper_title">科研项目</p>  
      <el-table    
        :data="projectList"
        style="width: 90%; margin: 20px auto"
        border
      >
        <el-table-column label="序号" type="index" width="50" />
        <el-table-column label="名称" align="center" prop="projectName" />
        <el-table-column label="批准号" align="center" prop="approvalNumber" />
        <el-table-column
          label="负责人"
          align="center"
          prop="projectChargeName"
        />
        <el-table-column
          label="开始时间"
          align="center"
          prop="projectStartTime"
        />
        <el-table-column
          label="结束时间"
          align="center"
          prop="projectEndTime"
        />
        <el-table-column
          label="项目级别"
          align="center"
          prop="projectLevel"
        />
        <el-table-column
          label="总经费"
          align="center"
          prop="projectTotalPrice"
        />
        <el-table-column 
          label="证明材料"
          align="center" 
          prop="projectProveMaterials">
          <template slot-scope="scope">
            <el-button @click="handleDetail(scope.row)" type="text" size="small">
              下载文件
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="成果认定" align="center" prop="col1" />
        <!-- <el-table-column label="审批结果" align="center" prop="mr" /> -->
        <el-table-column label="备注" align="center" prop="col2">
          <el-button @click="note(scope.row)" type="text" size="small">
              备注
          </el-button>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="160"
          class-name="small-padding fixed-width"
        >
          <template slot-scope="scope" v-if="scope.row.tutorId !== 1">
            <el-button
              type="success"             
              icon="el-icon-success"
              size="mini"
              @click="passFun()"
            >通过</el-button>
            <el-button
              type="danger"
              plain
              icon="el-icon-error"
              size="small"
              @click="unPassFun()"
              >驳回</el-button>
          </template>

        </el-table-column>
      </el-table> 

      <!-- 教材或学术著作表 -->
      <p class="paper_title">教材或学术著作</p>       
      <el-table
        :data="workList"
        style="width: 90%; margin: 20px auto"
        border
      >
        <el-table-column label="序号" type="index" width="50" />
        <el-table-column label="名称" align="center" prop="worksName" />
        <el-table-column label="排名" align="center" prop="worksRank" />
        <el-table-column
          label="出版时间"
          align="center"
          prop="worksPublicationTime"
        />
        <el-table-column
          label="出版单位"
          align="center"
          prop="worksPublicationUnit"
        />
        <el-table-column
          label="完成字数(万字)"
          align="center"
          prop="totalWords"
        />
        <el-table-column 
          label="证明材料"
          align="center" 
          prop="worksProveMaterials">
          <template slot-scope="scope">
            <el-button @click="handleDetail(scope.row)" type="text" size="small">
              下载文件
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="成果认定" align="center" prop="col1" />
        <!-- <el-table-column label="审批结果" align="center" prop="mr" /> -->
        <el-table-column label="备注" align="center" prop="col2">
          <el-button @click="note(scope.row)" type="text" size="small">
              备注
          </el-button>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="160"
          class-name="small-padding fixed-width"
        >
          <template slot-scope="scope" v-if="scope.row.tutorId !== 1">
            <el-button
              type="success"             
              icon="el-icon-success"
              size="mini"
              @click="passFun()"
            >通过</el-button>
            <el-button
              type="danger"
              plain
              icon="el-icon-error"
              size="small"
              @click="unPassFun()"
              >驳回</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 科研教学奖励表 -->
      <p class="paper_title">科研教学奖励</p>            
      <el-table        
        :data="awardList"
        style="width: 90%; margin: 20px auto"
        border
      >
        <el-table-column label="序号" type="index" width="50" />
        <el-table-column label="名称" align="center" prop="awardsName" />
        <el-table-column label="排名" align="center" prop="awardsRank" />
        <el-table-column
          label="颁奖单位"
          align="center"
          prop="awardsUnit"
        />
        <el-table-column
          label="获奖级别"
          align="center"
          prop="awardsLevel"
        />
        <el-table-column
          label="获奖等级"
          align="center"
          prop="awardsClass"
        />
        <el-table-column
          label="获奖时间"
          align="center"
          prop="awardsTime"
        />
        <el-table-column 
          label="证明材料"
          align="center" 
          prop="awardsProveMaterials">
          <template slot-scope="scope">
            <el-button @click="handleDetail(scope.row)" type="text" size="small">
              下载文件
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="成果认定" align="center" prop="col1" />
        <!-- <el-table-column label="审批结果" align="center" prop="mr" /> -->
        <el-table-column label="备注" align="center" prop="col2">
          <el-button @click="note(scope.row)" type="text" size="small">
              备注
          </el-button>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="160"
          class-name="small-padding fixed-width"
        >
          <template slot-scope="scope" v-if="scope.row.tutorId !== 1">
            <el-button
              type="success"             
              icon="el-icon-success"
              size="mini"
              @click="passFun()"
            >通过</el-button>
            <el-button
              type="danger"
              plain
              icon="el-icon-error"
              size="small"
              @click="unPassFun()"
              >驳回</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 审批通过的确认弹框 -->
      <!-- <el-dialog title="提示" :visible.sync="dialogVisiblePass" width="30%">
        <span>确认提交吗？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisiblePass = false">取 消</el-button>
          <el-button type="primary" @click="rePassFun()">确 定</el-button>
        </span>
      </el-dialog> -->
      <!-- 驳回时的备注弹框 -->
      <el-dialog title="备注" :visible.sync="dialogVisible" width="30%">
        <span>请输入驳回理由(可以为空)</span>
        <el-input v-model="col2" autocomplete="off"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel()">取 消</el-button>
          <el-button type="primary" @click="returnFun()">确 定</el-button>
        </span>
    </el-dialog>

  </div>
</template>

<script>
import { searchPaper } from "@/api/scienceDepartment/academicPaper/paper"
import {searchWorks} from "@/api/scienceDepartment/academicWorks/works"
import {searchProject} from "@/api/scienceDepartment/researchProject/project"
import {searchAwards} from "@/api/scienceDepartment/teachingAwards/awards"
export default {
  data() {
    return {
      id: "",
      paperList: [], //学术论文
      projectList: [],//科研项目
      workList: [],//教材或学术著作
      awardList: [],//科研教学奖励

      // dialogVisiblePass: false,//通过确认框
      dialogVisible: false,//备注弹框显示
      
      //学术论文表单查询参数
      paperQueryParams:{
        tutorId: "",
        paperName: "",//论文名称
        firstAuthorName: "",//第一作者
        paperPublicationTime: "",//发表时间
        journalName: "",//期刊名称
        journalLevel: "",//期刊等级
        paperProveMaterials: "",//证明材料
        col1: "",//成果认定（通过、驳回）
        col2: "",//备注
      },
      //科研项目表单查询参数
      projectQueryParams:{
        projectName: "",//项目名称
        approvalNumber: "",//批准号
        projectChargeName: "",//负责人姓名
        projectStartTime: "",//开始日期
        projectEndTime: "",//结束日期
        projectLevel: "",//项目级别
        projectTotalPrice: "",//总经费
        projectProveMaterials: "",//证明材料
        col1: "",//成果认定（通过、驳回）
        col2: "",//备注
      },
      //教材或学术著作表单查询参数
      workQueryParams:{
        worksName: "",//著作名称
        worksRank: "",//排名
        worksPublicationTime: "",//出版日期
        worksPublicationUnit: "",//出版单位
        totalWords: "",//完成字数
        worksProveMaterials: "",//证明材料
        col1: "",//成果认定（通过、驳回）
        col2: "",//备注
      },
      //科研教学奖励表单查询参数
      awardQueryParams:{
        awardsName: "",//奖励名称
        awardsRank: "",//排名
        awardsUnit: "",//颁奖单位
        awardsLevel: "",//获奖级别
        awardsClass: "",//获奖等级
        awardsTime: "",//获奖日期
        awardsProveMaterials: "",//证明材料
        col1: "",//成果认定（通过、驳回）
        col2: "",//备注
      },



    }
  },
  created() {
    this.getPaperList()
    this.getProjectList()
    this.getWorkList()
    this.getAwardList()
  },
  methods: {
    // 查询学术论文
    getPaperList() {  
      this.id = this.$route.query.tutorId
      console.log(this.id) //可以获取到
      searchPaper(this.id).then((res)=>{
        this.paperList = res.data
        // console.log(res.data);       
      })
    },
    // 查询科研项目
    getProjectList() {
      searchProject(this.id).then(res => {
        this.projectList = res.data
      })
    },
    // 查询教材或学术著作
    getWorkList() {
      searchWorks(this.id).then(res => {
        this.workList = res.data
      })
    },
    // 查询科研教学奖励
    getAwardList() {
      searchAwards(this.id).then(res => {
        this.awardList = res.data
      })
    },

    //论文审核通过(不需要弹框)
    passPaperFun() {
      


      // this.dialogVisiblePass = true;
    },
    //论文审核不通过
    unPassPaperFun() {
      this.dialogVisiblePass = true;
    },

    

      

  },
}
</script>

<style>
  .btnClass{
    margin: 20px auto;
  }

  .paper_title{
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
    /* margin-bottom: 5px; */
    text-align: center;
  }
  
</style>