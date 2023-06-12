import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucKhoeTheChatComponent } from './suc-khoe-the-chat.component';

describe('SucKhoeTheChatComponent', () => {
  let component: SucKhoeTheChatComponent;
  let fixture: ComponentFixture<SucKhoeTheChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucKhoeTheChatComponent]
    });
    fixture = TestBed.createComponent(SucKhoeTheChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
