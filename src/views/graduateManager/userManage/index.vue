<template>
  <div class="app-container">
    <el-row :gutter="20">
      <!--用户表格部分-->
      <el-col :span="20" :xs="24">
        <el-form v-show="showSearch" ref="queryForm" :model="queryParams" :inline="true" label-width="68px">
          <el-form-item label="用户名称" prop="userName">
            <el-input
              v-model="queryParams.userName"
              placeholder="请输入用户名称"
              clearable
              size="small"
              style="width: 240px"
              @keyup.enter.native="handleQuery"
            />
          </el-form-item>
          <el-form-item label="用户工号" prop="userId">
            <el-input
              v-model="queryParams.userId"
              placeholder="请输入用户工号"
              clearable
              size="small"
              style="width: 240px"
              @keyup.enter.native="handleQuery"
            />
          </el-form-item>
          <el-form-item label="角色" prop="userRole">
            <el-select
              v-model="queryParams.userRole"
              placeholder="用户角色"
              clearable
              size="small"
              style="width: 240px"
            >
              <el-option
                v-for="dict in roleOptions"
                :key="dict.roleId"
                :label="dict.roleDescribe"
                :value="dict.roleDescribe"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="创建时间">
            <el-date-picker
              v-model="queryParams.createTime"
              size="small"
              style="width: 240px"
              value-format="yyyy-MM-dd"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
            <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
          </el-form-item>
        </el-form>

        <el-row :gutter="10" class="mb8">
          <el-col :span="1.5">
            <el-button
              type="primary"
              plain
              icon="el-icon-plus"
              size="mini"
              @click="handleAdd"
            >新增</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button
              type="success"
              plain
              icon="el-icon-edit"
              size="mini"
              :disabled="!single"
              @click="handleUpdate"
            >修改</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button
              type="danger"
              plain
              icon="el-icon-delete"
              size="mini"
              @click="handleDelete"
            >删除</el-button>
          </el-col>
        </el-row>

        <el-table v-loading="loading" :data="userList" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="50" align="center" />
          <el-table-column label="学工号" align="center" prop="userId" />
          <el-table-column label="姓名" align="center" prop="userName" />
          <el-table-column label="院系" align="center" prop="organization" />
          <el-table-column label="用户角色" align="center" prop="userRole" />
          <el-table-column label="管理员角色" align="center" prop="mr" />
          <el-table-column label="状态" align="center" prop="status">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.status"
                :active-value="0"
                :inactive-value="1"
                @change="handleStatusChange(scope.row)"
              />
            </template>
          </el-table-column>
          <el-table-column label="创建时间" align="center" prop="createTime" width="160">
            <template slot-scope="scope">
              <!--              <span>{{ parseTime(scope.row.createTime) }}</span>-->
              <span>{{ scope.row.createTime }}</span>

            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            align="center"
            width="160"
            class-name="small-padding fixed-width"
          >
            <template v-if="scope.row.userId !== 1" slot-scope="scope">
              <el-button
                size="mini"
                type="text"
                icon="el-icon-edit"
                @click="handleUpdate(scope.row)"
              >修改</el-button>
              <el-button
                size="mini"
                type="text"
                icon="el-icon-delete"
                @click="handleDelete(scope.row)"
              >删除</el-button>
            </template>
          </el-table-column>
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

    <!-- 添加或修改对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="600px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="学工号" prop="userId">
              <el-input v-model="form.userId" placeholder="请输入学工号" maxlength="11" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="状态">
              <el-radio-group v-model="form.status">
                <el-radio
                  v-for="dict in statusOptions"
                  :key="dict.dictValue"
                  :label="dict.dictValue"
                >{{ dict.dictLabel }}
                </el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="用户姓名" prop="userName">
              <el-input v-model="form.userName" placeholder="请输入用户姓名" maxlength="30" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="角色" prop="userRole">
              <el-select v-model="form.userRole" filterable placeholder="请选择">
                <el-option
                  v-for="item in roleOptions"
                  :key="item.roleId"
                  :label="item.roleDescribe"
                  :value="item.roleDescribe"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" />
          <el-col :span="12">
            <el-form-item label="机构" prop="organization">
              <el-select v-model="form.organization" filterable placeholder="请选择">
                <el-option
                  v-for="item in organizationOptions"
                  :key="item.organizationId"
                  :label="item.organizationName"
                  :value="item.organizationName"
                  :disabled="item.status == 1"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
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
      userList: [],
      // 弹出层标题
      title: '',
      choose: 0,
      // 是否显示弹出层
      open: false,
      // 日期范围
      dateRange: [],
      // 状态数据字典
      statusOptions: [
        {
          dictLabel: '启用',
          dictValue: 0
        },
        {
          dictLabel: '禁用',
          dictValue: 1
        }
      ],
      // 角色选项
      roleOptions: [],
      // 院系选项
      organizationOptions: [],
      // 表单参数
      form: {
        status: 1
      },
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userId: undefined,
        userName: undefined,
        organization: undefined,
        userRole: undefined,
        createTime: undefined
      },
      // 表单校验
      rules: {
        userName: [
          { required: true, message: '用户名称不能为空', trigger: 'blur' },
          { min: 2, max: 20, message: '用户名称长度必须介于 2 和 20 之间', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.getList()
    this.getRole()
  },
  methods: {
    /** 查询用户列表 */
    async getList() {
      this.loading = true
      const { data: res } = await this.$http.get(
        '/admin/system-user/getAll', { params: this.queryParams }
      )
      this.userList = res.users
      this.total = res.total
      this.loading = false
    },
    async getOrginization() {
      const { data: res } = await this.$http.get(
        '/organization/getAll'
      )
      this.organizationOptions = res.data
      console.info(this.organizationOptions)
    },
    async getRole() {
      const { data: res } = await this.$http.get(
        '/role/getAll'
      )
      this.roleOptions = res
    },
    // 用户状态修改
    handleStatusChange(row) {
      const text = row.status == '1' ? '停用' : '启用'
      this.$confirm('确认要"' + text + '""' + row.userName + '"用户吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async() => {
        const { data: res } = await this.$http.post(
          '/admin/system-user/updateUser', row
        )
        let mes = text
        if (res == 20000) {
          mes = text + '成功'
        } else {
          mes = text + '失败'
        }
        console.info(res)
        this.$message({
          type: 'success',
          message: mes
        })
      }).catch(() => {
        row.status = row.status === '0' ? '1' : '0'
        this.getList()
        this.$message({
          type: 'info',
          message: '已取消修改'
        })
      })
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
      this.ids = selection.map(item => item.userId)
      console.info(this.ids)
      if (selection.length == 1) {
        this.single = true
        this.multiple = false
      }
      if (selection.length > 1) {
        this.single = false
        this.multiple = true
      }
      if (selection.length < 1) {
        this.single = false
        this.multiple = false
      }
    },
    /** 新增按钮操作 */
    async handleAdd() {
      this.reset()
      this.form.status = 0
      this.choose = 1
      this.open = true
      this.title = '添加用户'
      this.getOrginization()
    },
    /** 修改按钮操作 */
    async handleUpdate(row) {
      this.reset()
      const userId = row.userId || this.ids[0]
      this.choose = 0
      this.title = '修改用户'
      const query = {
        pageNum: 1,
        pageSize: 10,
        userId: userId,
        userName: undefined,
        organization: undefined,
        userRole: undefined,
        createTime: undefined
      }
      this.getOrginization()

      const { data: user } = await this.$http.get(
        '/admin/system-user/getAll', { params: query }
      )
      this.form = user.users[0]
      this.open = true
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          if (this.choose != 1) {
            const { data: res } = await this.$http.post(
              '/admin/system-user/updateUser', this.form
            )
            this.open = false
            this.getList()
          } else {
            const { data: res } = await this.$http.post(
              '/admin/system-user/addUser', this.form
            )
            this.open = false
            this.getList()
          }
        }
      })
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      this.$confirm('是否确认删除？删除不可撤销，请谨慎操作"！', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async() => {
        console.info(this.single)
        if (this.single) {
          const userIds = row.userId || this.ids[0]
          const { data: res } = await this.$http.post(
            '/admin/system-user/delUser/' + userIds
          )
          if (res == 20000) {
            this.getList()
            this.$message({
              type: 'success',
              message: '删除成功'
            })
          }
        } else if (this.multiple) {
          const { data: res } = await this.$http.post(
            '/admin/system-user/delUsers', this.ids
          )
          this.getList()
          this.$message({
            type: 'success',
            message: '批量删除成功'
          })
        } else {
          const { data: res } = await this.$http.post(
            '/admin/system-user/delUser/' + row.userId
          )
          this.getList()
          this.$message({
            type: 'success',
            message: '删除成功'
          })
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消修改'
        })
      })
    }
  }
}
</script>
