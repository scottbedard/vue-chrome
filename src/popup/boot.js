import Vue from "vue";
import RootComponent from "./root.vue";

/* eslint-disable no-new */
new Vue({
    el: "body",
    components: {
        "v-root": RootComponent,
    },
});
