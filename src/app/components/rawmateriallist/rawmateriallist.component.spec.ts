import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawmateriallistComponent } from './rawmateriallist.component';

describe('RawmateriallistComponent', () => {
  let component: RawmateriallistComponent;
  let fixture: ComponentFixture<RawmateriallistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RawmateriallistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RawmateriallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
