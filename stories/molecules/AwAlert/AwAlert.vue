<template>
  <div :class="colorClass" class="aw-alert">
    <slot name="icon" v-bind="{ icon }">
      <AwIcon aria-hidden="true" :icon="icon" class="aw-alert__icon" />
    </slot>
    <slot name="message" v-bind="{ message }">
      <span :class="{ 'display-none': !message }" class="aw-alert__message">{{
        message
      }}</span>
    </slot>
  </div>
</template>
<script>
import AwIcon from "../../atoms/AwIcon/AwIcon.vue";
// import AwIco from "../../icons";
export default {
  name: "AwAlert",
  components: {
    AwIcon,
  },
  props: {
    message: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "secondary",
      validator: function (value) {
        return ["secondary", "info", "success", "warning", "danger"].includes(
          value
        );
      },
    },
  },
  computed: {
    icon() {
      switch (this.type) {
        case "success":
          return "added_to_cart";
        case "danger":
          return "info_shield";
        default:
          return "info_circle";
      }
    },
    colorClass() {
      switch (this.type) {
        case "secondary":
          return "color-secondary";
        case "info":
          return "color-info";
        case "success":
          return "color-success";
        case "warning":
          return "color-warning";
        case "danger":
          return "color-danger";
        default:
          return "color-info";
      }
    },
  },
};
</script>

