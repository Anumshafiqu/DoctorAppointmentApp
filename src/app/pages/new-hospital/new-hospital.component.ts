import { Component } from '@angular/core';
import { Apiresponse, Hospital } from '../../core/classes/hospitalModel';
import { HospitalService } from '../../core/service/hospital.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-hospital',
  templateUrl: './new-hospital.component.html',
  styleUrl: './new-hospital.component.css'
})
export class NewHospitalComponent {
public hospitalObj :Hospital = new Hospital();
private subscriptions:Subscription [] = [];
constructor(private hospitalService:HospitalService) {}
onRegister(){
  this.subscriptions.push(
    this.hospitalService.registerHospital(this.hospitalObj).subscribe((res:Apiresponse)=>{
      if(res.Result){
         alert("resgistrtion Success")
      }else{
        //  alert(res.message)
      }
    }, error =>{
      alert(JSON.stringify(error))
    })
    
  )
}
}
