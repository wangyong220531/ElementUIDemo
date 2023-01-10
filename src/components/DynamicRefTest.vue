<template>
  <div class="ref_test">
    <div
      v-for="(item, index) in dataList"
      :key="index"
      :ref="`x${index}`"
      @click="clickGetRef(index)"
    ></div>
  </div>
</template>
  
  <script>
export default {
  name: "DynamicRefTest",
  data() {
    return {
      dataList: [
        {
          id: 1,
          title: "a",
        },
        {
          id: 2,
          title: "b",
        },
        {
          id: 3,
          title: "c",
        },
        {
          id: 4,
          title: "d",
        },
      ],
    };
  },
  methods: {
    clickGetRef(index) {
      console.log(this.$refs[`x${index}`][0]);
    },
  },
};
</script>
  