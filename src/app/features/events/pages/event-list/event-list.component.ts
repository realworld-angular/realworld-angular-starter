import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EventListComponent {}
