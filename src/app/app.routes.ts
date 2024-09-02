import { Routes } from '@angular/router';
import { problemPageRoutes } from './problem-page/problem-page.routes';

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
		path: 'problem',
		children: problemPageRoutes
	}
];
