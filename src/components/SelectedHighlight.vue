<template>
  <div>
    <div
      class="listCss"
      v-for="(item, index) in listArr"
      :key="index"
      :class="{ activeCss: activeVar == index }"
      @click="activeFun(item, index)"
    >
      {{ item }}
    </div>
  </div>
</template>

 
<script>
export default {
  name: "SelectedHighlight",
  data() {
    return {
      activeVar: 0,
      listArr: ["按钮1", "按钮2", "按钮3", "按钮4", "按钮5"],
    };
  },
  methods: {
    activeFun(item, index) {
      // item 为被选中的元素体
      this.activeVar = index;
    },
  },
};
</script>
 
<style lang="less" scoped>
.listCss {
  cursor: pointer;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: 1px solid #ccc;
  float: left;
  margin-right: 10px;
}
.activeCss {
  background: skyblue;
}
</style>