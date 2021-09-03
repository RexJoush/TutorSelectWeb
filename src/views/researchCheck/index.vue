<!--
 * @Description: your project
 * @version: 1.0
 * @Author: Anna
 * @Date: 2021-08-19 18:31:23
 * @LastEditors: Anna
 * @LastEditTime: 2021-09-02 17:33:26
-->
<template>
  <div class="app-container">
      <el-row :gutter="20">
        <!-- 导师信息 -->
          <el-form
            ref="queryForm"
            :inline="true"
            v-show="showSearch"
            label-width="68px"
          >
            <el-form-item label="工号">
              <el-input
                v-model="queryParams.userId"
                placeholder="请输入工号"
                clearable
                size="small"
                style="width: 240px"
                @keyup.enter.native="handleQuery"
              />
            </el-form-item>
            <el-form-item label="姓名">
              <el-input
                v-model="queryParams.userName"
                placeholder="请输入姓名"
                clearable
                size="small"
                style="width: 240px"
                @keyup.enter.native="handleQuery"
              />
            </el-form-item>
            <el-form-item label="负责院系" prop="organization">
              <el-select
                v-model="queryParams.organization" 
                placeholder="请选择"
                clearable
                size="small"
                style="width: 240px"
              >
                <el-option
                  v-for="item in organizationList"
                  :key="item.organizationId"
                  :label="item.organizationName"
                  :value="item.organizationId"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="审核状态">
              <el-select
                v-model="queryParams.applyStatus"
                placeholder="请选择"
                size="small"
                style="width: 240px"
              >
                <el-option
                  v-for="item in statuOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>

            <el-form-item>
              <el-button 
                type="primary" 
                icon="el-icon-search" 
                size="small" 
                @click="searchQuery()"
                >搜索</el-button
              >
              <el-button
                icon="el-icon-refresh"
                size="small"
                @click="resetQuery(queryParams)"
                >重置</el-button
              >
            </el-form-item>
            
          </el-form>

          <el-row :gutter="10" class="mb8">
            <el-col :span="1.5">
            <el-button
              type="success"
              plain
              icon="el-icon-success"
              size="small"
              @click="passFun()"
              >通过</el-button
            >
            </el-col>

            <el-col :span="1.5">
              <el-button
                type="danger"
                plain
                icon="el-icon-error"
                size="small"
                :disabled="multiple"
                @click="unPassFun()"
              >驳回</el-button
            >
            </el-col>           
          </el-row>

          <el-table
            :data="tutorList"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="50" align="center"/>
            <el-table-column label="工号" align="center" prop="tutorId" />
            <el-table-column label="姓名" align="center" prop="name" />
            <el-table-column 
              label="所在单位（院系）"
              align="center"
              prop="organizationName" 
            />
            <el-table-column label="申请类别" align="center" prop="applyName" />
            <el-table-column label="职称" align="center" prop="title" />
            <!-- 数据库中查询最后学位字段 -->
            <el-table-column label="最后学位" align="center" prop="finalDegree" />
            <el-table-column 
              label="审核状态" 
              align="center"
              prop="inspectDescribe"
            />
            <el-table-column 
              label="详情" 
              align="center" 
              prop="mr">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="text" 
                  @click="handleDetail(scope.row)" 
                >查看详情</el-button>
              </template>       
            </el-table-column>                     
          </el-table>

          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="10"
            layout="total, prev, pager, next"
            :total="totalData"
          >
          </el-pagination>
      </el-row>

      <!-- 审批通过的确认弹框 -->
    <el-dialog title="提示" :visible.sync="dialogVisiblePass" width="30%">
      <span>确认提交吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisiblePass = false">取 消</el-button>
        <el-button type="primary" @click="rePassFun()">确 定</el-button>
      </span>
    </el-dialog>
      <!-- 驳回时的备注弹框 -->
      <el-dialog title="备注" :visible.sync="dialogVisible" width="30%">
      <span>请输入驳回理由(可以为空)</span>
      <el-input v-model="returnCommit" autocomplete="off"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取消</el-button>
        <el-button type="primary" @click="returnFun()">确定</el-button>
      </span>
      </el-dialog>
  </div>
</template>

<script>
//负责院系
// import getOrganization from "@/api/SocialDepartment/socialFirst"
import {
  // getApplyType,//导师申请的所有类别
  checkDate,//查询数据
  updateStatus//更新操作
} from "@/api/departmentSecretary/secretaryFirst";

