<template functional>
  <div 
    :class="[data.class, data.staticClass, 'aw-price']"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <slot name="regular" v-bind="{ props }">
      <span
        :class="{ 'display-none': !props.regular || props.special }"
        class="aw-price__regular"
      >
        {{ props.regular }}
      </span>
    </slot>
    <slot name="old" v-bind="{ props }">
      <del :class="{ 'display-none': !props.special }" class="aw-price__old">
        {{ props.regular }}
      </del>
    </slot>
    <slot name="special" v-bind="{ props }">
      <ins
        :class="{ 'display-none': !props.special }"
        class="aw-price__special"
      >
        {{ props.special }}
      </ins>
    </slot>
  </div>
</template>
<script>
// import '../node_modules/@storefront-ui/shared/styles/components/atoms/SfPrice.scss';

export default {
  name: "AwPrice",
  props: {
    regular: {
      type: [String, Number],
      default: null,
    },
    special: {
      type: [String, Number],
      default: null,
    },
  },
};
</script>

