import { EventEmitter, Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
//import { Observable } from 'rxjs-compat/observable';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private HomeService: HomeService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const auth = this.HomeService.auth;
    if (auth) {
      // city is okey so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
    this.HomeService.openModal= ! this.HomeService.openModal;
    console.log(this.HomeService.openModal)
    return false;
  }
}