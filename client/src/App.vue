<template>
  <div id="app">
    <SimulationComponent />
  </div>
</template>

<script>
import SimulationComponent from './components/SimulationComponent';

export default {
  name: 'app',
  components: {
    SimulationComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
