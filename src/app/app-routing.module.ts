import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './class/class.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'class',component:ClassComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
