import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  input,
} from '@angular/core';
import { NgControl, Validators } from '@angular/forms';
import { AsyncPipe, LowerCasePipe, NgIf } from '@angular/common';
import { ErrorMessageDirective } from '../../directives/error-message.directive';
import { FieldDirective } from '../../directives/field.directive';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [AsyncPipe, NgIf, ErrorMessageDirective, LowerCasePipe],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent {
  label = input.required<string>();
  control = contentChild.required(NgControl);
  field = contentChild.required<FieldDirective>(FieldDirective);

  isRequired = computed(() =>
    this.control().control?.hasValidator(Validators.required),
  );
}
