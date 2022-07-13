<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view
    ></keep-alive>
    <router-view v-if="!$route.meta.keepAlive">
      <!-- 这里是不会被缓存的视图组件，比如 Profile！ -->
    </router-view>
  </div>
</template>
<style lang="scss"></style>
