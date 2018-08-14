import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements Resolve<any> {

  constructor(private http: Http) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const promise = new Promise((resolve, reject) => {
      this.http.get('assets/users-temp.json')
        .subscribe((response: Response) => {
          resolve(response.json());
        });
    });
    return promise;
  }
}
