<template>
  <!-- 新闻详细信息页 -->
  <div class="newsinfo">
    <!-- 大标题 -->
    <h3 class="title">{{newinfo.title}}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newinfo.add_time }}</span>
      <span>点击：{{ newinfo.click }}次</span>
    </p>

    <hr>
    <!-- 内容区域 -->
    <div class="content">{{ newinfo.content }}</div>

    <!-- 评论区 -->
    <comment :id="id"></comment>
  </div>
</template>

<script>
import { Toast } from "vant";
import comment from "../subcomponents/Comment1";

export default {
  data: () => ({
    id: "",
    newinfo: {}
  }),
  created() {
    this.id = this.$route.params.id;
    this.getNewsInfo();
  },
  methods: {
    // 发送请求获取新闻详细信息
    async getNewsInfo() {
      const {
        data: { status, message }
      } = await this.$http.get("api/getnew/" + this.id);
      if (status !== 0) return Toast("数据获取失败，请重试~");
      this.newinfo = message;
    }
  },
  components: {
    comment
  }
};
</script>

<style lang="less" scoped>
.newsinfo {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
</style>