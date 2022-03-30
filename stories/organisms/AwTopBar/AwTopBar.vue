<template>
  <div class="aw-top-bar">
    <div class="aw-top-bar__container">
      <div class="aw-top-bar__left">
        <slot name="left" />
      </div>
      <div class="aw-top-bar__center">
        <slot name="center" />
      </div>
      <div class="aw-top-bar__right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AWTopBar",
};
</script>

