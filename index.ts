import { APISchema } from './type';
import { createRequestClient } from './request';

interface TestAPISchema extends APISchema {
    getUser: {
        request: {
            id: number;
        };
        response: {
            avatar: string;
            id: number;
            name: string;
        };
    };

    createUser: {
        request: {
            avatar: string;
            name: string;
        };
        response: {
            avatar: string;
            id: number;
            name: string;
        };
    },
    test: {
        request: {},
        response: {}
    }
}

const api = createRequestClient<TestAPISchema>({
    baseURL: '',
    apis: {
        getUser: 'GET api/user/:id',
        createUser: 'POST api/user',
        test: 'GET /test'
    }
});

api.getUser({ id: 1 }).then(res => console.log(res.data.name));
api.createUser({ name: 'xx', avatar: '1' }).then(res => console.log(res.data));