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
  </div>
</template>
<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

//搜索框功能
const searchValue = ref("")
const cancelClick = () => {
  router.back()
}

</script>
<style lang="less" scoped>
.city{
  height:100vh;

  position:relative;
  z-index:9;
  background-color: #fff;

  // overflow-y:auto;
}
</style>