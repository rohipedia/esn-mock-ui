import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthService } from "./auth.service";
import { AuthRoutingModule } from "./auth-routing";

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AuthRoutingModule
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule {}