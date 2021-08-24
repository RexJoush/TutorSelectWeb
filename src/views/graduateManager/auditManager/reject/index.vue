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
                :key="dict.applyId"
                :label="dict.applyName"
                :value="dict.applyId"
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
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
            <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
          </el-form-item>
        </el-form>
        <el-row :gutter="10" class="mb8">
          <el-col :span="1.5">
            <el-button
              type="warning"
              plain
              icon="el-icon-refresh-left"
              size="mini"
              @click="upDateStatus(37)"
            >院系驳回</el-button>
          </el-col>
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
        <div class="block">
          <el-pagination
            v-show="total>0"
            :current-page="queryParams.pageNum"
            :page-size="queryParams.pageSize"
            layout="total, prev, pager, next"
            :total="total"
          />
        </div>
      </el-col>
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
    //研究生院管理员标记为待修改，需要驳回给秘书的数据
    this.queryParams.applyStatus = 36 + "-"+"42-"+"53"
    this.getList()
    this.getApplyType()
    this.getOrginization()
    this.getApplyStatus()
  },
  methods: {
    /** 查询用户列表 */
    async getList() {
      this.loading = true
      const { data: res } = await this.$http.get(
        '/tutor-inspect/admin/getAll', { params: this.queryParams }
      )
      if (res.code != 20000) return this.$message("暂无待初审教师！！！")
      this.tutorList = res.data
      console.info(res.data)
      this.total = res.total
      this.loading = false
    },
    async upDateStatus(code) {
      const updateStatus = []
      for (var i =0 ;i<this.ids.length;i++){
        var json={
          "id_1" :this.ids[i],
          "status_1":code,
        };
        updateStatus[i] = json ;
      }
      console.info(updateStatus)
      const { data: res } = await this.$http.post(
        '/update-status/update',updateStatus
      )
      this.getList();
      if(res.code != 20000) return this.$message("操作失败！！！")
      else return this.$message("操作成功！！！")
    },
    async getApplyType() {
      const { data: res } = await this.$http.get(
        '/apply-type/getApplyType'
      )
      if (res.code != 20000) return this.$message('获取类别失败')
      this.applyTypeOptions = res.data
    },
    async getApplyStatus() {
      this.applyStatusOptions =[
        {
          "codeId" : 14,
          "inspectDescribe" :"待初审"
        },
        {
          "codeId" : 0,
          "inspectDescribe" :"需修改"
        },
        {
          "codeId" : 30,
          "inspectDescribe" :"送至社科处"
        },
        {
          "codeId" : 31,
          "inspectDescribe" :"送至科研处"
        }
      ]
    },
    async getOrginization() {
      const { data: res } = await this.$http.get(
        '/organization/getAll'
      )
      if (res.code != 20000) return this.$message('获取院系失败')
      this.organizationOptions = res.data
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
      this.ids = selection.map(item => item.tutorId)
    }
  }
}
</script>
