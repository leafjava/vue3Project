<template>
  <div class="city top-page">
    <!-- 1.搜索框 -->
    <van-search 
      v-model="searchValue" 
      show-action
      placeholder="城市/区域/位置" 
      shape="round"
      @cancel="cancelClick"
    />

    <!-- 2.tab的切换 -->
    <van-tabs v-model:active="tabActive" color="#ff9854">
      <!-- <van-tab :title="allCity?.cityGroup?.title"></van-tab>
      <van-tab :title="allCity?.cityGroupOverSea?.title"></van-tab> -->
      <template v-for="(item, index) in allCities" :key="index">
        <!-- <van-tab :title="value?.cityGroup?.title"> -->
          <van-tab :title="item.title"></van-tab>
      </template>
    </van-tabs>
  </div>
</template>
<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router';
// import hyRequest from "@/services/request"
// import {getCityAll} from "@/services/modules/city"
import {getCityAll} from "@/services"
import useCityStore from "@/stores/modules/city"
import { storeToRefs } from 'pinia'

const router = useRouter()

//搜索框功能
const searchValue = ref("")
const cancelClick = () => {
  router.back()
}

// tab的切换
const tabActive = ref()

// 网络请求: 请求城市的数据
// hyRequest.get({
//   url:"/city/all"
// }).then(res => {
//   console.log(res)
// })

/**
 * 这个位置发送网络请求有两个缺点:
 *   1.如果网络请求太多，那么页面组件中就包含大量的对于网络请求和数据的处理逻辑
 *   2.如果页面封装了很多的子组件,子组件需要这些数据,我们必须一步步将数据传递过去(props)
 *   
 */
//网络请求:请求城市的数据
// const allCity = ref({})
// getCityAll().then(res => {
//   // console.log(res)
//   allCity.value = res.data
//   console.log(allCity.value)
// })


//从Store中获取数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

</script>
<style lang="less" scoped>
.city{
  height:100vh;

  position:relative;
  z-index:9;
  background-color: #fff;

  // overflow-y:auto;
  
}

.city{
  --van-tabs-line-height:30px;
}
</style>