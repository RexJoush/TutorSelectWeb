<template>
  <div class="app-container">
    <!-- 搜索部分 -->
    <el-form ref="queryForm" label-width="70px">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="工号">
            <el-input
              v-model="queryParams.userId"
              placeholder="请输入工号"
              clearable
              size="small"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="姓名">
            <el-input
              v-model="queryParams.userName"
              placeholder="请输入姓名"
              clearable
              size="small"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="申请类别">
            <el-select
              v-model="queryParams.applyType"
              placeholder="请选择"
              clearable
              size="small"
              style="width: 100%"
            >
              <el-option
                v-for="item in applyTypeList"
                :key="item.applyTypeId"
                :label="item.applyName"
                :value="item.applyTypeId"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="2" :offset="20">
          <el-button
            type="primary"
            icon="el-icon-search"
            size="small"
            @click="search"
            >搜索</el-button
          >
        </el-col>
        <el-col :span="2">
          <el-button
            icon="el-icon-refresh"
            size="small"
            @click="resetQuery(queryParams)"
            >重置</el-button
          >
        </el-col>
      </el-row>
    </el-form>

    <!-- 数据部分 -->
    <el-table v-loading="loading" :data="tutorList">
      <el-table-column label="工号" align="center" prop="tutorId" />
      <el-table-column label="姓名" align="center" prop="name" />
      <el-table-column
        label="所在单位（院系）"
        align="center"
        prop="organizationName"
      />
      <el-table-column
        label="申请学科或类别代码"
        align="center"
        prop="applySubject"
      />
      <el-table-column label="申请类别" align="center" prop="applyName" />
      <el-table-column label="职称" align="center" prop="title" />
      <el-table-column label="审核状态" align="center" prop="inspectDescribe">
        <template slot-scope="scope">
          <el-tag
            v-if="
              scope.row.status === 25 ||
              scope.row.status === 30 ||
              scope.row.status === 31
            "
            type="warning"
          >
            {{ scope.row.inspectDescribe }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="详情" align="center">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="toDetails(scope.row.applyId, scope.row.applyTypeId, scope.row.tutorId)"
            >查 看
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页框 -->
    <el-row type="flex" justify="center">
      <el-pagination
        style="margin: 10px 0"
        :current-page="queryParams.pageNum"
        :page-size="queryParams.pageSize"
        layout="total, prev, pager, next"
        :total="totalData"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-row>
  </div>
</template>

<script>
import {
  getApplyType,
  getInit,
  search,
} from "@/api/departmentSecretary/secretaryFirst";
import { toDetails } from "@/utils/function";
import Cookies from "js-cookie";
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
      // 页码
      pageNumber: 1,
      // 查询参数
      queryParams: {
        userId: "", // 工号
        userName: "", // 姓名
        organization: "", // 院系id 30130 50030
        organizationName: "", // 院系名称
        applyType: "", // 申请类别id
        subjectName: "", // 学科名称id
        applyStatus: "", // 审核状态 id
        applyStatuss: [], // 审核状态码数组 id
        subjectType: "", // 学科属性，文科，理科，交叉
      },
      // 查询参数
      queryParamCopy: {},
      // 和秘书初审有关的审核状态
      statusOptions: [
        {
          value: 25,
          label: "符合条件",
        },
        {
          value: 30,
          label: "送审社科处",
        },
        {
          value: 31,
          label: "送审科研处",
        },
      ],
      // 审核后需要下发的List数据
      updateList: [],
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
     //获取cookie中的院系zjz
    getOrganizationId: function () {
      if (Cookies.get("organizationId") !== null) {
        return Cookies.get("organizationId");
      } else {
        console.log("error-organizationId is null");
      }
    },
    // 查询院系秘书待初审的数据
    getSecretaryInit: function () {
      this.loading = true;
      const organizationId = this.getOrganizationId(); // 院系zjz
      const applyStatuss = ["25", "30", "31"]; // 申请状态码
      getInit(organizationId, applyStatuss, this.pageNumber).then((res) => {
        this.tutorList = res.data.data;
        this.totalData = res.data.total;
        console.log("res", res);
        this.loading = false;
      });
    },

    // 详情页
    toDetails: function (applyId, applyTypeId, tutorId) {
      toDetails(this, applyId, applyTypeId, tutorId);
    },

    // 查询数据
    search: function () {
      this.pageNumber = 1;
      if (
        this.queryParams.applyStatus === "" &&
        this.queryParams.userName === "" &&
        this.queryParams.organization === "" &&
        this.queryParams.applyType === "" &&
        this.queryParams.subjectName === "" &&
        this.queryParams.subjectType === ""
      ) {
        this.getSecretaryInit();
      } else {
        if (this.queryParams.applyStatus === "") {
          this.queryParams.applyStatuss = ["25", "30", "31"]; // 申请状态码
        }
        this.queryParams.organization = this.getOrganizationId();
        search(this.queryParams, this.pageNumber)
          .then((res) => {
            this.tutorList = res.data.data;
            this.totalData = res.data.total;
            console.log("res", res);
            this.loading = false;
          })
          .catch((error) => {
            throw error;
          });
      }
    },

    // 清空选择申请状态
    changeApplyStatus: function () {
      this.queryParams.applyStatuss = [];
    },
    // 重置按钮
    resetQuery() {
      this.queryParams.userId = ""; // 工号
      this.queryParams.userName = ""; // 姓名
      this.queryParams.applyType = ""; // 申请类别id
      this.queryParams.applyStatus = ""; // 审核状态码id
      this.queryParams.applyStatuss = []; // 申请类别列表
      this.pageNumber = 1;
    },

    //每页显示条数
    handleSizeChange(val) {},
    //当前页数
    handleCurrentChange(val) {
      this.pageNumber = val;
      this.getSecretaryInit();
    },
  },
};
</script>
