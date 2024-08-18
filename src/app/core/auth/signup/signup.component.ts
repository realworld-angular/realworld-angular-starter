import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { FormFieldComponent } from '../../../shared/components/form-field/form-field.component';
import { FieldDirective } from '../../../shared/directives/field.directive';
import { ErrorMessageDirective } from '../../../shared/directives/error-message.directive';
import { FormDirective } from '../../../shared/directives/form.directive';
import { toSignal } from '@angular/core/rxjs-interop';

interface FormType {
  username: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormFieldComponent,
    FieldDirective,
    ErrorMessageDirective,
    FormDirective,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent {
  form = new FormGroup<FormType>({
    username: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email], // TODO add custom pattern instead of email
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    confirmPassword: new FormControl('', {
      validators: [Validators.required, this.validatePasswordMatch()],
      nonNullable: true,
    }),
  });

  formValue = toSignal(this.form.controls.password.valueChanges, {
    initialValue: '',
  });

  passwordLevels = ['weak', 'fair', 'good', 'strong', 'very strong'];
  passwordStrength = computed(() => {
    const password = this.formValue();

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[\W_]/.test(password)) strength++;

    return strength;
  });

  submit(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      // TODO
    }
  }

  validatePasswordMatch(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.parent) {
        return null;
      }

      const form = control.parent as FormGroup<FormType>;

      const password = form.value.password;
      const confirmPassword = form.value.confirmPassword;

      return password === confirmPassword ? null : { passwordMismatch: true };
    };
  }
}
