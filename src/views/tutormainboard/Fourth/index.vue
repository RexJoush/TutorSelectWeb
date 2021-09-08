<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2>教学信息</h2>
      </div>
      <el-form
        ref="formFourth"
        :model="formFourth"
        label-width="150px"
        label-position="top"
      >
        <!-- 研究生课程教学情况 -->
        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix">
            <span style="font-size: 18px">研究生课程教学情况</span>
          </div>
          <el-row>
            <el-col :span="4">
              <el-button class="addButton" type="primary" @click="dialogFourth1 = true">添加研究生课程教学信息
              </el-button>
            </el-col>
          </el-row>
          <el-table :data="formFourth.courseTeachings" border style="width: 100%">
            <el-table-column type="index" label="序号" width="50px" />
            <el-table-column prop="courseName" label="课程名称" />
            <el-table-column prop="courseTime" label="课程时间" width="120" />
            <el-table-column prop="courseDuration" label="授课总课时" width="120" />
            <el-table-column prop="courseObject" label="授课对象" width="180" />
            <el-table-column label="操作" align="center" width="90">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" plain @click="deleteFunc(scope.$index, scope.row, 1)">删 除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
        <br>

        <!-- 指导博士生情况, 博导增岗 -->
        <div v-if="applyType === 2">
          <el-card class="box-card" shadow="always">
            <div slot="header" class="clearfix">
              <span style="font-size: 18px">指导博士生情况</span>
            </div>
            <el-row>
              <el-col :span="4">
                <el-button class="addButton" type="primary" @click="dialogFourth2 = true">添加学生</el-button>
              </el-col>
            </el-row>
            <el-table :data="formFourth.doctorStudents" border style="width: 100%">
              <el-table-column type="index" label="序号" width="50px" />
              <el-table-column prop="studentName" label="学生姓名" width="120" />
              <el-table-column prop="degreePaperTitle" label="硕士学位论文题目" />
              <el-table-column prop="studentEntryTime" label="学生入学时间" width="120" />
              <el-table-column prop="isGainDegree" label="是否获得学位" width="120" />
              <el-table-column label="操作" align="center" width="90">
                <template slot-scope="scope">
                  <el-button size="mini" type="danger" plain @click="deleteFunc(scope.$index, scope.row, 2)">删 除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
          <br>
        </div>

        <!-- 协助指导博士生情况, 首次博导 -->
        <div v-if="applyType === 1">
          <el-card class="box-card" shadow="always">
            <div slot="header" class="clearfix">
              <span style="font-size: 18px">协助指导博士生情况</span>
            </div>
            <el-row>
              <el-col :span="4">
                <el-button class="addButton" type="primary" @click="dialogFourth3 = true">添加学生</el-button>
              </el-col>
            </el-row>
            <el-table :data="formFourth.assistDoctorStudents" border style="width: 100%">
              <el-table-column type="index" label="序号" width="50px" />
              <el-table-column prop="studentName" label="学生姓名" width="120" />
              <el-table-column prop="degreePaperTitle" label="硕士学位论文题目" />
              <el-table-column prop="studentEntryTime" label="学生入学时间" width="120" />
              <el-table-column prop="isGainDegree" label="是否获得学位" width="120" />
              <el-table-column label="操作" align="center" width="90">
                <template slot-scope="scope">
                  <el-button size="mini" type="danger" plain @click="deleteFunc(scope.$index, scope.row, 3)">删 除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
          <br>
        </div>

        <!-- 指导硕士生情况, 首次博导 博导增岗 学硕增岗 专硕增岗 -->
        <div v-if="applyType === 1 || applyType === 2 || applyType === 5 || applyType === 8">
          <el-card class="box-card" shadow="always">
            <div slot="header" class="clearfix">
              <span style="font-size: 18px">指导硕士生情况</span>
            </div>
            <el-row>
              <el-col :span="4">
                <el-button class="addButton" type="primary" @click="dialogFourth4 = true">添加学生</el-button>
              </el-col>
            </el-row>
            <el-table :data="formFourth.masterStudents" border style="width: 100%">
              <el-table-column type="index" label="序号" width="50px" />
              <el-table-column prop="studentName" label="学生姓名" width="120" />
              <el-table-column prop="degreePaperTitle" label="硕士学位论文题目" />
              <el-table-column prop="studentEntryTime" label="学生入学时间" width="120" />
              <el-table-column prop="isGainDegree" label="是否获得学位" width="120" />
              <el-table-column label="操作" align="center" width="90">
                <template slot-scope="scope">
                  <el-button size="mini" type="danger" plain @click="deleteFunc(scope.$index, scope.row, 4)">删 除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
          <br>
        </div>

        <!-- 协助指导硕士生情况, 首次学硕 首次专硕 -->
        <div v-if="applyType === 4 || applyType === 7">
          <el-card class="box-card" shadow="always">
            <div slot="header" class="clearfix">
              <span style="font-size: 18px">协助指导硕士生情况</span>
            </div>
            <el-row>
              <el-col :span="4">
                <el-button class="addButton" type="primary" @click="dialogFourth5 = true">添加学生</el-button>
              </el-col>
            </el-row>
            <el-table :data="formFourth.assistMasterStudents" border style="width: 100%">
              <el-table-column type="index" label="序号" width="50px" />
              <el-table-column prop="studentName" label="学生姓名" width="120" />
              <el-table-column prop="degreePaperTitle" label="硕士学位论文题目" />
              <el-table-column prop="studentEntryTime" label="学生入学时间" width="120" />
              <el-table-column prop="isGainDegree" label="是否获得学位" width="120" />
              <el-table-column label="操作" align="center" width="90">
                <template slot-scope="scope">
                  <el-button size="mini" type="danger" plain @click="deleteFunc(scope.$index, scope.row, 5)">删 除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
          <br>
        </div>

        <!-- 指导本科生毕业情况, 首次学硕 首次专硕 -->
        <div v-if="applyType === 4 || applyType === 7">
          <el-card class="box-card" shadow="always">
            <div slot="header" class="clearfix">
              <span style="font-size: 18px">指导本科生毕业情况</span>
            </div>
            <el-row>
              <el-col :span="4">
                <el-button type="primary" class="addButton" @click="dialogFourth6 = true">添加学生</el-button>
              </el-col>
            </el-row>
            <el-table :data="formFourth.undergraduateStudents" border style="width: 100%">
              <el-table-column type="index" label="序号" width="50px" />
              <el-table-column prop="studentName" label="学生姓名" width="120" />
              <el-table-column prop="degreePaperTitle" label="学位论文题目" />
              <el-table-column prop="graduateTime" label="毕业时间" width="120" />
              <el-table-column label="操作" align="center" width="90">
                <template slot-scope="scope">
                  <el-button size="mini" type="danger" plain @click="deleteFunc(scope.$index, scope.row, 6)">删 除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
          <br>
        </div>

        <el-row>
          <el-col :offset="9">
            <el-form-item style="margin-top: 20px">
              <el-button type="primary" @click="onSubmitFourthPage">提交本次申请</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <!-- 第四页 弹框部分 -->

    <!-- 添加研究生课程教学情况 -->
    <el-dialog title="添加研究生课程教学情况" width="40%" :visible.sync="dialogFourth1">
      <el-form :model="courseTeaching">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="课程名称">
              <el-input v-model="courseTeaching.courseName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="授课对象">
              <el-input v-model="courseTeaching.courseObject" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="课程时间">
              <el-date-picker
                v-model="courseTeaching.courseTime"
                style="width: 100%"
                type="month"
                format="yyyy-MM"
                value-format="yyyy-MM"
                placeholder="选择日期"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="授课总课时">
              <el-input v-model="courseTeaching.courseDuration" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFourth1 = false">取 消</el-button>
        <el-button type="primary" @click="addCourseTeaching">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 添加指导博士生 -->
    <el-dialog title="添加指导博士生" width="40%" :visible.sync="dialogFourth2">
      <el-form :model="guidingStudent">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="学生姓名">
              <el-input v-model="guidingStudent.studentName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="博士学位论文题目">
              <el-input v-model="guidingStudent.degreePaperTitle" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="学生入学时间">
              <el-date-picker
                v-model="guidingStudent.studentEntryTime"
                style="width: 100%"
                type="month"
                format="yyyy-MM"
                value-format="yyyy-MM"
                placeholder="选择日期"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="学生是否获得学位">
              <el-select v-model="guidingStudent.isGainDegree" style="width: 100%" placeholder="请选择">
                <el-option label="是" value="是" />
                <el-option label="否" value="否" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFourth2 = false">取 消</el-button>
        <el-button type="primary" @click="addDoctorStudents">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 添加指导协助博士生 -->
    <el-dialog title="添加指导协助博士生" width="40%" :visible.sync="dialogFourth3">
      <el-form :model="guidingStudent">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="学生姓名">
              <el-input v-model="guidingStudent.studentName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="博士学位论文题目">
              <el-input v-model="guidingStudent.degreePaperTitle" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="学生入学时间">
              <el-date-picker
                v-model="guidingStudent.studentEntryTime"
                style="width: 100%"
                type="month"
                format="yyyy-MM"
                value-format="yyyy-MM"
                placeholder="选择日期"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="学生是否获得学位">
              <el-select v-model="guidingStudent.isGainDegree" style="width: 100%" placeholder="请选择">
                <el-option label="是" value="是" />
                <el-option label="否" value="否" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFourth3 = false">取 消</el-button>
        <el-button type="primary" @click="addAssistDoctorStudents">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 添加指导硕士生 -->
    <el-dialog title="添加指导硕士生" width="40%" :visible.sync="dialogFourth4">
      <el-form :model="guidingStudent">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="学生姓名">
              <el-input v-model="guidingStudent.studentName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="硕士学位论文题目">
              <el-input v-model="guidingStudent.degreePaperTitle" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="学生入学时间">
              <el-date-picker
                v-model="guidingStudent.studentEntryTime"
                style="width: 100%"
                type="month"
                format="yyyy-MM"
                value-format="yyyy-MM"
                placeholder="选择日期"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="学生是否获得学位">
              <el-select v-model="guidingStudent.isGainDegree" style="width: 100%" placeholder="请选择">
                <el-option label="是" value="是" />
                <el-option label="否" value="否" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFourth4 = false">取 消</el-button>
        <el-button type="primary" @click="addMasterStudents">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 添加协助指导硕士生 -->
    <el-dialog title="添加协助指导硕士生" width="40%" :visible.sync="dialogFourth5">
      <el-form :model="guidingStudent">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="学生姓名">
              <el-input v-model="guidingStudent.studentName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="硕士学位论文题目">
              <el-input v-model="guidingStudent.degreePaperTitle" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="学生入学时间">
              <el-date-picker
                v-model="guidingStudent.studentEntryTime"
                style="width: 100%"
                type="month"
                format="yyyy-MM"
                value-format="yyyy-MM"
                placeholder="选择日期"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="学生是否获得学位">
              <el-select v-model="guidingStudent.isGainDegree" style="width: 100%" placeholder="请选择">
                <el-option label="是" value="是" />
                <el-option label="否" value="否" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFourth5 = false">取 消</el-button>
        <el-button type="primary" @click="addAssistMasterStudents">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 添加本科生 -->
    <el-dialog title="添加指导本科生" width="40%" :visible.sync="dialogFourth6">
      <el-form :model="guidingStudent">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="学生姓名">
              <el-input v-model="guidingStudent.studentName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="学位论文题目">
              <el-input v-model="guidingStudent.degreePaperTitle" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="学生毕业时间">
              <el-date-picker
                v-model="guidingStudent.graduateTime"
                style="width: 100%"
                type="month"
                format="yyyy-MM"
                value-format="yyyy-MM"
                placeholder="选择日期"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFourth6 = false">取 消</el-button>
        <el-button type="primary" @click="addUndergraduateStudent">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>

