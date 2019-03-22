<template>
  <div class="app">
    <!-- 头部 -->
    <van-nav-bar
      class="my-nav-bar"
      title="Vue项目-lza"
    />


    <router-view></router-view>

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
  
<style lang="less" scoped>
body,
html {
  color: #fff;
}
.app {
  .my-nav-bar {
    background-color: #26a2ff;
    width: 100%;
  }
  .van-nav-bar__title {
    color: #fff;
  }
  .my-swipe{
    overflow: hidden;
    .item{
      &:nth-of-type(1){
        background-color: skyblue;
      }
      &:nth-of-type(2){
        background-color: pink;
      }
      &:nth-of-type(3){
        background-color: orange;
      }
      &:nth-of-type(4){
        background-color: cyan;
      }
    }
  }
}
</style>
