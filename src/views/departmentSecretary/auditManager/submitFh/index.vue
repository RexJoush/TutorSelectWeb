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
                :key="item.applyId"
                :label="item.applyName"
                :value="item.applyId"
              />
            </el-select>
          </el-form-item>
          <!-- <el-form-item label="审核状态">
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
          </el-form-item> -->
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

        <!-- v-loading="loading" 当没加载到数据时显示正在加载状态 -->
        <el-table
          v-loading="loading"
          :data="tutorList"
          @selection-change="handleSelectionChange"
        >
          <!-- <el-table-column type="selection" width="50" align="center" /> -->
          <el-table-column
            label="工号"
            align="center"
            prop="number"
            width="100"
            width:180
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
          :current-page.sync="currentPage"
          :page-size="10"
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
          >注意：导出上表中<span style="color: red">同意上分会</span
          >的数据</span
        >
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  getApplyType,
  checkDate,
  updateStatus,
} from "@/api/departmentSecretary/secretaryFirst";
import { exportSFH } from "@/api/departmentSecretary/exportExcel";
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
      //当前页
      currentPage: 1,
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
    // 数据初始化，包括同意上分会和不同意上分会
    getSecretaryInit() {
      this.loading = true;
      this.queryParams.applyStatus = 13 + "-" + 22;
      checkDate(this.queryParams).then((res) => {
        console.log(res);
        if (res.code == 20000) {
          this.tutorList = res.data;
          this.totalData = res.data.length;
          this.loading = false;
        }
      });
    },
    //导出按钮，只导出同意上分会的数据
    exportFun() {
      this.loading = true;
      this.queryParams.applyStatus = 13; //同意上分会
    //   this.queryParams.organization = 30130;//院系
      exportSFH(this.queryParams).then((res) =>{
          console.log("123")
          console.log(res)
      })
    },
    //搜索按钮
    searchQuery() {
      this.loading = true;
      checkDate(this.queryParams).then((res) => {
        this.tutorList = res.data;
        this.totalData = res.data.length;
        this.loading = false;
      });
    },
    //重置按钮
    resetQuery() {
      this.queryParams.userId = null; // 工号
      this.queryParams.userName = null; // 姓名
      this.queryParams.applyType = null; // 申请类别id
      this.queryParams.applyStatus = 10; // 审核状态码id
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
    },
    //每页显示条数
    handleSizeChange(val) {},
    //当前页数
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getSecretaryInit();
    },
  },
};
</script>
