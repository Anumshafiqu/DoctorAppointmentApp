export class Hospital {
    hospitalId: number;
    hospitalName: string;
    hospitalAddress: string;
    hospitalCity: string;
    hospitalContactNo: string;
    hospitalOwnerName: string;
    hospitalOwnerContactNo: string;
    hospitalEmailId: string;
    userName: string;
    password: string;
    constructor() {
        this.hospitalId = 0;
        this.hospitalName = '';
        this.hospitalAddress = '';
        this.hospitalCity = '';
        this.hospitalOwnerContactNo = '';
        this.hospitalContactNo = '';
        this.hospitalOwnerName = '';
        this.hospitalEmailId = '';
        this.userName = '';
        this.password = '';
    }
}
export interface Apiresponse {
    message: string;
    Result: boolean;
    data: any;
    
}

export class User {
    userName: string;
    password: string
    constructor() {
        this.password = '';
        this.userName = '';
    }
}
export class Appointmnet {
    name: string;
    mobileNo: string;
    city: string;
    age: number;
    gender: string;
    appointmentDate: Date; // ISO 8601 format
    appointmentTime: string;
    isFirstVisit: boolean;
    naration: string;
    hospitalId: number;
    hospitalName:string;
    constructor(){
        this.name = '';
        this.age = 0;
        this.appointmentDate = new Date();
        this.appointmentTime = '';
        this.city = '';
        this.gender ='';
        this.isFirstVisit = false;
        this.naration='';
        this.hospitalId = 0;
        this.mobileNo= '';
        this.hospitalName = '';
    }
}