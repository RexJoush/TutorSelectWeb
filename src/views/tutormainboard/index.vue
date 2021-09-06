<!--
 * @Author: Rex Joush
 * @Date: 2021-08-13 15:16:36
 * @LastEditors: Rex Joush
 * @LastEditTime: 2021-08-18 21:40:48
-->
<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-divider content-position="left">
          <span class="divider-title">申请类别选择</span>
        </el-divider>
      </el-col>
    </el-row>

    <el-card class="box-card" shadow="always">
      <div slot="header" class="clearfix">
        <span style="font-size: 18px">申请博士生导师</span>
      </div>
      <el-row :gutter="20">
        <el-col :span="7" :offset="3">
          <div>
            <el-button
              class="grid-content"
              type="primary"
              @click="firstApplyDoctor(1)"
            >首次申请博士导师岗位
            </el-button>
          </div>
        </el-col>
        <el-col :span="7">
          <div>
            <el-button
              class="grid-content"
              type="primary"
              @click="addApplyDoctor"
            >博士导师增列学科岗位
            </el-button>
          </div>
        </el-col>
        <el-col :span="7">
          <div>
            <el-button class="grid-content" type="primary" @click="noInspectDoctor">博士研究生导师免审上岗</el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="box-card" shadow="always">
      <div slot="header" class="clearfix">
        <span style="font-size: 18px">申请硕士生导师（学术学位）</span>
      </div>
      <el-row :gutter="20">
        <el-col :span="7" :offset="3">
          <div>
            <el-button
              class="grid-content"
              type="primary"
              @click="firstApplyMaster"
            >首次申请学硕导师岗位
            </el-button>
          </div>
        </el-col>
        <el-col :span="7">
          <div>
            <el-button
              class="grid-content"
              type="primary"
              @click="addApplyMaster"
            >学硕导师增列学科岗位
            </el-button>
          </div>
        </el-col>
        <el-col :span="7">
          <div>
            <el-button class="grid-content" type="primary">硕士研究生导师免审上岗</el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card" shadow="always">
      <div slot="header" class="clearfix">
        <span style="font-size: 18px">申请硕士生导师（专业学位）</span>
      </div>
      <el-row :gutter="20">
        <el-col :span="7" :offset="3">
          <div>
            <el-button
              class="grid-content"
              type="primary"
              @click="firstApplyProfessional"
            >首次申请专硕导师岗位
            </el-button>
          </div>
        </el-col>
        <el-col :span="7">
          <div>
            <el-button class="grid-content" type="primary" @click="addApplyProfessional">专硕导师增列学科岗位</el-button>
          </div>
        </el-col>
        <el-col :span="7">
          <div/>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>

import { firstApply, addApply } from '@/api/tutor/mainboard'

