<template>
  <!-- 图片详细信息页 -->
  <div class="photoinfo">
    <!-- 图片描述区域 -->
    <h3>{{photoInfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{photoInfo.add_time}}</span>
      <span>点击：{{photoInfo.click}}次</span>
    </p>
    <hr>

    <!-- 缩略图预览区域 -->
    <div class="thumbs">
      <img
        v-for="(item,index) in list"
        :key="item.id"
        :src="item.src"
        alt
        @click="handleImage(index)"
      >
    </div>
    <!-- 评论组件 -->
    <comment :id="id"></comment>
  </div>
</template>

<script>
import { ImagePreview } from "vant";
import comment from "../subcomponents/Comment";
import { Toast } from "vant";
export default {
  data: () => ({
    id: "",
    // photoInfo数组用于保存图片详细信息
    photoInfo: [],
    // 用于保存请求到的略缩图
    list: []
  }),
  created() {
    // 获取传递过来的id值
    this.id = this.$route.params.id;
    // 调用获取图片详细信息的方法
    this.getPhotoInfo();
    // 调用获取略缩图的方法
    this.getThumbs();
  },
  methods: {
    // 获取图片详细信息
    async getPhotoInfo() {
      const {
        data: { status, message }
      } = await this.$http.get(`api/getimageInfo/${this.id}`);
      if (status != 0) return Toast("数据获取失败，请重试~");
      // 保存图片的详细信息
      this.photoInfo = message;
    },

    // 获取略缩图
    async getThumbs() {
      const {
        data: { status, message }
      } = await this.$http.get(`api/getthumimages/${this.id}`);
      if (status != 0) return Toast("数据获取失败，请重试~");
      this.list = message;
    },

    // 图片预览
    handleImage(index) {
      // index---传递过来的图片索引值
      // 过滤出一个数组
      let images = [];
      this.list.forEach(item => {
        if (item.url !== null) {
          // 将图片的src属性存入images数组
          images.push(item.src);
        }
      });
      // 图片预览初始化
      ImagePreview({
        images, // 存放图片的数组
        startPosition: index //图片预览起始位置索引
      });
    }
  },
  // 注册的评论组件
  components: {
    comment
  }
};
</script>

<style lang="less">
.photoinfo {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
  }

  .thumbs {
    display: flex;
    justify-content: space-around;
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>