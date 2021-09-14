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
            <el-button class="grid-content" type="primary" @click="checkApply(1)">首次申请博士导师岗位</el-button>
          </div>
        </el-col>
        <el-col :span="7">
          <div>
            <el-button class="grid-content" type="primary" @click="checkApply(2)">博士导师增列学科岗位</el-button>
          </div>
        </el-col>
        <el-col :span="7">
          <div>
            <el-button class="grid-content" type="primary" @click="checkApply(3)">博士研究生导师免审上岗</el-button>
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
            <el-button class="grid-content" type="primary" @click="checkApply(4)">首次申请学硕导师岗位</el-button>
          </div>
        </el-col>
        <el-col :span="7">
          <div>
            <el-button class="grid-content" type="primary" @click="checkApply(5)">学硕导师增列学科岗位</el-button>
          </div>
        </el-col>
        <el-col :span="7">
          <div>
            <el-button class="grid-content" type="primary" @click="checkApply(6)">硕士研究生导师免审上岗</el-button>
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
            <el-button class="grid-content" type="primary" @click="checkApply(7)">首次申请专硕导师岗位</el-button>
          </div>
        </el-col>
        <el-col :span="7">
          <div>
            <el-button class="grid-content" type="primary" @click="checkApply(8)">专硕导师增列学科岗位</el-button>
          </div>
        </el-col>
        <el-col :span="7">
          <div />
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>

import { checkApply } from '@/api/tutor/mainboard'

export default {
  data() {
    return {}
  },

  methods: {
    /*
      101：已经申请过此岗位，但信息未填写完成
      100：已经申请过此岗位，且信息已提交完成
      102：未申请过此岗位
    */

    // 检测申请状态函数
    checkApply: function(type) {
      checkApply(type).then((res) => {
        console.log(res.data)
        let url = ''
        switch (type) {
          case 1: url += `firstApplyDoctor/1`; break
          case 2: url += `addApplyDoctor/2`; break
          case 3: url += `noInspectApplyDoctor/3`; break
          case 4: url += `firstApplyMaster/4`; break
          case 5: url += `addApplyMaster/5`; break
          case 6: url += `noInspectApplyMaster/6`; break
          case 7: url += `firstApplyProfessional/7`; break
          case 8: url += `addApplyProfessional/8`; break
        }

        // 查询出来的状态为 0 ，老师可以进去修改
        if (res.data.applyCondition === 101) {
          url += `/101/${res.data.applyId}`
          this.$router.push(url)
        } else if (res.data.applyCondition === 102) {
          // 没有申请过此岗位
          url += `/102/${res.data.applyId}`
          this.$router.push(url)
        } else {
          // 已交过该申请
          if (type === 1 || type === 4 || type === 7) {
            this.$confirm('您已提交过该申请，请前往我的申请中查看', '提示').then(
              (res) => {
                this.$router.push('/myApply') // 去我的申请页面
              }
            )
          } else {
            url += `/102/${res.data.applyId}`
            this.$router.push(url)
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  margin: 20px;
}

.el-row {
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

/* button按钮 */
.grid-content {
  border-radius: 4px;
  min-height: 80px;
  height: 60px;
  // background-color: #304156;
}

/*
  el-card 卡片
*/
.box-card {
  margin-bottom: 20px;
}
</style>
