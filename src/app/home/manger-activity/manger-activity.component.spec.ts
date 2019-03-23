import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangerActivityComponent } from './manger-activity.component';

describe('MangerActivityComponent', () => {
  let component: MangerActivityComponent;
  let fixture: ComponentFixture<MangerActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangerActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangerActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
