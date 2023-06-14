import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhGiaTamLiComponent } from './danh-gia-tam-li.component';

describe('DanhGiaTamLiComponent', () => {
  let component: DanhGiaTamLiComponent;
  let fixture: ComponentFixture<DanhGiaTamLiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DanhGiaTamLiComponent]
    });
    fixture = TestBed.createComponent(DanhGiaTamLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
