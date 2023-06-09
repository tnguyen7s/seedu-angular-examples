import { Component } from '@angular/core';

export interface Stakeholder{
  name: string;
  role: string;
  organization: string;
  email: string;
}

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent {
  stakeholderInput: Stakeholder = {
    name: '',
    role: '',
    organization: '',
    email: ''
  }

  onSubmitForm(){
    console.log('sending info to backend', this.stakeholderInput);

    // clear form
    this.stakeholderInput = {
      name: '',
      role: '',
      organization: '',
      email: ''
    }
  }
}
