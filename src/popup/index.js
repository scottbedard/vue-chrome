import Vue from "vue";
import RootComponent from "./root";

/* eslint-disable no-new */
new Vue({
    el: "body",
    components: {
        "v-root": RootComponent,
    },
});
