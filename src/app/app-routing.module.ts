import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { CreateComponent } from './employee/create/create.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path:'', component:EmployeeComponent},
  { path: 'student-list', component: StudentListComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
