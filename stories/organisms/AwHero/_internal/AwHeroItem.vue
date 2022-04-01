<template>
  <li class="glide__slide aw-hero-item" :style="style" data-testid="hero-item">
    <component :is="wrapper" class="aw-hero-item__wrapper" :link="link">
      <slot name="subtitle" v-bind="{ subtitle }">
        <span
          :class="{ 'display-none': !subtitle }"
          class="aw-hero-item__subtitle"
          >{{ subtitle }}</span
        >
      </slot>
      <slot name="title" v-bind="{ title }">
        <span :class="{ 'display-none': !title }" class="aw-hero-item__title">{{
          title
        }}</span>
      </slot>
      <slot name="call-to-action" v-bind="{ buttonText, link }">
        <div v-if="buttonText && !mobileView" class="aw-hero-item__button">
          <AwButton :link="link" data-testid="hero-cta-button">
            {{ buttonText }}
          </AwButton>
        </div>
      </slot>
      <slot name="withImgTag" />
    </component>
  </li>
</template>
<script>
import AwButton from "../../../atoms/AwButton/AwButton.vue";
import AwLink from "../../../atoms/AwLink/AwLink.vue";
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../utilities/mobile-observer";
export default {
  name: "AwHeroItem",
  components: {
    AwButton,
    AwLink,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    buttonText: {
      type: String,
      default: "",
    },
    background: {
      type: String,
      default: "",
    },
    image: {
      type: [Object, String],
      default: "",
    },
    link: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      mobileView: false,
    };
  },
  computed: {
    ...mapMobileObserver(),
    style() {
      const image = this.image;
      const isImageString = typeof image === "string";
      const background = this.background;
      return {
        "background-image": isImageString
          ? `url(${image})`
          : `url(${this.mobileView ? image.mobile : image.desktop})`,
        "background-color": background,
      };
    },
    wrapper() {
      return !this.mobileView ? "div" : this.link ? "AwLink" : "AwButton";
    },
  },
  mounted() {
    this.mobileView = this.isMobile;
  },
  beforeDestroy() {
    unMapMobileObserver();
  },
};
</script>
