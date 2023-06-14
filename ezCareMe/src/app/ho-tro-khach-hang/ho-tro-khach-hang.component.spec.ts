import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoTroKhachHangComponent } from './ho-tro-khach-hang.component';

describe('HoTroKhachHangComponent', () => {
  let component: HoTroKhachHangComponent;
  let fixture: ComponentFixture<HoTroKhachHangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoTroKhachHangComponent]
    });
    fixture = TestBed.createComponent(HoTroKhachHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
