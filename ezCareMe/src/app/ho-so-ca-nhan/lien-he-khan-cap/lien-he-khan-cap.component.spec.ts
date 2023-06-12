import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienHeKhanCapComponent } from './lien-he-khan-cap.component';

describe('LienHeKhanCapComponent', () => {
  let component: LienHeKhanCapComponent;
  let fixture: ComponentFixture<LienHeKhanCapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LienHeKhanCapComponent]
    });
    fixture = TestBed.createComponent(LienHeKhanCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
