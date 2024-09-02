import { Component, computed, input } from '@angular/core';
import { Problem } from '../../problem/problem';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

export type ActivityProblemType = 'problem' | 'proposal';
@Component({
	selector: 'pnk-activity-problem',
	templateUrl: 'activity-problem.component.html',
	standalone: true,
	styles: [
		`
			:host ::ng-deep .mockup-code {
				margin-top: 1rem;
				margin-bottom: 1rem;
				background-color: oklch(var(--b3));
				min-width: var(--w10);
			}
			:host ::ng-deep .mockup-code pre {
				padding-right: 0 !important;
			}
		`,
	],
	imports: [RouterLink, DatePipe],
})
export class ActivityProblemComponent {
	problem = input<Problem>();
	type = input<ActivityProblemType>('problem');

  isProposal = computed(() => this.type() === 'proposal');
  isProblem = computed(() => this.type() === 'problem');

	text = computed(() => (this.isProposal() ? 'proposed' : 'created'));
}
