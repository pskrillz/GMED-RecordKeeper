import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/login/login.component'
import { AccesshubComponent } from './features/accesshub/accesshub.component'
import { TableViewComponent } from './features/resourceLibrary/table-view/table-view.component';

const routes: Routes = [

  {
    path: "",
    component: LoginComponent

  },
  {
    path: "access",
    component: AccesshubComponent

  },
  {
    path: "tableView",
    component: TableViewComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
