<template>
  <transition :name="transitionName">
    <div
      v-show="visible"
      class="aw-mega-menu"
      :class="[{ 'is-active': active }, { 'is-absolute': isAbsolute }]"
    >
      <AwBar
        :title="active || title"
        :back="true"
        class="aw-mega-menu__bar"
        @click:back="back"
      />
      <div class="aw-mega-menu__content">
        <div class="aw-mega-menu__menu">
          <slot />
        </div>
        <div
          :class="{ 'display-none': !$slots.aside }"
          class="aw-mega-menu__aside"
        >
          <!-- @slot @deprecated will be removed in 1.0.0 -->
          <AwMenuItem
            :label="asideTitle"
            class="aw-mega-menu__aside-header desktop-only"
          />
          <slot name="aside" />
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import Vue from "vue";
import AwMegaMenuColumn from "./_internal/AwMegaMenuColumn.vue";
Vue.component("AwMegaMenuColumn", AwMegaMenuColumn);
import AwBar from "../../molecules/AwBar/AwBar.vue";
import AwMenuItem from "../../molecules/AwMenuItem/AwMenuItem.vue";
export default {
  name: "AwMegaMenu",
  components: {
    AwBar,
    AwMenuItem,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    isAbsolute: {
      type: Boolean,
      default: false,
    },
    transitionName: {
      type: String,
      default: "aw-fade",
    },
    /**
     * @deprecated will be removed in 1.0.0
     */
    asideTitle: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      active: "",
    };
  },
  provide() {
    const megaMenu = {};
    Object.defineProperty(megaMenu, "active", {
      get: () => this.active,
    });
    Object.defineProperty(megaMenu, "changeActive", {
      value: this.changeActive,
    });
    return { megaMenu };
  },
  methods: {
    changeActive(payload) {
      this.active = payload;
      this.$emit("change", payload);
    },
    back() {
      if (!this.active) {
        this.$emit("close");
      }
      this.active = "";
    },
  },
};
</script>

