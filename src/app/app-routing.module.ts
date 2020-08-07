import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/login/login.component'
import { AccesshubComponent } from './features/accesshub/accesshub.component'

const routes: Routes = [

  {
    path: "",
    component: LoginComponent

  },
  {
    path: "access",
    component: AccesshubComponent

  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
