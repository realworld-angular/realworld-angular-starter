import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ErrorMessageDirective } from '../../../../shared/directives/error-message.directive';
import { FieldDirective } from '../../../../shared/directives/field.directive';
import { FormFieldComponent } from '../../../../shared/components/form-field/form-field.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDirective } from '../../../../shared/directives/form.directive';
import { DatePipe, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { CommunityNavigationComponent } from '../../components/community-navigation/community-navigation.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-community-list',
  standalone: true,
  imports: [
    ErrorMessageDirective,
    FieldDirective,
    FormFieldComponent,
    FormsModule,
    ReactiveFormsModule,
    FormDirective,
    NgOptimizedImage,
    CommunityNavigationComponent,
    DatePipe,
    UpperCasePipe,
    RouterLink,
    RouterLinkActive,
  ],
  providers: [FormDirective],
  templateUrl: './community-list.component.html',
  styleUrl: './community-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CommunityListComponent {
  searchControl = new FormControl();

  communityLinks = signal(['link1', 'link2']);

  upcomingEvents = signal([
    {
      title: 'The Power of SSR and Non-Destructive Hydration',
      date: new Date(),
    },
    {
      title: 'The Power of SSR and Non-Destructive Hydration',
      date: new Date(),
    },
  ]);

  links = signal([
    { label: 'Home', url: '/home', icon: 'home' },
    { label: 'Events', url: '/home', icon: 'event' },
    { label: 'Members', url: '/about', icon: 'group' },
    { label: 'About', url: '/about', icon: 'info' },
  ]);

  posts = signal([
    {
      title: 'The Power of SSR and Non-Destructive Hydration',
      description: 'lorem',
    },
    {
      title: 'The Power of SSR and Non-Destructive Hydration',
      description: 'lorem',
    },
    {
      title: 'The Power of SSR and Non-Destructive Hydration',
      description: 'lorem',
    },
    {
      title: 'The Power of SSR and Non-Destructive Hydration',
      description: 'lorem',
    },
    {
      title: 'The Power of SSR and Non-Destructive Hydration',
      description: 'lorem',
    },
    {
      title: 'The Power of SSR and Non-Destructive Hydration',
      description: 'lorem',
    },
    {
      title: 'The Power of SSR and Non-Destructive Hydration',
      description: 'lorem',
    },
  ]);
}
