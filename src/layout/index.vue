<template>
  <div :class="classObj" class="app-wrapper">
    <el-container>
      <el-header>
        <el-row style="width: 100%">
          <el-col :span="18">
            <span style="font-size: 1.3em; margin-left: 1.5em;">导师遴选系统</span>
          </el-col>
          <el-col :span="4">欢迎您 超级管理员</el-col>
          <el-col :span="2">
            <el-button type="primary" round @click="logout">退出</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main style="overflow: hidden">
        <sidebar class="sidebar-container" />
        <div class="main-container">
          <div :class="{ 'fixed-header': fixedHeader }">
            <navbar />
          </div>
          <app-main />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from "./components";
import ResizeMixin from "./mixin/ResizeHandler";

export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain,
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile",
      };
    },
  },
  methods: {
    // 退出登录
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

// 头部样式
.el-header {
  height: 60px !important;
  position: fixed;
  top: 0px;
  width: 100%;
  background-color: #1f2d3d;
  display: flex;
  justify-content: space-between; // 左右贴边
  padding-left: 0%; // 左边界
  color: #ddd;
  font-size: 20px;
  align-items: center;
  z-index: 10;
  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
  .header-logo {
    width: 250px;
    height: 50px;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