export default {
  data() {
    return {
      // 老师基本信息
      firstPage: {
        // tutorId: '202032978', // 教师工号
        // name: '李一航', // 姓名
        // gender: '男', // 性别
        // image: 'https://www.rexjoush.com/img/1.jpg',
        // organizationName: '24', // 所在单位
        // birthday: '1997-10-01', // 出生年月
        // identity: '411422199712195117', // 证件号码
        // phone: '13598892696', // 联系电话
        // email: '7772854362@qq.com', // 电子邮箱
        // title: '教授', // 职称
        // evaluateTime: '2021-07', // 评定时间
        // finalDegree: '博士', // 最后学位
        // awardDepartment: '西北大学', // 授予单位
        // awardTime: '2021-02', // 授予时间
        // applyCondition:'',
        // applyType:''
      }
    }
  },

  methods: {
    // 首次申请博士导师岗位
    firstApplyDoctor() {
      firstApply(1).then((res) => {
        if (res.data === 101) {
          // 查询出来的状态为0 ，老师可以进去修改
          this.$router.push('firstApplyDoctor/1/101')
        } else if (res.data === 102) {
          // 没有申请过此岗位
          this.$router.push('firstApplyDoctor/1/102')
        } else {
          this.$confirm('您已提交过该申请，请前往我的申请中查看', '提示').then(
            (res) => {
              this.$router.push('/myApply') // 去我的申请页面
            }
          )
        }
      })
      // firstApply(1).then((res) => {
      //   console.log(res.data.applyCondition)
      //   switch(res.data.applyCondition){
      //     case '101' :
      //     // 查询出来的状态为0 ，老师可以进去修改
      //       this.firstPage.applyType = 1;
      //       this.firstPage.applyCondition = '101'
      //     break;
      //     case '102' :
      //       this.firstPage.applyType = 1;
      //       this.firstPage.applyCondition = '102';
      //     break;
      //     default :
      //     this.$confirm('您已提交过该申请，请前往我的申请中查看', '提示').then(
      //       () => {
      //         this.$router.push('/') // 去我的申请页面
      //       }
      //     )
      //     break;
      //   }
      //   this.firstPage = res.data.firstPage
      //   this.$router.push({path : 'firstApplyDoctor',query : { firstPage : JSON.stringify(this.firstPage) }})

      // })
    },

    // 博士增列 path: 'addApplyDoctor/:applyType/:applyCondition',
    addApplyDoctor: function() {
      addApply(2).then((res) => {
        const applyId = res.data.applyId
        if (res.data.applyCondition === 102) {
          // 没有申请过此岗位
          this.$router.push(`addApplyDoctor/2/102/${applyId}`)
        } else if (res.data.applyCondition === 101) {
          // 申请信息还没有填写完整
          this.$router.push(`addApplyDoctor/2/101/${applyId}`)
        }
      })
    },
    // 博士免审
    noInspectDoctor: function() {
      this.$router.push('noInspectApplyDoctor/3/102')
    },
    // 首次申请硕士导师岗位（学术硕士）
    firstApplyMaster: function() {
      firstApply(4).then((res) => {
        /*
          101：已经申请过此岗位，但信息未填写完成
          100：已经申请过此岗位，且信息已提交完成
          102：未申请过此岗位
         */
        if (res.data === 101) {
          // 查询出来的状态为 0 ，老师可以进去修改
          this.$router.push('firstApplyMaster/4/101')
        } else if (res.data === 102) {
          // 没有申请过此岗位
          this.$router.push('firstApplyMaster/4/102')
        } else {
          this.$confirm('您已提交过该申请，请前往我的申请中查看', '提示').then(
            (res) => {
              this.$router.push('/myApply') // 去我的申请页面
            }
          )
        }
      })
    },

    // 学硕导师增列学科岗位
    addApplyMaster: function() {
      this.$router.push('addApplyMaster/5/102')
    },

    // 学硕导师免审岗位
    applyNoInspectMaster: function() {
      this.$router.push('applyNoInspectMaster/6/102')
    },

    // 首次申请专硕导师岗位
    firstApplyProfessional: function() {
      firstApply(7).then((res) => {
        if (res.data === 101) {
          // 查询出来的状态为 0 ，老师可以进去修改
          this.$router.push('firstApplyProfessional/7/101')
        } else if (res.data === 102) {
          // 没有申请过此岗位
          this.$router.push('firstApplyProfessional/7/102')
        } else {
          this.$confirm('您已提交过该申请，请前往我的申请中查看', '提示').then(
            (res) => {
              this.$router.push('/myApply') // 去我的申请页面
            }
          )
        }
      })
    },

    // 专硕导师增列学科岗位
    addApplyProfessional: function() {
      this.$router.push('addApplyProfessional/8/102')
    }
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  margin: 20px;
}

.el-row {
  //   margin-bottom: 10px;
  //   height: 100px;
  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

/*
申请类别选择
*/
.bg-purple-dark {
  background: #99a9bf;
  font-size: 30px;
  line-height: 50px;
  height: 50px;
  margin-bottom: 30px;
}

/**button按钮 */
.grid-content {
  border-radius: 4px;
  min-height: 80px;
  height: 60px;
  // background-color: #304156;
}

/**
el-card 卡片
 */
.box-card {
  margin-bottom: 20px;
}
</style>
