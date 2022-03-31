<template>
  <div class="aw-confirm-order">
    <slot name="heading" v-bind="{ orderTitle, orderTitleLevel }">
      <AwHeading
        :title="orderTitle"
        :level="orderTitleLevel"
        class="
          aw-heading--left aw-heading--no-underline
          aw-confirm-order__heading
        "
      />
    </slot>
    <slot name="table" v-bind="{ tableHeaders, orderItems }">
      <AwTable class="aw-table--bordered aw-confirm-order__table">
        <AwTableHeading class="aw-confirm-order__table-row">
          <AwTableHeader
            class="aw-confirm-order__table-header aw-confirm-order__table-image"
            >Item</AwTableHeader
          >
          <AwTableHeader
            v-for="tableHeader in tableHeaders"
            :key="tableHeader"
            class="aw-confirm-order__table-header"
            :class="{
              'aw-confirm-order__table-description':
                tableHeader === 'Description',
            }"
            >{{ tableHeader }}
          </AwTableHeader>
        </AwTableHeading>
        <AwTableRow
          v-for="(product, index) in orderItems"
          :key="index"
          class="aw-confirm-order__table-row"
          data-testid="product-table-row"
        >
          <AwTableData class="aw-confirm-order__table-image">
            <AwImage
              v-if="!isMobile"
              :src="product.image"
              :alt="product.title"
              :width="82"
              :height="124"
              data-testid="product-image-table-data"
            />
            <AwImage
              v-else
              :src="product.image"
              :alt="product.title"
              :width="44"
              :height="66"
              data-testid="product-image-table-data"
            />
          </AwTableData>
          <AwTableData class="aw-confirm-order__table-data"
            >{{ product.configuration[0].value }}
          </AwTableData>
          <AwTableData
            class="aw-confirm-order__table-description"
            data-testid="product-description-table-data"
          >
            <div class="aw-confirm-order__product-title">
              {{ product.title }}
            </div>
            <div class="aw-confirm-order__product-sku">{{ product.sku }}</div>
          </AwTableData>
          <AwTableData class="aw-confirm-order__table-data">{{
            product.qty
          }}</AwTableData>

          <AwTableData class="aw-confirm-order__table-data"
            >{{ product.configuration[1].value }}
          </AwTableData>
          <AwTableData class="aw-confirm-order__table-data">
            <AwPrice
              :regular="product.price.regular"
              :special="product.price.special"
              class="aw-confirm-order__product-price"
            />
          </AwTableData>
        </AwTableRow>
      </AwTable>
    </slot>
    <div class="aw-confirm-order__totals">
      <slot
        name="summary"
        v-bind="{ shippingMethod, subtotal, total, propertiesNames }"
      >
        <AwProperty
          :name="propertiesNames[0]"
          :value="subtotal"
          class="
            aw-property--full-width
            aw-confirm-order__property aw-confirm-order__property-subtotal
          "
        >
        </AwProperty>
        <AwProperty
          :name="propertiesNames[1]"
          :value="shippingMethod.price"
          class="aw-property--full-width aw-confirm-order__property"
        >
        </AwProperty>
        <AwDivider class="aw-confirm-order__divider" />
        <AwProperty
          :name="propertiesNames[2]"
          :value="total"
          class="
            aw-property--full-width aw-property--large
            aw-confirm-order__property-total
          "
        >
        </AwProperty>
        <slot name="checkbox" v-bind="{ terms }">
          <AwCheckbox
            v-model="terms"
            name="terms"
            class="aw-confirm-order__totals-terms"
          >
            <template #label>
              <div class="aw-checkbox__label">
                I agree to <AwLink href="#">Terms and conditions</AwLink>
              </div>
            </template>
          </AwCheckbox>
        </slot>
      </slot>
    </div>
  </div>
</template>
<script>
import AwHeading from "../../atoms/AwHeadings/AwHeading.vue";
import AwTable from "../../organisms/AwTable/AwTable.vue";
import AwCheckbox from "../../molecules/AwCheckbox/AwCheckbox.vue";
import AwDivider from "../../atoms/AwDivider/AwDivider.vue";
import AwImage from "../../atoms/AwImage/AwImage.vue";
import AwPrice from "../../atoms/AwPrice/AwPrice.vue";
import AwProperty from "../../atoms/AwProperty/AwProperty.vue";
import AwLink from "../../atoms/AwLink/AwLink.vue";
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../utilities/mobile-observer";
export default {
  name: "AwConfirmOrder",
  components: {
    AwHeading,
    AwTable,
    AwCheckbox,
    AwDivider,
    AwImage,
    AwPrice,
    AwProperty,
    AwLink,
  },
  props: {
    orderTitle: {
      type: String,
      default: "Order details",
    },
    orderTitleLevel: {
      type: Number,
      default: 2,
    },
    order: {
      type: Object,
      default: () => ({}),
    },
    propertiesNames: {
      type: Array,
      default: () => ["Subtotal", "Shipping", "Total price"],
    },
    tableHeaders: {
      type: Array,
      default: () => ["Size", "Description", "Quantity", "Colour", "Amount"],
    },
  },
  data() {
    return {
      terms: false,
    };
  },
  computed: {
    orderItems() {
      return this.order.orderItems;
    },
    shipping() {
      return this.order.shipping || {};
    },
    shippingMethod() {
      return this.shipping.shippingMethod || { price: "" };
    },
    subtotal() {
      const orderItems = this.orderItems;
      const subtotal = this.orderItems
        ? orderItems.reduce((previous, current) => {
            const qty = current.qty;
            const price = current.price.special
              ? current.price.special
              : current.price.regular;
            const total = qty * parseFloat(price.replace("$", ""));
            return previous + total;
          }, 0)
        : 0;
      return "$" + subtotal.toFixed(2);
    },
    total() {
      const subtotal = parseFloat(this.subtotal.replace("$", ""));
      const shipping = parseFloat(this.shippingMethod.price.replace("$", ""));
      const total = subtotal + (isNaN(shipping) ? 0 : shipping);
      return "$" + total.toFixed(2);
    },
    ...mapMobileObserver(),
  },
  beforeDestroy() {
    unMapMobileObserver();
  },
};
</script>

