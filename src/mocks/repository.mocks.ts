
import {Repository} from '../models/repository.interface';
import {USER_LIST} from './user.mocks';



const repositoryList: Repository[] = [
    {
        name:'Repo 1',
        description:'Repo 1 Description',
        owner: USER_LIST[0], // Paul
        language: 'Lang1',
        createdAt: "2015-12-30T21:03:01Z",
        updatedAt: "2015-12-30T21:03:01Z",
        default_branch: 'master',
        forks: 3,
        watchers: 2
    },
        {
        name:'Repo 2',
        description:'Repo 2 Description',
        owner: USER_LIST[0],// Paul
        language: 'Lang2', 
        createdAt: "2015-12-30T21:03:01Z",
        updatedAt: "2015-12-30T21:03:01Z",
        default_branch: 'master',
        forks: 3,
        watchers: 2
    },
        {
        name:'Repo 3',
        description:'Repo 3 Description',
        owner: USER_LIST[1], // John Doe
        language: 'Lang3',
        createdAt: "2015-12-30T21:03:01Z",
        updatedAt: "2015-12-30T21:03:01Z",
        default_branch: 'master',
        forks: 3,
        watchers: 2
 
    },
        {
        name:'Repo 4',
        description:'Repo 4 Description',
        owner: USER_LIST[1], // John Doe
        language: 'Lang4',
        createdAt: "2015-12-30T21:03:01Z",
        updatedAt: "2015-12-30T21:03:01Z",
        default_branch: 'master',
        forks: 3,
        watchers: 2

    }
]

export const REPOSITORY_LIST = repositoryList;
