<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" >
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path">
        <template #default>
          <span>{{ item.text }}</span>
        </template>
        <template #icon>
          <img v-if="currentIndex !== index" :src="getAssetURL(item.image)">
          <img v-else :src="getAssetURL(item.imageActive)">
        </template>
      </van-tabbar-item>
      </template>
    </van-tabbar>

    <!-- <template v-for="(item, index) in tabbarData" :key="index">
      <div class="tab-bar-item" 
        :class="{active:currentIndex == index}"
        @click="itemClick(index, item)"
        >
        <img v-if="currentIndex !== index" :src="getAssetURL(item.image)">
        <img v-else :src="getAssetURL(item.imageActive)">
        <span class="text">{{ item.text }}</span>
      </div>
    </template> -->
  </div>
</template>
<script setup>
import tabbarData from "@/assets/data/tabbar.js"
import { getAssetURL } from "@/utils/load_assets.js"
import {ref} from 'vue'
// import {useRouter} from 'vue-router'

const currentIndex = ref(0)



// const router = useRouter()
// const itemClick = (index, item) => {
//   // currentIndex.value = index
//   // router.push(item.path)
// }

// const getAssetURL = (image) => {
//   // 参数一:相对路径
//   // 参数二:当前路径URL
//   return new URL(`../../assets/img/${image}`, import.meta.url).href
// }

// const tabbarData = [
//   {
//     text:'首页',
//     image:"@/assets/img/tabbar/home.svg",
//     imageActive:"@/assets/img/tabbar/home_active.svg",
//     path:"/home"
//   },
//   {
//     text:'收藏',
//     image:"@/assets/img/tabbar/category.svg",
//     imageActive:"@/assets/img/tabbar/category_active.svg",
//     path:"/favor"
//   },
//   {
//     text:'订单',
//     image:"@/assets/img/tabbar/shopcart.svg",
//     imageActive:"@/assets/img/tabbar/shopcart_active.svg",
//     path:"/order"
//   },
//   {
//     text:'消息',
//     image:"@/assets/img/tabbar/profile.svg",
//     imageActive:"@/assets/img/tabbar/profile_active.svg",
//     path:"/message"
//   }
// ]
</script>
<style lang="less" scoped>
  .tab-bar{
    // 局部修改:只针对tab-bar子元素才生效
    // --van-tabbar-item-icon-size: 30px !important;

    // 找到类,对类中css属性重写
    // :deep()找到子组件的类,让子组件的类也可以生效
    :deep(.van-tabbar-item__icon){
      font-size:80px;
    }

    img{
      height:28px;
    }
  }
</style>