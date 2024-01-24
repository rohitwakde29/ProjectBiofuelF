import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanymateriallistComponent } from './companymateriallist.component';

describe('CompanymateriallistComponent', () => {
  let component: CompanymateriallistComponent;
  let fixture: ComponentFixture<CompanymateriallistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanymateriallistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanymateriallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
