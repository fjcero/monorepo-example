import { Story, Meta } from '@storybook/react';
import { BottomNav, BottomNavProps } from './bottom-nav';

export default {
  component: BottomNav,
  title: 'BottomNav',
} as Meta;

const Template: Story<BottomNavProps> = (args) => <BottomNav {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
