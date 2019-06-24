import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterState,
  Router,
  CanActivateChild,
  RouterStateSnapshot
} from '@angular/router';
import {
  Observable
} from 'rxjs/Observable';
import {
  Injectable
} from '@angular/core';
import {
  AuthService
} from './auth.service';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {

  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable < boolean > | Promise < boolean > | boolean {
    return this.canActivate(route, state);
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable < boolean > | Promise < boolean > | boolean {
    return this.auth.isAuth()
      .then((_auth: boolean) => {
        if (_auth) {
          return true
        } else {
          this.router.navigate(['/']);
        }
      })

  }
}
