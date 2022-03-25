<template functional>
  <nav
    :class="[data.class, data.staticClass, 'aw-breadcrumbs']"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    aria-label="breadcrumb"
    v-on="listeners"
  >
    <ol class="sw-breadcrumbs__list">
      <li
        v-for="(breadcrumb, i) in props.breadcrumbs"
        :key="i"
        class="sw-breadcrumbs__list-item"
        :aria-current="
          $options.breadcrumbLast(props.breadcrumbs) === i && 'page'
        "
      >
        <template v-if="$options.breadcrumbLast(props.breadcrumbs) !== i">
          <slot name="link" v-bind="{ breadcrumb }">
            <component
              :is="injections.components.AwLink"
              class="sw-breadcrumbs__breadcrumb"
              :link="breadcrumb.link"
              :data-testid="breadcrumb.text"
            >
              {{ breadcrumb.text }}
            </component>
          </slot>
        </template>
        <template v-else>
          <slot name="current" v-bind="{ breadcrumb }">
            <component
              :is="injections.components.AwLink"
              :link="breadcrumb.link"
              class="sw-breadcrumbs__breadcrumb current"
            >
              {{ breadcrumb.text }}
            </component>
          </slot>
        </template>
      </li>
    </ol>
  </nav>
</template> 
<script>
import AwLink from "../AwLink/AwLink.vue";
// import AwBreadcrumbs from './css/AwBreadcrumbs.css'; 
// import '../packages/shared/styles/components/atoms/SfBreadcrumbs.css';

export default {
  name: "AwBreadcrumbs",
  inject: {
    components: {
      default: { AwLink },
    },
  },
  props: {
    breadcrumbs: {
      type: Array,
      default: () => [],
    },
  },
  breadcrumbLast(breadcrumbs) {
    return breadcrumbs.length - 1;
  },
};
</script>



