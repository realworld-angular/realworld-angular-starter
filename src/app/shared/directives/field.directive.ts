import { Directive, HostListener, signal } from '@angular/core';

@Directive({
  selector: '[app-field]',
})
export class FieldDirective {
  isFocus = signal(false);

  @HostListener('focus')
  onFocus() {
    this.isFocus.set(true);
  }

  @HostListener('blur')
  onBlur() {
    this.isFocus.set(false);
  }
}
