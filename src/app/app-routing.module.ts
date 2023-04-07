import { ChangeDetectionStrategy } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDeptComponent } from './add-dept/add-dept.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DeptRoleComponent } from './dept-role/dept-role.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PracticeComponent } from './practice/practice.component';
import { RolesComponent } from './roles/roles.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { TamilComponent } from './tamil/tamil.component';
import { UsersPopupComponent } from './users-popup/users-popup.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {path:'login',component:LoginComponent},
  {path:'dept',component:DepartmentsComponent},
  {path:'myProfile',component:MyProfileComponent},
  {path:'users',component:UsersComponent},
  {path:'usersPopup',component:UsersPopupComponent},
  {path:'roles',component:RolesComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'changePassword',component:ChangePasswordComponent},
  {path:'addDept',component:AddDeptComponent},
  {path:'showUser',component:ShowUserComponent},
  {path:'dept-role',component:DeptRoleComponent},
  {path:'practice',component:PracticeComponent},
  {path:'tamil',component:TamilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
