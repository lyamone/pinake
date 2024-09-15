import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../core/user/user';
import { UserService } from '../core/user/user.service';
@Injectable({
  providedIn: 'root'
})
export class UserPageResolverService implements Resolve<User> {
  private userService = inject(UserService);

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const userId = route.paramMap.get('id');
    return this.userService.getUser(Number(userId));
  }
}