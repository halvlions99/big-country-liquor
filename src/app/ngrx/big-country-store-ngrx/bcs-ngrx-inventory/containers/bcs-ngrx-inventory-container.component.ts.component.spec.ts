import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcsNgrxInventoryContainer.Component.TsComponent } from './bcs-ngrx-inventory-container.component.ts.component';

describe('BcsNgrxInventoryContainer.Component.TsComponent', () => {
  let component: BcsNgrxInventoryContainer.Component.TsComponent;
  let fixture: ComponentFixture<BcsNgrxInventoryContainer.Component.TsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcsNgrxInventoryContainer.Component.TsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcsNgrxInventoryContainer.Component.TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
