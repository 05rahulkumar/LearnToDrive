import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,UrlSegment,Route } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  userDetails:any='Admin';
  constructor(private router :Router) {
//     this.authService.userDetail$.subscribe((res:any) => {
//       console.log(res);
// this.userDetails=res;
//     })
    // get data from token
    // const token = this.authService.getToken();
    // if (token) {
    //   const payload = JSON.parse(atob(token.split('.')[1])) as any;
    //   console.log(payload);
    // }
//end
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const expedctedRole=route.data?.['role'];
      console.warn('expected role=>',expedctedRole);  
      if(this.userDetails ===expedctedRole){
        return true;
      }else{
        return this.router.createUrlTree(['/'])
            }
  }

  //canload used for the lazy loading compondnt
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    
    const expectedRole = route.data?.['role'];
    if (this.userDetails === expectedRole) {
      return true;
    } else {
      return this.router.navigate(['/not-authorized']);
    }
  }
}
