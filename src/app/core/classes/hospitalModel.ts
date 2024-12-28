export class Hospital  {
    hospitalId: number ;
    hospitalName: string;
    hospitalAddress: string;
    hospitalCity: string;
    hospitalContactNo: string;
    hospitalOwnerName: string;
    hospitalOwnerContactNo: string;
    hospitalEmailId: string;
    userName: string;
    password: string;
    constructor(){
        this.hospitalId = 0;
        this.hospitalName = '';
        this.hospitalAddress = '';
        this.hospitalCity = '';
        this.hospitalOwnerContactNo = '';
        this.hospitalContactNo = '';
        this.hospitalOwnerName = '' ;
        this.hospitalEmailId ='';
        this.userName= '';
        this.password='';
    }
}
export interface Apiresponse {
    message: string;
    Result: boolean;
    Data: any;

}

export class User{
    userName: string;
    password: string
    constructor(){
        this.password = '';
        this.userName = '';
    }
  }