import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-event-list',
    imports: [],
    templateUrl: './event-list.component.html',
    styleUrl: './event-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class EventListComponent {}
