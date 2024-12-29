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

  constructor(private http:HttpClient) { }
  newAppointment (obj:Appointmnet) :Observable<Apiresponse> {
  return this.http.post<Apiresponse>(enviroment.api_url + Constant.API_END_POINT.NEW_APPOINTMENT,obj)
  }
  getappointmentbyid (id:number) :Observable<Apiresponse> {
    return this.http.get<Apiresponse>(enviroment.api_url + Constant.API_END_POINT.GET_APPOINTMENT_BY_HOSPITAL + id)
    }
}
