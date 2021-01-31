<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="rgba(83, 157, 255, 0.788)">
        <img slot="item-icon" src="./assets/img/tabbar/shouye.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/shouye-active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="rgba(83, 157, 255, 0.788)">
        <img  slot="item-icon" src="./assets/img/tabbar/fenlei.svg" alt="">
        <img  slot="item-icon-active" src="./assets/img/tabbar/fenlei-active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="rgba(83, 157, 255, 0.788)">
        <img  slot="item-icon" src="./assets/img/tabbar/gouwu.svg" alt="">
        <img  slot="item-icon-active" src="./assets/img/tabbar/gouwu-active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="rgba(83, 157, 255, 0.788)">
        <img  slot="item-icon" src="./assets/img/tabbar/wode.svg" alt="">
        <img  slot="item-icon-active" src="./assets/img/tabbar/wode-active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from './components/tabbar/TabBar'
  import TabBarItem from './components/tabbar/TabBarItem'

  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  @import './assets/css/base.css';

  
</style>
