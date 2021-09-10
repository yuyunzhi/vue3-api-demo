<template>
  <div class="container" @scroll="onScroll" ref="container" style="border:1px solid blue">
    <div
      class="panel" ref="panel"
      style="border:1px solid red"
      :style="{ paddingTop: paddingTop + 'px' }">
      <div class="item" v-for="item in visibleList" :key="item">{{ item }}</div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";

export default {
  props: {
    data: Array,
    buffBottom: {
      type: Number,
      default: 0
    },
    buffTop: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    // eslint-disable-next-line vue/no-setup-props-destructure
    let { data, buffTop, buffBottom } = props
    console.log(data);
    let container = ref(null), panel = ref(null);
    let count = 0;
    let start = ref(0), end = ref(1);
    let itemHeight = 1;
    let paddingTop = ref(0);
    let visibleList = computed(() => data.slice(start.value, end.value));

    onMounted(() => {
      // 初始化固定值
      itemHeight = panel.value.firstElementChild.offsetHeight // 获取一个item的高度
      panel.value.style.height = data.length*itemHeight + 'px' // 计算获取展示的面板的高度
      count = Math.floor(container.value.offsetHeight / itemHeight) //计算面板展示的个数
      end.value =  count + buffBottom  // 计算初始化展示的下标
    });
    // let timer = null
    const onScroll = function (e) {
      // if(timer) clearTimeout(timer)
      // timer = setTimeout(() => {
        let startValue = Math.floor(e.target.scrollTop / itemHeight); // 计算滚动的个数
        let buff = startValue > buffTop?buffTop:startValue;
        start.value = startValue - buff;
        console.log(count)
        end.value = startValue + count + buffBottom;
        paddingTop.value = start.value * itemHeight;
      // }, 10)
    };

    return {
      visibleList, paddingTop, container, panel, onScroll};
  }
};
</script>

<style>

.container {
  height: 100%;
  overflow: scroll;
}
.container * {
  box-sizing: border-box;
}
.item {
  border: 1px solid #eee;
  padding: 6px 10px;
  cursor: pointer;
}
</style>
