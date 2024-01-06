import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../list-service.service';
import { list } from 'src/list.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user:any=[]
  constructor(private listService:ListServiceService) { }

  ngOnInit(): void {
    this.listService.getUserData().subscribe((ram)=>{
      this.user=ram
    })
  }
delete(id:number){
this.listService.deleteUserData(id).subscribe((user)=>{
 this.ngOnInit()
})

}
}
