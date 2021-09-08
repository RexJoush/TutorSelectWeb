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
          <el-form-item label="负责院系" prop="organization">
            <el-select
              v-model="queryParams.organization"
              placeholder="请选择院系"
              clearable
              size="small"
              style="width: 240px"
            >
              <el-option
                v-for="dict in organizationOptions"
                :key="dict.organizationId"
                :label="dict.organizationName"
                :value="dict.organizationId"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="学科名称" prop="subjectName">
            <el-select
              v-model="queryParams.subjectName"
              placeholder="请选择学科"
              clearable
              size="small"
              style="width: 240px"
            >
              <el-option
                v-for="dict in subjectNameOptions"
                :key="dict.dictValue"
                :label="dict.dictLabel"
                :value="dict.dictValue"
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
          <el-col :span="1.5">
            <el-button
              type="danger"
              plain
              icon="el-icon-error"
              size="small"
              @click="upDateStatus(37)"
            >驳回至研究生秘书
            </el-button>
          </el-col>
          <el-table
            v-loading="loading"
            :data="tutorList"
            :row-class-name="tableRowClassName"
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
        </el-row></el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  data() {
    return {
      // 遮罩层
      loading: true,
      // 是否为单选
      single: false,
      currentPage: 1,
      // 是否为多选
      multiple: false,
      // 显示搜索条件
      showSearch: true,
      // 分页总条数
      total: 0,
      // 用户表格数据
      tutorList: [],
      // 弹出层标题
      title: '',
      // 是否显示弹出层
      open: false,
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
      // 表单参数
      form: {
        status: 1
      },
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
      }
    }
  },
  created() {
    // 研究生院管理员标记为待修改，需要驳回给秘书的数据
    this.queryParams.applyStatus = 36 + '-' + '42-' + '53'
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
      const updateStatus = []
      for (var i = 0; i < this.ids.length; i++) {
        var json = {
          'id_1': this.ids[i],
          'status_1': code
        }
        updateStatus[i] = json
      }
      console.info(updateStatus)
      const { data: res } = await this.$http.post(
        '/admin/update-status/update', updateStatus
      )
      this.getList()
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
          'codeId': '36-42-53',
          'inspectDescribe': '全部待驳回'
        },
        {
          'codeId': 36,
          'inspectDescribe': '需修改'
        },
        {
          'codeId': 42,
          'inspectDescribe': '社科处不通过'
        },
        {
          'codeId': 53,
          'inspectDescribe': '科研处不通过'
        }
      ]
    },
    async getOrginization() {
      const { data: res } = await this.$http.get(
        '/admin/organization/getAll'
      )
      this.organizationOptions = res
      console.info(this.organizationOptions)
    },
    async getSubject() {
      // const { data: res } = await this.$http.get(
      //   '/apply-type/getAll'
      // )
      // if(res.code != 1000) return this.$message("获取类别失败")
      // this.applyTypeOptions = res.data
    },

    // 取消按钮
    cancel() {
      this.open = false
      this.reset()
    },
    // 表单重置
    reset() {
      this.form = {
        userId: undefined,
        deptId: undefined,
        userName: undefined,
        status: '0',
        remark: undefined,
        postIds: [],
        roleIds: []
      }
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
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.applyId)
    },
    // 表格行的颜根据状态不同变化
    tableRowClassName({ row, rowIndex }) {
      if (row.inspectDescribe == '社科处审核不通过') {
        return 'warning-row'
      } else if (row.inspectDescribe == '科研处审核不通过') {
        return 'success-row'
      }
      return ''
    },
    // 当前页数
    handleCurrentChange(val) {
      this.currentPage = val
      this.getList()
    }
  }

}
</script>
<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
