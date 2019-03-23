<template>
<!-- 图片列表页 -->
  <div class="photolist">
    <!-- 顶部图片分类滑动标签页 -->
    <van-tabs @click="getimages">
      <van-tab
        v-for="item in cates"
        :title="item.title"
        :key="item.id"
        @click="getimages(item.id)"
      >
      <!-- 渲染每个图片 -->
      <router-link :to="'/home/photoinfo/'+img.id" v-for="img in imgList" :key="img.id">
        <img v-lazy="img.img_url">
      </router-link>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import {Toast} from 'vant';

export default {
  data: () => ({
    cates: [],
    imgList: []
  }),
  created() {
    // 调用图片分类的方法
    this.getimgcategory();
    this.getimages(0);
  },
  methods: {
    // 获取图片分类
    async getimgcategory() {
      const {
        data: { status, message }
      } = await this.$http.get("api/getimgcategory");
      if (status != 0) return Toast("数据获取失败，请重试~");
      message.unshift({ id: 0, title: "全部" });
      this.cates = message;
    },

    // 根据id获取指定的 分类图片
    async getimages(index) {
      const {
        data: { status, message }
      } = await this.$http.get("api/getimages/" + index);
      if (status != 0) return Toast("数据获取失败，请重试~");
      this.imgList = message;
    }
  }
};
</script>

<style lang="less">
.photolist{
  img{
    width: 100%;
  }
}
</style>