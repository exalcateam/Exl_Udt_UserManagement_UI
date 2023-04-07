import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { DepartmentsComponent } from './departments/departments.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UsersComponent } from './users/users.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UsersPopupComponent } from './users-popup/users-popup.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MatNativeDateModule } from '@angular/material/core';
import { RolesComponent } from './roles/roles.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRippleModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddDeptComponent } from './add-dept/add-dept.component';
import { ShowUserComponent } from './show-user/show-user.component';
import {MatMenuModule} from '@angular/material/menu';
import { DeptRoleComponent } from './dept-role/dept-role.component';
import { PracticeComponent } from './practice/practice.component';
import { TamilComponent } from './tamil/tamil.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DepartmentsComponent,
    MyProfileComponent,
    UsersComponent,
    UsersPopupComponent,
    EditUserComponent,
    RolesComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    AddDeptComponent,
    ShowUserComponent,
    DeptRoleComponent,
    PracticeComponent,
    TamilComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatRippleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    HttpClientModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
