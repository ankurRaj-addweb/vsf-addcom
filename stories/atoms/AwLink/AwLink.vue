<template>
  <component
    :is="linkComponentTag"
    v-focus
    v-bind="urlTag"
    class="aw-link"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>
<script>
// import { focus } from "../../../utilities/directives";
import './AwLink.css';
// import './css/AwBreadcrumbs.css';
// import '../packages/shared/styles/components/atoms/SfLink.css';

export default {
  name: "AwLink",
  directives: { focus },
  props: {
    link: {
      type: [String, Object],
      required: true,
    },
  },
  computed: {
    isExternal() {
      return (
        typeof this.link === "string" && this.link.search(/(^\/|^#)/g) === -1
      );
    },
    isNativeLinkTag() {
      return this.isExternal || !this.$router;
    },
    urlTag() {
      return this.isNativeLinkTag
        ? { href: this.link }
        : { to: this.link || "" };
    },
    linkComponentTag() {
      const routerLink = this.$nuxt ? "nuxt-link" : "router-link";
      return this.isNativeLinkTag ? "a" : routerLink;
    },
  },
};
</script>



