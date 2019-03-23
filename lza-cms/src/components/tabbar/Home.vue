<template>
  <div class="home">
    <van-swipe
      :autoplay="3000"
      indicator-color="white"
      class="my-swiper"
    >
      <van-swipe-item
        class="item"
        v-for="item in lunbotulist"
        :key="item.img"
      >
        <img :src="item.img">
      </van-swipe-item>
    </van-swipe>

    <!-- 9宫格组件 -->
    <Gird></Gird>
  </div>
</template>

<script>
import Gird from "../owncomponent/Gird.vue";
import { Toast } from "vant";
export default {
  data: () => ({
    lunbotulist: []
  }),
  created() {
    this.getlunbo();
  },
  methods: {
    async getlunbo() {
      const {data: { message, status }} = await this.$http.get("api/getlunbo");
      if (status === 0) {
        this.lunbotulist = message;
      } else {
        Toast("图片加载失败");
      }
    }
  },
  components: {
    Gird
  }
};
</script>

<style lang="less">
.home {
  .my-swiper {
    height: 200px;
    .item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .demo-icon {
    font-size: 0;
    padding-top: 10px;
    .demo-icon-list {
      padding-top: 10px;
      box-sizing: border-box;
      min-height: calc(100vh - 65px);
    }
    .van-col {
      float: none;
      text-align: center;
      width: 33.33333%;
      display: inline-block;
      vertical-align: middle;
      img {
        width: 60px;
        height: 60px;
      }
      span {
        display: block;
        padding: 0 5px;
        font-size: 12px;
        line-height: 14px;
      }
    }
    .van-icon {
      font-size: 32px;
      margin: 15px 0;
      color: #455a64;
    }
  }
}
</style>