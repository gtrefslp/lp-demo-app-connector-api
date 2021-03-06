import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthenticationService} from "../services/authentication.service";

@Injectable()
export class AuthGuardGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  canActivate()  {
    if(this.authenticationService.user && this.authenticationService.user.token) {

      return true;
    }
    this.router.navigateByUrl('/settings');
    return false;
  }
}
