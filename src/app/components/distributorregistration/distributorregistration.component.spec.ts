import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorregistrationComponent } from './distributorregistration.component';

describe('DistributorregistrationComponent', () => {
  let component: DistributorregistrationComponent;
  let fixture: ComponentFixture<DistributorregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistributorregistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistributorregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
