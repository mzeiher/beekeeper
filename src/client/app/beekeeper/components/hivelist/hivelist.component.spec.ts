import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HivelistComponent } from './hivelist.component';

describe('HivelistComponent', () => {
  let component: HivelistComponent;
  let fixture: ComponentFixture<HivelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HivelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HivelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
