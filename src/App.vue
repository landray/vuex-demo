<template>
  <div id="app">
    <mobile-frame class="mobile-frame"></mobile-frame>
    <mobilfe-config class="mobile-config"></mobilfe-config>
  </div>
</template>

<script>
// import Hello from './components/Hello';
import mobileFrame from './components/mobile-frame';
import mobilfeConfig from './components/mobile-config';

export default {
  name: 'app',
  components: {
    mobileFrame, mobilfeConfig,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 20px 20px;
  overflow: hidden;
}

.mobile-frame {
  width: 64%;
  float: left;
}

.mobile-config {
  width: 35%;
  float: right;
}

</style>
