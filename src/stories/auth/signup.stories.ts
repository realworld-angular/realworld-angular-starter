import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { SignupComponent } from '../../app/core/auth/signup/signup.component';
import { AuthService } from '../../app/core/auth/auth.service';

const meta: Meta = {
  title: 'Auth/Signup',
  component: SignupComponent,
  decorators: [
    moduleMetadata({
      providers: [AuthService],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<SignupComponent>;

export const Default: Story = {};
