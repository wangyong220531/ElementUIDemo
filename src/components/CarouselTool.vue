<template>
  <div>
    <el-carousel height="100px">
      <el-carousel-item v-for="item in 5" :key="item">
        <div>{{ item }}</div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { eventBus } from "@/main";

export default {
  name: "CarouselTool",
  created() {
    eventBus.$on("test", (data) => {
      console.log("xxx", data);
    });
  },
};
</script>

<style lang="less" scoped>
.el-carousel{
  width: 600px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #5c7f76;
}
</style>