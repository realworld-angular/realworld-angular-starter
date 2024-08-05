import { Directive } from '@angular/core';

/*
  Styles form error messages and create reference for FieldComponent ContentChildren
 */
@Directive({
  selector: 'app-error-message',
  standalone: true,
  host: {
    class: 'error-message',
  },
})
export class ErrorMessageDirective {}
