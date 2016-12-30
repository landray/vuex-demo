<template>
  <div>
    <h2>
    I'm left side {{title}}
    </h2>
    <template v-if="components && components.length" >
      <template v-for="component in components">
        <component class="cmpt"
          :class="currentComponent && (component.id == currentComponent.id) ? 'selected-cmpt': ''"
          :is="component.name"
          :component-id="component.id"
          @click.native="editComponent"
          :cmpt-data="component"
        ></component>
      </template>
    </template>
    <template v-else>
      no components yet
    </template>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import Hello from './Hello'
  import Home from './Home'
  export default {
    name: 'mobileFrame',
    data() {
      return {
        title: 'left',
      };
    },
    components: {
      Hello, Home
    },
    computed: {
      ...mapGetters([
        'currentComponent',
        'components',
      ])
    },
    methods: {
      ...mapMutations([
        'changeCurrentComponent'
      ]),
      editComponent: function (event) {
        var cmptId = event.currentTarget.getAttribute('component-id');
        this.changeCurrentComponent(cmptId);
      }
    }
  };
</script>
<style>
  .cmpt {
    border: 1px solid lightblue;
    margin-bottom: 10px;
  }
  .selected-cmpt {
    border-color: red;
  }
</style>


