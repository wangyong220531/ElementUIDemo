<template>
  <div>
    <el-collapse>
      <el-collapse-item
        v-for="collapseItem in collapseItemList"
        :key="(collapseItem, id)"
      >
        {{ collapseItem.content }}
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "CollapseTool",
  data() {
    return {
      collapseItemList: [
        { id: 0, content: "A" },
        { id: 1, content: "B" },
        { id: 2, content: "C" },
        { id: 3, content: "D" },
        { id: 4, content: "E" },
        { id: 5, content: "F" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.el-collapse{
  width: 300px;
  .el-collapse-item{
    width: 100%;
  }
}
</style>