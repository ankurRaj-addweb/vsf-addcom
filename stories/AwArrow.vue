<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>
<script>
import './AwArrow.css';
export default {
  name: 'aw-arrow',
props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
      validator (value) {
        return ['small', 'medium', 'large'].includes(value);
      },
    },
    backgroundColor: {
      type: String,
    },
  },
  computed: {
    classes() {
      return {
        'button': true,
        'button-primary': this.primary,
        [`button-${this.size}`]: true,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },
  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>