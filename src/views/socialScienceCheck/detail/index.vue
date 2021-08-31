<!--
 * @Description: your project
 * @version: 1.0
 * @Author: Anna
 * @Date: 2021-08-25 12:01:41
 * @LastEditors: Anna
 * @LastEditTime: 2021-08-31 11:38:55
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
        <el-table-column label="备注" align="center" prop="col2">
          <!-- <el-button @click="note(scope.row)" type="text" size="small">
              备注
          </el-button> -->
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
              @click="passPaperFun(scope.row)"
            >通过</el-button>
            <el-button
              type="danger"
              plain
              icon="el-icon-error"
              size="small"
              @click="unPassPaperFun(scope.row)"
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
        <el-table-column label="备注" align="center" prop="col2" />
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
              @click="passProjectFun(scope.row)"
            >通过</el-button>
            <el-button
              type="danger"
              plain
              icon="el-icon-error"
              size="small"
              @click="unPassProjectFun(scope.row)"
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
        <el-table-column label="备注" align="center" prop="col2" />
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
              @click="passWorkFun(scope.row)"
            >通过</el-button>
            <el-button
              type="danger"
              plain
              icon="el-icon-error"
              size="small"
              @click="unPassWorkFun(scope.row)"
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
        <el-table-column label="备注" align="center" prop="col2" />
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
              @click="passAwardFun(scope.row)"
            >通过</el-button>
            <el-button
              type="danger"
              plain
              icon="el-icon-error"
              size="small"
              @click="unPassAwardFun(scope.row)"
              >驳回</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 1.论文驳回时的备注弹框 -->
      <el-dialog title="备注" :visible.sync="dialogVisible1" width="30%">
        <span>请输入驳回理由(可以为空)</span>
        <el-input v-model="returnCommit1" autocomplete="off"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel1()">取 消</el-button>
          <el-button type="primary" @click="returnFun1()">确 定</el-button>
        </span>
      </el-dialog>

      <!-- 2.科研项目驳回时的备注弹框 -->
      <el-dialog title="备注" :visible.sync="dialogVisible2" width="30%">
        <span>请输入驳回理由(可以为空)</span>
        <el-input v-model="returnCommit2" autocomplete="off"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel2()">取 消</el-button>
          <el-button type="primary" @click="returnFun2()">确 定</el-button>
        </span>
      </el-dialog>

      <!-- 3.教材或学术著作驳回时的备注弹框 -->
      <el-dialog title="备注" :visible.sync="dialogVisible3" width="30%">
        <span>请输入驳回理由(可以为空)</span>
        <el-input v-model="returnCommit3" autocomplete="off"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel3()">取 消</el-button>
          <el-button type="primary" @click="returnFun3()">确 定</el-button>
        </span>
      </el-dialog>

      <!-- 4.科研教学将来驳回时的备注弹框 -->
      <el-dialog title="备注" :visible.sync="dialogVisible4" width="30%">
        <span>请输入驳回理由(可以为空)</span>
        <el-input v-model="returnCommit4" autocomplete="off"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel4()">取 消</el-button>
          <el-button type="primary" @click="returnFun4()">确 定</el-button>
        </span>
      </el-dialog>

  </div>
</template>

<script>
import { 
  searchPaper,
  updatePaper 
} from "@/api/scienceDepartment/academicPaper/paper"
import {
  searchWorks,
  updateWorks
} from "@/api/scienceDepartment/academicWorks/works"
import {
  searchProject,
  updateProject
} from "@/api/scienceDepartment/researchProject/project"
import {
  searchAwards,
  updateAwards
  } from "@/api/scienceDepartment/teachingAwards/awards"
