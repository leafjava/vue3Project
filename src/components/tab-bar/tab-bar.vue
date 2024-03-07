<template>
  <div class="tab-bar">
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/home.svg">
      <span class="text">首页</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/category.svg">
      <span class="text">收藏</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/shopcart.svg">
      <span class="text">订单</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/profile.svg">
      <span class="text">消息</span>
    </div>
  </div>
</template>
<script setup>
const tabbarData = [
  {
    text:'首页',
    image:"@/assets/img/tabbar/home.svg",
    imageActive:"@/assets/img/tabbar/home_active.svg",
    path:"/home"
  }
]
</script>
<style lang="less" scoped>
  .tab-bar{
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    height:50px;
    display:flex;

    border-top:1px solid #f3f3f3;
  }

  .tab-bar-item{
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    .text{
      font-size:12px;
      margin-top:2px;
    }

    img{
      width:36px;
    }
  }
</style>