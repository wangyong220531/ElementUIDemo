<template>
    <div id="app">
        <button @click="test">点击</button>
        <el-dialog title="xxxx" :visible.sync="show">
            <el-table></el-table>
            <footer slot="footer">
                <el-button>a</el-button>
            </footer>
            <el-pagination></el-pagination>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            show:false
        };
    },
    methods: {
        test(){
            this.show = !this.show
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

.divder {
    height: 1px;
    background-color: #58585840;
    width: 120%;
    margin-left: -10px;
}
</style>
