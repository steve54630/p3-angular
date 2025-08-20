import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistTab } from './resist-tab';

describe('ResistTab', () => {
  let component: ResistTab;
  let fixture: ComponentFixture<ResistTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResistTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResistTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
