<template>
    <div id="app">
        <!-- <TreeController msg="..." class="tree-controller" /> -->
        <!-- <CarouselTool /> -->
        <!-- <TabsTool class="tabs" /> -->
        <!-- <DynamicRefTest /> -->
        <!-- <CollapseTool /> -->
        <!-- <SelectedHighlight/> -->
        <TestTool />
    </div>
</template>

<script>
import TestTool from "@/components/test.vue"
export default {
    name: "App",
    components: {
        TestTool
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
</style>
