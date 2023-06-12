import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinhTrangSuDungChatComponent } from './tinh-trang-su-dung-chat.component';

describe('TinhTrangSuDungChatComponent', () => {
  let component: TinhTrangSuDungChatComponent;
  let fixture: ComponentFixture<TinhTrangSuDungChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TinhTrangSuDungChatComponent]
    });
    fixture = TestBed.createComponent(TinhTrangSuDungChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
