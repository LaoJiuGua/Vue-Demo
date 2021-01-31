<template>
  <div id="app">
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <router-link to="/home" tag='button'>首页</router-link>
    <!-- <router-link to="/about" tag='button'>关于</router-link>
    <router-link :to="'/user/'+userId" tag='button'>用户</router-link>
    <router-link :to="{path: '/profile',query:{name: 'wwt',age: '18'}}" tag='button'>档案</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: "lisi",
    }
  },
  methods: {
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'wwt',
          age: 18
        }
      })
    }
  }
  
}
</script>

<style>

</style>
