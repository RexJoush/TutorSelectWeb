<!--本页为科研处社科处材料审核通过的记录页面，研究生院管理员可在该页面将审核通过的材料提交给研究生院主管-->
<template>
  <div class="app-container">
    <el-row :gutter="20">
      <!--导师表格部分-->
      <el-col :span="20" :xs="24">
        <el-form v-show="showSearch" ref="queryForm" :model="queryParams" :inline="true" label-width="68px">
          <el-form-item label="工号" prop="userId">
            <el-input
              v-model="queryParams.userId"
              placeholder="请输入用户工号"
              clearable
              size="small"
              style="width: 240px"
              @keyup.enter.native="handleQuery"
            />
          </el-form-item>
          <el-form-item label="姓名" prop="userName">
            <el-input
              v-model="queryParams.userName"
              placeholder="请输入用户名称"
              clearable
              size="small"
              style="width: 240px"
              @keyup.enter.native="handleQuery"
            />
          </el-form-item>
          <el-form-item label="学科属性" prop="subjectType">
            <el-select
              v-model="queryParams.subjectType"
              placeholder="请选择学科属性"
              clearable
              size="small"
              style="width: 240px"
            >
              <el-option
                v-for="dict in subjectTypeOptions"
                :key="dict.code"
                :label="dict.label"
                :value="dict.code"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="申请类别" prop="applyType">
            <el-select
              v-model="queryParams.applyType"
              placeholder="请选择申请类别"
              clearable
              size="small"
              style="width: 240px"
            >
              <el-option
                v-for="dict in applyTypeOptions"
                :key="dict.applyTypeId"
                :label="dict.applyName"
                :value="dict.applyTypeId"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="审核状态" prop="applyStatus">
            <el-select
              v-model="queryParams.applyStatus"
              placeholder="请选择审核状态"
              clearable
              size="small"
              style="width: 240px"
            >
              <el-option
                v-for="dict in applyStatusOptions"
                :key="dict.codeId"
                :label="dict.inspectDescribe"
                :value="dict.codeId"
              />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
            <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
          </el-form-item>
        </el-form>
        <el-row :gutter="10" class="mb8">
          <!--          <el-col :span="1.5">-->
          <!--            <el-button-->
          <!--              type="danger"-->
          <!--              plain-->
          <!--              icon="el-icon-error"-->
          <!--              size="small"-->
          <!--              :disabled="multiple"-->
          <!--              @click="unPassFun"-->
          <!--            >需修改</el-button>-->
          <!--          </el-col>-->
          <el-col :span="1.5">
            <el-button
              type="success"
              plain
              icon="el-icon-success"
              size="small"
              :disabled="single"
              @click="passFun(34)"
            >提交至研究生院主管</el-button>
          </el-col> <el-col :span="1.5" />
        </el-row>
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
        <div class="block">
          <el-pagination
            v-show="total>0"
            :current-page.sync="currentPage"
            :page-size="10"
            layout="total, prev, pager, next"
            :total="total"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-col>
    </el-row>
    <!-- 审批通过的确认弹框 -->
    <el-dialog title="提示" :visible.sync="dialogVisiblePass" width="30%">
      <span>确认提交给研究生院主管吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisiblePass = false">取 消</el-button>
        <el-button type="primary" @click="rePassFun()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data() {
    return {
      // 遮罩层
      loading: true,
      // 备注弹框显示
      dialogVisible: false,
      // 通过确认框
      dialogVisiblePass: false,
      // 显示搜索条件
      showSearch: true,
      currentPage: 1,
      // 分页总条数
      total: 0,
      // 用户表格数据
      tutorList: [],
      // 弹出层标题
      title: '',
      // 是否显示弹出层
      open: false,
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 日期范围
      dateRange: [],
      // 申请类别选项
      applyTypeOptions: [],
      // 院系选项
      organizationOptions: [],
      // 学科名称选项
      subjectNameOptions: [],
      // 审核状态选项
      applyStatusOptions: [],
      // 学科属性选项
      subjectTypeOptions: [
        {
          code: 1,
          label: '文科'
        },
        {
          code: 2,
          label: '理科'
        },
        {
          code: 3,
          label: '交叉学科'
        }
      ],
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
      choose: 0,
      commit: undefined
    }
  },
  created() {
    // 院系秘书复审通过的状态即研究生院管理员初审状态
    this.queryParams.applyStatus = '63-64'
    this.getList()
    this.getApplyType()
    this.getOrginization()
    this.getApplyStatus()
  },
  methods: {
    /** 查询用户列表 */
    async getList() {
      this.loading = true
      this.queryParams.pageNum = this.currentPage || 1
      const { data: res } = await this.$http.get(
        '/admin/tutor-inspect/admin/getAll', { params: this.queryParams }
      )
      this.tutorList = res.data
      console.info(res.data)
      this.total = res.total
      this.loading = false
    },
    async upDateStatus(code) {
      console.log('update')
      const updateStatus = []
      for (var i = 0; i < this.ids.length; i++) {
        var json = {
          'id_1': this.ids[i],
          'status_1': code,
          'commit_1': this.commit || '研究生院返回修改'
        }
        updateStatus[i] = json
      }
      const { code: res } = await this.$http.post(
        '/admin/update-status/update', updateStatus
      )
      if (res.code === 20000) {
        this.$message.success('操作成功!')
      }
      this.getList()
      this.commit = undefined
    },
    async getApplyType() {
      const { data: res } = await this.$http.get(
        '/admin/apply-type/getApplyType'
      )
      this.applyTypeOptions = res
    },
    async getApplyStatus() {
      this.applyStatusOptions = [
        {
          'codeId': '63-64',
          'inspectDescribe': '全部审核通过'
        },
        {
          'codeId': 63,
          'inspectDescribe': '社科处审核通过'
        },
        {
          'codeId': 64,
          'inspectDescribe': '科研处审核通过'
        }
      ]
    },
    async getOrginization() {
      const { data: res } = await this.$http.get(
        '/admin/organization/getAll'
      )
      this.organizationOptions = res
    },
    async getSubject() {
      // const { data: res } = await this.$http.get(
      //   '/apply-type/getAll'
      // )
      // if(res.code != 1000) return this.$message("获取类别失败")
      // this.applyTypeOptions = res.data
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1
      this.getList()
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.dateRange = []
      this.handleQuery()
    },
    // 通过
    passFun(num) {
      this.dialogVisiblePass = true
      this.choose = num
    },
    // 审核通过确认弹框确认按钮
    rePassFun() {
      // eslint-disable-next-line eqeqeq
      this.upDateStatus(34)
      this.dialogVisiblePass = false
    },
    // 弹框取消按钮
    cancel() {
      this.dialogVisible = false
      this.commit = undefined
    },

    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.applyId)
      if (selection.length > 0) {
        this.single = false
        this.multiple = false
      } else {
        this.single = true
        this.multiple = true
      }
    },
    // 当前页数
    handleCurrentChange(val) {
      this.currentPage = val
      this.getSecretaryInit()
    }

  }
}
</script>
