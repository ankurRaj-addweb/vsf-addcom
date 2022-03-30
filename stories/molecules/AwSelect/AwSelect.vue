<template>
  <div
    v-will-change="'font-size'"
    class="aw-select"
    :class="{
      'is-selected': value || placeholder,
      'is-required': required,
      'is-disabled': disabled,
      'is-invalid': !valid,
    }"
  >
    <label :for="label" class="aw-select__label will-change">
      <slot name="label" :label="label">
        {{ label }}
      </slot>
    </label>
    <select
      :id="label"
      v-focus
      v-bind="$attrs"
      :value="value"
      :disabled="disabled"
      class="aw-select__dropdown"
      @change="changeHandler"
    >
      <!-- empty option by default, may be used as placeholder -->
      <option
        v-if="placeholder"
        class="aw-select__placeholder aw-select__option"
        disabled
        :selected="!!placeholder"
        value
        :label="placeholder"
      >
        <slot name="placeholder" v-bind="{ placeholder }" />
        {{ placeholder }}
      </option>
      <slot />
    </select>
    <div class="aw-select__error-message">
      <transition name="aw-fade">
        <!-- @slot Custom error message of form select -->
        <slot name="errorMessage" v-bind="{ errorMessage }">
          <span :class="{ 'display-none': valid }">
            {{ errorMessage }}
          </span>
        </slot>
      </transition>
    </div>
  </div>
</template>
<script>
import { focus } from "../../utilities/directives";
import { willChange } from "../../utilities/directives";
import AwSelectOption from "./_internal/AwSelectOption.vue";
import Vue from "vue";

Vue.component("AwSelectOption", AwSelectOption);
export default {
  name: "AwSelect",
  directives: { focus, willChange },
  props: {
    label: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    valid: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: "This field is not correct.",
    },
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  methods: {
    changeHandler(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

