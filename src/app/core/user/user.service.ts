import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserApiService } from './user-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userApiService = inject(UserApiService);

  getUser(id: number): Observable<User> {
    return this.userApiService.getUser(id);
  }

  // Add other methods as needed, potentially with additional logic
  // For example:
  // updateUser(user: User): Observable<User> {
  //   // Perform any necessary checks or transformations
  //   return this.userApiService.updateUser(user);
  // }
}