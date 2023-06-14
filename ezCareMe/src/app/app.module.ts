import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoSoCaNhanComponent } from './ho-so-ca-nhan/ho-so-ca-nhan.component';
import { ThongTinCaNhanComponent } from './ho-so-ca-nhan/thong-tin-ca-nhan/thong-tin-ca-nhan.component';
import { LienHeKhanCapComponent } from './ho-so-ca-nhan/lien-he-khan-cap/lien-he-khan-cap.component';
import { SucKhoeTinhThanComponent } from './ho-so-ca-nhan/suc-khoe-tinh-than/suc-khoe-tinh-than.component';
import { SucKhoeTheChatComponent } from './ho-so-ca-nhan/suc-khoe-the-chat/suc-khoe-the-chat.component';
import { TinhTrangSuDungChatComponent } from './ho-so-ca-nhan/tinh-trang-su-dung-chat/tinh-trang-su-dung-chat.component';
import { HoSoCaNhanNavbarComponent } from './ho-so-ca-nhan/ho-so-ca-nhan-navbar/ho-so-ca-nhan-navbar.component';
import { FormsModule } from '@angular/forms';
import { CheckinCamXucComponent } from './checkin-cam-xuc/checkin-cam-xuc.component';
import { TimNhaThamVanComponent } from './tim-nha-tham-van/tim-nha-tham-van.component';
import { QuanLiLichHenComponent } from './quan-li-lich-hen/quan-li-lich-hen.component';
import { DanhGiaTamLiComponent } from './danh-gia-tam-li/danh-gia-tam-li.component';
import { TaiKhoanCuaBanComponent } from './tai-khoan-cua-ban/tai-khoan-cua-ban.component';
import { GoiDichVuComponent } from './goi-dich-vu/goi-dich-vu.component';
import { HoTroKhachHangComponent } from './ho-tro-khach-hang/ho-tro-khach-hang.component';
import { MainLeftNavbarComponent } from './main-left-navbar/main-left-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HoSoCaNhanComponent,
    ThongTinCaNhanComponent,
    LienHeKhanCapComponent,
    SucKhoeTinhThanComponent,
    SucKhoeTheChatComponent,
    TinhTrangSuDungChatComponent,
    HoSoCaNhanNavbarComponent,
    CheckinCamXucComponent,
    TimNhaThamVanComponent,
    QuanLiLichHenComponent,
    DanhGiaTamLiComponent,
    TaiKhoanCuaBanComponent,
    GoiDichVuComponent,
    HoTroKhachHangComponent,
    MainLeftNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
