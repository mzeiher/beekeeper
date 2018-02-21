import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiariesComponent } from './apiaries.component';

describe('CollectionComponent', () => {
  let component: ApiariesComponent;
  let fixture: ComponentFixture<ApiariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
