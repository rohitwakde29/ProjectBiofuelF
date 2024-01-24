import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliermaterialdetailsComponent } from './suppliermaterialdetails.component';

describe('SuppliermaterialdetailsComponent', () => {
  let component: SuppliermaterialdetailsComponent;
  let fixture: ComponentFixture<SuppliermaterialdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuppliermaterialdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuppliermaterialdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
