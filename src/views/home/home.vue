<template lang="">
  <div class="home">
    <!-- <div class="nav-bar">
      <div class="title">弘源旅途</div>
    </div> -->
    <home-nav-bar>
    </home-nav-bar>
    <div class="banner">
      <img style="width:100%;" src="@/assets/img/home/banner.png" alt="">
    </div>

    <!-- <div class="location">
      <div class="city">广州</div>
      <div class="position">
        <span class="text">我的位置</span>

      </div>
    </div> -->

    <home-search-box></home-search-box>
  </div>
</template>
<script setup>
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from './cpns/home-search-box.vue'


</script>
<style lang="less" scoped>
.home {
height: 100vh;
overflow-y: auto;
box-sizing: border-box;
margin-bottom: 50px;

.banner {
  img {
    width: 100%;
  }
}
.search-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  z-index: 1;
  background-color: #fff;
}
}
</style>