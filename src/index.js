import ChipsMultiselect from "./ChipsMultiselect"

function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component("v-chips-multiselect", ChipsMultiselect)
}

const plugin = {
  install
}

let GlobalVue = null
if (typeof window !== "undefined") {
  GlobalVue = window.Vue
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

ChipsMultiselect.install = install

export default ChipsMultiselect