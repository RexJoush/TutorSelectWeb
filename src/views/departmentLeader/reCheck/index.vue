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
          <el-form-item class="btnSearch">
            <el-button
              type="primary"
              icon="el-icon-search"
              size="small"
              @click="filterDataByStatus()"
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
              >同意上分会</el-button
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
              >不同意上分会</el-button
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
          />
          <el-table-column
            label="详情"
            align="center"
            prop="mr"
            fixed="right"
          />
          <el-table-column
            label="备注"
            align="center"
            width="150"
            prop="commit"
            fixed="right"
          >
          </el-table-column>
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
        <el-row :gutter="10" class="mb8" style="left: 1300px">
          <el-col :span="3">
            <el-button
              type="success"
              plain
              size="small"
              :loading="exportLoading"
              @click="submitFun()"
              >提交</el-button
            >
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <!-- 审批通过的确认弹框 -->
    <el-dialog title="提示" :visible.sync="dialogVisiblePass" width="30%">
      <span>确认提交吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisiblePass = false">取 消</el-button>
        <el-button type="primary" @click="confirmFun()">确 定</el-button>
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
export default {
  data() {
    return {
      //备注内容
      returnCommit: "",
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
        userId: null, // 工号
        userName: null, // 姓名
        organization: null, // 院系id
        applyType: null, // 申请类别id
        subjectName: null, // 学科名称id
        applyStatus: null, // 审核状态码id
        subjectType: null, // 学科属性，文科，理科，交叉
      },
      // 查询参数
      queryParamCopy: {},
      //和秘书初审有关的审核状态
      statuOptions: [
        {
          value: 11,
          label: "初审符合条件",
        },
        {
          value: 12,
          label: "初审不符合条件",
        },
        {
          value: 13,
          label: "初审待定",
        },
        {
          value: 21,
          label: "同意上分会",
        },
        {
          value: 22,
          label: "不同意上分会",
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
    getSecretaryInit() {
      this.filterDataByStatus();
    },
    //根据审核状态，选择查询对象。因为该页面只查状态值为10、15、16、17、18的数据，而后端只有一个获取数据接口。
    //所以使用defaultStatus定义当前页面的默认审核状态,深拷贝queryParams对象作为默认查询条件。
    filterDataByStatus() {
      this.loading = true;
      let defaultStatus = 11 + "-" + 12 + "-" + 13 + "-" + 19 + "-" + 20;
      if (
        this.queryParams.applyStatus == null ||
        this.queryParams.applyStatus == ""
      ) {
        this.queryParamCopy = JSON.parse(JSON.stringify(this.queryParams));
        this.queryParamCopy.applyStatus = defaultStatus;
        this.searchByOptions(this.queryParamCopy);
      } else {
        this.searchByOptions(this.queryParams);
      }
    },
    //按条件搜索
    searchByOptions(queryParams) {
      checkDate(queryParams).then((res) => {
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
      this.queryParams.applyStatus = null; // 审核状态码id
    },
    //同意上分会
    passFun() {
      this.check(19);
    },
    //不同意上分会
    unPassFun() {
      this.check(20);
    },
    //更新操作
    check(status) {
      if (status === 9999) {
        //如果status是9999，则执行提交按钮
        for (let index = 0; index < this.updataList.length; index++) {
          this.updataList[index].status_1 = this.updataList[index].status_1 + 2; //+2是因为数据库绑定状态的原因，勿动
        }
      } else {
        for (let index = 0; index < this.updataList.length; index++) {
          this.updataList[index].status_1 = status;
        }
      }

      updateStatus(this.updataList).then((res) => {
        if (res.code == 20000) {
          this.$message.success("操作成功!");
        }
        this.updataList.length = 0;
        this.getSecretaryInit();
      });
    },
    //提交按鈕
    submitFun() {
      this.dialogVisiblePass = true;
    },
    // 弹框的确定按钮
    confirmFun() {
      let flag = true;
      for (let index = 0; index < this.updataList.length; index++) {
        if (
          this.updataList[index].status_1 == 11 ||
          this.updataList[index].status_1 == 12 ||
          this.updataList[index].status_1 == 13
        ) {
          flag = false;
        }
      }
      if (flag) {
        this.check(9999);
        this.getSecretaryInit();
      } else {
        this.$message.warning("有待审核的数据，请先进行审核！");
      }
      this.dialogVisiblePass = false;
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
      this.updateObiect(this.multipleSelection);
    },
    //封装更新数据
    updateObiect(originArray) {
      //每次选择都要将之前的清空
      this.updataList = [];

      // 将需要审核后下发的数据对应起来
      for (let index = 0; index < originArray.length; index++) {
        // let obj = {id_1:0, number_1: "", applyId_1: 0, status_1: 0, commit_1: "" };
        let obj = { id_1: 0, status_1: 0, commit_1: "" };
        obj.id_1 = originArray[index].applyId;
        obj.status_1 = originArray[index].status;
        obj.commit_1 = originArray[index].commit;
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
