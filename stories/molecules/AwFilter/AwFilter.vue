<template>
  <AwCheckbox
    class="aw-filter"
    :class="{ 'is-active': selected, 'is-color': color }"
    :name="label"
    :selected="selected"
    v-on="$listeners"
  >
    <template #label>
      <slot name="color" v-bind="{ color, selected }">
        <AwColor
          :class="{ 'display-none': !color }"
          :color="color"
          :has-badge="false"
          :selected="selected"
          class="sf-filter__color"
          @click="$emit('change', !selected)"
        />
      </slot>
      <slot name="label" v-bind="{ label }">
        <div class="aw-filter__label">{{ label }}</div>
      </slot>
      <slot name="count" v-bind="{ count }">
        <div class="aw-filter__count">{{ count }}</div>
      </slot>
    </template>
  </AwCheckbox>
</template>
<script>
import AwCheckbox from "../../molecules/AwCheckbox/AwCheckbox.vue";
import AwColor from "../../atoms/AwColor/AwColor.vue";
export default {
  name: "AwFilter",
  components: {
    AwCheckbox,
    AwColor,
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    count: {
      type: [String, Number],
      default: "",
    },
    selected: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "",
    },
  },
};
</script>


