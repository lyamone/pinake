import { Routes } from '@angular/router';
import { problemPageRoutes } from './problem-page/problem-page.routes';
import { UserPageComponent } from './user-page/user-page.component'; // Add this import
import { UserPageResolverService } from './user-page/user-page-resolver.service';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full',
	},
	{
		path: 'dashboard',
		loadComponent: () => import('./dashboard/dashboard.component'),
	},
	{
    path: 'user/:id',
    component: UserPageComponent,
    resolve: { user: UserPageResolverService }
  },
	{
		path: 'problem',
		children: problemPageRoutes
	}
];
