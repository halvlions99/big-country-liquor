import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCountryStoreComponent } from './big-country-store.component';

describe('BigCountryStoreComponent', () => {
  let component: BigCountryStoreComponent;
  let fixture: ComponentFixture<BigCountryStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigCountryStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigCountryStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
