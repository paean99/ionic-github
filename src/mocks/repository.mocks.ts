
import {Repository} from '../models/repository.interface';
import {USER_LIST} from './user.mocks';


const repositoryList: Repository[] = [
    {
        name:'Repo 1',
        description:'Repo 1 Description',
        owner: USER_LIST[0] // Paul
    },
        {
        name:'Repo 2',
        description:'Repo 2 Description',
        owner: USER_LIST[0] // Paul
    },
        {
        name:'Repo 3',
        description:'Repo 3 Description',
        owner: USER_LIST[1] // John Doe
    },
        {
        name:'Repo 4',
        description:'Repo 4 Description',
        owner: USER_LIST[1] // John Doe
    }
]

export const REPOSITORY_LIST = repositoryList;
