import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcsNgrxProductsComponent } from './bcs-ngrx-products.component';

describe('BcsNgrxProductsComponent', () => {
  let component: BcsNgrxProductsComponent;
  let fixture: ComponentFixture<BcsNgrxProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcsNgrxProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcsNgrxProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
