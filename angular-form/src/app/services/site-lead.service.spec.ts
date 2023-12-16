import { TestBed } from '@angular/core/testing';

import { SiteLeadService } from './site-lead.service';

describe('SiteLeadService', () => {
  let service: SiteLeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteLeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
