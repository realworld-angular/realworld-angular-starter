import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { VerticalLink } from '../../models/vertical-link.model';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-vertical-nav',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './vertical-nav.component.html',
  styleUrl: './vertical-nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerticalNavComponent {
  links = input.required<VerticalLink[]>();
}
