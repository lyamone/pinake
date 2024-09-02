// create a problem page resolver service that takes a problem id and resolves the problem data
import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { Problem } from '../shared/problem/problem';
import { ProblemService } from '../shared/problem/problem.service';

@Injectable({ providedIn: 'root' })
export class ProblemPageResolverService implements Resolve<Problem> {
  private problemsService: ProblemService = inject(ProblemService);
  private router = inject(Router);

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Problem> {
    const problemId = route.paramMap.get('problemId') as string;
    return this.problemsService.getProblemById(problemId).pipe(
      map((problem) => problem as Problem),
      catchError(() => {
        this.router.navigate(['/']);
        return of();
      })
    );
  }
}