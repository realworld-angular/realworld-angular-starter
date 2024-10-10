import { Directive, input } from '@angular/core';

@Directive({
  selector: 'form[formGroup]',
  standalone: true,
})
export class FormDirective {
  // Error: NG0203: inputFunction() can only be used within an injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext`. Find more at https://angular.dev/errors/NG0203
  isOptionalEnforced = input<boolean>();
}
