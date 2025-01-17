import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ErrorMessageDirective } from '../../../shared/directives/error-message.directive';
import { FieldDirective } from '../../../shared/directives/field.directive';
import { FormDirective } from '../../../shared/directives/form.directive';
import { FormFieldComponent } from '../../../shared/components/form-field/form-field.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HintMessageDirective } from '../../../shared/directives/hint-message.directive';
import { LoginPayload } from '../models/login-payload.model';

interface FormType {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
    selector: 'app-login',
    imports: [
        AsyncPipe,
        ErrorMessageDirective,
        FieldDirective,
        FormDirective,
        FormFieldComponent,
        FormsModule,
        HintMessageDirective,
        ReactiveFormsModule,
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  readonly submitForm = output<LoginPayload>();

  form = new FormGroup<FormType>({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email], // TODO add custom pattern instead of email
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  submit(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.submitForm.emit(this.form.value as LoginPayload);
    }
  }
}
