import { ChangeDetectorRef, Component } from '@angular/core';
import { Apiresponse, Hospital } from '../../core/classes/hospitalModel';
import { HospitalService } from '../../core/service/hospital.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-hospital',
  templateUrl: './new-hospital.component.html',
  styleUrl: './new-hospital.component.css'
})
export class NewHospitalComponent {
// public hospitalObj :Hospital = new Hospital();
// public hospitalList: Hospital[] = [];
private subscriptions:Subscription [] = [];
constructor(private hospitalService:HospitalService,private cdr: ChangeDetectorRef) {}
// onRegister(){
//   this.subscriptions.push(
//     this.hospitalService.registerHospital(this.hospitalObj).subscribe((res:Apiresponse)=>{
//       if(res.Result){
//          alert("resgistrtion Success")
//       }else{
//           alert(res.message)
//       }
//     }, error =>{
//       alert(JSON.stringify(error))
//     })
    
//   )
// }

// constructor(private hospitalService: HospitalService) {}
  public hospitalList: any[] = []; // Array to store hospitals
  public hospitalObj: any = {
    hospitalName: '',
    hospitalContactNo: '',
    hospitalOwnerName: '',
    hospitalOwnerContactNo: '',
    hospitalEmailId: '',
    hospitalCity: '',
    hospitalAddress: '',
  };


  onRegister() {
    // Mock registration (add to array)
    if (this.hospitalObj.hospitalName) {
      this.hospitalList.push({ ...this.hospitalObj }); // Push new hospital data
      console.log('Hospital List Updated:', this.hospitalList); // Log for debugging
      this.resetForm();
      this.cdr.detectChanges(); // Trigger change detection
    } else {
      alert('Please fill all required fields.');
    }
  }

  resetForm() {
    this.hospitalObj = {
      hospitalName: '',
      hospitalContactNo: '',
      hospitalOwnerName: '',
      hospitalOwnerContactNo: '',
      hospitalEmailId: '',
      hospitalCity: '',
      hospitalAddress: '',
    };
  }
}




