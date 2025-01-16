import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityNavigationComponent } from './community-navigation.component';

describe('CommunityNavigationComponent', () => {
  let component: CommunityNavigationComponent;
  let fixture: ComponentFixture<CommunityNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityNavigationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommunityNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
