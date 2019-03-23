<template>
  <!-- 新闻列表页 -->
  <div class="newlist">
    <!-- 渲染新闻列表 -->
    <router-link :to="'newslist/newsInfo/'+item.id" v-for="item in newList" :key="item.id">
      <van-card
      price="2.00"
      :title="item.title"
      :thumb="item.img_url"
    >
      <div slot="price">
        <span>发表时间：{{ item.add_time | dateFmg}}</span>
      </div>
      <div slot="num">
        <span>点击{{ item.click }}次</span>
      </div>
    </van-card>
    </router-link>
    
  </div>
</template>

<script>
import {Toast} from 'vant';

export default {
  name:'newlist',
  data: () => ({
    newList:[]
  }),
  created(){
    this.getNewList()
  },
  methods: {
    async getNewList() {
      const { data: { status, message }} = await this.$http.get("api/getnewslist");
      if(status === 0){
        this.newList = message
      }else{
        Toast('请求新闻列表数据失败')
      }
    }
  }
};
</script>

<style lang="less">
.newlist{
  .van-card{
    height:55px;
    overflow: hidden;
    .van-card__content{
      height:50px;
      bottom: 2px
    }
  }
}
</style>