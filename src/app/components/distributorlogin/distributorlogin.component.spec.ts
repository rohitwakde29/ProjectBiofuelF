import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorloginComponent } from './distributorlogin.component';

describe('DistributorloginComponent', () => {
  let component: DistributorloginComponent;
  let fixture: ComponentFixture<DistributorloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistributorloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistributorloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
