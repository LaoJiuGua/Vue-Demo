<template>
  <div>
      <h2>{{$store.state.counter}}</h2>
      <button @click="addition">+</button>
      <button @click="subtraction">-</button>
  </div>
</template>

<script>
    export default {
        name :'HelloVuex',
        methods: {
            addition() {
                this.$store.commit('increment')
            },
            subtraction() {
                this.$store.commit('decrement')
            }
        },
    }
</script>

<style scoped>

</style>