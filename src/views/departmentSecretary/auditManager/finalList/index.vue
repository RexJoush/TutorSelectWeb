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
          <el-form-item class="btnSearch">
            <el-button
              type="primary"
              icon="el-icon-search"
              size="small"
              @click="searchByOptions()"
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
          <el-table-column
            label="工号"
            align="center"
            prop="tutorId"
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
            width="200"
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
            fixed="right"
          />
          <el-table-column
            label="详情"
            align="center"
            prop="mr"
            fixed="right"
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  getApplyType,
  checkDate,
} from "@/api/departmentSecretary/secretaryFirst";
export default {
  data() {
    return {
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
        userId: null, // 工号
        userName: null, // 姓名
        organization: null, // 院系id
        applyType: null, // 申请类别id
        subjectName: null, // 学科名称id
        applyStatus: null, // 审核状态码id
        subjectType: null, // 学科属性，文科，理科，交叉
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
    // 查询最终通过的数据,只查状态值为81的数据
    getSecretaryInit() {
      this.loading = true;
      this.queryParams.applyStatus = 81;
      checkDate(this.queryParams).then((res) => {
        this.tutorList = res.data.data;
        this.totalData = res.data.total;
        this.loading = false;
      });
    },
    //按条件搜索
    searchByOptions() {
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
