Mixins
#Basics
Mixins distribute reusable functionalities for Vue components. A mixin object can contain any component options. When a component uses a mixin, all options in the mixin will be "mixed" into the component's own options.

Example:

// define a mixin object
const myMixin = {
  created() {
    this.hello()
  },
  methods: {
    hello() {
      console.log('hello from mixin!')
    }
  }
}

// define an app that uses this mixin
const app = Vue.createApp({
  mixins: [myMixin]
})

app.mount('#mixins-basic') // => "hello from mixin!"
#Option Merging
When a mixin and the component itself contain overlapping options, they will be "merged" using appropriate strategies.

For example, data objects undergo a recursive merge, with the component's data taking priority in cases of conflicts.

Hook functions with the same name are merged into an array so that all of them will be called. Mixin hooks will be called before the component's own hooks.