import { Story, Meta } from '@storybook/react';
import { BottomNav } from './bottom-nav';

export default {
  component: BottomNav,
  title: 'BottomNav',
} as Meta;

const Template: Story = (args) => <BottomNav {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
