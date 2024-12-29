import { Component, inject } from '@angular/core';
import { Apiresponse, Hospital, User } from './core/classes/hospitalModel';
import { HospitalService } from './core/service/hospital.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userObj : User = new User();

  LoggedStorageData :Hospital = new Hospital();

  private hospitalService = inject(HospitalService)
  constructor(){
    const loggedData = localStorage.getItem('PractoLogin');
    if(loggedData !=null){
      this.LoggedStorageData = JSON.parse(loggedData);
    }
  }
  ShowLogin(){
    const model= document.getElementById('loginmodel');
    if(model != null){
      model.style.display='block'
    }
  }
  CloseLogin(){
    const model= document.getElementById('loginmodel');
    if(model != null){
      model.style.display='none'
    }
  }
  onLogin(){
    this.hospitalService.login(this.userObj).subscribe((res:Apiresponse)=>{
      if(res.Result){
        this.LoggedStorageData = res.data;
        localStorage.setItem('PractoLogin',JSON.stringify(res.data))
        this.CloseLogin();
      }else{
         alert(res.message);
      }
    })
  }
  logoff() {
    localStorage.removeItem('PractoLogin');
    this.LoggedStorageData = new Hospital();

  }
}
