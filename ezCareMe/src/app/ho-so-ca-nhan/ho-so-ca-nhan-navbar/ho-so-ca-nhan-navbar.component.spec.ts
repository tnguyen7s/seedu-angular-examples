import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoSoCaNhanNavbarComponent } from './ho-so-ca-nhan-navbar.component';

describe('HoSoCaNhanNavbarComponent', () => {
  let component: HoSoCaNhanNavbarComponent;
  let fixture: ComponentFixture<HoSoCaNhanNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoSoCaNhanNavbarComponent]
    });
    fixture = TestBed.createComponent(HoSoCaNhanNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
