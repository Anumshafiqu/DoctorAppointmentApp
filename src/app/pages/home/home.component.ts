import { ChangeDetectorRef, Component } from '@angular/core';
import { HospitalService } from '../../core/service/hospital.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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

 private subscriptions:Subscription [] = [];
 constructor(private hospitalService:HospitalService,private cdr: ChangeDetectorRef) {}

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
