<template>
  <div class="aw-dropdown">
    <AwOverlay :visible="isOpen" class="aw-dropdown__overlay" />
    <slot name="opener">
      <AwButton
        class="aw-button--full-width aw-dropdown__opener"
        @click.stop="open"
        >Choose your action</AwButton
      >
    </slot>
    <transition name="aw-dropdown">
      <div
        v-show="isOpen"
        v-click-outside="checkPersistence"
        class="aw-dropdown__container"
      >
        <slot name="title" v-bind="{ title }">
          <div :class="{ 'display-none': !title }" class="aw-dropdown__title">
            {{ title }}
          </div>
        </slot>
        <slot />
        <slot name="cancel">
          <AwButton
            class="aw-button--full-width aw-dropdown__cancel"
            @click.stop="close"
            >Cancel</AwButton
          >
        </slot>
      </div>
    </transition>
  </div>
</template>
<script>
import { clickOutside } from "../../utilities/directives";
import AwOverlay from "../../atoms/AwOverlay/AwOverlay.vue";
import AwButton from "../../atoms/AwButton/AwButton.vue";
import { isClient } from "../../utilities/helpers";

export default {
  name: "AwDropdown",
  components: {
    AwOverlay,
    AwButton,
  },
  directives: {
    clickOutside,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    persistent: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isOpen: {
      handler(value) {
        if (!isClient) return;
        if (value) {
          document.addEventListener("keydown", this.keydownHandler);
        } else {
          document.removeEventListener("keydown", this.keydownHandler);
        }
      },
      immediate: true,
    },
  },
  methods: {
    open() {
      this.$emit("click:open");
    },
    close() {
      this.$emit("click:close");
    },
    checkPersistence() {
      if (!this.persistent) return this.close();
    },
    keydownHandler(e) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        this.close();
      }
    },
  },
};
</script>

