import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinCamXucComponent } from './checkin-cam-xuc.component';

describe('CheckinCamXucComponent', () => {
  let component: CheckinCamXucComponent;
  let fixture: ComponentFixture<CheckinCamXucComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckinCamXucComponent]
    });
    fixture = TestBed.createComponent(CheckinCamXucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
