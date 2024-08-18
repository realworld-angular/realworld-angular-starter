import { Directive } from '@angular/core';

/*
  Styles form error messages and create reference for FieldComponent ContentChildren
 */
@Directive({
  selector: 'app-error-message',
  standalone: true,
  host: {
    class: 'field-error-message',
  },
})
export class ErrorMessageDirective {}
