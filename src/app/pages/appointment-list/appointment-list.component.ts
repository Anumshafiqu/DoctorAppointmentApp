import { Component, OnInit } from '@angular/core';
import { Apiresponse, Appointmnet ,User } from '../../core/classes/hospitalModel';
import { AppointmentService } from '../../core/service/appointment.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {
  // newAppointment: Appointmnet = new Appointmnet();
  // AppointmentList: any = [];
  // loggedUserData: User = new User();
  // constructor(private AppointmentSrv: AppointmentService) {
  //   const loggedData = localStorage.getItem('PractoLogin');
  //   if (loggedData != null) {
  //     this.loggedUserData = JSON.parse(loggedData)
  //     this.newAppointment.hospitalId = JSON.parse(loggedData).hospitalId;
  //   }
  // }
  // ngOnInit(): void {
  //   this.getallappoints();
  //   console.log("Component initialized");
  // }
  // bookAppointment() {
  //   this.AppointmentSrv.newAppointment(this.newAppointment).subscribe((res:Apiresponse)=>{
  //     if(res.Result){
  //       alert('appointment created');
  //       this.getallappoints();
  //     }else{
  //        alert(res.message)
  //     }
  //   })
  // }

  // getallappoints(){
  //   this.AppointmentSrv.getappointmentbyid(this.newAppointment.hospitalId).subscribe((Res:Apiresponse)=>{
  //     this.AppointmentList = Res.data
  //   })
  // }



  // ngOnInit(): void {
  //   this.loadGrid()

  // }
  // loadGrid() {
  //   if (this.loggedUserData.userName == "superadmin") {
  //     this.getallappoints();
  //   } else {
  //     this.getappointmentbyid();
  //   }
  //   console.log("Component initialized");
  // }
  // bookAppointment() {
  //   console.log("Booking appointment", this.newAppointment);
  //   this.AppointmentSrv.newAppointment(this.newAppointment).subscribe((res: Apiresponse) => {
  //     console.log("Book appointment response", res);
  //     if (res.message) {
  //       alert('Appointment created');
  //      this.loadGrid()
  //     } else {
  //       alert(res.message);
  //     }
  //   });
  // }

  // getappointmentbyid() {
  //   console.log("Fetching appointments for hospitalId:", this.newAppointment.hospitalId);
  //   this.AppointmentSrv.getAppointmentById(this.newAppointment.hospitalId).subscribe((Res: Apiresponse) => {
  //     console.log("Appointments fetched:", Res);
  //     this.AppointmentList = Res.data;
  //   });
  // }
  // getallappoints() {
  //   console.log("Fetching appointments for hospitalId:", this.newAppointment.hospitalId);
  //   this.AppointmentSrv.getAppointments().subscribe((Res: Apiresponse) => {
  //     console.log("Appointments fetched:", Res);
  //     this.AppointmentList = Res.data;
  //   });
  // }



  newAppointment: Appointmnet = new Appointmnet();
  AppointmentList: any = [];
  showAppointmentCard: boolean = false;  // To control showing the appointment card
  loggedUserData: User = new User();

  constructor(private AppointmentSrv: AppointmentService) {
    const loggedData = localStorage.getItem('PractoLogin');
    if (loggedData != null) {
      this.loggedUserData = JSON.parse(loggedData);
      this.newAppointment.hospitalId = JSON.parse(loggedData).hospitalId;
    }
  }

  ngOnInit(): void {
    this.loadGrid();
  }

  loadGrid() {
    if (this.loggedUserData.userName == 'superadmin') {
      this.getallappoints();
    } else {
      this.getappointmentbyid();
    }
  }

  bookAppointment() {
    console.log('Booking appointment', this.newAppointment);
    this.AppointmentSrv.newAppointment(this.newAppointment).subscribe((res: Apiresponse) => {
      console.log('Book appointment response', res);
      if (res.message) {
        alert('Appointment created');
        this.showAppointmentCard = true;  // Show the card with appointment details
        this.loadGrid();  // Reload appointments list
      } else {
        alert(res.message);
      }
    });
  }

  getappointmentbyid() {
    console.log('Fetching appointments for hospitalId:', this.newAppointment.hospitalId);
    this.AppointmentSrv.getAppointmentsByHospitalId(this.newAppointment.hospitalId).subscribe((Res: Apiresponse) => {
      this.AppointmentList = Res.data;
    });
  }

  getallappoints() {
    console.log('Fetching appointments for hospitalId:', this.newAppointment.hospitalId);
    this.AppointmentSrv.getAppointments().subscribe((Res: Apiresponse) => {
      this.AppointmentList = Res.data;
    });
  }

 
}
