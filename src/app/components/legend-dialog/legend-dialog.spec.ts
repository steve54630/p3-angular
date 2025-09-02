import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendDialog } from './legend-dialog';

describe('LegendDialog', () => {
  let component: LegendDialog;
  let fixture: ComponentFixture<LegendDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegendDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegendDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
