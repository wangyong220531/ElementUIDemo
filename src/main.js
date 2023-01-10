import Vue from "vue"
import App from "./App.vue"
import "@/utils/Element"
import TreeController from "@/components/TreeController"
import CarouselTool from "@/components/CarouselTool"
import TabsTool from "@/components/TabsTool"
import DynamicRefTest from "@/components/DynamicRefTest"
import CollapseTool from "@/components/CollapseTool"
import SelectedHighlight from "@/components/SelectedHighlight"

Vue.config.productionTip = false
Vue.component(TreeController.name, TreeController)
Vue.component(CarouselTool.name, CarouselTool)
Vue.component(TabsTool.name, TabsTool)
Vue.component(DynamicRefTest.name, DynamicRefTest)
Vue.component(CollapseTool.name, CollapseTool)
Vue.component(SelectedHighlight.name, SelectedHighlight)

export const eventBus = new Vue()

new Vue({
    render: h => h(App)
}).$mount("#app")
