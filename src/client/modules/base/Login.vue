<template>
  <div>
    帐号：<input v-model="account" type="text" />
    密码：<input v-model="password" type="text" />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      account: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
