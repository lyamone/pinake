import { Component, OnInit, Signal, ChangeDetectionStrategy, signal } from '@angular/core';
import { NavbarComponent } from 'pinake-ui';
import { problemsMock } from '../shared/problem/problem.mock';
import { Problem } from '../shared/problem/problem';
import { AsyncPipe } from '@angular/common';
import { delay, map, Observable, of } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'pnk-dashboard',
	templateUrl: './dashboard.component.html',
	imports: [NavbarComponent, AsyncPipe, RouterLink],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent {
	problems$: Observable<Problem[]> = of([]).pipe(
		map(() => problemsMock),
	);
}
