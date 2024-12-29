import { Component , OnInit} from '@angular/core';
import { Apiresponse, Appointmnet } from '../../core/classes/hospitalModel';
import { AppointmentService } from '../../core/service/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit{
    newAppointment :Appointmnet = new Appointmnet();
    AppointmentList:Appointmnet[] = [];
    constructor(private AppointmentSrv:AppointmentService){
      const loggedData = localStorage.getItem('PractoLogin');
      if(loggedData != null){
        this.newAppointment.hospitalId= JSON.parse(loggedData).hospitalId;
      }
    }
    ngOnInit(): void {
      this.getallappoints();
    }
    bookAppointment() {
      this.AppointmentSrv.newAppointment(this.newAppointment).subscribe((res:Apiresponse)=>{
        if(res.Result){
          alert('appointment created');
          this.getallappoints();
        }else{
           alert(res.message)
        }
      })
    }

    getallappoints(){
      this.AppointmentSrv.getappointmentbyid(this.newAppointment.hospitalId).subscribe((Res:Apiresponse)=>{
        this.AppointmentList = Res.data
      })
    }
    
}
