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
          <el-form-item label="审核状态">
            <el-select
              v-model="queryParams.applyStatus"
              placeholder="请选择"
              clearable
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
            <el-button type="primary" icon="el-icon-search" size="small" @click="searchQuery()"
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
              :disabled="single"
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
              >不通过</el-button
            >
          </el-col>

          <el-col :span="1.5">
            <el-button
              type="warning"
              plain
              icon="el-icon-download"
              size="small"
              :loading="exportLoading"
              >导出excel</el-button
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
          <el-table-column label="工号" align="center" prop="number" />
          <el-table-column label="姓名" align="center" prop="name" />
          <el-table-column label="所在单位（院系）" align="center" prop="organizationName" />
          <el-table-column label="申请学科或类别代码" align="center" prop="professionalApplicationSubjectCode" />
          <el-table-column label="申请学科或类别名称" align="center" prop="professionalApplicationSubjectName" />
          <el-table-column label="申请类别" align="center" prop="applyName" />
          <el-table-column label="职称" align="center" prop="professionalTitle" />
          <el-table-column label="审核状态" align="center" prop="inspectDescribe" />
          <el-table-column label="详情" align="center" prop="mr" />
          <el-table-column label="备注" align="center" prop="mr" />
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  getApplyType,
  firstInit,
  updateStatus,
  searchQuery,
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
        userId: undefined, // 工号
        userName: undefined, // 姓名
        organization: undefined, // 院系id
        applyType: undefined, // 申请类别id
        subjectName: undefined, // 学科名称id
        applyStatus: undefined, // 审核状态码id
        subjectType: undefined // 学科属性，文科，理科，交叉
      },
      //当前页
      currentPage: 1,
      //和秘书初审有关的审核状态
      statuOptions: [
        {
          value: 10,
          label: "待初审",
        },
        {
          value: 11,
          label: "通过",
        },
        {
          value: 12,
          label: "不通过",
        },
          {
          value: 13,
          label: "测试哈",
        },
      ],
      //审核后需要下发的List数据
      updataList:[],
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
    async getSecretaryInit() {
      this.loading = true
     const { data: res } = await this.$http.get(
       '/tutor-inspect/getAll', { params: this.queryParams }
     )
     this.tutorList = res.data
     this.total = res.total
     this.loading = false

      // firstInit(this.currentPage).then((res) => {
      //   this.secretaryInitList = res.data.records;
      //   this.totalData = res.data.total;
      //   this.loading = false
      // });
    },
    //搜索按钮
    searchQuery(){
        console.log("查询",this.queryParams)
      searchQuery(this.queryParams).then(res => {
        console.log(res)
      })

    },
    //重置按钮
    resetQuery(queryParams) {
      this.queryParams.tutorId = null;
      this.queryParams.tutorName = null;
      this.queryParams.applytype = null;
      this.queryParams.status = null;
    },
    //初审通过
    passFun(){
      this.check(11);
    },
    //初审不通过
    unPassFun(){
      this.check(12);
    },
    //更新操作
    check(status){
      for (let index = 0; index < this.updataList.length; index++) {
        this.updataList[index].status_1 = status
      }
      updateStatus(this.updataList).then(res=>{
        this.updataList.length = 0
        this.getSecretaryInit();
      })
    },

    //当前选中
    handleSelectionChange(val) {
      if(val.length > 0){
        this.single = false
        this.multiple = false
      }else{
        this.single = true
        this.multiple = true
      }
      this.multipleSelection = val;
      // 将需要审核后下发的数据对应起来
      for (let index = 0; index < this.multipleSelection.length; index++) {
            let obj = {number_1:'',applyId_1: 0,status_1:0}
            obj.number_1=this.multipleSelection[index].number;
            obj.applyId_1=this.multipleSelection[index].applyId;
            obj.status_1=this.multipleSelection[index].status;
            this.updataList.push(obj)
      }
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
