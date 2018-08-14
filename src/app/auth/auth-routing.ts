import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const authRoutes: Routes = [
    { path: 'login', component: SigninComponent },
    { path: 'register', component: SignupComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [ RouterModule ]
})
export class AuthRoutingModule {}