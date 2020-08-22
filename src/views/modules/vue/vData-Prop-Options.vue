<template>
  <div>
    <div class="markdown-body">
      <VueMarkdown :source="mdData" v-highlight></VueMarkdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import markdownData from '../../../md/vue/$data-$props.md';

export default {
  name: 'data-prop',
  components: {
    VueMarkdown
  },
  data () {
    return {  
      mdData: markdownData,
      num: 1,
      person: {
        name: 'Data',
        age: 20
      },
      _home: 'hz',
      $water: 'liu'
    }
  },
  props: {
    book: String,
    car: {
      type: String,
      default: 'BBA'
    }
  },
  created () {
    console.log(this.$data, '$data')
    console.log(this.$data.num === this.num, 'this.$data.num === this.num') // true
    console.log(this._home, '_home') // undefined 
    console.log(this.$water, '$water') // undefined 
    console.log(this.$data._home, '$data._home') // hz
    console.log(this.$data.$water, '$data.$water') // liu
    console.log(this.$props, '$props')
  },
  methods: {
    inputChange(val) {
      console.log(val, 'data-props input change')
      console.log(this.$data, 'change $data')
    }
  }
}
</script>