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
          <el-form-item>
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
            fixed="right"
          />
          <el-table-column label="详情" align="center" prop="mr" />
          <el-table-column
            label="备注"
            align="center"
            width="150"
            fixed="right"
          >
            <template #default="scope">
              <el-button @click="commitFun(scope.row)" type="text" size="small"
                >添加备注</el-button
              >
            </template>
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
    <!-- 备注弹框 -->
    <el-dialog title="备注" :visible.sync="dialogVisible" width="30%">
      <span>(可以为空)</span>
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
  updateStatusSfh
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
      //当前操作的行
      currentSelection: [],
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
 
    //excel导出同意上分会的数据 状态为21
    exportFun() {
      let date = new Date();
      let year = date.getFullYear(); // 获取当前年份
      this.queryParams.applyStatus = 21;
      //   this.queryParams.organization = 30130;//院系
      exportSFH(this.queryParams).then((res) => {
        let blob = new Blob([res], { type: "application/vnd.ms-excel" });
        let url = window.URL.createObjectURL(blob);
        let link = document.createElement("a");
        link.download =
          "西北大学" +
          year +
          "年" +
          "网络和数据中心" +
          "学位评定分委员会推荐汇总表.xlsx"; //excel名称
        link.href = url;
        link.click();
      });
      this.loading = false;
    },
    //导出excel实现
    exportExcel(queryParams) {},

    // 查询院系主管已审核的数据(初始化)
    getSecretaryInit() {
      this.filterDataByStatus();
    },

    //根据审核状态，选择查询对象。因为该页面只查状态值为21 22的数据，而后端只有一个获取数据接口。
    //所以使用defaultStatus定义当前页面的默认审核状态,深拷贝queryParams对象作为默认查询条件。
    filterDataByStatus() {
      this.queryParams.applyStatus = 21 + "-" + 22;
       checkDate(this.queryParams).then((res) => {
         console.log(res)
        this.tutorList = res.data.data;
        this.totalData = res.data.total;
        this.loading = false;
      });
    },

    //重置按钮
    resetQuery() {
      this.queryParams.userId = null; // 工号
      this.queryParams.userName = null; // 姓名
      this.queryParams.applyType = null; // 申请类别id
    },

    //点击备注按钮，添加备注
    commitFun(row) {
      this.dialogVisible = true;
      this.returnCommit = row.commitYxSfh;
      this.currentSelection.length = 0;
      this.currentSelection.push(row);
    },

    //备注弹框的确定按钮
    returnFun() {
      this.currentSelection[0].commitYxSfh = this.returnCommit;
      this.updateObiect(this.currentSelection);
      console.log(this.updataList)
      this.check(this.currentSelection[0].status); //commit备注 ，不刷新页面，所以需要单独区分，勿动，动了出事你负责
      this.dialogVisible = false;
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
      updateStatusSfh(this.updataList).then((res) => {
        if (res.code == 20000) {
          this.$message.success("操作成功!");
        }
        this.updataList.length = 0;
      });
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
        obj.commit_1 = originArray[index].commitYxSfh;
        this.updataList.push(obj);
      }
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
      this.queryParams.pageNum = val;
      this.getSecretaryInit();
    },
  },
};
</script>
