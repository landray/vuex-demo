<template>
  <div>
    <h1>
    I'm right side {{title}}
    </h1>
    <template v-if="componentConfig">
      <h2>{{componentConfig.name}} with id {{componentConfig.id}}</h2>
      <textarea :value="componentConfig.configData.msg" rows="5" @input="updateConfig"></textarea>
    </template>
    <template v-else>
      no component choosed
    </template>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    name: 'mobileConfig',
    data() {
      return {
        title: 'right side',
      };
    },
    computed: {
      ...mapGetters({
        'componentConfig': 'currentComponent'
      })
    },
    methods: {
      ...mapMutations([
        'updateComponentConfig'
      ]),
      updateConfig(event) {
        // console.log(event.target.value);
        // this.componentConfig.configData.msg = value;
        this.updateComponentConfig({msg: event.target.value});
      }
    }
  };
</script>
<style >
  textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 8px;
    resize: none;
  }
</style>


