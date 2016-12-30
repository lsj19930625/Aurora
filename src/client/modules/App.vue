<template>
    <h1>hello vue</h1>
    <p>
      <router-link to="/login">login</router-link>
      <router-link to="/productList">proList</router-link>
    </p>
    <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
