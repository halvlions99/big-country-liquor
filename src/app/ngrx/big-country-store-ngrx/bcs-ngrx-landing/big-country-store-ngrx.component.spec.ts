import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCountryStoreNgrxComponent } from './big-country-store-ngrx.component';

describe('BigCountryStoreNgrxComponent', () => {
  let component: BigCountryStoreNgrxComponent;
  let fixture: ComponentFixture<BigCountryStoreNgrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigCountryStoreNgrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigCountryStoreNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
