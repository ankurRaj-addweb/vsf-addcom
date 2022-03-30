<template>
  <ul class="aw-list">
    <slot />
  </ul>
</template>
<script>
import AwListItem from "./_internal/AwListItem.vue";
import Vue from "vue";
Vue.component("AwListItem", AwListItem);
export default {
  name: "AwList",
};
</script>