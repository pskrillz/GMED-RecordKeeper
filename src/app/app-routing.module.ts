import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/login/login.component'
import { AccesshubComponent } from './features/accesshub/accesshub.component'
import { TableViewComponent } from './features/resourceLibrary/table-view/table-view.component';
import { NewrecordComponent } from './features/newrecord/newrecord.component'

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
  },
  {
    path: "generator",
    component: NewrecordComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
