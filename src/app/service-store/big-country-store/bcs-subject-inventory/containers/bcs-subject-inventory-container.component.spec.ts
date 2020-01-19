import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcsSubjectInventoryContainerComponent } from './bcs-subject-inventory-container.component';

describe('BcsSubjectInventoryContainerComponent', () => {
  let component: BcsSubjectInventoryContainerComponent;
  let fixture: ComponentFixture<BcsSubjectInventoryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcsSubjectInventoryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcsSubjectInventoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
