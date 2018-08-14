import { DashboardComponent } from './esn-data/dashboard/dashboard.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SigninComponent } from "./auth/signin/signin.component";
import { ManageUsersComponent } from './user/manage-users/manage-users.component';
import { EsnDataService } from './esn-data/esn-data.service';
import { UsersService } from './user/users.service';
import { ValidateEsnComponent } from './esn-data/validate-esn/validate-esn.component';
import { AuthService } from './auth/auth.service';
import { SignupComponent } from './auth/signup/signup.component';

const appRoutes: Routes = [
    { path: '', component: SigninComponent, pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, resolve: {data: EsnDataService}, canActivate: [AuthService] },
    { path: 'users', component: ManageUsersComponent, resolve: {data: UsersService}, canActivate: [AuthService] },
    { path: 'validate', component: ValidateEsnComponent, canActivate: [AuthService] },
    { path: 'addUser', component: SignupComponent, canActivate: [AuthService] },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}