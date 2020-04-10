<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <!-- <template>
      <div>
        <p>这是一个render 事例</p>
      </div>
    </template> -->

    <template>
      <div class="wrapper">
        <!-- <input :value="name" @input="name = $event.target.value"> -->
        <MyRender  v-model="name" />
        {{ name }}
      </div>
    </template>


  </div>
</template>

<script>
import MyRender from '@/components/RenderComponents'
export default {
  name: 'App',
  components: {
    MyRender
  },
  data() {
    return {
      name: ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
