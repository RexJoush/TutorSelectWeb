<template>
  <div>
    <!-- 第 1 页基本信息 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2>基本信息</h2>
      </div>
      <el-form
        ref="formFirst"
        v-loading="loadingFirst"
        :model="formFirst"
        label-width="100px"
        label-position="right"
        element-loading-text="获取中..."
      >
        <Row type="flex" justify="center" align="top" class="code-row-bg">
          <Col :span="16">
            <Row>
              <Col :span="12">
                <el-form-item label="姓名">
                  <el-input v-model="formFirst.name" disabled />
                </el-form-item>
              </Col>
              <Col :span="12">
                <el-form-item label="性别">
                  <span style="color: #606266;">{{ formFirst.gender }}</span>
                </el-form-item>
              </Col>
              <Col :span="12">
                <el-form-item label="所在单位">
                  <el-input v-model="formFirst.organizationName" disabled />
                </el-form-item>
              </Col>
              <Col :span="12">
                <el-form-item label="出生年月">
                  <el-input v-model="formFirst.birthday" disabled />
                </el-form-item>
              </Col>
              <Col :span="12">
                <el-form-item label="工号">
                  <el-input v-model="formFirst.tutorId" :disabled="true" />
                </el-form-item>
              </Col>
              <Col :span="12">
                <el-form-item label="证件号码">
                  <el-input v-model="formFirst.identity" disabled />
                </el-form-item>
              </Col>
              <Col :span="12">
                <el-form-item label="联系电话">
                  <el-input v-model="formFirst.phone" />
                </el-form-item>
              </Col>
              <Col :span="12">
                <el-form-item label="电子邮箱">
                  <el-input v-model="formFirst.email" />
                </el-form-item>
              </Col>
              <Col :span="12">
                <el-form-item label="职称">
                  <el-input v-model="formFirst.title" disabled />
                </el-form-item>
              </Col>
              <Col :span="12">
                <el-form-item label="评定时间">
                  <el-date-picker
                    v-model="formFirst.evaluateTime"
                    type="month"
                    style="width: 100%"
                    placeholder="选择日期"
                    format="yyyy-MM"
                    value-format="yyyy-MM"
                  />
                </el-form-item>
              </Col>
            </Row>
          </Col>
          <Col span="8">
            <el-form-item>
              <el-image
                style="width: 150px; height: 210px"
                :src="formFirst.image"
                fit="fit"
              >
                <div slot="placeholder" class="image-slot"><i class="el-icon-picture-outline" /></div>
              </el-image>
            </el-form-item>
          </Col>
          <Col :span="8">
            <el-form-item label="最后学位">
              <el-input v-model="formFirst.finalDegree" disabled />
            </el-form-item>
          </Col>
          <Col :span="8">
            <el-form-item label="授予单位">
              <el-input v-model="formFirst.awardDepartment" />
            </el-form-item>
          </Col>
          <Col :span="8">
            <el-form-item label="授予时间">
              <el-date-picker
                v-model="formFirst.awardTime"
                type="month"
                style="width: 100%"
                placeholder="选择日期"
                format="yyyy-MM"
                value-format="yyyy-MM"
              />
            </el-form-item>
          </Col>
        </Row>
        <Row>
          <Col :offset="7">
            <el-form-item style="margin-top: 20px">
              <el-button type="primary" @click="onSubmitFirstPage">保存此部分，填写下一项</el-button>
            </el-form-item>
          </Col>
        </Row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { getFirstPage, submitFirstPage } from '@/api/tutor/inspect'

export default {
  props: {
    applyId: Number,
    applyType: Number,
    applyCondition: Number
  },

  data() {
    return {
      loadingFirst: false, // 加载状态
      formFirst: {
        tutorId: '', // 教师工号
        name: '', // 姓名
        gender: '', // 性别
        image: '',
        organizationName: '', // 所在单位
        birthday: '', // 出生年月
        identity: '', // 证件号码
        phone: '', // 联系电话
        email: '', // 电子邮箱
        title: '', // 职称
        evaluateTime: '', // 评定时间
        finalDegree: '', // 最后学位
        awardDepartment: '', // 授予单位
        awardTime: '' // 授予时间
      }
    }
  },

  created() {
    // 拉取首页基本信息
    this.loadingFirst = true
    this.getFirstPage()
  },
  methods: {
    // 拉取基本信息
    getFirstPage: function() {
      getFirstPage(this.applyId).then((res) => {
        if (res.data.code === 1201) {
          this.$message.error(res.data.message)
          this.$router.push('/tutorApply/tutorMainBoard')
          return
        }
        this.formFirst = res.data

        // 未申请过
        if (this.applyCondition === 102) {
          this.formFirst.image = 'data:image/png;base64,' + this.formFirst.blobImage
        }
        this.loadingFirst = false
      })
    },

    // 完成第 1 页基本信息的填写
    onSubmitFirstPage: function() {
      this.$confirm('提交填写?')
        // 提交保存第 1 页
        .then(() => {
          this.$emit('load', true)
          submitFirstPage(this.formFirst, this.applyId, this.applyType, this.applyCondition)
            .then(res => {
              if (res.data.code === 1201) {
                this.$message.error(res.data.message)
                console.log(res.data.errorMessage)
                return
              }
              this.loading = false
              this.$emit('func', res.data, this.formFirst.name)
            })
        })
        .catch(() => {
          console.log('cancel')
        })
    }
  }
}
</script>

<style scoped>

</style>