export default {
  data() {
    return {
      //驳回时备注的内容
      returnCommit: '',
      //驳回弹框默认不显示
      dialogVisible: false,
      //通过确认框
      dialogVisiblePass: false,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 分页总条数
      totalData: 0,
      //待科研处初审列表
      researchInitList: [],
      //所有负责院系列表
      organizationList: [],
      //选定的列表
      multipleSelection: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userId: undefined, //工号
        userName: undefined, //姓名
        organization: undefined, //院系id
        applyType: undefined, //申请类别id
        subjectName: undefined, //学科名称id
        applyStatus: undefined, //审核状态码id
        subjectTpe: undefined, //学科属性，文科、理科、交叉
      },
      //当前页
      currentPage: 1,
      //科研处审核状态
      statuOptions: [
        {
          value: 31,
          label: "科研处待审核"
        },
        {
          value: 64, //理科科研处审核通过
          label: "科研处审核通过"
        },
        {
          value: 53, //理科科研处审核不通过
          label: "科研处审核不通过"
        }
      ],
      //审核后需要下发的List数据
      updataList: [],
      tutorList: [],
    };
  },
  created() {
    this.getResearchCheckInit(); //初始化待初审的数据
    this.getOrganizationList(); //初始化所有的负责院系                            //初始化负责院系
  },
  methods: {
    //查看详情
    handleDetail(row) {
      const tutorId = row.tutorId
      const applyId = row.applyId
      // console.log(row);
      this.$router.push({path:"/research/researchDetail", query: {tutorId: tutorId,applyId: applyId}})
    },

    //初始化负责院系(下拉框)
    async getOrganizationList() {
      // getOrganization().then(res => {
      //   this.organizationList = res.data;
      // })

      const {data: res} = await this.$http.get(
        '/organization/getAll'
      )
      if(res.code != 20000) return this.$message('获取院系失败')
      this.organizationList = res.data
      console.info(this.organizationList)
    },

    //查询科研处待初审的数据
    //通过状态码查询
    getResearchCheckInit() {
      this.queryParams.applyStatus = 31;
      checkDate(this.queryParams).then(res => {
        if(res.code == 20000){
          this.tutorList = res.data;
          this.totalData = res.total;
        }
      })
    },

    //搜索按钮
    searchQuery() {
      checkDate(this.queryParams).then(res => {
        this.tutorList = res.data;
        this.totalData = res.total;
      })
    },

    //重置按钮
    resetQuery() {
      this.queryParams.userId = null;
      this.queryParams.userName = null;
      this.queryParams.organization = null;
      this.queryParams.applyStatus = 31;
    },
    //初审通过
    passFun() {
      // this.check(64)
      this.dialogVisiblePass = true;
    },
    //审核通过确认弹框确认按钮
    rePassFun() {
      this.check(64);
      this.dialogVisiblePass = false;
      window.location.reload();//重新加载页面
    },
    //初审不通过
    unPassFun() {
      //驳回之前判断是否只选择了一条
      if (this.multipleSelection.length > 1) {
        this.$message.warning("注意:只能选择一条数据审核！");
      } else {
        this.dialogVisible = true
      }

    },
    //弹框确定按钮驳回操作
    returnFun() {
      //备注
      this.updataList[0].commit_1 = this.returnCommit;
      this.check(53);
      this.dialogVisible = false
      this.returnCommit = null
      window.location.reload();//重新加载页面
    },

    //弹框取消按钮
    cancel() {
      this.dialogVisible = false;
      this.returnCommit = null;
    },

    //更新操作
    check(status) {
      for(let index = 0; index < this.updataList.length; index ++) {
        this.updataList[index].status_1 = status;
      }
      updateStatus(this.updataList).then( res => {
        if(res.code == 20000) {
          this.$message.success("审核成功");
        }
        this.updataList.length = 0
        this.resetQuery();
        this.getSecretaryInit();
      });
    },

    //当前选中
    handleSelectionChange(val) {
      if( val.length > 0) {
        this.multiple = false;
      } else {
        this.multiple = true
      }
      this.multipleSelection = val
      //每次选择都要将之前的清空
      this.updataList = []
      // 将需要审核后下发的数据对应起来
      for(let index = 0; index < this.multipleSelection.length; index++) {
        let obj = {id_1:0, status_1:0, commit_1:""};
        obj.id_1 = this.multipleSelection[index].applyId;
        obj.status_1 = this.multipleSelection[index].status;
        obj.commit_1 = "";
        console.log(obj)
        this.updataList.push(obj);
      }
    },

    //每页显示条数
    handleSizeChange(val) {},
    //当前页数
    handleCurrentChange(val) {
      this.currentPage.pageNum = val;
      this.getResearchCheckInit();
    },
    

  },



};
</script>