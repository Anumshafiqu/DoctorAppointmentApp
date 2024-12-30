import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apiresponse, Appointmnet } from '../classes/hospitalModel';
import { Observable } from 'rxjs';
import { enviroment } from '../../../enviroment/enviroments';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  // constructor(private http:HttpClient) { }
  // newAppointment (obj:Appointmnet) :Observable<Apiresponse> {
  // return this.http.post<Apiresponse>(enviroment.api_url + Constant.API_END_POINT.NEW_APPOINTMENT,obj)
  // }
  // getappointmentbyid (id:number) :Observable<Apiresponse> {
  //   return this.http.get<Apiresponse>(enviroment.api_url + Constant.API_END_POINT.GET_APPOINTMENT_BY_HOSPITAL + id)
  //   }
  //   getappointment() :Observable<Apiresponse> {
  //     return this.http.get<Apiresponse>(enviroment.api_url + Constant.API_END_POINT.GET_APPOINTMENT)
  //     }


  // constructor(private http: HttpClient) {}

  // newAppointment(obj: Appointmnet): Observable<Apiresponse> {
  //   return this.http.post<Apiresponse>(`${enviroment.api_url}${Constant.API_END_POINT.NEW_APPOINTMENT}`, obj);
  // }

  // getAppointmentById(id: number): Observable<Apiresponse> {
  //   return this.http.get<Apiresponse>(`${enviroment.api_url}${Constant.API_END_POINT.GET_APPOINTMENT_BY_HOSPITAL}${id}`);
  // }

  // getAppointments(): Observable<Apiresponse> {
  //   return this.http.get<Apiresponse>(`${enviroment.api_url}${Constant.API_END_POINT.GET_APPOINTMENT}`);
  // }


  private api_url = enviroment.api_url;

  constructor(private http: HttpClient) {}

  // API call to create a new appointment
  newAppointment(appointmentData: any): Observable<any> {
    const url = `${this.api_url}AddNewAppointment`; // Full URL for adding new appointment
    return this.http.post<any>(url, appointmentData); // Sending a POST request to create an appointment
  }

  // API call to get all appointments for a hospital based on hospitalId
  getAppointmentsByHospitalId(hospitalId: number): Observable<any> {
    const url = `${this.api_url}GetAllAppointmentsByHospitalid?id=${hospitalId}`; // Full URL to get appointments by hospital ID
    return this.http.get<any>(url); // Sending a GET request to fetch appointments
  }

  // API call to get all appointments (for superadmin or anyone without specific hospital ID)
  getAppointments(): Observable<any> {
    const url = `${this.api_url}GetAllAppointments`; // Full URL to get all appointments
    return this.http.get<any>(url); // Sending a GET request to fetch all appointments
  }
}
