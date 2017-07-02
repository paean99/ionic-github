import { User } from './user.interface';

export interface Repository {
    name: string;
    description: string;
    owner: User;
    language: string;
    createdAt: string;  // "2015-12-30T21:03:01Z"
    updatedAt: string; // "2015-12-30T21:03:01Z"
    default_branch: string;
    forks: number;
    watchers: number;
}
