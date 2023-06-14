import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaiKhoanCuaBanComponent } from './tai-khoan-cua-ban.component';

describe('TaiKhoanCuaBanComponent', () => {
  let component: TaiKhoanCuaBanComponent;
  let fixture: ComponentFixture<TaiKhoanCuaBanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaiKhoanCuaBanComponent]
    });
    fixture = TestBed.createComponent(TaiKhoanCuaBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
