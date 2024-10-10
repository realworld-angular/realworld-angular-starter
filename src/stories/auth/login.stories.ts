import { Meta, StoryObj } from '@storybook/angular';
import { LoginComponent } from '../../app/core/auth/login/login.component';

const meta: Meta = {
  title: 'Auth/Login',
  component: LoginComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<LoginComponent>;

export const Default: Story = {};
