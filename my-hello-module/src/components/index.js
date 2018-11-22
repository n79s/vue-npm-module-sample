import Vue from "vue"
import HelloX from "./HelloX.vue"
import HelloY from "./HelloY.vue"
import HelloZ from "./helloz/HelloZ.vue"

const MyComponents = {
    HelloX,
    HelloY,
    HelloZ
}

Object.keys(MyComponents).forEach(name=>{
    Vue.component(name,MyComponents[name])
})

export default MyComponents