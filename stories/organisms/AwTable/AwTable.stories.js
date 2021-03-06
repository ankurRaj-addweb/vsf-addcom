import AwTable from "./AwTable.vue";
import AwButton from "../../atoms/AwButton/AwButton.vue"; 

export default {
  title: "Components/Organisms/table",
  component: AwTable,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "table-width": { value: "100%", control: "text" },
      "table-border-spacing": { value: "0", control: "text" },
      "table-heading-padding": { value: "", control: "text" },
      "table-heading-background": { value: "", control: "text" },
      "table-border-heading": {
        value:
          "var(--table-border-heading-style, solid) var(--table-border-heading-color, var(--c-primary))",
        control: "text",
      },
      "table-border-heading-width": { value: "0 0 2px 0", control: "text" },
      "table-header-font": { value: "", control: "text" },
      "table-header-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "table-header-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "table-header-font-line-height": { value: "1.4", control: "text" },
      "table-header-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "table-header-color": { value: "var(--c-text)", control: "text" },
      "table-row-padding": { value: "", control: "text" },
      "table-row-background": { value: "", control: "text" },
      "table-row-box-shadow": { value: "", control: "text" },
      "table-row-border": { value: "", control: "text" },
      "table-row-border-width": { value: "", control: "text" },
      "table-data-color": { value: "var(--c-dark-variant)", control: "text" },
      "table-data-font": { value: "", control: "text" },
      "table-data-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "table-data-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "table-data-font-line-height": { value: "1.6", control: "text" },
      "table-data-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },  
      "table-column-flex": { value: "", control: "text" },
      "table-column-padding": { value: "0", control: "text" },
      "table-column-text-align": { value: "left", control: "text" },
      "_table-column-order": { value: "", control: "text" },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "Table component with inner rows, headers and data. Built from main component - AwTable and internal components - AwTableData, AwTableHeader, AwTableHeading, AwTableRow.",
      },
    },
    layout: "fullscreen",
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: ["", "Aw-table--no-border"],
      },
      table: {
        category: "CSS Modifiers",
      },
      description: "CSS classes to modify component styling",
    },
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `AwTable` component. Use this slot to pass data to your table",
    },
    "default ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `AwTableData` component. Use this slot to pass data to `<td>` tag",
    },
    "default  ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `AwTableHeader` component. Use this slot to pass data to `<th>` tag",
    },
    "default   ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `AwTableHeading` component. Use this slot to pass data to `<tr>` tag in `<thead>` tag",
    },
    "default    ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `AwTableRow` component. Use this slot to pass data to `<tr>` tag in `<tbody>` tag",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AwTable, AwButton },
  props: Object.keys(argTypes),
  data() {
    return {
      tableHeaders: [
        "Order ID",
        "Pay. date",
        "Pay. method",
        "Amount",
        "Status",
      ],
      tableRows: [
        ["#35767", "4th Nov", "Paypal", "12.00$", "Finalise"],
        ["#35767", "4th Nov", "Visa", "15.00$", "In process"],
        ["#35767", "4th Nov", "Paypal", "12.00$", "Finalise"],
      ],
      status: {
        Finalise: "text-success",
        "In process": "text-warning",
      },
    };
  },
  template: `
  <AwTable :class="classes">
    <AwTableHeading>
      <AwTableHeader 
          v-for="header in tableHeaders" 
          :key="header"
      >{{header}}</AwTableHeader>
      <AwTableHeader><AwButton class="Aw-button--text">Download all</AwButton></AwTableHeader>
    </AwTableHeading>
    <AwTableRow 
      v-for="(row, key) in tableRows"
      :key="key"
    > 
      <AwTableData
        v-for="data in row"
        :key="data"
        :class="status[data]">{{data}}</AwTableData>
        <AwTableData><AwButton class="Aw-button--text">View details</AwButton></AwTableData>
    </AwTableRow>
  </AwTable>`,
});

export const Common = Template.bind({});
Common.args = {};

export const WithoutBorder = Template.bind({});
WithoutBorder.args = {
  classes: "aw-table--no-border",
};
