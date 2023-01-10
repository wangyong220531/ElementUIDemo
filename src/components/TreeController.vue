<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <el-tree
      show-checkbox
      :data="treeData"
      node-key="id"
      :props="defaultProps"
      :default-expanded-keys="[12]"
      :default-checked-keys="[121]"
      ref="test"
      @check-change="
        (data, checked, indeterminate) => selected(data, checked, indeterminate)
      "
    >
      <div class="tree-node" slot-scope="{ data }">
        <div class="icon" v-if="data.children === undefined">
          <img
            v-if="data.type === 'mainPolice'"
            src="../assets/mainPolice.png"
            alt=""
          />
          <img
            v-if="data.type === 'auxPolice'"
            src="../assets/auxPolice.png"
            alt=""
          />
        </div>
        <div class="name">{{ data.name }}</div>
      </div>
    </el-tree>
    <div class="police-selected-container">
      <el-tag
        class="selectedPolice"
        v-for="selectedPolice in selectedPolices"
        :key="selectedPolice.id"
        size="small"
        closable
        :disable-transitions="false"
        @close="() => closeThisTag(selectedPolice)"
      >
        {{ selectedPolice.name }}
      </el-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: "TreeController",
  props: {
    msg: String,
  },
  data() {
    return {
      treeData: [
        {
          id: 1,
          name: "民警",
          type: "mainPolice",
          children: [
            {
              id: 11,
              name: "王秋雨",
              type: "mainPolice",
            },
            {
              id: 12,
              name: "徐腾",
              type: "mainPolice",
            },
            {
              id: 13,
              name: "朱晓欢",
              type: "mainPolice",
            },
          ],
        },
        {
          id: 2,
          name: "辅警",
          type: "auxPolice",
          children: [
            {
              id: 21,
              name: "卜元浩",
              type: "auxPolice",
            },
            {
              id: 22,
              name: "陆荣",
              type: "auxPolice",
            },
            {
              id: 23,
              name: "徐震",
              type: "auxPolice",
            },
          ],
        },
      ],
      defaultProps: {
        name: "name",
        type: "type",
        children: "children",
      },
      selectedPolices: [],
    };
  },
  methods: {
    selected(data, checked, indeterminate) {
      if (indeterminate === false && checked === true) {
        const police = {};
        police.id = data.id;
        police.name = data.name;
        if (data.name !== "民警" && data.name !== "辅警") {
          this.selectedPolices.push(police);
        }
        this.selectedPolices = Array.from(new Set(this.selectedPolices));
        return;
      }
      if (indeterminate === false && checked === false) {
        this.selectedPolices.splice(
          this.selectedPolices.findIndex((item) => item.id === data.id),
          1
        );
        return;
      }
    },
    closeThisTag() {
      // console.log(this.$refs.test.data);
      // let arr = [],
      //   arr1 = [],
      //   arr2 = [];
      // arr1 = this.$refs.test.data[0].children.map((x) => {
      //   const obj = {};
      //   obj.id = x.id;
      //   obj.name = x.name;
      //   return obj;
      // });
      // arr2 = this.$refs.test.data[1].children.map((x) => {
      //   const obj = {};
      //   obj.id = x.id;
      //   obj.name = x.name;
      //   return obj;
      // });
      // arr = [...arr1, ...arr2];
      // console.log(data.id, arr);
      // this.$refs.test.data.splice(
      //   arr.findIndex((item) => item.id === data.id),
      //   1
      // );
    },
  },
};
</script>

<style lang="less" scoped>
.tree-node {
  display: flex;
  .icon {
    margin-right: 10px;

    img {
      width: 14px;
      margin-top: 2px;
    }
  }
  .name {
    font-size: 12px;
    margin-top: 2px;
  }
}

.police-selected-container {
  width: 400px;
  height: 200px;
  border: 2px solid #00000059;
  border-radius: 5px;
  margin-top: 20px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
}
</style>
