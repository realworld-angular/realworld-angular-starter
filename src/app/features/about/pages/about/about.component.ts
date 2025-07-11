import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `<p>about works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutComponent {}
