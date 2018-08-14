import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http" ;
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CoreService } from "../core/core.service";

@Injectable()
export class AuthService implements CanActivate {
    isAdmin: boolean = true;
    loggedIn: boolean = true;
    loggedInUser: any;

    constructor(private http: Http, private router: Router, private coreService: CoreService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.loggedIn) {
            return true;
        }
        this.router.navigate(['/login']);
    }

    signinUser(user) {
        /**to be removed */
        this.isAdmin = true;
        this.router.navigate(['/dashboard']);
        this.loggedIn = true;
        /**to be removed */

        // return this.http.post('/api/login', user)
        //     .subscribe((response: Response) => {
        //         this.loggedInUser = response.json();
        //         this.isAdmin = response.json().isAdmin;
        //         this.loggedIn = true;
        //         this.router.navigate(['/dashboard']);
        //     })
    }

    signoutUser() {
        this.loggedIn = false;
        this.router.navigate(['/']);
    }
}