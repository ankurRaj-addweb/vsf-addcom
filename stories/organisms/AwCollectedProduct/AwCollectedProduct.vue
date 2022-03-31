<template>
  <div class="aw-collected-product">
    <div class="aw-collected-product__main">
      <div class="aw-collected-product__details">
        <slot name="title" v-bind="{ title }">
          <div class="aw-collected-product__title-wraper">
            <component
              :is="componentIs"
              class="aw-collected-product__title"
              :link="link ? link : ''"
            >
              {{ title }}
            </component>
          </div>
        </slot>
        <slot name="price" v-bind="{ specialPrice, regularPrice }">
          <AwPrice
            :class="{ 'display-none': !regularPrice }"
            :regular="regularPrice"
            :special="specialPrice"
          />
        </slot>
        <div class="Aw-collected-product__configuration">
          <slot name="configuration">
            <AwProperty name="Size" value="XS" />
            <AwProperty name="Color" value="white" />
          </slot>
        </div>
      </div>
      <div class="aw-collected-product__actions">
        <slot name="actions">
          <AwButton class="aw-button--text desktop-only"
            >Save for later</AwButton
          >
        </slot>
      </div>
    </div>
    <div class="aw-collected-product__aside">
      <slot name="image" v-bind="{ image, title }">
        <AwImage
          :src="image"
          :alt="title"
          :width="imageWidth"
          :height="imageHeight"
          class="aw-collected-product__image"
        />
      </slot>
      <slot name="input">
        <div class="aw-collected-product__quantity-wrapper">
          <AwQuantitySelector
            :qty="quantity"
            :min="minQty"
            :max="maxQty"
            class="aw-collected-product__quantity-selector"
            @input="$emit('input', $event)"
          />
        </div>
      </slot>
    </div>
    <slot name="remove" v-bind="{ removeHandler }">
      <div :class="{ 'display-none': !hasRemove }">
        <AwCircleIcon
          icon="cross"
          aria-label="Remove"
          class="
            aw-circle-icon--small
            aw-collected-product__remove
            aw-collected-product__remove--circle-icon
          "
          @click="removeHandler"
        />
        <AwButton
          class="
            aw-button--text
            aw-collected-product__remove sf-collected-product__remove--text
          "
          data-testid="collected-product-desktop-remove"
          @click="removeHandler"
          >Remove</AwButton
        >
      </div>
    </slot>
    <slot name="more-actions" v-bind="{ actionsHandler }">
      <div :class="{ 'display-none': !hasMoreActions }">
        <AwButton
          aria-label="More actions"
          class="
            aw-button--pure
            aw-collected-product__more-actions
            smartphone-only
          "
          @click="actionsHandler"
        >
          <AwIcon icon="more" size="18px" />
        </AwButton>
      </div>
    </slot>
  </div>
</template>
<script>
import AwPrice from "../../atoms/AwPrice/AwPrice.vue";
import AwIcon from "../../atoms/AwIcon/AwIcon.vue";
import AwImage from "../../atoms/AwImage/AwImage.vue";
import AwCircleIcon from "../../atoms/AwCircleIcon/AwCircleIcon.vue";
import AwButton from "../../atoms/AwButton/AwButton.vue";
import AwQuantitySelector from "../../atoms/AwQuantitySelector/AwQuantitySelector.vue";
import AwLink from "../../atoms/AwLink/AwLink.vue";
import AwProperty from "../../atoms/AwProperty/AwProperty.vue";
export default {
  name: "AwCollectedProduct",
  components: {
    AwButton,
    AwIcon,
    AwImage,
    AwCircleIcon,
    AwPrice,
    AwQuantitySelector,
    AwLink,
    AwProperty,
  },
  model: {
    prop: "qty",
  },
  props: {
    image: {
      type: String,
      default: "",
    },
    imageWidth: {
      type: [Number, String],
      default: 140,
    },
    imageHeight: {
      type: [Number, String],
      default: 200,
    },
    title: {
      type: String,
      default: "",
    },
    regularPrice: {
      type: [Number, String],
      default: null,
    },
    specialPrice: {
      type: [Number, String],
      default: null,
    },
    qty: {
      type: [Number, String],
      default: 1,
    },
    minQty: {
      type: Number,
      default: null,
    },
    maxQty: {
      type: Number,
      default: null,
    },
    link: {
      type: [String, Object],
      default: null,
    },
    hasRemove: {
      type: Boolean,
      default: true,
    },
    hasMoreActions: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    componentIs() {
      return this.link ? "AwLink" : "div";
    },
    quantity() {
      return typeof this.qty === "string" ? Number(this.qty) : this.qty;
    },
  },
  methods: {
    removeHandler() {
      this.$emit("click:remove");
    },
    actionsHandler() {
      this.$emit("click:actions");
    },
  },
};
</script>

