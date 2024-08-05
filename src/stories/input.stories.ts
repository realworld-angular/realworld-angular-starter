import {
  argsToTemplate,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { FormFieldComponent } from '../app/shared/components/form-field/form-field.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FieldDirective } from '../app/shared/directives/field.directive';

const meta: Meta = {
  title: 'Example/Input',
  component: FormFieldComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, FieldDirective],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    control: {
      table: {
        disable: true,
      },
    },
    field: {
      table: {
        disable: true,
      },
    },
    isRequired: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => ({
    props: {
      ...args,
      formControl: new FormControl(''),
    },
    template: ` <app-form-field ${argsToTemplate(args)}>
              <input app-field type="text" [formControl]="formControl" />
              </app-form-field>
      `,
  }),
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Username',
  },
};

export const Required: Story = {
  args: {
    label: 'Username',
  },
  render: (args) => ({
    props: {
      ...args,
      formControl: new FormControl('', Validators.required),
    },
    template: ` <app-form-field ${argsToTemplate(args)}>
              <input app-field type="text" [formControl]="formControl" />
              </app-form-field>
      `,
  }),
};
