import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoSoCaNhanComponent } from './ho-so-ca-nhan/ho-so-ca-nhan.component';
import { CheckinCamXucComponent } from './checkin-cam-xuc/checkin-cam-xuc.component';
import { TimNhaThamVanComponent } from './tim-nha-tham-van/tim-nha-tham-van.component';
import { QuanLiLichHenComponent } from './quan-li-lich-hen/quan-li-lich-hen.component';
import { DanhGiaTamLiComponent } from './danh-gia-tam-li/danh-gia-tam-li.component';
import { TaiKhoanCuaBanComponent } from './tai-khoan-cua-ban/tai-khoan-cua-ban.component';
import { GoiDichVuComponent } from './goi-dich-vu/goi-dich-vu.component';
import { HoTroKhachHangComponent } from './ho-tro-khach-hang/ho-tro-khach-hang.component';

const routes: Routes = [
  {path: "user",
    children: [
      {path: "", component: HoSoCaNhanComponent, pathMatch: 'full'},
      {path: "check-in", component: CheckinCamXucComponent},
      {path: "sessions", component: QuanLiLichHenComponent},
      {path: "account", component: TaiKhoanCuaBanComponent},
      {path: "packages", component: GoiDichVuComponent},
      {path: "support", component: HoTroKhachHangComponent}
    ]
  },
  {path: "search-result", component: TimNhaThamVanComponent},
  {path: "danh-gia-tam-li", component: DanhGiaTamLiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
