import { Routes } from '@angular/router';
import { ProblemPageResolverService } from './problem-page-resolver.service';

export const problemPageRoutes: Routes = [
	{
		path: ':problemId',
		loadComponent: () => import('./problem-page.component'),
    resolve: {
      problem: ProblemPageResolverService,
    },
	}
];