<template>
  <div class="app-container">
    <el-row :gutter="20">
      <!--用户数据-->
      <el-col :span="20" :xs="24">
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
          <el-form-item label="申请类别">
            <el-select
              v-model="queryParams.applyType"
              placeholder="请选择"
              clearable
              size="small"
              style="width: 240px"
            >
              <el-option
                v-for="item in applyTypeList"
                :key="item.applyTypeId"
                :label="item.applyName"
                :value="item.applyTypeId"
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
        <br />
        <br />
        <el-row :gutter="10" class="mb8">
          <el-col :span="1.5">
            <el-button
              type="success"
              plain
              icon="el-icon-success"
              size="small"
              :disabled="single"
              @click="passFun()"
              >学院分会通过</el-button
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
              >学院分会不通过</el-button
            >
          </el-col>
        </el-row>
        <!-- v-loading="loading" 当没加载到数据时显示正在加载状态 -->
        <el-table
          v-loading="loading"
          :data="tutorList"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="50" align="center" />
          <el-table-column
            label="工号"
            align="center"
            prop="tutorId"
            width="100"
            fixed
          />
          <el-table-column label="姓名" align="center" prop="name" fixed />
          <el-table-column
            label="所在单位（院系）"
            align="center"
            prop="organizationName"
            width="250"
            fixed
          />
          <el-table-column
            label="申请学科或类别代码"
            align="center"
            prop="professionalApplicationSubjectCode"
            width="180"
          />
          <el-table-column
            label="申请学科或类别名称"
            align="center"
            prop="professionalApplicationSubjectName"
            width="180"
          />
          <el-table-column
            label="申请类别"
            align="center"
            prop="applyName"
            width="180"
          />
          <el-table-column
            label="职称"
            align="center"
            prop="title"
            width="180"
          />
          <el-table-column
            label="审核状态"
            align="center"
            prop="inspectDescribe"
            width="150"
          />
          <el-table-column label="详情" align="center" prop="mr" />
          <el-table-column
            label="备注"
            align="center"
            prop="commit"
            width="150"
          />
        </el-table>

        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="queryParams.pageNum"
          :page-size="queryParams.pageSize"
          layout="total, prev, pager, next"
          :total="totalData"
        >
        </el-pagination>
        <br />
        <el-row :gutter="10" class="mb8">
          <el-col :span="1.5">
            <el-button
              type="warning"
              plain
              icon="el-icon-download"
              size="small"
              :loading="exportLoading"
              @click="exportFun()"
              >导出excel</el-button
            >
          </el-col>
        </el-row>
        <span
          >注意：导出上表<span style="color: red">学院分会通过</span
          >的数据</span
        >
      </el-col>
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
      <span>请输入备注(可以为空)</span>
      <el-input v-model="returnCommit" autocomplete="off"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="returnFun()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getApplyType,
  checkDate,
  updateStatus,
} from "@/api/departmentSecretary/secretaryFirst";
import { exportSXYFH } from "@/api/departmentSecretary/exportExcel";
export default {
  data() {
    return {
      //备注内容
      returnCommit: "",
      //备注弹框显示
      dialogVisible: false,
      //通过确认框
      dialogVisiblePass: false,
      // 遮罩层
      loading: true,
      // 导出遮罩层
      exportLoading: false,
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 分页总条数
      totalData: 0,
      // 待院系秘书初审列表
      secretaryInitList: [],
      //所有申请类别列表
      applyTypeList: [],
      //选定的列表
      multipleSelection: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userId: undefined, // 工号
        userName: undefined, // 姓名
        organization: undefined, // 院系id
        applyType: undefined, // 申请类别id
        subjectName: undefined, // 学科名称id
        applyStatus: undefined, // 审核状态码id
        subjectType: undefined, // 学科属性，文科，理科，交叉
      },
      //和秘书初审有关的审核状态
      statuOptions: [
        {
          value: 13,
          label: "待复审",
        },
        {
          value: 14,
          label: "学院分会通过",
        },
        {
          value: 15,
          label: "学院分会不通过",
        },
      ],
      //审核后需要下发的List数据
      updataList: [],
      tutorList: [],
    };
  },
  created() {
    this.getSecretaryInit(); //初始化待初审的数据
    this.getApplyTypeList(); //初始化申请的所有类别（下拉框）
  },
  methods: {
    // 初始化申请的所有类别（下拉框）
    async getApplyTypeList() {
      getApplyType().then((res) => {
        this.applyTypeList = res.data;
      });
    },
    // 查询院系秘书待初审的数据
    // 可以通过设置  this.queryParams.applyStatus 状态码，固定返回列表中的数据全部是秘书待审核
    getSecretaryInit() {
      this.loading = true;
      this.queryParams.applyStatus = 13;
      checkDate(this.queryParams).then((res) => {
        this.tutorList = res.data;
        this.totalData = res.total;
        this.loading = false;
      });
    },
    //导出按钮，导出状态为“学院分会”的数据
    exportFun(){
      let date = new Date();
      let year = date.getFullYear(); // 获取当前年份
      console.log(year);
      this.loading = true;
      this.queryParams.applyStatus = 14; //学院分会通过
      //   this.queryParams.organization = 30130;//院系
      exportSXYFH(this.queryParams).then((res) => {
        let blob = new Blob([res], { type: "application/vnd.ms-excel" });
        let url = window.URL.createObjectURL(blob);
        let link = document.createElement("a");
        link.download =
          "西北大学" +
          year +
          "年" +
          "网络和数据中心" +
          "学位评定分委员会审议汇总表.xlsx"; //excel名称
        link.href = url;
        link.click();
      });
      this.loading = false;

    },
    //搜索按钮
    searchQuery() {
      this.loading = true;
      checkDate(this.queryParams).then((res) => {
        this.tutorList = res.data;
        this.totalData = res.total;
        this.loading = false;
      });
    },
    //重置按钮
    resetQuery() {
      this.queryParams.userId = null; // 工号
      this.queryParams.userName = null; // 姓名
      this.queryParams.applyType = null; // 申请类别id
      this.queryParams.applyStatus = 13; // 审核状态码id
    },
    //同意上分会
    passFun() {
      this.dialogVisiblePass = true;
    },
    //审核通过确认弹框确认按钮
    rePassFun() {
      this.check(14);
      this.dialogVisiblePass = false;
    },
    //不同意上分会
    unPassFun() {
      //驳回之前判断是否只选择了一条
      if (this.multipleSelection.length > 1) {
        this.$message.warning("注意:只能选择一条数据审核！");
      } else {
        this.dialogVisible = true;
      }
    },
    //弹框确定按钮驳回操作
    returnFun() {
      //带上备注
      this.updataList[0].commit_1 = this.returnCommit;
      this.check(15);
      this.dialogVisible = false;
      this.returnCommit = null;
    },
    //弹框取消按钮
    cancel() {
      this.dialogVisible = false;
      this.returnCommit = null;
    },
    //更新操作
    check(status) {
      for (let index = 0; index < this.updataList.length; index++) {
        this.updataList[index].status_1 = status;
      }
      updateStatus(this.updataList).then((res) => {
        if (res.code == 20000) {
          this.$message.success("审核成功");
        }
        this.updataList.length = 0;
        // 对搜索到的部分数据进行审批后，页面应该还停留在搜索界面还是直接初始化
        this.resetQuery();
        this.getSecretaryInit();
      });
    },

    //当前选中
    handleSelectionChange(val) {
      if (val.length > 0) {
        this.single = false;
        this.multiple = false;
      } else {
        this.single = true;
        this.multiple = true;
      }
      this.multipleSelection = val;
      //每次选择都要将之前的清空
      this.updataList = [];
      // 将需要审核后下发的数据对应起来
      for (let index = 0; index < this.multipleSelection.length; index++) {
        // let obj = {id_1:0, number_1: "", applyId_1: 0, status_1: 0, commit_1: "" };
        let obj = { id_1: 0, status_1: 0, commit_1: "" };
        obj.id_1 = this.multipleSelection[index].applyId;
        // obj.number_1 = this.multipleSelection[index].number;
        // obj.applyId_1 = this.multipleSelection[index].applyId;
        obj.status_1 = this.multipleSelection[index].status;
        obj.commit_1 = "";
        console.log(obj);
        this.updataList.push(obj);
      }
    },
    //每页显示条数
    handleSizeChange(val) {},
    //当前页数
    handleCurrentChange(val) {
      this.queryParams.pageNum = val;
      this.getSecretaryInit();
    },
  },
};
</script>
