
<template functional>
  <hr
    :class="[data.class, data.staticClass, 'aw-divider']"
    :style="[data.style, data.staticStyle]"
  />
</template>

<script>
//  import './AwDivider.css';

export default {
  name: "AwDivider",
};  

</script>


<style scoped>
.display-none {
  display: none;
}

.aw-hr {
  display: var(--divider-display, block);
  margin: var(--divider-margin);
  max-width: var(--divider-max-width);
  width: var(--divider-width);
  border: var(--divider-border, var(--divider-border-style, solid) var(--divider-border-color, var(--c-light)));
  border-width: var(--divider-border-width, 4px);

}
/*# sourceMappingURL=SfDivider.css.map */
</style>
  