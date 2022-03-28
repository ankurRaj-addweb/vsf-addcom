import AwArrow from './AwArrow.vue';
export default {
  title: 'Example/AwArrow',
  component: AwArrow,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AwArrow },
  template: '<aw-arrow @onClick="onClick" v-bind="$props" />',
});
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};