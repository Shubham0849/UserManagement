import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListServiceService } from '../list-service.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css'],
})
export class AddComponentComponent implements OnInit {
  addForm!: FormGroup;
  constructor(private listService:ListServiceService,private router:Router) {}

  ngOnInit(): void {
    this.addForm=new FormGroup({
      'username':new FormControl(),
      'id':new FormControl(),
      'mob':new FormControl(),
      'gender':new FormControl(),
      'email':new FormControl(),
   
  
     })
  }
  onSubmit(){
this.listService.addData(this.addForm.value).subscribe((result)=>{
console.log(result)
this.router.navigate(['/'])
})
  }
}
