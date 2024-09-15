export interface User {
  id: number;
  displayName: string;
  userImage?: string;
  avatarUrl?: string;
  bio?: string;
  reputation?: number;
  verifiedProblems?: number;
  postedSolutions?: number;
  recentActivity?: {
    activityId: number;
    icon: string;
    description: string;
  }[];
  topContributions?: {
    activityId: number;
    title: string;
    link: string;
    score: number;
  }[];
}