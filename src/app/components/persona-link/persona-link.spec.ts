import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaLink } from './persona-link';

describe('PersonaLink', () => {
  let component: PersonaLink;
  let fixture: ComponentFixture<PersonaLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaLink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
