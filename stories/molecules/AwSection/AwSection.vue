<template>
  <section class="aw-section">
    <slot
      name="heading"
      v-bind="{ levelHeading, titleHeading, subtitleHeading }"
    >
      <AwHeading
        v-if="titleHeading"
        :level="levelHeading"
        :title="titleHeading"
        :description="subtitleHeading"
      />
    </slot>
    <div class="aw-section__content">
      <slot />
    </div>
  </section>
</template>
<script>
import AwHeading from "../../atoms/AwHeadings/AwHeading.vue";
export default {
  name: "AwSection",
  components: {
    AwHeading,
  },
  props: {
    titleHeading: {
      type: String,
      default: "",
    },
    subtitleHeading: {
      type: String,
      default: "",
    },
    levelHeading: {
      type: Number,
      default: 2,
    },
  },
};
</script>

