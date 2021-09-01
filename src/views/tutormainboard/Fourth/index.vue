<template>
  <div> </div>
</template>

<script>

export default {
  name: 'Index',
  props: {
    applyId: Number,
    applyCondition: Number,
    formVisible: Object,
    tutorName: String,
    formFourth: Object,
    active: Number
  },
  data() {
    return {
      dialogFourth1: false, // 社科学术论文添加按钮
      dialogFourth2: false, // 理工学术论文添加按钮
      dialogFourth3: false, // 科研项目添加按钮

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
  }
}
</script>

<style scoped>

</style>
