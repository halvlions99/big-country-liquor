import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcsSubjectProductsComponent } from './bcs-subject-products.component';

describe('BcsSubjectProductsComponent', () => {
  let component: BcsSubjectProductsComponent;
  let fixture: ComponentFixture<BcsSubjectProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcsSubjectProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcsSubjectProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
