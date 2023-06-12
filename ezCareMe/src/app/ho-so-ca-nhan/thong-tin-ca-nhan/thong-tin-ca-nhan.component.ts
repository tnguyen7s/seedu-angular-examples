import { Component } from '@angular/core';

export interface GeneralUserInfo{
  name: string;
  birthdate: Date;
  gender: string;
  phone: string;
  email: string;
  marriageStatus: string;
  job: string;
  edu: string;
  address: string;
}

@Component({
  selector: 'app-thong-tin-ca-nhan',
  templateUrl: './thong-tin-ca-nhan.component.html',
  styleUrls: ['./thong-tin-ca-nhan.component.css']
})
export class ThongTinCaNhanComponent {
  showForm = false;
  user = {
    name: '',
    birthdate: null,
    gender: '',
    phone: '',
    email:'',
    marriageStatus: '',
    job: '',
    edu: '',
    address: ''
  }
  showInputError = false;

  onOpenForm(){
    this.showForm = true;
  }

  onSaveForm(){
    if (!this.user.name || !this.user.birthdate || !this.user.gender || !this.user.email ||!this.user.phone){
      this.showInputError = true;
      return;
    }

    // 1. save form
    console.log('save form', this.user);

    // 2. set showform=false
    this.showForm = false;
  }
}
