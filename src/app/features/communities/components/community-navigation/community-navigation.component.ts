import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-community-navigation',
  standalone: true,
  imports: [FormsModule, NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './community-navigation.component.html',
  styleUrl: './community-navigation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunityNavigationComponent {
  links = signal([
    { label: 'Home', url: '/home', icon: 'add' },
    { label: 'About', url: '/about', icon: 'add' },
    { label: 'Contact', url: '/contact', icon: 'add' },
  ]);
}
