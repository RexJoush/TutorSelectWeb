<!--
 * @Description: your project
 * @version: 1.0
 * @Author: Anna
 * @Date: 2021-08-25 12:01:41
 * @LastEditors: Anna
 * @LastEditTime: 2021-10-24 22:06:50
-->
<template>
  <div id="app-container"> 
      <br>
      <el-page-header style="margin-left: 30px;" @back="goBack" :content="name">
      </el-page-header>
      <br />
      <!-- 学术论文 -->
      <el-row type="flex" justify="center">
        <el-col :span="21">
          <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>学术论文</span>
        </div>
        <el-table
          :data="paperList"
          style="width: 100%; margin: 20px auto"
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
            <a :href="scope.row.paperProveMaterials">下载文件</a>
          </template>
        </el-table-column>
        <el-table-column label="成果认定" align="center">
          <template slot-scope="scope">
              <el-tag
                v-if=" scope.row.col1 !== null && scope.row.col1 !== ''"
                :type="scope.row.col1 === '通过' ? 'success' : 'danger'"
              >
                {{ scope.row.col1 }}
            </el-tag>
          </template>
        </el-table-column>
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
              plain
              @click="passPaperFun(scope.row)"
            >通过</el-button>
            <el-button
              type="danger"
              plain
              icon="el-icon-error"
              size="mini"
              @click="unPassPaperFun(scope.row)"
              >驳回</el-button>
          </template>

        </el-table-column>
        </el-table> 
          </el-card>   
        </el-col>
      </el-row> 
      <br />
   
      <!-- 科研项目表 -->
      <el-row type="flex" justify="center">
        <el-col :span="21">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>科研项目</span>
            </div>
        <el-table    
          :data="projectList"
          style="width: 100%; margin: 20px auto"
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
            <a :href="scope.row.projectProveMaterials">下载文件</a>
          </template>
        </el-table-column>
        <el-table-column label="成果认定" align="center">
          <template slot-scope="scope">
            <el-tag
              v-if="scope.row.col1 !== null && scope.row.col1 !== ''"
              :type="scope.row.col1 === '通过' ? 'success' : 'danger'"
            >
              {{ scope.row.col1 }}
            </el-tag>
          </template>
        </el-table-column>
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
              plain
              @click="passProjectFun(scope.row)"
            >通过</el-button>
            <el-button
              type="danger"
              plain
              icon="el-icon-error"
              size="mini"
              @click="unPassProjectFun(scope.row)"
              >驳回</el-button>
          </template>

        </el-table-column>
      </el-table> 
        </el-card>   
        </el-col>
      </el-row>
      <br />

       <!-- 教材或学术著作表 -->
      <el-row type="flex" justify="center">
        <el-col :span="21">
          <el-card class="box-card">
          <div slot="header" class="clearfix">
          <span>教材或学术著作</span>
          </div>
        <el-table
          :data="workList"
          style="width: 100%; margin: 20px auto"
          border
        >
        <el-table-column label="序号" type="index" width="50" />
        <el-table-column label="名称" align="center" prop="worksName" />
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
            <a :href="scope.row.worksProveMaterials">下载文件</a>
          </template>
        </el-table-column>
        <el-table-column label="成果认定" align="center">
          <template slot-scope="scope">
            <el-tag
              v-if="scope.row.col1 !== null && scope.row.col1 !== ''"
              :type="scope.row.col1 === '通过' ? 'success' : 'danger'"
            >
              {{ scope.row.col1 }}
            </el-tag>
          </template>
        </el-table-column>
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
              plain
              @click="passWorkFun(scope.row)"
            >通过</el-button>
            <el-button
              type="danger"
              plain
              icon="el-icon-error"
              size="mini"
              @click="unPassWorkFun(scope.row)"
              >驳回</el-button>
          </template>
        </el-table-column>
      </el-table>
        </el-card>   
        </el-col>
      </el-row>
      <br />

      <!-- 科研教学奖励表 -->
      <el-row type="flex" justify="center">
        <el-col :span="21">
          <el-card class="box-card">
          <div slot="header" class="clearfix">
          <span>科研教学奖励</span>
          </div>
        <el-table        
          :data="awardList"
          style="width: 100%; margin: 20px auto"
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
          label="获奖时间"
          align="center"
          prop="awardsTime"
        />
        <el-table-column 
          label="证明材料"
          align="center" 
          prop="awardsProveMaterials">
          <template slot-scope="scope">
            <a :href="scope.row.awardsProveMaterials">下载文件</a>
          </template>
        </el-table-column>
        <el-table-column label="成果认定" align="center">
          <template slot-scope="scope">
            <el-tag
              v-if="scope.row.col1 !== null && scope.row.col1 !== ''"
              :type="scope.row.col1 === '通过' ? 'success' : 'danger'"
            >
              {{ scope.row.col1 }}
            </el-tag>
          </template>
        </el-table-column>
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
              plain
              @click="passAwardFun(scope.row)"
            >通过</el-button>
            <el-button
              type="danger"
              plain
              icon="el-icon-error"
              size="mini"
              @click="unPassAwardFun(scope.row)"
              >驳回</el-button>
          </template>
        </el-table-column>
      </el-table>
        </el-card>   
        </el-col>
      </el-row>
      <br />
      <br />
      <el-row type="flex" justify="end">
        <el-col :span="4" :offset="21">
            <el-button type="primary" @click="submitPass()">确认提交</el-button>
        </el-col>
      </el-row>
      <br/><br/>

      <!-- 1.论文驳回时的备注弹框 -->
      <el-dialog title="备注" :visible.sync="dialogVisible1" width="30%">
        <el-form ref="paperRejectform" :model="paperRejectform" label-width="80px">
          <el-form-item label="请输入驳回理由(可以为空)">
            <el-input v-model="returnCommit1" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel1()">取 消</el-button>
          <el-button type="primary" @click="returnFun1()">确 定</el-button>
        </span>
      </el-dialog>

      <!-- 2.科研项目驳回时的备注弹框 -->
      <el-dialog title="备注" :visible.sync="dialogVisible2" width="30%">
        <el-form ref="projectRejectform" :model="projectRejectform" label-width="80px">
          <el-form-item label="请输入驳回理由(可以为空)">
            <el-input v-model="returnCommit2" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel2()">取 消</el-button>
          <el-button type="primary" @click="returnFun2()">确 定</el-button>
        </span>
      </el-dialog>

      <!-- 3.教材或学术著作驳回时的备注弹框 -->
      <el-dialog title="备注" :visible.sync="dialogVisible3" width="30%">
        <el-form ref="workRejectform" :model="workRejectform" label-width="80px">
          <el-form-item label="请输入驳回理由(可以为空)">
            <el-input v-model="returnCommit3" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel3()">取 消</el-button>
          <el-button type="primary" @click="returnFun3()">确 定</el-button>
        </span>
      </el-dialog>

      <!-- 4.科研教学将来驳回时的备注弹框 -->
      <el-dialog title="备注" :visible.sync="dialogVisible4" width="30%">
        <el-form ref="awardRejectform" :model="awardRejectform" label-width="80px">
          <el-form-item label="请输入驳回理由(可以为空)">
            <el-input v-model="returnCommit4" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel4()">取 消</el-button>
          <el-button type="primary" @click="returnFun4()">确 定</el-button>
        </span>
      </el-dialog>

      <!-- 确认提交的确认弹框 -->
    <el-dialog title="提示" :visible.sync="dialogVisiblePass" width="30%">
      <span>确认提交吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisiblePass = false">取 消</el-button>
        <el-button type="primary" @click="submitMaterials()">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  import { updateSocial } from "@/api/departmentSecretary/secretaryFirst";
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
  export default {
    data() {
      return {
        // 确认提交按钮
        dialogVisiblePass: false,
        paperUrl: '',//论文下载地址
        paperRejectform: {}, //论文驳回的表单
        projectRejectform: {},
        workRejectform: {},
        awardRejectform: {},
        id: "",
        applyId: "",
        name: "",
        id1: "0",
        id2: "0",
        id3: "0",
        id4: "0",
        commit_1: "",
        commit_2: "",
        commit_3: "",
        commit_4: "",
        //材料最终审核结果
        csDes: "",
        updataList: [],
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
        //各个表格回显的字符串
        re1: "",
        re2: "",
        re3: "",
        re4: "",

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
      this.id = this.$route.query.tutorId
      this.applyId = this.$route.query.applyId
      this.name = this.$route.query.name + " 老师的学术成果"
      this.getPaperList();
      this.getProjectList();
      this.getWorkList();
      this.getAwardList();
    },
    methods: {
      // 1.查询学术论文
      async getPaperList() {  
        const { data: res } = await searchPaper(this.id, this.applyId);
        this.paperList = res;
        // console.log(this.paperList);
        this.commit_1 = ""; //清空上次的综合条件
        //论文回显字符串拼接
        let re11 = "";
        for(let i = 0; i < this.paperList.length; i++){
          if(this.paperList[i].col1 === "不通过"){
            re11 += `论文${i+1}名称：${this.paperList[i].paperName} ;` + `论文${i+1}驳回原因:${this.paperList[i].col2} 。`;
          }
        }
        if(re11 !== null && re11 !== '') this.re1 = re11
        else this.re1 = '论文审批通过'
        console.log("---------回显论文--------",this.re1)
        //判断论文材料审核是否通过
        for(let item1 of this.paperList){
          if(item1.col1 == null){
            this.commit_1 = 0; //材料待审核
            break;
          }else if(item1.col1 !== "通过"){
            this.commit_1 = -1; //材料不通过
            break;
          }
        }
          if(!this.commit_1) this.commit_1 = 1 
          console.log("学术论文:",this.commit_1)   
        
      },
      // 2.查询科研项目
      async getProjectList() {
        const { data: res } = await searchProject(this.id, this.applyId);
          this.projectList = res
          this.commit_2 = ""; //清空上次的综合条件
          //论文回显字符串拼接
          let re22 = "";
          for(let i = 0; i < this.projectList.length; i++){
            if(this.projectList[i].col1 === "不通过"){
              re22 += `项目${i+1}名称：${this.projectList[i].projectName} ;` + `项目${i+1}驳回原因:${this.projectList[i].col2} 。`;
            }
          }
          if(re22 !== null && re22 !== '') this.re2 = re22
          else this.re2 = '科研项目审批通过'
          console.log("---------科研项目回显--------",this.re2)

          for(let item of this.projectList){
            if(item.col1 == undefined){
              this.commit_2 = 0;
              break;
            }else if(item.col1 !== "通过"){
              this.commit_2 = -1;
              break;
            }
          }
          if(!this.commit_2) this.commit_2 = 1
          console.log("科研项目:",this.commit_2)
      },
      // 3.查询教材或学术著作
      async getWorkList() {
        const { data: res } = await searchWorks(this.id, this.applyId);
          this.workList = res
          this.commit_3 = ""; //清空上次的综合条件
          //教材或学术著作回显字符串拼接
          let re33 = "";
          for(let i = 0; i < this.workList.length; i++){
            if(this.workList[i].col1 === "不通过"){
              re33 += `项目${i+1}名称：${this.workList[i].worksName} ;` + `项目${i+1}驳回原因:${this.workList[i].col2} 。`;
            }
          }
          if(re33 !== null && re33 !== '') this.re3 = re33
          else this.re3 = '教材或学术著作审批通过'
          console.log("---------教材或学术著作回显--------",this.re3)

          for(let item of this.workList){
            if(item.col1 == undefined){
              this.commit_3 = 0
            }else if(item.col1 !== "通过"){
              this.commit_3 = -1
            }
          }
          if(!this.commit_3) this.commit_3 = 1
          console.log("教材或学术著作:",this.commit_3)
      },
      // 4.查询科研教学奖励
      async getAwardList() {
        const { data: res } = await searchAwards(this.id, this.applyId);
        this.awardList = res
        this.commit_4 = ""; //清空上次的综合条件
        //科研教学奖励回显字符串拼接
        let re44 = "";
        for(let i = 0; i < this.awardList.length; i++){
          if(this.awardList[i].col1 === "不通过"){
            re44 += `项目${i+1}名称:${this.awardList[i].awardsName} ;` + `项目${i+1}驳回原因:${this.awardList[i].col2} 。`;
          }
        }
        if(re44 !== null && re44 !== '') this.re4 = re44
        else this.re4 = '科研教学奖励'        
        console.log("---------科研教学奖励回显--------",this.re4)

        for(let item2 of this.awardList){
          if(item2.col1 == undefined){
            this.commit_4 = 0
          }else if(item2.col1 !== "通过"){
            this.commit_4 = -1
          }
        }  
        if(!this.commit_4) this.commit_4 = 1
        console.log("科研教学奖励表:",this.commit_4)
      },

      //返回
      goBack() {
        this.$router.push({
          path:"/social/socialScienceCheck", 
          query:{applyId:this.applyId}});
      },

      //---------------------1.学术论文表------------------
      //论文审核通过(不需要弹框)
      passPaperFun(row) {        
        row.col1 = "通过"
        row.col2= ""
        const infoId1 = row.paperId
        console.log(infoId1)
        let editPaperForm = {
          paperId: row.paperId,
          col1: "通过",
          col2: ""
        }
        updatePaper(editPaperForm).then(res => {
          if (res.code == 20000) {
            this.$message.success("审核成功!");
          }
        });     
      },
      
      //论文审核不通过
      unPassPaperFun(row) {
        const unInfoId1 = row.paperId;
        this.id1 = unInfoId1;
        this.paperRejectform = row;
        this.dialogVisible1 = true
        this.returnCommit1 = ""
      },
    
      //弹框确定按钮驳回操作
      returnFun1() {
        let updatePaperForm = {
          paperId: this.id1,
          col1: "不通过",
          col2: this.returnCommit1
        }
        updatePaper(updatePaperForm).then(res => {
          if (res.code == 20000) {
            this.$message.success("审核成功!");
            this.paperRejectform.col1 = "不通过"
            this.paperRejectform.col2 = this.returnCommit1;
            this.dialogVisible1 = false;    
          }
        });   
      },
      //弹框取消按钮
      cancel1() {
        this.dialogVisible1 = false;
        this.returnCommit1 = null;
      },

      //------------------------2.科研项目表----------------
      //科研项目审核通过(不需要弹框)
      passProjectFun(row) {
        row.col1 = "通过"
        row.col2= ""
        // console.log(row)
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
        });
      },
      //科研项目审核不通过
      unPassProjectFun(row) {
        const unInfoId2 = row.projectId;
        this.id2 = unInfoId2;
        this.projectRejectform = row;
        this.dialogVisible2 = true;
        this.returnCommit2 = ""
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
            this.projectRejectform.col1 = "不通过"
            this.projectRejectform.col2 = this.returnCommit2;
            this.dialogVisible2 = false;
          }
        });
      },
      //弹框取消按钮
      cancel2() {
        this.dialogVisible2 = false;
        this.returnCommit2 = null;
      },

      // //-------------------3.教材或学术著作表----------------
      //教材或学术著作审核通过(不需要弹框)
      passWorkFun(row) {
        row.col1 = "通过"
        row.col2= ""
        // console.log(row)
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
        // window.location.reload();
      },
      //教材或学术著作审核不通过
      unPassWorkFun(row) {
        const unInfoId3 = row.worksId;
        this.id3 = unInfoId3;
        this.dialogVisible3 = true;
        this.workRejectform = row;
        this.returnCommit3 = ""      
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
            this.workRejectform.col1 = "不通过"
            this.workRejectform.col2 = this.returnCommit3;
            this.dialogVisible3 = false;  
          }
        })
      },
      //弹框取消按钮
      cancel3() {
        this.dialogVisible3 = false;
        this.returnCommit3 = null;
      },


      // //----------------------4.科研教学奖励表----------------
      //科研教学奖励审核通过(不需要弹框)
      passAwardFun(row) {
        row.col1 = "通过"
        row.col2= ""
        // console.log(row)
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
        // window.location.reload();
      },
      //科研教学奖励审核不通过
      unPassAwardFun(row) {
        const unInfoId4 = row.awardsId;
        this.id4 = unInfoId4;
        this.dialogVisible4 = true;
        this.awardRejectform = row;
        this.returnCommit4 = ""
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
            this.awardRejectform.col1 = "不通过"
            this.awardRejectform.col2 = this.returnCommit4;
            this.dialogVisible4 = false;
          }
        })
      },
      //弹框取消按钮
      cancel4() {
        this.dialogVisible4 = false;
        this.returnCommit4 = null;
      },

      //确认提交弹框
      submitPass() {
        this.dialogVisiblePass = true
      },

      //返回主界面
      async submitMaterials() {
        let reVisible = ""
        this.dialogVisiblePass = false
        await this.getPaperList();
        await this.getProjectList();
        await this.getWorkList();
        await this.getAwardList();
        this.csDes = "";
        this.updataList = [];
        if (
          this.commit_1 === 1 &&
          this.commit_2 === 1 &&
          this.commit_3 === 1 &&
          this.commit_4 === 1
        ) {
          this.csDes = "材料审核通过";
        } else if (
          this.commit_1 === 0 ||
          this.commit_2 === 0 ||
          this.commit_3 === 0 ||
          this.commit_4 === 0
        ) {
          this.csDes = "材料待审核"
        } else if (
          this.commit_1 === -1 ||
          this.commit_2 === -1 ||
          this.commit_3 === -1 ||
          this.commit_4 === -1
        ) {
          this.csDes = "材料审核不通过";
        } 
        //拼接回显字符串
        reVisible = this.re1 + " ;" + this.re2 + " ;" + this.re3 + " ;" + this.re4
        console.log("详情页回显得是：", reVisible)
        let obj = { id_1: 0, status_1: 0, commit_1: "" };
        obj.id_1 = this.applyId
        obj.status_1 = "30"
        // obj.commit_1 = this.csDes
        obj.commit_1 = reVisible
        console.log("00000000000000", this.applyId)
        this.updataList.push(obj);
        updateSocial(this.updataList).then((res) => {
          if (res.code == 20000) {
            this.$message.success("材料审核完成");
            this.goBack();
          }
        });
      },
  }
}
</script>
<style lang="scss" scoped>
a {
  text-decoration: underline;
  color: #409eff;
}
</style>