import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoiDichVuComponent } from './goi-dich-vu.component';

describe('GoiDichVuComponent', () => {
  let component: GoiDichVuComponent;
  let fixture: ComponentFixture<GoiDichVuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoiDichVuComponent]
    });
    fixture = TestBed.createComponent(GoiDichVuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
