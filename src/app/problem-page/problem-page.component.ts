import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { NavbarComponent } from 'pinake-ui';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { ProblemService } from '../shared/problem/problem.service';
import { Problem } from '../shared/problem/problem';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ProblemChatComponent } from './problem-chat/problem-chat.component';
import { ActivityProblemComponent } from '../shared/activity/activity-problem/activity-problem.component';

@Component({
	selector: 'pnk-problem-page',
	templateUrl: 'problem-page.component.html',
	standalone: true,
	imports: [
		NavbarComponent,
		RouterLink,
		AsyncPipe,
		ProblemChatComponent,
		DatePipe,
		ActivityProblemComponent,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProblemPageComponent {
	loading = signal(true);
	problemService = inject(ProblemService);
	route = inject(Router);
	activatedRoute = inject(ActivatedRoute);

	problem$: Observable<Problem> = this.activatedRoute.data.pipe(
		map(({ problem }) => problem as Problem),
		tap(() => this.loading.set(false)),
		tap((problem) => console.log(problem)),
	);
}
