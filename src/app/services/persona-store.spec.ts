import { TestBed } from '@angular/core/testing';

import { PersonaStore } from './persona-store';

describe('PersonaStore', () => {
  let service: PersonaStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
