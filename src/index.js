import TheComponent from "./TheComponent";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("v-thecomponent", TheComponent);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

TheComponent.install = install;

export default TheComponent;