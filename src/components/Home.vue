<template>
  <div class="hello">
    <h1>{{cmptConfig.msg}}</h1>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      localData: {msg: 'Home page'},
    };
  },
  props: ['cmpt-data'],
  computed: {
    cmptConfig () {
      if (this.cmptData.configData) {
        return this.cmptData.configData;
      } else {
        return this.localData;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
