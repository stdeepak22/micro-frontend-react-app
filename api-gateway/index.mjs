import gateway from 'fast-gateway';

const server = gateway({
    routes: [
        {
            prefix: '/test-git',
            target: process.env.test_url || 'https://github.com/'
        },
        {
            prefix: '/sm',
            target: process.env.state_management_container_name || 'http://localhost:8090/'
        },
        {
            prefix: '/cart',
            target: process.env.cart_container_name || 'http://localhost:8081/'
        },
        {
            prefix: '/product',
            target: process.env.products_container_name || 'http://localhost:8082/'
        }
    ]
},)

server.start(9090).then(() => console.log('Gateway Started!!'));