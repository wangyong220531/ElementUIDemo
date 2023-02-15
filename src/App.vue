<template>
    <div id="app">
        <el-button type="primary" @click="add()">加1</el-button>
        <el-collapse>
            <el-collapse-item v-for="item in list" :key="item.id">
                <el-tabs>
                    <el-tab-pane label="A">A</el-tab-pane>
                    <el-tab-pane label="B">B</el-tab-pane>
                </el-tabs>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
import { nanoid } from "nanoid"
export default {
    name: "App",
    data() {
        return {
            list: []
        }
    },
    methods: {
        add() {
            this.list.push({ id: nanoid() })
        }
    }
}
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.tree-controller {
    margin-bottom: 50px;
}

.tabs {
    transform: translateX(50%);
}

.wrraper {
    display: flex;
    justify-content: space-between;
}
</style>
