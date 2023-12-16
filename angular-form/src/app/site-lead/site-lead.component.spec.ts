import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLeadComponent } from './site-lead.component';

describe('SiteLeadComponent', () => {
  let component: SiteLeadComponent;
  let fixture: ComponentFixture<SiteLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiteLeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiteLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
