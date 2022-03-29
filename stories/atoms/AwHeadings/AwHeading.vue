<template functional>
  <div
    :class="[data.class, data.staticClass, 'aw-heading']"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <slot name="title" v-bind="{ props }">
      <component
        :is="`h${props.level}`"
        class="aw-heading__title"
        :class="props.level > 1 && $options.headingClass(props.level)"
      >
        {{ props.title }}
      </component>
    </slot>
    <slot name="description" v-bind="{ props }">
      <div
        :class="{
          'display-none': !$options.hasDescription(props.description, slots),
        }"
        class="aw-heading__description"
      >
        {{ props.description }}
      </div>
    </slot>
  </div>
</template>
<script>
export default {
  name: "AwHeading",
  props: {
    level: {
      type: Number,
      default: 2,
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
  hasDescription(descriptionProp, slots) {
    return !!descriptionProp || slots().description;
  },
  headingClass(headingLevel) {
    return headingLevel <= 6 ? `h${headingLevel}` : `h2`;
  },
};
</script>
