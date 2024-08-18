import { Directive, input } from '@angular/core';

@Directive({
  selector: 'form[formGroup]',
  standalone: true,
})
export class FormDirective {
  isOptionalEnforced = input<boolean>();
}
