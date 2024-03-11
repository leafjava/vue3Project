<template lang="">
  <div class="home">
    <h2>Home</h2>

    <van-rate v-model="rateValue" :size="30" color="#0ff"/>
    <button @click="rateIncrement">评分+1</button>


  </div>
</template>
<script setup>
import { ref } from 'vue';

const rateValue = ref(3);

const rateIncrement = () => {
  rateValue.value++
}

</script>
<style lang="less" scoped>
  
</style>