<template>
  <div class="aw-card">
    <AwImage
      :width="imageWidth"
      :height="imageHeight"
      :src="image"
      :alt="title"
      class="aw-card__image"
    />
    <slot name="details" v-bind="{ title, description, titleLevel }">
      <div class="aw-card__details">
        <AwHeading
          :title-level="titleLevel"
          :title="title"
          class="aw-card__title"
        />
        <p class="aw-card__description">
          {{ description }}
        </p>
      </div>
    </slot>
    <slot name="action">
      <AwButton :link="link" class="aw-card__action" v-on="$listeners">
        {{ buttonText }}
      </AwButton>
    </slot>
  </div>
</template>
<script>
import AwButton from "../../atoms/AwButton/AwButton.vue";
import AwHeading from "../../atoms/AwHeadings/AwHeading.vue";
import AwImage from "../../atoms/AwImage/AwImage.vue";

export default {
  name: "AwCard",
  components: {
    AwButton,
    AwHeading,
    AwImage,
  },
  props: {
    image: {
      type: String,
      default: "",
    },
    imageWidth: {
      type: [Number, String],
      required: true,
    },
    imageHeight: {
      type: [Number, String],
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
    titleLevel: {
      type: Number,
      default: 3,
    },
    description: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: null,
    },
    buttonText: {
      type: String,
      default: "",
    },
  },
};
</script>
