<template>

  <!-- 首页组件容器 -->

  <div class="app">
    <!-- 头部 -->
    <van-nav-bar
      left-text="返回"
      left-arrow
      class="my-nav-bar"
      title="Vue项目-lza"
      :z-index=999
    />

    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部 -->
    <van-tabbar v-model="active">
      <van-tabbar-item
        icon="home-o"
        to="/home"
      >首页</van-tabbar-item>
      <van-tabbar-item
        icon="setting-o"
        to="/rember"
      >会员</van-tabbar-item>
      <van-tabbar-item
        icon="friends-o"
        info="0"
        to="/shopcar"
      >购物车</van-tabbar-item>
      <van-tabbar-item
        icon="search"
        to="/search"
      >搜索</van-tabbar-item>

    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
  
<style lang="less">

.app {
  overflow-x: hidden;
  padding-bottom: 50px;
  padding-top: 46px;
  .my-nav-bar {
    background-color: #26a2ff;
    position: fixed;
    top: 0;
    width: 100%;
    .van-nav-bar__text,
    .van-icon {
      color: #fff;
    }
  }
  .van-nav-bar__title {
    color: #fff;
  }

  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
    left: -200%;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.3s ease;
  }
}
</style>
