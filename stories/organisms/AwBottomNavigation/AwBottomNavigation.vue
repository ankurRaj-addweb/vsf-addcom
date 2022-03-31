<template>
  <div class="aw-bottom-navigation">
    <slot />
  </div>
</template>
<script>
import Vue from "vue";
import AwBottomNavigationItem from "./_internal/AwBottomNavigationItem.vue";
Vue.component("AwBottomNavigationItem", AwBottomNavigationItem);
export default {
  name: "AwBottomNavigation",
};
</script>

