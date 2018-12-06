import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionOnPushPlusComponent } from './change-detection-on-push-plus.component';

describe('ChangeDetectionOnPushPlusComponent', () => {
  let component: ChangeDetectionOnPushPlusComponent;
  let fixture: ComponentFixture<ChangeDetectionOnPushPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetectionOnPushPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionOnPushPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
