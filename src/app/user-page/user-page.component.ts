import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../core/user/user';
import { NavbarComponent } from 'pinake-ui';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  standalone: true,
  imports:[NavbarComponent]
  // styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
  private route = inject(ActivatedRoute);
  user: User = this.route.snapshot.data['user']
}