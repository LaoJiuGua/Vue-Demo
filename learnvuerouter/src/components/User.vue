<template>
  <div>
      <h2>我是用户页面</h2>
      <p>我是用户的相关信息，嘿嘿嘿</p>
      <p>{{$route.params.userId}}</p>
  </div>
</template>

<script>
export default {
    name: "User",
    computed: {
        userId(){
            return this.$route.params.userId
        },
    }
}
</script>

<style>

</style>