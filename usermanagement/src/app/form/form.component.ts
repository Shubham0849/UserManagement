import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListServiceService } from '../list-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  myReactiveForm!: FormGroup;

  constructor(
    private listServ: ListServiceService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      username: new FormControl(),
      id: new FormControl(),
      mobile: new FormControl(),
      gender: new FormControl(),
      email: new FormControl(),
    });
    console.log(this.router.snapshot.params['id']);
    this.listServ
      .getUserDataById(this.router.snapshot.params['id'])
      .subscribe((result: any) => {
        this.myReactiveForm = new FormGroup({
          username: new FormControl(result['username']),
          id: new FormControl(result['id']),
          mobile: new FormControl(result['mobile']),
          gender: new FormControl(result['gender']),
          email: new FormControl(result['email']),
        });
      });
     
  }
  onUpdate() {
    console.log(this.myReactiveForm.value);
    this.listServ
      .Updatedata(this.router.snapshot.params['id'], this.myReactiveForm.value)
      .subscribe((result) => {
        console.log(result);
      });

    this.route.navigate(['/']);
  }
}
