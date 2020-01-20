import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcsNgrxInventoryContainerComponent } from './bcs-ngrx-inventory-container.component';

describe('BcsNgrxInventoryContainerComponent', () => {
  let component: BcsNgrxInventoryContainerComponent;
  let fixture: ComponentFixture<BcsNgrxInventoryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcsNgrxInventoryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcsNgrxInventoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
