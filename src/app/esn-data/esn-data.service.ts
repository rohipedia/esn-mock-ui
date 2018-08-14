import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';
import * as EsnValidationActions from '../core/store/esn.actions';

@Injectable()
export class EsnDataService implements Resolve<any> {

  constructor(private http: Http, private authService: AuthService,
    private store: Store<{ esn: { validatedEsn: any[] } }>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const promise = new Promise((resolve, reject) => {
      this.http.get('assets/esn-temp.json')
        .subscribe((response: Response) => {
          resolve(response.json().dataObj);
        });
    });
    return promise;
  }

  getValidateEsnData() {
    this.http.get('assets/validate-temp.json')
      .subscribe((response: Response) => {
        if (response.json().dataList.length > 0) {
          this.store.dispatch(new EsnValidationActions.Refresh(response.json().dataList));
        }
      });
  }
}