import { submitFourthPage } from '@/api/tutor/applyMaster/firstApplyMaster'
import { submitFourthPage1 } from '@/api/tutor/ApplyDoctor/FirstApplyDoctor'
import { submitFourthPage2 } from '@/api/tutor/ApplyDoctor/addApplyDoctor'
export default {
  name: 'Index',
  props: {
    applyId: Number,
    tutorName: String,
    formFourth: Object
  },
  data() {
    return {
      // 申请类型
      applyCondition: this.$route.params.applyCondition,
      applyType: this.$route.params.applyType * 1,

      dialogFourth1: false, // 添加研究生课程教学情况
      dialogFourth2: false, // 添加指导博士生
      dialogFourth3: false, // 添加指导协助博士生
      dialogFourth4: false, // 添加指导硕士生
      dialogFourth5: false, // 添加协助指导硕士生
      dialogFourth6: false, // 添加本科生

      // 学生信息
      guidingStudent: {
        studentName: '', // 学生姓名
        studentType: '', // 学生类型，用于区分是本科生，硕士生和博士生
        studentEntryTime: '', // 学生入学时间
        degreePaperTitle: '', // 学位论文题目
        isGainDegree: '', // 是否获得学位
        directType: '', // 指导类型，协助指导，指导
        tutorName: '', // 导师姓名
        graduateTime: '' // 毕业时间
      },

      // 研究生课程教学情况
      courseTeaching: {
        courseName: '', // 课程名称
        courseTime: '', // 课程时间
        courseDuration: '', // 授课总课时
        courseObject: '' // 授课对象
      }
    }
  },

  created() {
    console.log('formFourth init', this.formFourth)
    const students = this.formFourth.guidingStudents
    switch (this.applyType) {
      case 1: // 首次博导, 协助指导博士生 指导硕士生
        this.formFourth.assistDoctorStudents = students.filter(item => item.studentType === '博士')
        this.formFourth.masterStudents = students.filter(item => item.studentType === '硕士')
        break
      case 2: // 博导增岗, 指导博士生 指导硕士生
        this.formFourth.doctorStudents = students.filter(item => item.studentType === '博士')
        this.formFourth.masterStudents = students.filter(item => item.studentType === '硕士')
        break
      case 3: // 博导免审
        break
      case 4: // 首次学硕, 协助指导硕士生 指导本科生
        this.formFourth.assistMasterStudents = students.filter(item => item.studentType === '硕士')
        this.formFourth.undergraduateStudents = students.filter(item => item.studentType === '本科')
        break
      case 5: // 学硕增岗, 指导硕士生
        this.formFourth.masterStudents = students
        break
      case 6: // 学硕免审
        break
      case 7: // 首次专硕, 协助指导硕士生 指导本科生
        this.formFourth.assistMasterStudents = students.filter(item => item.studentType === '硕士')
        this.formFourth.undergraduateStudents = students.filter(item => item.studentType === '本科')
        break
      case 8: // 专硕增岗, 指导硕士生
        this.formFourth.masterStudents = students
        break
    }
  },

  methods: {

    // 完成第 4 页教学信息的填写
    onSubmitFourthPage: function() {
      this.$confirm('提交填写?')
        // 提交保存第 4 页
        .then(() => {
          switch(this.applyType){
            case 1 :
            submitFourthPage1(this.formFourth,this.applyId).then( res => {
            if (res.data != null){
                if (res.data.code === 1201) {
                  this.$message.error(res.data.message)
                  console.log(res.data.errorMessage)
                  return
                }
              }
            this.$message.success('提交成功')
            this.$router.push('/tutorApply/tutorMainBoard')
            })
            break
            case 2 : //博士导师增岗
            submitFourthPage2(this.formFourth,this.applyId).then( res => {
            if (res.data != null){
                if (res.data.code === 1201) {
                  this.$message.error(res.data.message)
                  console.log(res.data.errorMessage)
                  return
                }
              }
            this.$message.success('提交成功')
            this.$router.push('/tutorApply/tutorMainBoard')
            })
            break
            case 4 :
            submitFourthPage(this.formFourth, this.applyId).then(res => {
            if (res.data != null){
                if (res.data.code === 1201) {
                  this.$message.error(res.data.message)
                  console.log(res.data.errorMessage)
                  return
                }
              }
            // this.$emit('closeFourth') // 等价于 this.formVisible.fourth = false
            this.$message.success('提交成功')
            this.$router.push('/tutorApply/tutorMainBoard')
          })
            break
          }
        })
        .catch(() => {
          console.log('cancel')
        })
    },

    // 添加研究生教学情况
    addCourseTeaching: function() {
      console.log(this.courseTeaching)
      this.formFourth.courseTeachings.push(this.courseTeaching)
      this.dialogFourth1 = false
      this.courseTeaching = {
        courseName: '', // 课程名称
        courseTime: '', // 课程时间
        courseDuration: '', // 授课总课时
        courseObject: '' // 授课对象
      }
    },

    // 添加指导博士学生
    addDoctorStudents: function() {
      console.log(this.guidingStudent)
      this.guidingStudent.studentType = '博士'
      this.guidingStudent.directType = '指导'
      this.guidingStudent.tutorName = this.tutorName
      this.formFourth.doctorStudents.push(this.guidingStudent)
      this.dialogFourth2 = false
      this.initStudent()
    },

    // 添加协助指导博士学生
    addAssistDoctorStudents: function() {
      console.log(this.guidingStudent)
      this.guidingStudent.studentType = '博士'
      this.guidingStudent.directType = '协助指导'
      this.guidingStudent.tutorName = this.tutorName
      this.formFourth.assistDoctorStudents.push(this.guidingStudent)
      this.dialogFourth3 = false
      this.initStudent()
    },

    // 添加指导硕士学生
    addMasterStudents: function() {
      console.log(this.guidingStudent)
      this.guidingStudent.studentType = '硕士'
      this.guidingStudent.directType = '指导'
      this.guidingStudent.tutorName = this.tutorName
      this.formFourth.masterStudents.push(this.guidingStudent)
      this.dialogFourth4 = false
      this.initStudent()
    },

    // 添加协助指导硕士学生
    addAssistMasterStudents: function() {
      console.log(this.guidingStudent)
      this.guidingStudent.studentType = '硕士'
      this.guidingStudent.directType = '协助指导'
      this.guidingStudent.tutorName = this.tutorName
      this.formFourth.assistMasterStudents.push(this.guidingStudent)
      this.dialogFourth5 = false
      this.initStudent()
    },

    // 添加指导本科生
    addUndergraduateStudent: function() {
      console.log(this.guidingStudent)
      this.guidingStudent.studentType = '本科'
      this.guidingStudent.isGainDegree = '是'
      this.guidingStudent.tutorName = this.tutorName
      this.guidingStudent.directType = '指导'
      this.formFourth.undergraduateStudents.push(this.guidingStudent)
      this.dialogFourth6 = false
      this.initStudent()
    },

    // 初始化共用对象
    initStudent: function() {
      this.guidingStudent = {
        studentName: '',
        studentType: '',
        studentEntryTime: '',
        degreePaperTitle: '',
        isGainDegree: '',
        directType: '',
        tutorName: '',
        graduateTime: ''
      }
    },

    /**
     * 各项内容的删除函数
     * @param index 删除的索引
     * @param scope
     * @param type 删除的类型
     *        1, 研究生课程列表
     *        2, 指导博士生情况：博导增岗
     *        3, 协助指导博士生情况：首次博导
     *        4, 指导硕士生情况：首次博导，博导增岗，学硕增岗，专硕增岗
     *        5, 协助指导硕士生情况：首次学硕，首次专硕
     *        6, 指导本科生情况：首次学硕，首次专硕
     * */
    deleteFunc: function(index, scope, type) {
      console.log(index, scope, type)
      const deleteItem = {
        deleteId: '', // 删除的项 id
        deletePath: '', // 删除的路径
        deleteType: '' // 删除的项类型，论文，项目等
      }
      switch (type) {
        case 1:
          this.formFourth.courseTeachings.splice(index, 1)
          deleteItem.deleteId = scope.courseId
          deleteItem.deleteType = 1
          break
        case 2:
          this.formFourth.doctorStudents.splice(index, 1)
          deleteItem.deleteId = scope.studentId
          deleteItem.deleteType = 2
          break
        case 3:
          this.formFourth.assistDoctorStudents.splice(index, 1)
          deleteItem.deleteId = scope.studentId
          deleteItem.deleteType = 3
          break
        case 4:
          this.formFourth.masterStudents.splice(index, 1)
          deleteItem.deleteId = scope.studentId
          deleteItem.deleteType = 4
          break
        case 5:
          this.formFourth.assistMasterStudents.splice(index, 1)
          deleteItem.deleteId = scope.studentId
          deleteItem.deleteType = 5
          break
        case 6:
          this.formFourth.undergraduateStudents.splice(index, 1)
          deleteItem.deleteId = scope.studentId
          deleteItem.deleteType = 6
          break
      }
      if (deleteItem.deleteId !== undefined) {
        this.formFourth.deleteItems.push(deleteItem)
      }
      console.log(this.formFourth.deleteItems)
    }
  }
}
</script>

<style scoped>

</style>
