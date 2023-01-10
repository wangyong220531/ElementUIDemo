<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        v-for="classItem in classList"
        :key="classItem.id"
        :label="classItem.period"
        :name="classItem.name"
      ></el-tab-pane>
    </el-tabs>
    <div class="test">
      <div class="test-item">1</div>
      <div class="test-item">2</div>
      <div class="test-item">3</div>
      <div class="test-item">4</div>
      <div class="test-item">5</div>
      <div class="test-item">6</div>
      <div class="test-item">7</div>
      <div class="test-item">8</div>
      <div class="test-item">9</div>
      <div class="test-item">10</div>
    </div>1
    <div class="container">
      <el-tag class="son">1</el-tag><el-tag class="son">2</el-tag
      ><el-tag class="son">3</el-tag><el-tag class="son">4</el-tag
      ><el-tag class="son">5</el-tag><el-tag class="son">6</el-tag
      ><el-tag class="son">7</el-tag><el-tag class="son">8</el-tag
      ><el-tag class="son">9</el-tag><el-tag class="son">10</el-tag
      ><el-tag class="son">11</el-tag><el-tag class="son">12</el-tag
      ><el-tag class="son">13</el-tag><el-tag class="son">14</el-tag
      ><el-tag class="son">15</el-tag><el-tag class="son">16</el-tag
      ><el-tag class="son">17</el-tag><el-tag class="son">18</el-tag
      ><el-tag class="son">19</el-tag><el-tag class="son">20</el-tag
      ><el-tag class="son">21</el-tag><el-tag class="son">22</el-tag
      ><el-tag class="son">23</el-tag><el-tag class="son">24</el-tag
      ><el-tag class="son">25</el-tag><el-tag class="son">26</el-tag
      ><el-tag class="son">27</el-tag><el-tag class="son">28</el-tag
      ><el-tag class="son">29</el-tag><el-tag class="son">30</el-tag
      ><el-tag class="son">31</el-tag><el-tag class="son">32</el-tag
      ><el-tag class="son">33</el-tag><el-tag class="son">34</el-tag
      ><el-tag class="son">35</el-tag><el-tag class="son">36</el-tag
      ><el-tag class="son">37</el-tag><el-tag class="son">38</el-tag
      ><el-tag class="son">39</el-tag><el-tag class="son">40</el-tag
      ><el-tag class="son">41</el-tag><el-tag class="son">42</el-tag
      ><el-tag class="son">43</el-tag><el-tag class="son">44</el-tag
      ><el-tag class="son">45</el-tag><el-tag class="son">46</el-tag
      ><el-tag class="son">47</el-tag><el-tag class="son">48</el-tag
      ><el-tag class="son">49</el-tag><el-tag class="son">50</el-tag>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main";

export default {
  name: "TabsTool",
  data() {
    return {
      activeName: "b",
      classList: [
        { id: 0, name: "a", period: "00:00 ~ 01:00" },
        { id: 1, name: "b", period: "02:00 ~ 03:00" },
        { id: 2, name: "c", period: "03:00 ~ 04:00" },
        { id: 3, name: "d", period: "05:00 ~ 06:00" },
        { id: 4, name: "e", period: "07:00 ~ 08:00" },
        { id: 5, name: "f", period: "09:00 ~ 10:00" },
        { id: 6, name: "g", period: "11:00 ~ 12:00" },
        { id: 7, name: "h", period: "13:00 ~ 14:00" },
      ],
    };
  },
  methods: {
    handleClick() {
      eventBus.$emit("test", "abc");
      // console.log(tab, event);
    },
  },
};
</script>

<style lang="less" scoped>
.el-tabs {
  width: 310px;
}
.test {
  width: 200px;
  height: 150px;
  margin-top: 20px;
  overflow-y: scroll;
  .test-item {
    height: 50px;
  }
}
.test::-webkit-scrollbar {
  width: 6px;
}

.test::-webkit-scrollbar {
  width: 2px;
}
.test::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
.test::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}
.container{
  width: 500px;
  height: 160px;
  background-color: rgb(185, 153, 153);
  border-radius: 15px;
  overflow-y: scroll;
  // display: flex;
  // justify-content: space-between;
  .son{
    padding: 10px 20px;
    margin: 10px;
  }
}
</style>