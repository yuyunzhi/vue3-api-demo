<template>
  <LongList :data="data" :buffBottom="10" v-if="showData" ></LongList>
  <div v-else>
    <div v-for="n in data" :key="n">{{n}}</div>
  </div>
</template>

<script>
import LongList from '../components/LongList.vue'
import {onMounted} from 'vue'
let start = Date.now()
export default {
  components: { LongList },
  setup() {

    let data = Array(100000).fill(0).map((v, i) => `item-${i}`);

    onMounted(()=>{
      console.log(data);
      console.log('耗时毫秒', Date.now() - start + 'ms')
    })
    return {
      data,
      showData:false
    }
  }
}

</script>

<style>
#app {
  height: 80vh;
}

</style>
