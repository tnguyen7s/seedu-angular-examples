import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoSoCaNhanComponent } from './ho-so-ca-nhan.component';

describe('HoSoCaNhanComponent', () => {
  let component: HoSoCaNhanComponent;
  let fixture: ComponentFixture<HoSoCaNhanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoSoCaNhanComponent]
    });
    fixture = TestBed.createComponent(HoSoCaNhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
