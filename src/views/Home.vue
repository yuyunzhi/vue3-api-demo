<template>
  <LongList :data="data" :buffBottom="10" ></LongList>
</template>

<script>
import LongList from '../components/LongList.vue'
export default {
  components: { LongList },
  setup() {
    let data = Array(1000).fill(0).map((v, i) => `item-${i}`);
    return {
      data
    }
  }
}

</script>

<style>
#app {
  height: 80vh;
}

</style>
