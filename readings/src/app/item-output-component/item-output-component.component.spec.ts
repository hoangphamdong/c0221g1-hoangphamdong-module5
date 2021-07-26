import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOutputComponentComponent } from './item-output-component.component';

describe('ItemOutputComponentComponent', () => {
  let component: ItemOutputComponentComponent;
  let fixture: ComponentFixture<ItemOutputComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemOutputComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemOutputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
