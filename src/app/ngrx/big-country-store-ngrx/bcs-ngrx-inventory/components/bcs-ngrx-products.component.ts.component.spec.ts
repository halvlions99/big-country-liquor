import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcsNgrxProducts.Component.TsComponent } from './bcs-ngrx-products.component.ts.component';

describe('BcsNgrxProducts.Component.TsComponent', () => {
  let component: BcsNgrxProducts.Component.TsComponent;
  let fixture: ComponentFixture<BcsNgrxProducts.Component.TsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcsNgrxProducts.Component.TsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcsNgrxProducts.Component.TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
