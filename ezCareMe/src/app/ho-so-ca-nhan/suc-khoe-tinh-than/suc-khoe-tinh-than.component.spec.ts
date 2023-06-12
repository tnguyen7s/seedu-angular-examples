import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucKhoeTinhThanComponent } from './suc-khoe-tinh-than.component';

describe('SucKhoeTinhThanComponent', () => {
  let component: SucKhoeTinhThanComponent;
  let fixture: ComponentFixture<SucKhoeTinhThanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucKhoeTinhThanComponent]
    });
    fixture = TestBed.createComponent(SucKhoeTinhThanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
