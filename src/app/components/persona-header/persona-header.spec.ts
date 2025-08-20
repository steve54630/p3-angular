import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaHeader } from './persona-header';

describe('PersonaHeader', () => {
  let component: PersonaHeader;
  let fixture: ComponentFixture<PersonaHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
