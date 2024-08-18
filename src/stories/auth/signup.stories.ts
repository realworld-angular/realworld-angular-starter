import { Meta, StoryObj } from '@storybook/angular';
import { SignupComponent } from '../../app/core/auth/signup/signup.component';

const meta: Meta = {
  title: 'Auth/Signup',
  component: SignupComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<SignupComponent>;

export const Default: Story = {};
