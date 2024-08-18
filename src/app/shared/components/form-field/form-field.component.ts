import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  contentChild,
  contentChildren,
  inject,
  input,
} from '@angular/core';
import { NgControl, Validators } from '@angular/forms';
import {
  AsyncPipe,
  LowerCasePipe,
  NgIf,
  NgOptimizedImage,
} from '@angular/common';
import { ErrorMessageDirective } from '../../directives/error-message.directive';
import { FieldDirective } from '../../directives/field.directive';
import { FormDirective } from '../../directives/form.directive';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    ErrorMessageDirective,
    LowerCasePipe,
    NgOptimizedImage,
  ],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent implements AfterViewChecked {
  cdr = inject(ChangeDetectorRef);

  label = input.required<string>();
  control = contentChild.required(NgControl);
  field = contentChild.required<FieldDirective>(FieldDirective);
  isOptionalEnforced = inject(FormDirective).isOptionalEnforced;
  extraErrorMessages = contentChildren(ErrorMessageDirective);

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  isRequired = computed(() =>
    this.control().control?.hasValidator(Validators.required),
  );
}
