<template>
  <div
    v-will-change="'font-size'"
    class="aw-input"
    :class="{
      'has-text': !!value,
      invalid: !valid,
    }"
    :data-testid="nameWithoutWhitespace"
  >
    <div class="aw-input__wrapper">
      <input
        :id="nameWithoutWhitespace"
        v-focus
        v-bind="$attrs"
        :value="value"
        :required="required"
        :disabled="disabled"
        :name="name"
        :class="{ 'aw-input--is-password': isPassword }"
        :type="inputType"
        v-on="listeners"
      />
      <span class="aw-input__bar"></span>
      <label
        :class="{ 'display-none': !label }"
        class="aw-input__label will-change"
        :for="nameWithoutWhitespace"
      >
        <slot name="label" v-bind="{ label }">{{ label }}</slot>
      </label>
      <slot
        v-bind="{
          icon,
          isPasswordVisible,
          switchVisibilityPassword,
        }"
        name="icon"
      >
        <awButton
          v-if="icon"
          class="aw-input__button aw-button--pure"
          @click="$emit('click:icon')"
        >
          <AwIcon
            :color="icon.color"
            :size="icon.size"
            :icon="icon.icon"
            class="aw-input__icon"
          >
          </AwIcon>
        </awButton>
        <AwButton
          v-else-if="hasShowPassword"
          :class="{ 'display-none': !isPassword }"
          class="aw-input__password-button"
          type="button"
          aria-label="switch-visibility-password"
          :aria-pressed="isPasswordVisible.toString()"
          @click="switchVisibilityPassword"
        >
          <AwIcon
            class="aw-input__password-icon"
            :class="{
              hidden: !isPasswordVisible,
            }"
            icon="show_password"
            size="1.5rem"
          ></AwIcon>
        </AwButton>
      </slot>
    </div>
    <div class="aw-input__error-message">
      <transition name="aw-fade">
        <slot name="error-message" v-bind="{ errorMessage }">
          <div :class="{ 'display-none': valid }">{{ errorMessage }}</div></slot
        >
      </transition>
    </div>
  </div>
</template>
<script>
import AwIcon from "../AwIcon/AwIcon.vue";
import AwButton from "../AwButton/AwButton.vue";
import  focus  from "../../utilities/directives";
import  willChange  from "../../utilities/directives";
export default {
  name: "AwInput",
   directives: {
     focus,
     willChange,
   },
  components: { AwIcon, AwButton },
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    icon: {
      type: Object,
      default: () => {},
    },
    valid: {
      type: Boolean,
      default: true,
    },
    errorMessage: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
      description: "Native input required attribute",
    },
    disabled: {
      type: Boolean,
      default: false,
      description: "Native input disabled attribute",
    },
    hasShowPassword: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isPasswordVisible: false,
      inputType: "",
      isNumberTypeSafari: false,
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit("input", event.target.value),
      };
    },
    isPassword() {
      return this.type === "password" && this.hasShowPassword;
    },
    nameWithoutWhitespace() {
      return this.name.replace(/\s/g, "");
    },
  },
  watch: {
    type: {
      immediate: true,
      handler: function (type) {
        let inputType = type;
        // Safari has bug for number input
        if (typeof window !== "undefined" || typeof document !== "undefined") {
          const ua = navigator.userAgent.toLocaleLowerCase();
          if (
            ua.indexOf("safari") !== -1 &&
            ua.indexOf("chrome") === -1 &&
            type === "number"
          ) {
            this.isNumberTypeSafari = true;
            inputType = "text";
          }
        }
        this.inputType = inputType;
      },
    },
    value: {
      immediate: true,
      handler: function (value) {
        if (!this.isNumberTypeSafari) return;
        if (isNaN(value)) {
          this.$emit("input");
        }
      },
    },
  },
  methods: {
    switchVisibilityPassword() {
      if (this.type !== "password") return;
      this.isPasswordVisible = !this.isPasswordVisible;
      this.inputType = this.isPasswordVisible ? "text" : "password";
    },
  },
};
</script>

