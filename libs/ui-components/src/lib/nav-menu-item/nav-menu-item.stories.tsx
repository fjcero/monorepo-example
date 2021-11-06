import { Story, Meta } from '@storybook/react';
import { NavMenuItem, NavMenuItemProps } from './nav-menu-item';

export default {
  component: NavMenuItem,
  title: 'NavMenuItem',
} as Meta;

const Template: Story<NavMenuItemProps> = (args) => <NavMenuItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
