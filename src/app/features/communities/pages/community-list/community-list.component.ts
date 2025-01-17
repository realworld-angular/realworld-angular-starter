import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-community-list',
    imports: [],
    templateUrl: './community-list.component.html',
    styleUrl: './community-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CommunityListComponent {}
