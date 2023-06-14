import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLiLichHenComponent } from './quan-li-lich-hen.component';

describe('QuanLiLichHenComponent', () => {
  let component: QuanLiLichHenComponent;
  let fixture: ComponentFixture<QuanLiLichHenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuanLiLichHenComponent]
    });
    fixture = TestBed.createComponent(QuanLiLichHenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
