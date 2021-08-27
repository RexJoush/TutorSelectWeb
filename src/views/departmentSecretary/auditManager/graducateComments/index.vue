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
        <el-table v-loading="loading" :data="tutorList">
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
          :current-page="queryParams.pageNum"
          :page-size="queryParams.pageSize"
          layout="total, prev, pager, next"
          :total="totalData"
        >
        </el-pagination>
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
      //研究生院秘书 待初审（研究生院秘书复审通过）、审核通过（送审科研处、送审社科处），其不符合的会返回给院系秘书
      this.queryParams.applyStatus = 14 + "-" + 30 + "-" + 31;
      // this.queryParams.organization = 50030;  //传入秘书院系id
      checkDate(this.queryParams).then((res) => {
        console.log(res);
        if (res.code == 20000) {
          this.tutorList = res.data;
          this.totalData = res.total;
          this.loading = false;
        }
        if (res.code == 20001) {
          this.$message("暂无数据！");
          this.loading = false;
        }
      });
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
      this.queryParams.applyStatus = 14 + "-" + 30 + "-" + 31; // 审核状态码id
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
