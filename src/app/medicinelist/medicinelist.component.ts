import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrl: './medicinelist.component.css'
})
export class MedicinelistComponent {
  medicines:Medicine[]=[];
constructor(private medicineService:MedicineService){

}

ngOnInit():void{
  this.getMedicine();
}

getMedicine(){
  this.medicineService.getMadicines().subscribe(data=>{
   this.medicines=data;
  })
}
}
