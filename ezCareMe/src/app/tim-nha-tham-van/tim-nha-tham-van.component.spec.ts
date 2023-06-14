import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimNhaThamVanComponent } from './tim-nha-tham-van.component';

describe('TimNhaThamVanComponent', () => {
  let component: TimNhaThamVanComponent;
  let fixture: ComponentFixture<TimNhaThamVanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimNhaThamVanComponent]
    });
    fixture = TestBed.createComponent(TimNhaThamVanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
