import { TestBed } from '@angular/core/testing';

import { FavorisStore } from './favoris-store';

describe('FavorisStore', () => {
  let service: FavorisStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavorisStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
