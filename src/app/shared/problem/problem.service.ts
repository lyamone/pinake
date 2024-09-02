import { Injectable } from '@angular/core';
import { Problem } from './problem';
import { problemsMock } from './problem.mock';
import { map, Observable, of, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProblemService {
	getProblemById(problemId: string): Observable<Problem | Observable<never>> {
		const problems = problemsMock;
		return of(problems).pipe(
			map((problems) => problems.find((problem) => problem.id === problemId)),
			map((problem) => problem ?? throwError(() => 'Problem not found')),
		);
	}
}
