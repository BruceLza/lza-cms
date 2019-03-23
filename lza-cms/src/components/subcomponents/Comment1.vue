<template>

  <!-- 评论组件 -->

  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea
      placeholder="请输入要BB的内容（做多吐槽120字）"
      maxlength="120"
      v-model="content"
    ></textarea>

    <van-button
      type="danger"
      class="my-button"
      @click="postComment"
    >发表评论</van-button>

    <div class="cmt-list">
      <div
        class="cmt-item"
        v-for="(item,i) in comments"
        :key="item.add_time"
      >
        <div class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time}}
        </div>
        <div class="cmt-body">
          {{item.content === 'undefined' ? '此用户很懒，什么都没写':item.content}}
        </div>
      </div>
    </div>

    <van-button
      plain
      type="danger"
      size="large"
      @click="getMore"
    >{{ more }}</van-button>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data: () => ({
    msg: "",
    pageIndex: 1,
    comments: [],
    maxIndex: 5,
    content: ""
  }),
  // 接收父组件传递的id
  props: ["id"],
  created() {
    this.getComment();
  },
  computed: {
    // 计算按钮的属性
    more() {
      return this.pageIndex < this.maxIndex ? "加载更多" : "被掏空了~";
    }
  },
  methods: {
    // 获取相关文章评论
    async getComment() {
      const {
        data: { status, message }
      } = await this.$http.get(
        "api/getcomments/" + this.id + "?pageindex=" + this.pageIndex
      );
      if (status != 0) return Toast("数据获取失败，请重试~");
      this.comments = this.comments.concat(message);
    },
    // 获取更多评论
    getMore() {
      if (this.pageIndex >= this.maxIndex) return;
      this.pageIndex++;
      this.getComment();
    },
    // 添加评论方法
    async postComment() {
      // console.log(this.comments);
      // 验证输入的内容
      if (this.content.trim().length === 0) return Toast("请输入评论内容");
      // 发送axios请求5
      const {
        data: { status, message }
      } = await this.$http.post(`/api/postcomment/${this.id}`, {
        content: this.content.trim()
      });
      if (status === 0) {
        // this.comments.unshift(this.content);
        this.getComment();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  .my-button {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    width: 100%;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>