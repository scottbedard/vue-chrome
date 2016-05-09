import Vue from "vue";
import RootComponent from "../../src/popup/root.vue";

describe('root.vue', () => {
    it('should render correct contents', () => {
        const vm = new Vue({
            template: '<div><v-root></v-root></div>',
            components: { "v-root": RootComponent },
        }).$mount();
        expect(vm.$el.querySelector("h1").textContent).toBe("Build something amazing");
    });
});

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
