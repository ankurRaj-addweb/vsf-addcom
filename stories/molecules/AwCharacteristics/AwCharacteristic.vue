<template>
  <div class="aw-characteristic">
    <slot name="icon" v-bind="{ colorIcon, sizeIcon, icon }">
      <div class="aw-characteristic__icon">
        <AwIcon
          aria-hidden="true"
          :color="colorIcon"
          :size="sizeIcon"
          :icon="icon"
        />
      </div>
    </slot>
    <slot name="text" v-bind="{ title, description }">
      <div class="aw-characteristic__text">
        <slot name="title" v-bind="{ title }">
          <div class="aw-characteristic__title">{{ title }}</div>
        </slot>
        <slot name="description" v-bind="{ description }">
          <div class="aw-characteristic__description">{{ description }}</div>
        </slot>
      </div>
    </slot>
  </div>
</template>
<script>
import AwIcon from "../../atoms/AwIcon/AwIcon.vue";
export default {
  name: "SfCharacteristic",
  components: {
    AwIcon,
  },
  props: {
    colorIcon: {
      type: String,
      default: "",
    },
    sizeIcon: {
      type: String,
      default: "",
    },
    icon: {
      type: [String, Array],
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>

