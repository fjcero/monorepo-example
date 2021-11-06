import { Story, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from './avatar';

export default {
  component: Avatar,
  title: 'Avatar',
  argTypes: {
    onClick: { action: 'onClick executed!' },
  },
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
