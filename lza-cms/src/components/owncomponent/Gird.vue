<template>
  <div class="demo-icon">
    <div class="van-col van-col--6" v-for="item in girds" :key="item.id">
      <i class="van-icon">
        <img :src="item.src">
      </i>
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    girds: [
      { id: 1, src: "/static/gird/menu1.png", text: "新闻资讯" },
      { id: 2, src: "/static/gird/menu2.png", text: "图片分享" },
      { id: 3, src: "/static/gird/menu3.png", text: "商品购买" },
      { id: 4, src: "/static/gird/menu4.png", text: "留言反馈" },
      { id: 5, src: "/static/gird/menu5.png", text: "视频专区" },
      { id: 6, src: "/static/gird/menu6.png", text: "联系我们" }
    ]
  })
};
</script>

<style  scoped>
</style>