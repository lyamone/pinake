import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { of } from 'rxjs';
@Injectable({
	providedIn: 'root',
})
export class UserApiService {
	private apiUrl = 'api/users'; // Adjust this URL to match your API endpoint

	// constructor(private http: HttpClient) {}

	getUser(id: number): Observable<User> {
		return of({
			id,
			displayName: 'John Doe',
			userImage: 'https://example.com/user-image.jpg',
			email: 'john.doe@example.com',
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
			bio: 'Passionate problem solver and tech enthusiast',
			reputation: 1250,
			verifiedProblems: 15,
			postedSolutions: 42,
			recentActivity: [
				{
					activityId: 1,
					icon: '🔍',
					description: 'Verified a complex algorithm problem',
				},
				{
					activityId: 2,
					icon: '💡',
					description: 'Posted a solution to a data structure challenge',
				},
			],
			topContributions: [
				{
					activityId: 1,
					title: 'Optimized Sorting Algorithm',
					link: '/problem/123',
					score: 75,
				},
				{
					activityId: 2,
					title: 'Efficient Graph Traversal',
					link: '/problem/456',
					score: 60,
				},
			],
		});
		// return this.http.get<User>(`${this.apiUrl}/${id}`);
	}

	// Add other API methods as needed, e.g.:
	// updateUser(user: User): Observable<User> {
	//   return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
	// }
	//
	// createUser(user: User): Observable<User> {
	//   return this.http.post<User>(this.apiUrl, user);
	// }
}
