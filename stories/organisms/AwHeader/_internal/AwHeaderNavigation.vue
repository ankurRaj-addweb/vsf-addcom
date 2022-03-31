<template>
  <div class="aw-header-navigation" v-on="$listeners">
    <div class="aw-header-navigation__menu">
      <slot />
    </div>
    <AwSidebar
      :persistent="true"
      class="aw-header-navigation__sidebar"
      @close="$emit('close')"
    >
      <slot />
    </AwSidebar>
  </div>
</template>
<script>
import AwSidebar from "../../AwSidebar/AwSidebar.vue";

export default {
  name: "AwHeaderNavigation",
  components: {
    AwSidebar,
  },
};
</script>
