import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../../enviroment/enviroments';
import { Constant } from '../constant/constant';
import { Observable } from 'rxjs';
import { Apiresponse, Hospital, User } from '../classes/hospitalModel';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
registerHospital (obj:Hospital) :Observable<Apiresponse> {
return this.http.post<Apiresponse>(enviroment.api_url + Constant.API_END_POINT.ADD_NEW_HOSPITAL,obj)
}
login(obj:User) :Observable<Apiresponse> {
  return this.http.post<Apiresponse>(enviroment.api_url + Constant.API_END_POINT.LOGIN,obj)
  }
  constructor(private http:HttpClient) { }
}