// import axios from 'axios'
export default {
  data() {
    return {
      id: "",
      id1: "0",
      id2: "0",
      id3: "0",
      id4: "0",
      returnCommit1: "",//备注内容
      returnCommit2: "",
      returnCommit3: "",
      returnCommit4: "",
      dialogVisible1: false,//备注弹框显示
      dialogVisible2: false,
      dialogVisible3: false,
      dialogVisible4: false,
      paperList: [], //学术论文
      projectList: [],//科研项目
      workList: [],//教材或学术著作
      awardList: [],//科研教学奖励
      
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

    //---------------------1.学术论文表------------------
    //论文审核通过(不需要弹框)
    passPaperFun(row) {
      console.log(row)
      const infoId1 = row.paperId
      // this.infoId = row.paperId
      console.log(infoId1)
      let editPaperForm = {
        paperId: row.paperId,
        col1: "通过",
        col2: ""
      }
      // axios.post("http://localhost:8081/academic_paper/update", editPaperForm)
      updatePaper(editPaperForm).then(res => {
        if (res.code == 20000) {
          this.$message.success("审核成功!");
        }
      
      })
      window.location.reload();
    },
    //论文审核不通过
    unPassPaperFun(row) {
      const unInfoId1 = row.paperId;
      this.id1 = unInfoId1;
      // console.log(unInfoId)
      // console.log(row)
      this.dialogVisible1 = true;
      // this.returnFun(unInfoId);
    },
    //弹框确定按钮驳回操作
    returnFun1() {
      let updatePaperForm = {
        paperId: this.id1,
        col1: "不通过",
        col2: this.returnCommit1
      }
      // axios.post("http://localhost:8081/academic_paper/update", editPaperForm)
      updatePaper(updatePaperForm).then(res => {
        if (res.code == 20000) {
          this.$message.success("审核成功!");
        }
      })
      window.location.reload();
      this.dialogVisible1 = false;
    },
    //弹框取消按钮
    cancel1() {
      this.dialogVisible1 = false;
      this.returnCommit1 = null;
    },

    //------------------------2.科研项目表----------------
    //科研项目审核通过(不需要弹框)
    passProjectFun(row) {
      console.log(row)
      const infoId2 = row.projectId
      console.log(infoId2)
      let editProjectForm = {
        projectId: row.projectId,
        col1: "通过",
        col2: ""
      }
      updateProject(editProjectForm).then(res => {
        if (res.code == 20000) {
          this.$message.success("审核成功!");
        }
      
      })
      window.location.reload();
    },
    //科研项目审核不通过
    unPassProjectFun(row) {
      const unInfoId2 = row.projectId;
      this.id2 = unInfoId2;
      this.dialogVisible2 = true;
    },
    //弹框确定按钮驳回操作
    returnFun2() {
      let updatePaperForm = {
        projectId: this.id2,
        col1: "不通过",
        col2: this.returnCommit2
      }
      // axios.post("http://localhost:8081/academic_paper/update", editPaperForm)
      updateProject(updatePaperForm).then(res => {
        if (res.code == 20000) {
          this.$message.success("审核成功!");
        }
      })
      window.location.reload();
      this.dialogVisible2 = false;
    },
    //弹框取消按钮
    cancel2() {
      this.dialogVisible2 = false;
      this.returnCommit2 = null;
    },

    // //-------------------3.教材或学术著作表----------------
    //教材或学术著作审核通过(不需要弹框)
    passWorkFun(row) {
      console.log(row)
      const infoId3 = row.worksId
      console.log(infoId3)
      let editWorkForm = {
        worksId: row.worksId,
        col1: "通过",
        col2: ""
      }
      updateWorks(editWorkForm).then(res => {
        if (res.code == 20000) {
          this.$message.success("审核成功!");
        }
      
      })
      window.location.reload();
    },
    //教材或学术著作审核不通过
    unPassWorkFun(row) {
      const unInfoId3 = row.worksId;
      this.id3 = unInfoId3;
      // console.log(unInfoId)
      // console.log(row)
      this.dialogVisible3 = true;
      // this.returnFun(unInfoId);
    },
    //弹框确定按钮驳回操作
    returnFun3() {
      let updateWorkForm = {
        worksId: this.id3,
        col1: "不通过",
        col2: this.returnCommit3
      }
      // axios.post("http://localhost:8081/academic_paper/update", editPaperForm)
      updateWorks(updateWorkForm).then(res => {
        if (res.code == 20000) {
          this.$message.success("审核成功!");
        }
      })
      window.location.reload();
      this.dialogVisible3 = false;
    },
    //弹框取消按钮
    cancel3() {
      this.dialogVisible3 = false;
      this.returnCommit3 = null;
    },


    // //----------------------4.科研教学奖励表----------------
     //科研教学奖励审核通过(不需要弹框)
    passAwardFun(row) {
      console.log(row)
      const infoId4 = row.awardsId
      console.log(infoId4)
      let editAwardForm = {
        awardsId: row.awardsId,
        col1: "通过",
        col2: ""
      }
      updateAwards(editAwardForm).then(res => {
        if (res.code == 20000) {
          this.$message.success("审核成功!");
        }
      
      })
      window.location.reload();
    },
    //科研教学奖励审核不通过
    unPassAwardFun(row) {
      const unInfoId4 = row.awardsId;
      this.id4 = unInfoId4;
      this.dialogVisible4 = true;
    },
    //弹框确定按钮驳回操作
    returnFun4() {
      let updateAwardForm = {
        awardsId: this.id4,
        col1: "不通过",
        col2: this.returnCommit4
      }
      // axios.post("http://localhost:8081/academic_paper/update", editPaperForm)
      updateAwards(updateAwardForm).then(res => {
        if (res.code == 20000) {
          this.$message.success("审核成功!");
        }
      })
      window.location.reload();
      this.dialogVisible4 = false;
    },
    //弹框取消按钮
    cancel4() {
      this.dialogVisible4 = false;
      this.returnCommit4 = null;
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