import gateway from 'fast-gateway';

const server = gateway({
    routes: [
        {
            prefix: '/test',
            target: 'https://reqres.in/api/users?page=1'
        },
        {
            prefix: '/sm',
            target: 'http://c_sm/'
        },
        {
            prefix: '/cart',
            target: 'http://c_cart/',
        },
        {
            prefix: '/product',
            target: 'http://c_prod/'
        }
    ]
},)

server.start(9090);