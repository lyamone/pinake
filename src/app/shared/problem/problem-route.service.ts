import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProblemRouteService {
	constructor() {}

	getProblemRoute(problemId: string): string {
		return `/problems/${problemId}`;
	}

	getProblemListRoute(): string {
		return '/problems';
	}

	navigateToProblem(problemId: string): void {
		window.location.href = this.getProblemRoute(problemId);
	}
}
