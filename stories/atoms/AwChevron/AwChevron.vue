<template functional>
<span
:class="[data.class, data.staticClass, 'aw-chevron']"
:style="[data.style, data.staticStyle]"
v-bind="data.attrs"
v-on="listeners"
>
<slot>
<span class="aw-chevron__bar aw-chevron__bar--left"></span>
<span class="aw-chevron__bar aw-chevron__bar--right"></span>
</slot>
</span>
</template>
<script>
// import { focus } from "../../../utilities/directives";
export default {
name: "AwChevron",
// directives: {
// focus,
// },
};
</script>
