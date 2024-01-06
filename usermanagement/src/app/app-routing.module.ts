import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddComponentComponent } from './add-component/add-component.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'form/:id', component: FormComponent },
  { path: 'not-found', component: PagenotfoundComponent },
  {
    path:'add',component:AddComponentComponent
  },
  {path:'**',redirectTo:'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
