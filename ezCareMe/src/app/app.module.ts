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

@NgModule({
  declarations: [
    AppComponent,
    HoSoCaNhanComponent,
    ThongTinCaNhanComponent,
    LienHeKhanCapComponent,
    SucKhoeTinhThanComponent,
    SucKhoeTheChatComponent,
    TinhTrangSuDungChatComponent,
    HoSoCaNhanNavbarComponent
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
